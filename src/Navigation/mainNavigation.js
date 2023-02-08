import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { HomeScreen } from "../Screens";
import { Film } from "../Screens/film";
import Series from "../Screens/series";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Image, Text } from "react-native";

const Top = createMaterialTopTabNavigator();

const { Navigator, Screen } = Top;

export const TopNavigation = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#1a1a1b",

        paddingTop: 50,
      }}
    >
      <View style={{ flexDirection: "row", alignSelf: "center" }}>
        <Image
          source={require("../assets/logo6.png")}
          style={{ height: 35, width: 50 }}
        />
        <Text style={{ fontWeight: "800", fontSize: 25, color: "white" }}>
          {" "}
          Muvi
        </Text>
      </View>

      <Navigator
        screenOptions={{
          tabBarActiveTintColor: "gold",
          tabBarInactiveTintColor: "white",
          tabBarContentContainerStyle: { backgroundColor: '#1a1a1b' },
          tabBarLabelStyle: { fontWeight: "bold" },
          tabBarIndicatorStyle: {
            backgroundColor: "gold",
          },
        }}
      >
        <Screen name="Featured" component={HomeScreen} />
        <Screen name="Series" component={Series} />
        <Screen name="Film" component={Film} />
      </Navigator>
    </View>
  );
};
