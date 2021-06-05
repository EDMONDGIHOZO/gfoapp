import React, { useEffect, useState } from "react";
import { ScrollView, Dimensions, View, Text } from "react-native";
import axios from "axios";
import CurrentIssue from "../Issues/CurrentIssue";
import i18n from "../../i18n";
const { height } = Dimensions.get("window");
import SkeletonContent from "react-native-skeleton-content";
import colors from "../../shared/colors";

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
    setFetching(false);
  };

  useEffect(() => {
    getIssues();
    return () => {};
  }, [currentissues]);

  return (
    <SkeletonContent
      isLoading={fetching}
      animationDirection="horizontalLeft"
      layout={[
        {
          key: "1",
          width: "90%",
          height: height / 5,
          marginBottom: 20,
        },
      ]}
    >
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
    </SkeletonContent>
  );
};

export default CurrentIssuesContainer;
