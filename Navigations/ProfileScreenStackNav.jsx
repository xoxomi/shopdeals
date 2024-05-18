import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../Apps/Screens/ProfileScreen';
import MyProducts from '../Apps/Screens/MyProducts';
import ProductDetail from '../Apps/Screens/ProductDetail';

const Stack = createStackNavigator();

export default function ProfileScreenStackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='profile-tab' 
      options={{
        headerShown:false
      }}
      component={ProfileScreen} />
      <Stack.Screen name='my-products' component={MyProducts} 
      options={{
        headerStyle:{
            backgroundColor:'#3b82f6',
        },
        headerTintColor:'#fff',
        headerTitle:'My Products'
    }}
      />
      <Stack.Screen name='product-detail' component={ProductDetail} 
      options={{
        headerStyle:{
            backgroundColor:'#3b82f6',
        },
        headerTintColor:'#fff',
        headerTitle:'Detail'
    }}
      />
    </Stack.Navigator>
  );
}
