import { View, Text, ImageBackground, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {useFonts} from "expo-font"; 
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
  
  const navigation= useNavigation();
  let [fontsLoaded] = useFonts({
    SpaceGroteskMedium: require('../fonts/SpaceGrotesk-Medium.ttf'),
  });

  // Check if fonts are loaded
  if (!fontsLoaded) {
    return null; // Render nothing until fonts are loaded
  }

  return (
   <ImageBackground
   source={require("../../assets/images/R.jpeg")}
   className="flex-1 justify-center items-center pb-6"
   >
    <LinearGradient
      colors={["transparent", "rgba(0,0,0,0.95)"]}
      style={{
        position: "absolute",
        bottom:0,
        width: "100%",
        height: "100%",
      }}
      start={{x: 1, y: 0}}
      end={{x: 1, y: 1}}
      />
      <TouchableOpacity style={{
    backgroundColor: '#800000', 
    borderRadius: 50, 
    padding: 16, 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: '90%', 
    marginTop: 400, 
    marginBottom: 0, 
  }}
      onPress={() => navigation.navigate("HomeTabs")} 
      >
      <Text className="text-base text-white"
      style={{
        fontSize: wp(5),
        fontFamily: "SpaceGroteskMedium",
      }}>Getting Started</Text>
      </TouchableOpacity>
   </ImageBackground>
  )
}
