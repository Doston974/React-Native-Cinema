import { View, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import {
  fetchTrendingMovie,
  fetchUpcomingMovie,
  fetchTopRatedMovie,
  fetchPopularMovie,
} from "./../api";
import { useEffect, useState } from "react";
import TrendingMovie from "../components/TrendingMovie";
import UpcomingMovie from "../components/UpcomingMovie";
import Loader from "../components/Loading";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [topRated, setToprated] = useState([]);
  const [popular, setPopular] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    getTrendingMovie();
    getUpcomingMovie();
    getTopRatedMovie();
    getPopularMovie();
  }, []);

  const getTrendingMovie = async () => {
    const data = await fetchTrendingMovie();
    data.results && setTrending(data.results);
    setIsLoading(false);
  };

  const getUpcomingMovie = async () => {
    const data = await fetchUpcomingMovie();
    data.results && setUpcoming(data.results);
  };

  const getTopRatedMovie = async () => {
    const data = await fetchTopRatedMovie();
    data.results && setTopRated(data.results);
  };

  const getPopularMovie = async () => {
    const data = await fetchPopularMovie();
    data.results && setPopular(data.results);
  };

  return (
    <View className="flex-1 bg-slate-900">
      <SafeAreaView>
        <StatusBar style="light" />
        <View className={"flex-row justify-between items-center mx-4 mt-2"}>
          <Image source={require("../../assets/logo.png")} />
          <TouchableOpacity onPress={() => navigation.navigate("Search")}>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color={"white"} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {isLoading ? (
        <Loader />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          {trending.length > 0 && <TrendingMovie trending={trending} />}

          {upcoming.length > 0 && (
            <UpcomingMovie upcoming={upcoming} title={"Upcoming movie"} />
          )}

          {upcoming.length > 0 && (
            <UpcomingMovie
              upcoming={trending.reverse()}
              title={"Trending movie"}
            />
          )}

          {popular.length > 0 && (
            <UpcomingMovie upcoming={popular} title={"Popular movie"} />
          )}

          {topRated.length > 0 && <TrendingMovie trending={topRated} />}
        </ScrollView>
      )}
    </View>
  );
};

export default Home;
