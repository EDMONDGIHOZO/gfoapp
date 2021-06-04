import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  Platform,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import GlobalStyles from "../../shared/GlobalStyles";
import colors from "../../shared/colors";

import Header from "../../components/Header";
import axios from "axios";
import Loading from "../../components/Loading";
import Issue from "./Issue";
import Styles from "./styles";
import i18n from "../../i18n";
import { TouchableOpacity } from "react-native-gesture-handler";

const Issues = () => {
  const [issues, setIssues] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [lang, setLang] = useState("");

  const getData = async () => {
    await axios
      .get(`${lang === "fr" ? "/ofm" : "/gfo"}?page=${currentPage}`)
      .then((res) => {
        let data = res.data.data;
        issues.length = 0;
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
    setIssues([]);
    setCurrentPage(1);
    setIssues([]);
    getData();
  };

  useEffect(() => {
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

  const handleFilter = (value) => {
    setRefreshing(true);
    setLang(value);
  };

  if (loaded) {
    return (
      <SafeAreaView style={GlobalStyles.container}>
        <Header title={i18n.t("issuesTitle")} />

        <View style={GlobalStyles.contents}>
          <View style={Styles.filter}>
            <Text
              style={{
                fontFamily: "nunito-regular",
                fontSize: 18,
                color: "#798C8E",
              }}
            >
              {i18n.t("filterIssueType")}
            </Text>
            <View style={Styles.pickerContainer}>
              {Platform.OS === "ios" ? (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flex: 2,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => handleFilter("en")}
                    style={{
                      backgroundColor:
                        lang === "en" ? colors.accent : colors.main,
                      borderRadius: 8,
                      padding: 10,
                    }}
                  >
                    <Text style={GlobalStyles.buttonText}>GFO</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleFilter("fr")}
                    style={{
                      backgroundColor:
                        lang === "fr" ? colors.accent : colors.main,
                      borderRadius: 8,
                      padding: 10,
                    }}
                  >
                    <Text style={GlobalStyles.buttonText}>OFM</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <Picker
                  mode={"dialog"}
                  selectedValue={lang}
                  onValueChange={(itemValue, itemIndex) =>
                    handleFilter(itemValue)
                  }
                  itemStyle={{ color: "grey", fontFamily: "nunito-bold" }}
                >
                  <Picker.Item label="GFO" value="en" />
                  <Picker.Item label="OFM" value="fr" />
                </Picker>
              )}
            </View>
          </View>
          <FlatList
            style={{ height: "100%" }}
            data={issues}
            refreshing={refreshing}
            onRefresh={() => refresher()}
            onEndReachedThreshold={0.5}
            onEndReached={() => handleLoadMore()}
            keyExtractor={(item) => item.nid.toString()}
            renderItem={({ item, index }) => {
              return (
                <Issue
                  title={item.title}
                  date={item.created}
                  nid={item.nid}
                  type={"issue"}
                />
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
        <Loading percentage={100} />
      </SafeAreaView>
    );
  }
};

export default Issues;
