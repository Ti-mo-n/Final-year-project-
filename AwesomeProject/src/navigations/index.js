
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColorScheme } from 'nativewind';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/homescreen';
import HealthtrackerScreen from '../screens/healthtrackerscreen';
import CalenderScreen from '../screens/calenderscreen';
import ChatScreen from '../screens/chatscreen';
import ContactScreen from '../screens/contactscreen';
import SplashScreen from '../screens/splashscreen';
import NewsdetailScreen from '../screens/newdetailscreen';
import SearchScreen from '../screens/searchscreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function Appnavigation() {
  const { ColorScheme, toggleColorScheme} = useColorScheme
  const TabNavigator = () =>{
    return(
      <Tab.Navigator
       screenOptions={([ route ]) => ([
        headerShown, false,
        tabBarIcon,({focused}) => {
          let iconName;
          if (route.name ==="Home"){
            iconName= "Home";
          }else if (route.name ==="Calender"){
            iconName = "";
          }else if (route.name ==="Chat"){
            iconName = "";
           } else if (route.name ==="Health"){
              iconName = "";
           }else if (route.name ==="Contact"){
            iconName = "";
           }

           const customiseSize = 25;

           return (
            <Ionicons
            name ={iconName}
            size ={customiseSize}
            color ={focused? "red": "grey"}/>
           )
          
        },
        tabBarActiveTintColor ="red",
        tabBarInactiveTintColor ="grey",
        tabBarLabelStyle, {
          fontsize: 12,
          fontfamily: "SpaceGroteskMedium",
        },
        tabBarstyle, {
          backgroundcolor: ColorScheme === "dark"? "black": "white",
        }

        ])}>
        <Tab.Screen name= "Home" component ={HomeScreen}/>
        <Tab.Screen name= "Calender" component ={CalenderScreen}/>
        <Tab.Screen name= "Chat" component ={ChatScreen}/>
        <Tab.Screen name= "Health" component ={HealthtrackerScreen}/>
        <Tab.Screen name= "Contact" component ={ContactScreen}/>
      </Tab.Navigator>
    );
  }
  return (
   <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name= "Search" component ={SearchScreen}/>
    <Stack.Screen name= "Newdeatails" component ={NewsdetailScreen}/>
    <Stack.Screen name= "Welcome" component ={WelcomeScreen}/>
    <Stack.Screen name= "Splash" component ={SplashScreen}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}