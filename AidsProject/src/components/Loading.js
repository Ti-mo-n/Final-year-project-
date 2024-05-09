import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

export default function Loading() {
  return (
    <View classname= "flex-1 justify-center items-center">
     <ActivityIndicator size="large" color="red"/>
    </View>
  )
}