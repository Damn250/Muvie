import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppNavigation } from "./appNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";


export const RootNavigation = () => {
  return (
    <SafeAreaProvider>

   <NavigationContainer>
  <AppNavigation/>
   </NavigationContainer>
    </SafeAreaProvider>

  )
}

