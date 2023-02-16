import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Card, Cardsmall } from "./card";
import axios from "axios";
import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { UpCard } from "./new";
import { LowCard } from "./lowcard";
import { LowCard2 } from "./lowcard2";

export const HomeScreen = () => {
  return (
    <View style={{ backgroundColor: "#26272a", height: "100%" }}>
      <ScrollView>
        <UpCard />
        <LowCard />
        <LowCard2 />
      </ScrollView>
    </View>
  );
};
