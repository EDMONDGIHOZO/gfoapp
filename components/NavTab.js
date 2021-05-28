import React from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import GStyles from "../shared/Gstyle";

const NavTab = ({ focus, name, iconName }) => {
  return (
    <View style={GStyles.tab}>
      <View style={{ alignItems: "center", opacity: focus ? 1 : 0.5 }}>
        <MaterialIcons name={iconName} size={24} color="white" />
        <Text style={GStyles.tabTitle}>{name}</Text>
      </View>
    </View>
  );
};

export default NavTab;
