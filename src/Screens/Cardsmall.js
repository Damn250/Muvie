import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const Cardsmall = () => {
  return (
   <SafeAreaView style={{ paddingHorizontal: 8 }}>
      <ImageBackground
        source={{
          uri: `https:/image.tmdb.org/t/p/w500${image}`,
        }}
        imageStyle={{ borderRadius: 20 }}
        style={{
          fontSize: 15,
          height: 230,
          width: 340,
          borderRadius: 10,
          padding: 10,
          justifyContent: "flex-end",
        }}
      >
        <View style={{ paddingTop: 10,  color: "white",  }}>
          <Text
            style={{
              fontSize: 22,
              color: "white",
            }}
          >
            {title}
          </Text>
          <Text style={{ color: "white", }}>{date}</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
  
}



