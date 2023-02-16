import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Feather, FontAwesome } from "@expo/vector-icons";
import Film from "../Screens/film";
import Series from "../Screens/series";
import { TopNavigation } from "./mainNavigation";
import { Search } from "../Screens/search";
import { Predescription, Profile } from "../Screens/Profile.js";
import { AntDesign } from "@expo/vector-icons";

const bottom = createBottomTabNavigator();

const { Navigator, Screen } = bottom;

export const MainNavigation = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveBackgroundColor: "#1a1a1b",
        tabBarInactiveBackgroundColor: "#1a1a1b",
      }}
      initialRouteName="Home"
    >
      <Screen
        options={{
          tabBarIcon: () => {
            return <Feather name="home" size={24} color={"#fdd130"} />;
          },
          tabBarLabel: () => null,
        }}
        name="Home"
        component={TopNavigation}
      />
      <Screen
        options={{
          tabBarIcon: () => {
            return <Feather name="search" size={24} color={"#fdd130"} />;
          },
          tabBarLabel: () => null,
        }}
        name="Search"
        component={Search}
      />
      <Screen
        options={{
          tabBarIcon: () => {
            return <Feather name="folder" size={24} color={"#fdd130"} />;
          },
          tabBarLabel: () => null,
        }}
        name="folder"
        component={Series}
      />

      <Screen
        options={{
          tabBarIcon: () => {
            return <AntDesign name="appstore-o" size={24} color="gold" />;
          },
          tabBarLabel: () => null,
        }}
        name="store"
        component={Profile}
      />
    </Navigator>
  );
};
