import React from "react";
import { View, Text } from "react-native";
import GlobalStyles from "../../shared/GlobalStyles";
import { MaterialIcons } from "@expo/vector-icons";

const Choice = ({ title, id }) => {
	return (
		<View style={GlobalStyles.smallCard}>
			<Text style={GlobalStyles.title}>{title}</Text>
			<MaterialIcons name="check-box" size={24} color="black" />
		</View>
	);
};

export default Choice;
