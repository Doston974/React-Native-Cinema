import React from "react";
import { Dimensions, View } from "react-native";
import * as Progress from "react-native-progress";

const { width, height } = Dimensions.get("window");

const ProgressLoader = () => {
  return (
    <View
      style={{ width, height }}
      className={"absolute flow-row justify-center items-center"}
    >
      <Progress.CircleSnail color={["red", "green", "blue"]} />
    </View>
  );
};

export default ProgressLoader;
