import React from 'react'
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { useColorScheme } from 'react-native';
import {Ionicons} from "@expo/vector-icons"
import HomeScreen from '../screens/HomeScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ChatScreen from '../screens/ChatScreen';
import HealthProgressScreen from '../screens/HealthProgressScreen';
import DiscoverScreen from '../screens/DiscoverScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SplashScreens from '../screens/SplashScreens';
import SearchScreen from '../screens/SearchScreen';
import NewsDetailsScreen from '../screens/NewsDetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const {ColorScheme, toggleColorScheme} = useColorScheme();
  const TabNavigator = () =>{
    return(
      <Tab.Navigator 
      screenOptions={({route})=>({
        headerShown: false, 
        tabBarIcon: ({focused})=>{
        let iconName;
        if (route.name === "Home") {
          iconName = "home"
        }else if (route.name ==="Notification"){
          iconName = "bell-outline";
        }else if (route.name ==="CommunityChat"){
          iconName = "chatbubble-outline";
        }else if (route.name ==="HealthTracker"){
          iconName = "heart-outline";
        }else if (route.name ==="Contacts"){
          iconName = "compass-outline"
        }

        const customizeSize = 25;

        return(
          <Ionicons
          name={iconName}
          size={customizeSize}
          color={focused? "red" : "grey"}
          />
        );
      },
      tabBarActiveTintColor: "red",
      tabBarInactiveTintColor: "grey",
      tabBarLabelStyle: {
        fontSize: 12,
        fontFamily: "SpaceGroteskMedium",
      },
      tabBarStyle: {
        backgroundColor: ColorScheme ==="dark" ? "#000" : "#fff",
      }
      })}>
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Notifications" component={NotificationScreen}/>
        <Tab.Screen name="CommunityChat" component={ChatScreen}/>
        <Tab.Screen name="HealthTracker" component={HealthProgressScreen}/>
        <Tab.Screen name="Contacts" component={DiscoverScreen}/>
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown: false,}}>
      <Stack.Screen name="Splash" component={SplashScreens}/>
      <Stack.Screen name="Welcome" component={WelcomeScreen}/>
      <Stack.Screen name="Search" component={SearchScreen}/>
      <Stack.Screen name="NewsDetails" component={NewsDetailsScreen} options={{animation: "slide_from_bottom"}}/>
      <Stack.Screen name="HomeTabs" component={TabNavigator}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}