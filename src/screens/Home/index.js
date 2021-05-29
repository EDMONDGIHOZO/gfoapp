import React from "react";
import { View, Text } from "react-native";
import GlobalStyles from "../../shared/GlobalStyles";
import Header from "../../components/Header";

const Home = () => {
  return (
    <View style={GlobalStyles.container}>
      <Header />
      <View style={GlobalStyles.contents}>
        <Text>Contents here</Text>
      </View>
    </View>
  );
};

export default Home;
