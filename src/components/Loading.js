import React from "react";
import { StyleSheet } from "react-native";
import AnimatedLoader from "react-native-animated-loader";

const Loader = () => {
  return (
    <AnimatedLoader
      visible={true}
      overlayColor="rgba(2,6,23, .5)"
      source={require("../../assets/loader.json")}
      animationStyle={styles.lottie}
      speed={1}
    ></AnimatedLoader>
  );
};

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
  },
});

export default Loader;
