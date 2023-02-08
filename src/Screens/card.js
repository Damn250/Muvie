import { ImageBackground, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Card = ({ image, title, date }) => {
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
        <View style={{ paddingTop: 10, color: "white", flexDirection: "row" }}>
          <View>
            <Text
              style={{
                backgroundColor: "gold",
                width: 20,
                borderRadius: 4,
                marginBottom: 140,
                fontWeight:'bold',
                marginLeft:300
              }}
            >
              HD
            </Text>
            <Text
              style={{
                fontSize: 22,
                color: "white",
              }}
            >
              {title}
            </Text>
            <Text style={{ color: "white" }}>{date}</Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
