import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import GlobalStyles from "../shared/GlobalStyles";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, NavigationContainer } from "@react-navigation/native";

const Header = ({ title, hideIcon }) => {
	const navigation = useNavigation();
	return (
		<View style={GlobalStyles.header}>
			<Text style={GlobalStyles.headerTitle}>{title}</Text>
			{!hideIcon ? (
				<View style={GlobalStyles.languageBox}>
					<TouchableOpacity onPress={() => navigation.navigate("Settings")}>
						<MaterialIcons name="settings" size={28} color="white" />
					</TouchableOpacity>
				</View>
			) : null}
		</View>
	);
};

export default Header;
