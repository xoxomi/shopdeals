import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from './Components/HomeScreen/Header'
import Slider from './Components/HomeScreen/Slider'
import { collection, getDocs, getFirestore, orderBy } from 'firebase/firestore'
import { app } from '../../firebaseConfig'
import Categories from './Components/HomeScreen/Categories'
import LatestItemList from './Components/HomeScreen/LatestItemList'

export default function HomeScreen () {

  const db=getFirestore(app);
  const [sliderList,setSliderList]=useState([]);
  const [categoryList,setCategoryList]=useState([]);
  const [latestItemList,setLatestItemList]=useState([]);


  useEffect(()=>{
    getSliders();
    getCategoryList();
    getLatestItemList();
  },[])

  
  const getSliders=async()=>{
    setSliderList([])
  const querySnapshot = await getDocs(collection(db, "Sliders"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
  //console.log(doc.id, " => ", doc.data());
  setSliderList(sliderList=>[...sliderList,doc.data()]);
});
}

const getCategoryList = async () => {
  setCategoryList([]);
  const querySnapshot = await getDocs(collection(db, 'Category'));
  querySnapshot.forEach((doc) => {
    console.log("Docs:", doc.data());
    setCategoryList(categoryList =>[...categoryList, doc.data()]);
  });
};


const getLatestItemList=async()=>{
  setLatestItemList([]);
  const querySnapshot=await getDocs(collection(db,'UserPost'),orderBy('createdAt','desc'));
  querySnapshot.forEach((doc) => {
    console.log("Docs:", doc.data());
    setLatestItemList(latestItemList=>[...latestItemList,doc.data()]);
})
}


  return (
    <ScrollView className="p-9 px-6 bg-white flex-1">
      <Header/>
      <Slider sliderList={sliderList} />
      <Categories categoryList={categoryList} />
      <LatestItemList latestItemList={latestItemList} 
      heading={'Latest Items'}
      />
    </ScrollView>
  )
}

