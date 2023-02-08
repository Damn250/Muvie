import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementAmount, increment } from "./counterSlice";
import { SafeAreaView } from "react-native-safe-area-context";

export const Pass = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <View>
        <Text>It is incrementing {count}</Text>
        <Button title="Increment" onPress={() => dispatch(increment())} />
        <Button
          title="add amount"
          onPress={() => dispatch(incrementAmount(1222))}
        />
      </View>
    </SafeAreaView>
  );
};
