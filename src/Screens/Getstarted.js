import { StyleSheet, Text, View, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
 export const Getstarted = ({navigation}) => {
  return (
  
    <View style={{backgroundColor:'black',}}>

    <ImageBackground 

source={{uri:"https://play-lh.googleusercontent.com/fH70X7BerXQNHbWcFy7eI59AL_bmnRKIuRW3kWwH3C-qcrzwXplmN8uiRADA3_j3V8w"}}
style={{height:'100%', paddingHorizontal:10}} 
imageStyle={{backgroundColor:'black', opacity:0.5}}  >
  
      <Text style={{ marginTop:400, fontSize:25, color:'white', fontWeight:'bold'}}>Enjoy your favorite movie everywhere </Text>
      <Text style={{color:'white', width:"70%"}}> Browse through our collections and start streaming your favorite movei with the favorite cast. enjoy the site</Text>
      <Pressable
          style={{
            alignSelf: "center",
            backgroundColor: "#fdd130",
            paddingHorizontal: 150,
            paddingVertical: 13,
            marginTop: 120,
            borderRadius: 5,
          }}
          onPress={() => navigation.navigate("login")}
        >
          <Text>Get started</Text>
    </Pressable>
    </ImageBackground>
      </View>
      
  )
}



