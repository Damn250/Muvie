import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LogoutUser } from "../features/authSlice";
import { useDispatch } from "react-redux";
import { getItemAsync } from "expo-secure-store";
import { useState } from "react";

export const Profile = ({navigation}) => {
  const [usercredential, setUserCredential] = useState({});
  const dispatch = useDispatch();
  React.useEffect(() => {
    getUserData();
  }, []);
  const getUserData = () => {
    getItemAsync("logindata")
      .then((res) => {
        console.log(res, "logindata");
        const data = JSON.parse(res);
        setUserCredential(data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "#26272a", height: "100%" }}>
        <Text
          style={{
            fontSize: 20,
            color: "white",
            fontWeight: "bold",
            backgroundColor: "#202123",
            padding: 15,
          }}
        >
          Profile
        </Text>
        <View style={{ backgroundColor: "#26272b" }}>
          <Image
            source={require("../assets/Dim.jpg")}
            style={{
              height: 150,
              width: 150,
              alignSelf: "center",
              borderRadius: 300,
              marginTop: 10,
            }}
          />
          <Text style={{ color: "white", fontSize: 20, alignSelf: "center" }}>
            {usercredential.username}
          </Text>
          <Text style={{ fontSize: 15, color: "gray", alignSelf: "center" }}>
           
            {usercredential.email}
          </Text>
          <Text style={{ color: "gold", alignSelf: "center" }}
          onPress = {()=> {navigation.navigate("EditProfile",usercredential)}}
          >
            {" "}
            Edit Profile
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#363637",
            borderRadius: 50,
            paddingBottom: 100,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              padding: 10,
              marginLeft: 20,
              marginTop: 20,
            }}
          >
            <Feather name="inbox" size={25} color="white" />
            <Text style={{ color: "white", marginLeft: 15, fontSize: 20 }}>
              Inbox
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              padding: 10,
              marginLeft: 20,
              marginTop: 10,
            }}
          >
            <MaterialCommunityIcons
              name="account-convert-outline"
              size={25}
              color="white"
            />
            <Text style={{ color: "white", marginLeft: 15, fontSize: 20 }}>
              Account Settings
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              padding: 10,
              marginLeft: 20,
              marginTop: 10,
            }}
          >
            <Feather name="globe" size={25} color="white" />
            <Text style={{ color: "white", marginLeft: 15, fontSize: 20 }}>
              Language
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              padding: 10,
              marginLeft: 20,
              marginTop: 10,
            }}
          >
            <Feather name="help-circle" size={25} color="white" />
            <Text style={{ color: "white", marginLeft: 15, fontSize: 20 }}>
              Help, FAQ
            </Text>
          </View>
          <Text style={{ color: "gray", marginLeft: 30 }}>
            Terms & Condition
          </Text>
          <Text style={{ color: "gray", marginLeft: 30, marginTop: 20 }}>
            Privacy & Policy
          </Text>
          <Pressable
            style={{
              borderRadius: 6,
              alignSelf: "center",
              marginTop: 20,
              borderWidth: 1,
              paddingHorizontal: 150,
              paddingVertical: 10,
            }}
            onPress={() => dispatch(LogoutUser())}
          >
            <Text style={{ color: "red" }}>Log Out</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};
