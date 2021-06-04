import React from "react";
import { View, Text } from "react-native";

const SingleIssue = ({ route }) => {
  const { issueId, issueTitle } = route.params;
  return (
    <View>
      <Text> single issue {issueId}</Text>
    </View>
  );
};

export default SingleIssue;
