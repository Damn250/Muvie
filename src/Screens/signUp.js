import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { AntDesign, Fontisto } from "@expo/vector-icons";
import { SignUpUser } from "../features/authSlice";
import { useDispatch, useSelector } from "react-redux";

export const SignUp = ({ navigation }) => {
  const { isLoading, error } = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSignUp = () => {
    const data = {
      username,
      email,
      password,
    };
    dispatch(SignUpUser(data));
  };

  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "#26272a", height: "100%" }}>
        <View style={{ flexDirection: "row" }}>
          <AntDesign
            name="arrowleft"
            size={30}
            color="#fdd130"
            style={{ marginTop: 3 }}
            onPress={() => navigation.navigate("login")}
          />
          <Text
            style={{
              marginLeft: 10,
              fontSize: 25,
              color: "white",
              fontWeight: "500",
            }}
          >
            Register
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            paddingTop: 50,
          }}
        >
          <Image
            source={require("../assets/logo6.png")}
            style={{ height: 35, width: 50 }}
          />
          <Text style={{ fontWeight: "800", fontSize: 25, color: "white" }}>
            {" "}
            Muvi
          </Text>
        </View>
        <View>
          <View style={{ paddingTop: 40 }}>
            <Text style={{ alignSelf: "center", color: "white", fontSize: 18 }}>
              Please login to enjoy more benefits and
            </Text>
            <Text style={{ alignSelf: "center", color: "white", fontSize: 18 }}>
              we won't let you go
            </Text>
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <View>
              <View style={{ flexDirection: "row" }}>
                <TextInput
                  mode="outline"
                  label="Email Address"
                  activeUnderlineColor="#fdd130"
                  textColor="white"
                  style={{ backgroundColor: "#26272a", width: "90%" }}
                  onChangeText={(text) => setEmail(text)}
                />
                <Fontisto
                  name="email"
                  size={20}
                  color="#fdd130"
                  style={{ marginTop: 20 }}
                />
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                placeholder=" Enter Username"
                label="Username"
                textColor="white"
                activeUnderlineColor="#fdd130"
                onChangeText={(text) => setUserName(text)}
                style={{
                  backgroundColor: "#26272a",
                  paddingTop: 10,
                  width: "90%",
                }}
              />
              <AntDesign
                name="lock"
                size={20}
                color="#fdd130"
                style={{ marginTop: 20 }}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                placeholder=" Enter password"
                label="Password"
                activeUnderlineColor="#fdd130"
                textColor="white"
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
                style={{
                  backgroundColor: "#26272a",
                  paddingTop: 10,
                  width: "90%",
                }}
              />
              <AntDesign
                name="lock"
                size={20}
                color="#fdd130"
                style={{ marginTop: 20 }}
              />
            </View>
          </View>
          <Text style={{ color: "#fdd130", marginLeft: 240 }}>
            Forgot Password ?
          </Text>
        </View>
        {isLoading == true ? (
          <ActivityIndicator color={"#fdd130"} size={"small"} />
        ) : null}
        {error !== "" ? (
          <Text
            style={{
              color: "red",
            }}
          >
            {error}
          </Text>
        ) : null}
        <TouchableOpacity
          style={{
            alignSelf: "center",
            backgroundColor: "#fdd130",
            paddingHorizontal: 150,
            paddingVertical: 13,
            marginTop: 20,
            borderRadius: 5,
          }}
          onPress={() => {
            handleSignUp();
          }}
        >
          <Text>Get started</Text>
        </TouchableOpacity>
        <Text style={{ color: "white", alignSelf: "center" }}>
          or simply login with
        </Text>
        <Pressable
          style={{
            alignSelf: "center",
            backgroundColor: "black",
            paddingHorizontal: 120,
            paddingVertical: 13,
            marginTop: 20,
            borderRadius: 5,
            flexDirection: "row",
          }}
        >
          <AntDesign
            name="apple1"
            size={20}
            color="white"
            style={{ marginRight: 10 }}
          />
          <Text style={{ color: "white" }}>Login with apple</Text>
        </Pressable>
        <Pressable
          style={{
            alignSelf: "center",
            backgroundColor: "white",
            paddingHorizontal: 115,
            paddingVertical: 13,
            marginTop: 20,
            borderRadius: 5,
            flexDirection: "row",
          }}
        >
          <AntDesign
            name="google"
            size={20}
            color="green"
            style={{ marginRight: 10 }}
          />
          <Text>Login with Google</Text>
        </Pressable>
        <View
          style={{ flexDirection: "row", alignSelf: "center", paddingTop: 70 }}
        >
          <Text style={{ color: "white" }}>
            Already have account
            <Text
              style={{ color: "#fdd130", fontWeight: "bold" }}
              onPress={() => navigation.navigate("login")}
            >
              {" "}
              Log In
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
