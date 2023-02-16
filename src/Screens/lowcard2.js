import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Cardsmall } from "./small";
import axios from "axios";
import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Cardsmall2 } from "./small2";

export const LowCard2 = () => {
  const [popularmovies, setPopularmovies] = useState([]);
  useEffect(() => {
    getdata();
  }, []);

  const getdata = () => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/movie/popular?api_key=d9cf23cf23f14a29b69eccb99afeaeff&language=en-US&page=3",
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
      <Text style={{ color: "white", fontWeight: "bold" }}>Recently added</Text>
      <ScrollView horizontal>
        <View style={{ flexDirection: "row", marginTop: -15 }}>
          {popularmovies.map((item, key) => {
            return (
              <Cardsmall2
                key={key}
                image={item.backdrop_path}
                title={item.title}
                date={item.release_date}
                description={item.overview}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};
