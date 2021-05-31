import React from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import GlobalStyles from "../shared/GlobalStyles";

const NavTab = ({ focus, name, iconName }) => {
  return (
    <View style={GlobalStyles.tab}>
      <View style={{ alignItems: "center", opacity: focus ? 0.5 : 1 }}>
        <MaterialIcons name={iconName} size={24} color="white" />
        <Text style={GlobalStyles.tabTitle}>{name}</Text>
      </View>
    </View>
  );
};

export default NavTab;
