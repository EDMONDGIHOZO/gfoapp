import React from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const BIcon = ({ title, color, iconName }) => {
  return (
    <View
      style={{
        alignItems: "center",
        padding: 10,
        backgroundColor: color,
        justifyContent: "center",
        flexDirection: "row",
        borderRadius: 6,
      }}
    >
      <MaterialIcons name={iconName} size={20} color="#fff" />
      <Text
        style={{
          color: "#fff",
          fontSize: 14,
          fontFamily: "nunito-bold",
          marginLeft: 10,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default BIcon;
