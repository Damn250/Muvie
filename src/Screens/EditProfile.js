import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { EditUser, LogoutUser } from "../features/authSlice";
import { useDispatch } from "react-redux";
import { getItemAsync } from "expo-secure-store";
import { useState } from "react";
import { TextInput } from "react-native-paper";

export const EditProfile = ({ route }) => {
  const dispatch = useDispatch();
  const [usercredential, setUserCredential] = useState({});
  const [username, setEditUserName] = useState("");
  const [email, setEditEmail] = useState("");

  const EditUserDataHandler = () => {
    const data = {
      _id: usercredential._id,
      email: email,
      username: username,
    };
    console.log(data);
    dispatch(EditUser(data));
  };

  React.useEffect(() => {
    getUserData();
  }, []);
  const getUserData = () => {
    setUserCredential(route.params);
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
          <Text style={{ color: "gold", alignSelf: "center" }}>
            {" "}
            Edit profile Picture
          </Text>
          <Text style={{ color: "white", fontSize: 20, alignSelf: "center" }}>
            {username}
          </Text>
          <Text style={{ fontSize: 15, color: "gray", alignSelf: "center" }}>
            {email}
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
              flexDirection: "column",
              padding: 10,
              marginLeft: 20,
              marginTop: 20,
            }}
          >
            <Text style={{ color: "white", marginLeft: 15, fontSize: 14 }}>
              Edit User name
            </Text>
            <TextInput
              placeholder=" Enter Username"
              label="NewUsername"
              textColor="white"
              onChangeText={(text) => {
                setEditUserName(text);
              }}
              activeUnderlineColor="#fdd130"
              style={{
                backgroundColor: "#26272a",

                width: "90%",
              }}
            />
            <Text style={{ color: "white", marginLeft: 15, fontSize: 14 }}>
              Edit Email
            </Text>
            <TextInput
              placeholder=" Enter Username"
              label="NewEmail"
              textColor="white"
              activeUnderlineColor="#fdd130"
              onChangeText={(text) => {
                setEditEmail(text);
              }}
              style={{
                backgroundColor: "#26272a",
                paddingTop: 10,
                width: "90%",
              }}
            />
          </View>

          <Pressable
            style={{
              borderRadius: 6,
              alignSelf: "center",
              marginTop: 20,
              borderWidth: 1,
              paddingHorizontal: 150,
              paddingVertical: 10,
              backgroundColor: "gold",
            }}
            onPress={EditUserDataHandler}
          >
            <Text style={{ color: "black" }}>Save</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};
