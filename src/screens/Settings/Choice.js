import React, { useState } from "react";
import { View, Text } from "react-native";
import GlobalStyles from "../../shared/GlobalStyles";
import { Ionicons } from "@expo/vector-icons";

const Choice = ({ title, selected }) => {
  return (
    <View style={GlobalStyles.smallCard}>
      <Text style={GlobalStyles.title}>{title}</Text>
      {selected ? <Ionicons name="checkbox" size={24} color="#00adef" /> : null}
    </View>
  );
};

export default Choice;
