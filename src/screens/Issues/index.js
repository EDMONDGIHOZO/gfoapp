import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  TextInput,
} from "react-native";
import GlobalStyles from "../../shared/GlobalStyles";
import Background from "../../components/Background";
import Header from "../../components/Header";
import axios from "axios";
import Loading from "../../components/Loading";
import Issue from "./Issue";
import { uidata } from "../../Languages/fr";
import Styles from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Issues = () => {
  const [issues, setIssues] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [lang, setLang] = useState("");

  const languageGetter = async () => {
    try {
      const value = await AsyncStorage.getItem("language");
      if (value !== null) {
        setLang(value);
      }
    } catch (e) {
      // error reading value
    }
  };

  const getData = async () => {
    await axios
      .get(`/${lang}?page=${currentPage}`)
      .then((res) => {
        let data = res.data.data;
        let mixed = Array.from(new Set(issues.concat(data)));
        setIssues(mixed);
        setLoaded(true);
        setIsLoading(false);
        setRefreshing(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const refresher = () => {
    setRefreshing(true);
    setCurrentPage(1);
    setIssues([]);
    getData();
  };

  useEffect(() => {
    languageGetter();
    setIsLoading(true);
    getData();
    return () => {};
  }, [currentPage, lang]);

  const renderFooter = () => {
    return isLoading ? (
      <View style={Styles.loader}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    ) : null;
  };

  const handleLoadMore = () => {
    setIssues([]);
    setCurrentPage(currentPage + 1);
    setIsLoading(true);
  };

  if (loaded) {
    return (
      <SafeAreaView style={GlobalStyles.container}>
        <Header title={uidata.issues} />
        <View style={GlobalStyles.contents}>
          <FlatList
            data={issues}
            refreshing={refreshing}
            onRefresh={() => refresher()}
            onEndReachedThreshold={0.5}
            onEndReached={() => handleLoadMore()}
            keyExtractor={(item) => item.nid.toString()}
            renderItem={({ item, index }) => {
              return (
                <Issue title={item.title} date={item.created} nid={item.nid} />
              );
            }}
            ListFooterComponent={renderFooter}
          />
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={GlobalStyles.container}>
        <Background />
        <Loading percentage={100} />
      </SafeAreaView>
    );
  }
};

export default Issues;
