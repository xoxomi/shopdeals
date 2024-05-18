import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Apps/Screens/LoginScreen';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native'
import TabNavigation from './Navigations/TabNavigation';

export default function App() {
  return (
    <ClerkProvider publishableKey='pk_test_Y29uY3JldGUtbWFydGVuLTIuY2xlcmsuYWNjb3VudHMuZGV2JA'>
      <View className="flex-1 bg-white">
        <StatusBar style="auto" />
        <SignedIn>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <LoginScreen />
        </SignedOut>
      </View>
    </ClerkProvider>
  );
}

//const styles = StyleSheet.create({
 // container: {
 //   flex: 1,
  //  backgroundColor: '#fff',
  //  alignItems: 'center',
 //   justifyContent: 'center',
 // },
//});
