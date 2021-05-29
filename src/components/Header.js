import React from "react";
import { View, Text } from "react-native";
import GlobalStyles from "../shared/GlobalStyles";

const Header = () => {
  return (
    <View style={GlobalStyles.header}>
      <Text style={GlobalStyles.headerTitle}>ALL ISSUES</Text>
      <View style={GlobalStyles.languageBox}>
        <Text style={GlobalStyles.lang}>GFO</Text>
      </View>
    </View>
  );
};

export default Header;
