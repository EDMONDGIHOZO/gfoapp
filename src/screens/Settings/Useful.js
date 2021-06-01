import React, { useCallback } from "react";
import { View, Text, TouchableOpacity, Linking, Alert } from "react-native";
import GlobalStyles from "../../shared/GlobalStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Useful = ({ title, link, iconName }) => {
  const openLink = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(link);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(link);
    } else {
      Alert.alert(`Don't know how to open this URL: ${link}`);
    }
  }, [link]);

  return (
    <TouchableOpacity onPress={() => openLink()}>
      <View style={GlobalStyles.smallCard}>
        <Text style={GlobalStyles.title}>{title}</Text>
        <MaterialCommunityIcons name={iconName} size={24} color="grey" />
      </View>
    </TouchableOpacity>
  );
};

export default Useful;
