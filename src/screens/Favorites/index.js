import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import GlobalStyles from "../../shared/GlobalStyles";
import Header from "../../components/Header";

const Favorites = () => {
  return (
    <SafeAreaView style={GlobalStyles.container}>
      <Header title={"BOOKMARKS"} />
      <View style={GlobalStyles.contents}>
        <View>
          <Text>Book marks </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Favorites;
