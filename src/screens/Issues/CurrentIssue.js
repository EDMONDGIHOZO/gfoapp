import React from "react";
import { View, Text } from "react-native";
import Styles from "./styles";
import moment from "moment";
import "moment/locale/fr";

import { useNavigation, NavigationContainer } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const CurrentIssue = ({ title, date, articlesNumber, nid }) => {
  const issueDate = moment.unix(date).format("MMMM D, YYYY");
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: 300,
        borderRadius: 10,
        marginRight: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "rgba(0,212,255,1) ",
      }}
    >
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("singleIssue", {
            node: nid,
            title: title,
          })
        }
      >
        <Text style={Styles.issueNumber}>{title}</Text>
      </TouchableOpacity>
      <View style={Styles.infoContainer}>
        <Text style={Styles.infoText}>{issueDate}</Text>
        <Text style={Styles.infoText}>{articlesNumber} articles</Text>
      </View>
    </View>
  );
};

export default CurrentIssue;
