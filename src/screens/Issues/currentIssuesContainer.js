import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import CurrentIssue from "../Issues/CurrentIssue";
import i18n from "../../i18n";
import { TouchableOpacity } from "react-native-gesture-handler";

const { height } = Dimensions.get("window");

const CurrentIssuesContainer = ({ navigation }) => {
  const [currentissues, setCurrentIssues] = useState([]);
  const [fetching, setFetching] = useState(true);

  // fetch current gfo
  const getIssues = async () => {
    let issues = [];
    const gfo = await axios.get("current-issue/en").then((response) => {
      const data = response.data.data;
      issues.push(data);
    });
    const ofm = await axios.get("current-issue/fr").then((res) => {
      const dat = res.data.data;
      issues.push(dat);
    });

    setCurrentIssues(issues);
  };

  useEffect(() => {
    getIssues();
    setFetching(false);
    return () => {};
  }, [currentissues]);

  return (
    <>
      <Text
        style={{
          marginBottom: 20,
          fontFamily: "nunito-extra-bold",
          fontSize: 20,
          color: "rgba(0,212,255,1) ",
        }}
      >
        {i18n.t("currentIssueTitle")}
      </Text>
      {fetching ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={{
            flex: 1,
          }}
        >
          {currentissues.map((issue, index) => {
            return (
              <CurrentIssue
                key={index}
                title={"current Issue"}
                issueTitle={issue.title}
                date={issue.changed}
                nid={issue.nid}
                articlesNumber={issue.__meta__.related_articles_count}
              />
            );
          })}
        </ScrollView>
      )}
    </>
  );
};

export default CurrentIssuesContainer;
