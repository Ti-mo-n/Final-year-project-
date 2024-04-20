import { View, Text } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function SplashScreen() {
  const navigation = useNavigation();

  const [fontsLoaded, fontError] = usefonts({
    SpaceGroteskMedium: require("../fonts/SpaceGrotesk-Medium.ttf"),
    SpaceGroteskSemiBold: require("../fonts/SpaceGrotesk-SemiBold.ttf"),
    SpaceGroteskBold: require("../fonts/SpaceGrotesk-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async()=>{
    if(fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }

    setTimeout(()=>{
      navigation.navigate("Welcome");
    }, 3000);
  });

  useEffect(()=> {
    onLayoutRootView();
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View>
      <Text>splash</Text>
    </View>
  )
}