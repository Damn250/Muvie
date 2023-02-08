import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { RootNavigation } from "./src/Navigation/rootNavigation";
import Search from "./src/Screens/workSearch";
import { Provider } from "react-redux";

import { Pass } from "./src/Pass";
import { store } from "./src/store";

export default function App() {
  return (
    <RootNavigation/>
    // <Search />
    // <Provider store={store}>
    //   <Pass />
    // </Provider>
  );
}
