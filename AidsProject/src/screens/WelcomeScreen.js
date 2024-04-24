import { View, Text, ImageBackground, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
  const navigation= useNavigation();
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
      <TouchableOpacity className="bg-red-800 rounded-full p-4 justify-center item-center w-[90%] mt-8"
      onPress={() => navigation.navigate("HomeTabs")} 
      >
      <Text className="text-base text-white"
      style={{
        fontSize: wp(4),
        fontFamily: "SpaceGroteskMedium",
      }}>Getting Started</Text>
      </TouchableOpacity>
   </ImageBackground>
  )
}