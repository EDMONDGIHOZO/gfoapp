import React from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import GlobalStyles from "../../shared/GlobalStyles";
import Styles from "./styles";

import moment from "moment";
import "moment/locale/fr";
moment.locale("en");

const Issue = ({ title, date, nid }) => {
	const issueDate = moment.unix(date).format("MMMM D, YYYY");
	return (
		<View style={Styles.articleContainer}>
			<View style={Styles.article}>
				<Text
					style={{
						fontFamily: "nunito-bold",
						fontSize: 18,
						marginBottom: 20,
					}}
				>
					{title}
				</Text>
				<Text style={Styles.date}>{issueDate}</Text>
			</View>
			<View style={GlobalStyles.iconsContainer}>
				<MaterialIcons name="open-in-new" size={24} color="black" />
				<MaterialIcons name="bookmark" size={24} color="black" />
				<MaterialIcons name="share" size={24} color="black" />
			</View>
		</View>
	);
};

export default Issue;
