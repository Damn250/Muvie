import { ImageBackground, View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Searchsmall = ({ image, title, date, description }) => {
  return (
    <SafeAreaView style={{ paddingHorizontal: 8, flexDirection:'row' }}>
        
      <Image
        source={{
          uri: `https:/image.tmdb.org/t/p/w500${image}`,
        }}
        imageStyle={{ borderRadius: 10 }}
        style={{
          fontSize: 15,
          height: 120,
          width: 200,
          borderRadius: 10,
          justifyContent: "flex-end",
        }}
      ></Image>
      <View style={{ color: "white" ,marginHorizontal:20}}>
        <Text
          style={{
            fontSize: 18,
            color: "white",
            width: 160,
          }}
        >
          {title}
        </Text>
        <Text style={{ color: "white", fontSize: 10, width: 150 }}>{date}</Text>
        <Text
          numberOfLines={4}
          style={{ color: "gray", fontSize: 10, width: 180}}
        >
          {description}
        </Text>
      </View>
    </SafeAreaView>
  );
};
