import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Card, Cardsmall } from "./card";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const UpCard = () => {
  const navigation = useNavigation();
  const [popularmovies, setPopularmovies] = useState([]);
  useEffect(() => {
    getdata();
  }, []);

  const getdata = () => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/movie/popular?api_key=d9cf23cf23f14a29b69eccb99afeaeff&language=en-US&page=1",
    })
      .then((response) => {
        // console.log(response.data);
        setPopularmovies(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <View style={{ backgroundColor: "#26272a", padding: 10 }}>
      <Text style={{ color: "white", fontWeight: "bold" }}>
        Trending this week
      </Text>
      <ScrollView horizontal>
        <View style={{ flexDirection: "row", marginTop: -15 }}>
          {popularmovies.map((item, key) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("Description", item)}
                key={key}
              >
                <Card
                  image={item.backdrop_path}
                  title={item.title}
                  date={item.release_date}
                />  
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};
