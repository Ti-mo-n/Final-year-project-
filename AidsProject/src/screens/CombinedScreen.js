import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/HomeScreen';
import TestimoniesScreen from '../screens/TestimoniesScreen';
import BlogsScreen from '../screens/BlogsScreen';
import AidsNewsScreen from './AidsNewsScreen';

const TopTab = createMaterialTopTabNavigator();

const CombinedScreen = () => {
  return (
    <React.Fragment>
      <HomeScreen />
      <TopTab.Navigator>
        <TopTab.Screen name="News" component={AidsNewsScreen} />
        <TopTab.Screen name="Testimonies" component={TestimoniesScreen} />
        <TopTab.Screen name="Blogs" component={BlogsScreen} />
      </TopTab.Navigator>
    </React.Fragment>
  );
};

export default CombinedScreen;
