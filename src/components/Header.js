import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import GlobalStyles from "../shared/GlobalStyles";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import I18n from "../i18n";

const Header = ({ title, hideIcon }) => {
  const navigation = useNavigation();
  return (
    <View style={GlobalStyles.header}>
      <Text style={GlobalStyles.headerTitle}>{title}</Text>
      {!hideIcon ? (
        <View style={GlobalStyles.languageBox}>
          <TouchableOpacity onPress={() => navigation.navigate("More")}>
            <MaterialIcons name="info" size={28} color="#00adef" />
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

export default Header;
