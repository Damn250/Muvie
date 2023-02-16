import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Searchsmall } from "./searchCard";

export const Series = () => {
  const [serie, setSerie] = useState([]);
  useEffect(() => {
    getdata();
  }, []);
  const getdata = () => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/movie/popular?api_key=d9cf23cf23f14a29b69eccb99afeaeff&language=en-US&page=6",
    })
      .then((response) => setSerie(response.data.results))
      .catch((err) => console.log(err));
  };
  return (
    <View style={{ backgroundColor: "#26272a", padding: 10 }}>
      <Text style={{ color: "white", fontWeight: "bold" , marginLeft:12}}>Popular Series</Text>
      <ScrollView>
        <View style={{ flexDirection: "column", marginTop: -15 }}>
          {serie.map((item, key) => {
            return (
              <Searchsmall
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
export default Series;
