import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import GlobalStyles from "../../shared/GlobalStyles";
import Header from "../../components/Header";
import CurrentIssue from "../Issues/CurrentIssue";
import Tags from "../../components/Tags";
import Featured from "../../components/FeaturedArticles";
import { ScrollView } from "react-native-gesture-handler";

const Home = () => {
  return (
    <SafeAreaView style={GlobalStyles.container}>
      <Header title={"Welcome to Aidspan"} />
      <ScrollView>
        <View style={GlobalStyles.contents}>
          <CurrentIssue />
          <Tags />
          <Featured />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
