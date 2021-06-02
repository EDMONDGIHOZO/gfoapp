import React from "react";
import { View, Text } from "react-native";
import Styles from "./styles";
import moment from "moment";
import "moment/locale/fr";

const CurrentIssue = ({ title, issueTitle, date, articlesNumber }) => {
  const issueDate = moment.unix(date).format("MMMM D, YYYY");
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
      <Text style={Styles.issueNumber}>{issueTitle}</Text>
      <View style={Styles.infoContainer}>
        <Text style={Styles.infoText}>{issueDate}</Text>
        <Text style={Styles.infoText}>{articlesNumber} articles</Text>
      </View>
    </View>
  );
};

export default CurrentIssue;
