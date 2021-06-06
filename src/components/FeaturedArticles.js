import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import GlobalStyles from "../shared/GlobalStyles";
import ArticleRow from "./ArticleRow";
import axios from "axios";
import i18n from "../i18n";
import SkeletonContent from "react-native-skeleton-content";
import colors from "../shared/colors";

const Featured = () => {
  const [articles, setArticles] = useState([]);
  const [fetching, setFetching] = useState(true);
  let systemlanguage = i18n.locale;

  const fetchdata = async () => {
    let lang = systemlanguage.substr(0, 2);
    try {
      await axios.get(`/popular-articles/${lang}`).then((response) => {
        let articles = response.data.data;
        if (articles.length > 0) {
          setArticles(articles);
          setFetching(false);
        }
      });
    } catch (error) {
      console.log("something is not right");
    }
  };

  useEffect(() => {
    fetchdata();
    return () => {};
  }, []);

  if (!fetching) {
    return (
      <View style={GlobalStyles.featured}>
        <Text style={GlobalStyles.featuredTitle}>{i18n.t("popularTitle")}</Text>
        <View style={GlobalStyles.cont}>
          {articles.map((article) => {
            return (
              <ArticleRow
                title={article.title}
                date={article.changed}
                hits={article.gfo_hits}
                nid={article.nid}
                key={article.nid.toString()}
              />
            );
          })}
        </View>
      </View>
    );
  } else {
    return (
      <View style={GlobalStyles.featured}>
        <Text style={GlobalStyles.featuredTitle}> Featured Articles </Text>
        <View style={GlobalStyles.cont}>
          <ActivityIndicator size={"large"} color={colors.secondary} />
        </View>
      </View>
    );
  }
};

export default Featured;
