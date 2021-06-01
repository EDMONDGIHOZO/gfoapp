import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GlobalStyles from "../../shared/GlobalStyles";
import Header from "../../components/Header";
import Choice from "./Choice";

const Settings = () => {
	const [settings, setSettings] = useState("");

	const storeData = async (value) => {
		try {
			await AsyncStorage.setItem("@storage_Key", value);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<View style={GlobalStyles.container}>
			<Header title={"settings"} hideIcon={true} />
			<View style={GlobalStyles.contents}>
				<View style={GlobalStyles.card}>
					<Text style={GlobalStyles.cardTitle}>Languages</Text>
					<Choice title={"French"} id={"fr"} />
					<Choice title={"English"} id={"en"} />
				</View>
			</View>
		</View>
	);
};

export default Settings;
