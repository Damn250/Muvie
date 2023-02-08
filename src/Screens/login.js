import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { TextInput } from "react-native-paper";
import { AntDesign, Fontisto } from "@expo/vector-icons";

export const Login = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "#26272a", height: "100%" }}>
        <Text
          style={{
            marginLeft: 30,
            fontSize: 25,
            color: "white",
            fontWeight: "500",
          }}
        >
          Login
        </Text>

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
          <View style={{ marginHorizontal: 20, marginTop: 50 }}>
            <View>
              <View style={{ flexDirection: "row" }}>
                <TextInput
                  mode="outline"
                  label="Email Address"
                  activeUnderlineColor="#fdd130"
                  textColor="white"
                  style={{ backgroundColor: "#26272a", width: "90%" }}
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
                placeholder=" Enter password"
                label="Password"
                activeUnderlineColor="#fdd130"
                textColor="white"
                secureTextEntry
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
        <Pressable
          style={{
            alignSelf: "center",
            backgroundColor: "#fdd130",
            paddingHorizontal: 150,
            paddingVertical: 13,
            marginTop: 20,
            borderRadius: 5,
          }}
          onPress={() => navigation.navigate("Topnav")}
        >
          <Text>Get started</Text>
        </Pressable>
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
            flexDirection:'row'
          }}
        >
          <AntDesign name="apple1" size={20} color="white" style={{marginRight:10}} />
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
            flexDirection:'row'
          }}
        >
          <AntDesign name="google" size={20} color="green" style={{marginRight:10}} />
          <Text>Login with Google</Text>
        </Pressable>
        <View
          style={{ flexDirection: "row", alignSelf: "center", paddingTop: 70 }}
        >
          <Text style={{ color: "white" }}>
            Don't have an account?
            <Text
              onPress={() => navigation.navigate("SignUp")}
              style={{ color: "#fdd130", fontWeight: "bold" }}
            >
              {" "}
              Sign UP
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
