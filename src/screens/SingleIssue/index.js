import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import GlobalStyles from "../../shared/GlobalStyles";
import Axios from "axios";
import colors from "../../shared/colors";
import SkeletonContent from "react-native-skeleton-content";
import { FlatList } from "react-native-gesture-handler";
import { DateFormat } from "../../shared/DateFormat";
import ArticleCard from "./ArticleCard";
import _ from "lodash";

const SingleIssue = ({ route }) => {
  const { node, title } = route.params;
  const [isFetching, setFetching] = useState(true);
  const [issue, setIssue] = useState([]);

  const getArticles = async () => {
    await Axios.get(`/all-issues/${node}`).then((response) => {
      const data = response.data.issue_data;
      if (data !== null) {
        setIssue(data);
        setFetching(false);
      }
    });
  };

  useEffect(() => {
    getArticles();
    return () => {};
  }, [node]);

  return (
    <SkeletonContent
      containerStyle={{
        flex: 1,
        alignItems: "center",
      }}
      isLoading={isFetching}
      animationDirection="horizontalLeft"
      layout={[
        { key: "1", width: "90%", height: 60, marginBottom: 20, marginTop: 40 },
        { key: "2", width: "90%", height: 60, marginBottom: 20 },
        { key: "4", width: "90%", height: 60, marginBottom: 20 },
      ]}
    >
      <View style={GlobalStyles.container}>
        <Text
          style={{
            fontFamily: "nunito-extra-bold",
            textAlign: "center",
            color: colors.main,
            marginVertical: 10,
            fontSize: 30,
            textTransform: "capitalize",
          }}
        >
          {DateFormat(issue.changed)}
        </Text>
        <FlatList
          style={{ marginBottom: 70 }}
          showsVerticalScrollIndicator={false}
          data={issue.related_articles}
          keyExtractor={(item) => item.nid.toString()}
          renderItem={({ item }) => (
            <ArticleCard
              title={item.title}
              nid={item.nid}
              date={item.changed}
              number={item.article_number.field_article_number_value}
              author={item.article_author.field_article_author_value}
              abstract={item.article_abstract.field_article_abstract_value}
            />
          )}
        />
      </View>
    </SkeletonContent>
  );
};

export default SingleIssue;
