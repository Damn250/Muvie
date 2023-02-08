import { ImageBackground, View, Text , Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Cardsmall = ({ image, title, date , description}) => {
  return (
    <SafeAreaView style={{ paddingHorizontal: 8 }}>
      <Image
        source={{
          uri: `https:/image.tmdb.org/t/p/w500${image}`,
        }}
        imageStyle={{ borderRadius: 10 }}
        style={{
          fontSize: 15,
          height: 200,
          width: 130,
          borderRadius: 10,
          justifyContent: "flex-end",
        }}
      ></Image>
      <View style={{ color: "white" }}>
        <Text
          style={{
            fontSize: 12,
            color: "white",
            width:100
          }}
        >
          {title}
        </Text>
        <Text style={{ color: "white", fontSize: 10 , width:100}}>{date}</Text>
        <Text numberOfLines={2}
         style={{ color: "gray", fontSize: 10, width:120,  }}>{description}</Text>
      </View>
    </SafeAreaView>
  );
};
