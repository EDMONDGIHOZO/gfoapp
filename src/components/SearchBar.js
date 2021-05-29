import React from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";
import AndroidStyle from "../shared/AndroidStyle";
import GlobalStyles from "../shared/GlobalStyles";

const SearchBar = () => {
  return (
    <View
      style={
        Platform.OS === "ios"
          ? GlobalStyles.searchContainer
          : AndroidStyle.searchContainer
      }
    >
      <TextInput
        placeholder="Article, Issue Number"
        style={GlobalStyles.input}
      />
      <TouchableOpacity>
        <View style={GlobalStyles.button}>
          <Text style={GlobalStyles.buttonText}>SEARCH</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
