import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Login, SignUp, HomeScreen } from "../Screens";
import { TopNavigation } from "./mainNavigation";
import { MainNavigation } from "./AnotherOne";
import { Getstarted } from "../Screens/Getstarted";
import { Description } from "../Screens/Description";

const Stack = createNativeStackNavigator();
const { Screen, Navigator } = Stack;

export const AppNavigation = () => {
  return (
    <Navigator>
      <Screen
        options={{ headerShown: false }}
        name="Home"
        component={Getstarted}
      />
      <Screen options={{ headerShown: false }} name="login" component={Login} />
      <Screen
        options={{ headerShown: false }}
        name="SignUp"
        component={SignUp}
      />
      <Screen
        options={{ headerShown: false }}
        name="Topnav"
        component={MainNavigation}
      />
      <Screen options={{ headerShown: false }} name="Description" component={Description} />
    </Navigator>
  );
};
