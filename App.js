import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { RootNavigation } from "./src/Navigation/rootNavigation";
import Search from "./src/Screens/workSearch";
import { Provider } from "react-redux";
import { store } from "./src/features/store";
import { Profile } from "./src/Screens/Profile";

export default function App() {
  return (
    <Provider store={store}>

    <RootNavigation/>
    {/* <Profile/> */}
    </Provider>
  
  );
}
