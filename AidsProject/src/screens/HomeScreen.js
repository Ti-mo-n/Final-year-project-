import {Text, View } from 'react-native';
import React from 'react';
import { useColorScheme } from 'nativewind';
import Header from "../components/Header";
import MiniHeader from '../components/MiniHeader';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
  const { colorScheme, toggleColorScheme } = useColorScheme();


  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#FFFFFF" />
      <Header />
      <View>
          <MiniHeader />
        </View>
    </SafeAreaView>
  );
}
