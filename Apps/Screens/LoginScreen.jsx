import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from '../../hooks/useWarmUpBrowser';
import { useOAuth } from '@clerk/clerk-expo';

WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {

    useWarmUpBrowser();
 
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);


  return (
    <View>
      <Image source={require('./../../assets/images/loginwelcome1.jpg')} 
       className="w-full h-[400px] object-cover"
      />

      <View className="p-8 bg-white mt-[-20px] rounded-t-3xl shadow-md">
        <Text className="text-[35px] font-bold">Your Campus Marketplace</Text>
        <Text className="text-[18px] text-slate-500 mt-6">A place where you save money
         and mother earth by
         buying preloved items 
         from your fellow students!
        </Text>

        <TouchableOpacity onPress={onPress} className="p-4 bg-purple-500 rounded-full mt-20">
            <Text className="text-white text-center text-[20px]"> Lets Get Started </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}