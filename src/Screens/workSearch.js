import { TextInput, View, Text,ImageBackground } from "react-native";
import React from "react";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Search() {
  const [searchData, setsearchData] = React.useState("");
  const [getSearchData, setGetSearchData] = React.useState([]);

  React.useEffect(() => {
    if (searchData.length !== 0) {
      getSearch();
    } else {
      setGetSearchData([]);
    }
  }, [searchData]);
  console.log();
  const getSearch = () => {
    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/search/movie?api_key=d9cf23cf23f14a29b69eccb99afeaeff&language=en-US&query=${searchData}&page=1&include_adult=false`,
    })
      .then((data1) => {
       
        setGetSearchData(data1.data.results);
        console.log(data1.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Search</Text>
        <TextInput  
          style={{ borderWidth: 2 }}
          onChangeText={(text) => setsearchData(text)}
        />
      </View>
      {getSearchData?.map((item, key) => {
        return (
          <View>
            key={item.id}
            <Text>{item.title}</Text>
            <ImageBackground style={{height:100,width:100}}  >
               {item.backdrop_path}
            </ImageBackground>
          </View>
        );
      })}
    </SafeAreaView>
  );
}
