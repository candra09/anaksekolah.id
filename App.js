import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home';
import OnBoarding  from './src/screens/onboarding';
import SplashScreen from './src/screens/splashscreen';
import OnBoarding1  from './src/screens/onboarding1';
import OnBoarding2  from './src/screens/onboarding2';
import OnBoarding3  from './src/screens/onboarding3';
import OnBoarding4  from './src/screens/onboarding4';
import OnBoarding5  from './src/screens/onboarding5';
import Register  from './src/screens/register';
import SignUp  from './src/screens/signup';
import SignIn  from './src/screens/signin';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* //initialRouting untuk mengatur screen mana yang akan ditampilkan pertama */}
      <Stack.Navigator
         initialRouteName='SplashScreen' 
         screenOptions={{headerShown: false}}> 
        <Stack.Screen name="Home" component={Home} /> 
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="OnBoarding1" component={OnBoarding1} />
        <Stack.Screen name="OnBoarding2" component={OnBoarding2} />
        <Stack.Screen name="OnBoarding3" component={OnBoarding3} />
        <Stack.Screen name="OnBoarding4" component={OnBoarding4} />
        <Stack.Screen name="OnBoarding5" component={OnBoarding5} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;