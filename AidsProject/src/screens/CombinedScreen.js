import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/HomeScreen';
import TestimoniesScreen from '../screens/TestimoniesScreen';
import BlogsScreen from '../screens/BlogsScreen';
import AidsNewsScreen from '../screens/AidsNewsScreen';

const TopTab = createMaterialTopTabNavigator();

const CombinedScreen = () => {
  return (
    <React.Fragment>
      <HomeScreen />
      <TopTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'black', // Sets the active tab color to red
        tabBarLabelStyle: { fontSize: 13, fontWeight: '700' }, // Sets the label font size to 16 and makes it bold
        tabBarIndicatorStyle: { backgroundColor: 'red', height: 3 }, // Sets the indicator color to red and its height to 3
        tabBarStyle: { backgroundColor: 'white' }, // Sets the background color of the tab bar
      }}>
        <TopTab.Screen name="News" component={AidsNewsScreen} />
        <TopTab.Screen name="Testimonies" component={TestimoniesScreen} />
        <TopTab.Screen name="Blogs" component={BlogsScreen} />
      </TopTab.Navigator>
    </React.Fragment>
  );
};

export default CombinedScreen;
