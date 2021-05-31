import React from "react";
import { StyleSheet, Image } from "react-native";
const BG_IMG = require("../../assets/images/bg.jpg");

const Background = () => {
	return (
		<Image
			source={BG_IMG}
			style={StyleSheet.absoluteFillObject}
			blurRadius={20}
		/>
	);
};

export default Background;
