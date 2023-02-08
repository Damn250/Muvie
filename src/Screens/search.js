import { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { Cardsmall } from "./small";
import axios from "axios";
import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { Searchsmall } from "./searchCard";
import { TextInput } from "react-native-paper";

export const Search = ({navigation}) => {
  const [search, setsearch] = useState("");
  const [popularmovies, setPopularmovies] = useState([]);
  useEffect(() => {
    if(search.length > 0)
    getdata();
     else {
      setPopularmovies([])
     }
    
  }, [search]);

  const getdata = () => {
    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/search/movie?api_key=d9cf23cf23f14a29b69eccb99afeaeff&language=en-US&query=${search}&&include_adult=false`,
    })
      .then((response) => {
        setPopularmovies(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "#26272a", padding: 10 , height:'100%'}}>
        <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
          Search
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#2c2d31",
            
          }}
        >
          <TextInput
            placeholder="Type title, categories,years "
            style={{ backgroundColor: "#2c2d31" }}
            onChangeText={(text) => setsearch(text)}
          />
          <AntDesign
            name="search1"
            size={24}
            color="gold"
            style={{ paddingTop: 20, marginRight: 10 }}
          />
        </View>
        
        <ScrollView>
          <View style={{ marginTop: -15 }}>
            {popularmovies.map((item, key) => {
              return (
                <Pressable
                onPress={() => navigation.navigate('Description') }
                >

                <Searchsmall

                  key={key}
                  image={item.backdrop_path}
                  title={item.title}
                  date={item.release_date}
                  description={item.overview}
                  />
                  </Pressable>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
