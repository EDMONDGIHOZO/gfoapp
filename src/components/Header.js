import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import GlobalStyles from "../shared/GlobalStyles";
import { MaterialIcons } from "@expo/vector-icons";

const Header = ({ title }) => {
  return (
    <View style={GlobalStyles.header}>
      <Text style={GlobalStyles.headerTitle}>{title}</Text>
      <View style={GlobalStyles.languageBox}>
        <TouchableOpacity onPress={() => alert("settings")}>
          <MaterialIcons name="settings" size={28} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
