// In App.js in a new project

import  React,{useEffect} from 'react';
import { View, Text,StatusBar, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Auth/Splash';
import Home from '../screens/Home/Home';
import VideoScreen from '../screens/Home/VideoScreen';

import EndVideoPage from '../screens/Home/EndVideoPage';
import Signin from '../screens/Auth/Signin';
import Signup from '../screens/Auth/Signup';
import Forgot from '../screens/Auth/Forgot';
import OTP from '../screens/Auth/OTP';
import ResetPassword from '../screens/Auth/ResetPassword';
import AfterVideo from '../screens/Home/AfterVideo';
import Stories from '../screens/Home/Stories';



const Stack = createNativeStackNavigator();

function Routes() {
  useEffect(()=>{
    StatusBar.setHidden(true)
        },[])
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Splash" screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="VideoScreen" component={VideoScreen} />
        <Stack.Screen name="AfterVideo" component={AfterVideo} />
        <Stack.Screen name="EndVideoPage" component={EndVideoPage} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="Stories" component={Stories} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;