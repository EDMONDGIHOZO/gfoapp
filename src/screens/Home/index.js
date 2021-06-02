import React, { useState, useEffect } from "react";
import { View, Image, SafeAreaView, StyleSheet } from "react-native";
import GlobalStyles from "../../shared/GlobalStyles";
import Header from "../../components/Header";
import Tags from "../../components/Tags";
import Featured from "../../components/FeaturedArticles";
import { ScrollView } from "react-native-gesture-handler";
import i18n from "../../i18n";
import CurrentIssuesContainer from "../Issues/currentIssuesContainer";

const Home = () => {
  return (
    <SafeAreaView style={GlobalStyles.container}>
      <Header title={i18n.t("homeTitle")} />
      <ScrollView>
        <View style={GlobalStyles.contents}>
          <CurrentIssuesContainer />
          <Featured />
          <Tags />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
