import React from "react";
import { StyleSheet, Image } from "react-native";
import Styles from "../screens/Issues/styles";
import GlobalStyles from "../shared/GlobalStyles";
const BG_IMG = require("../../assets/images/bg.jpg");

const Background = () => {
  return (
    <Image
      source={BG_IMG}
      resizeMode="contain"
      style={GlobalStyles.backgroundImage}
    />
  );
};

export default Background;
