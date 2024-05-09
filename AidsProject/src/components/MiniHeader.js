import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import NewsDetailsScreen from '../screens/NewsDetailsScreen';
import TestimoniesScreen from '../screens/TestimoniesScreen';
import BlogsScreen from '../screens/BlogsScreen';

const TopTab = createMaterialTopTabNavigator();
export default function MiniHeader() {
  const TopTabs = () => {
    return (
      <TopTab.Navigator>
        <TopTab.Screen name="News" component={NewsDetailsScreen} />
        <TopTab.Screen name="Testimonies" component={TestimoniesScreen} />
        <TopTab.Screen name="Blogs" component={BlogsScreen} />
      </TopTab.Navigator>
    );
  };
}