import { View, Text, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import MovieCard from "./MovieCard";

const { width } = Dimensions.get("window");

const TrendingMovie = ({ trending }) => {
  return (
    <View className={"mb-5 mt-6"}>
      <Carousel
        data={trending}
        renderItem={({ item }) => <MovieCard item={item} />}
        firstItem={1}
        sliderWidth={width}
        inactiveSlideOpacity={0.6}
        itemWidth={width * 0.7}
        slideStyle={{ display: "flex", alignItems: "center" }}
      />
    </View>
  );
};

export default TrendingMovie;
