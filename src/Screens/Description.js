import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  StatusBar,
  Pressable,
} from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import YoutubePlayer from "react-native-youtube-iframe";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import axios from "axios";
import { ActivityIndicator } from "react-native";

export const Description = ({ route }) => {
  const [detail, setdetail] = useState({});
  const [movieId, setMovieId] = useState([]);
  const [playing, setPlaying] = useState(false);
  // const [play, SetPlay] = useState ()

  const getmovie = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${detail?.id}/videos?api_key=d9cf23cf23f14a29b69eccb99afeaeff&language=en-US`
    );
    setMovieId(data);
  };

  console.log(detail);

  useEffect(() => {
    setdetail(route.params);
    getmovie();
  }, [detail]);

  console.log(movieId, "the data in the variable");
  console.log(detail, "the data in the variable");
  return (
    <ImageBackground
      resizeMode="cover"
      style={{ height: "100%" }}
      source={{ uri: `https:/image.tmdb.org/t/p/w500${detail.poster_path}` }}
    >
      <LinearGradient
        colors={["#00000000", "#000000"]}
        style={{ height: "100%", width: "100%", padding: 10 }}
      >
        {!movieId || !movieId.results ? (
          <View>
            <ActivityIndicator size="large" color="gold" />
            <Text>Loading...</Text>
          </View>
        ) : (
          <>
          <View style={{alignSelf:'center', marginTop:20, }}>

            <YoutubePlayer
              height={340}
              width={380}
              resizeMode="contain"
              play={playing}
              videoId={movieId?.results[0]?.key}
              onChangeState={(event) => console.log(event)}
              />
              </View>
          </>
        )}

        <Text
          style={{
            color: "white",
            fontSize: 30,
            fontWeight: "bold",
            
          }}
        >
          {detail.title}{" "}
        </Text>
        <Text style={{ color: "white" }}> 2h 20m</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <View
            style={{
              paddingHorizontal: 62,
              borderRadius: 5,
              backgroundColor: "#ffd12d",
              paddingVertical: 8,
              opacity: 0.8,
            }}
          >
            <Pressable>
              <View style={{ flexDirection: "row" }}>
                <Feather name="play" size={24} color="black" />
                <Text>Play</Text>
              </View>
            </Pressable>
          </View>
          <View
            style={{
              paddingHorizontal: 59,
              borderRadius: 5,
              backgroundColor: "#2c2d2f",
              paddingVertical: 8,
              opacity: 0.5,
            }}
          >
            <Pressable>
              <View style={{ flexDirection: "row" }}>
                <Feather name="plus" size={24} color="gold" />
                <Text style={{ color: "white" }}>My List</Text>
              </View>
            </Pressable>
          </View>
        </View>
        <View>
          <Text style={{ color: "gray", marginTop: 20 }}>
            {detail.overview}
          </Text>
          <Text style={{ color: "white", marginTop: 10 }}>
            {detail.release_date}
          </Text>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};
