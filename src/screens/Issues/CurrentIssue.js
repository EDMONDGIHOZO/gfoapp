import React from "react";
import { View, Text } from "react-native";
import Styles from "./styles";

const CurrentIssue = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}> Current issue </Text>
      <Text style={Styles.issueNumber}> GFO ISSUE 350 </Text>
      <View style={Styles.infoContainer}>
        <Text style={Styles.infoText}>20th Jan 2021</Text>
        <Text style={Styles.infoText}>20 articles</Text>
      </View>
    </View>
  );
};

export default CurrentIssue;
