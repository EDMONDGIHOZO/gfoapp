import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import GlobalStyles from "../shared/GlobalStyles";
import ArticleRow from "./ArticleRow";
import axios from "axios";
import i18n from "../i18n";

const Featured = () => {
  const [articles, setArticles] = useState([
    {
      id: 2,
      title:
        "The RBM Partnership to End Malaria has launched its 2021-2025 Strategic Plan",
      date: "25th mar",
    },
    {
      id: 3,
      title:
        "The RBM Partnership to End Malaria has launched its 2021-2025 Strategic Plan",
      date: "25th mar",
    },
    {
      id: 4,
      title:
        "The RBM Partnership to End Malaria has launched its 2021-2025 Strategic Plan",
      date: "25th mar",
    },
    {
      id: 6,
      title:
        "The RBM Partnership to End Malaria has launched its 2021-2025 Strategic Plan",
      date: "25th mar",
    },
  ]);

  const viewArticle = (title) => {
    console.log(title);
  };

  if (articles.length > 1) {
    return (
      <View style={GlobalStyles.featured}>
        <Text style={GlobalStyles.featuredTitle}>{i18n.t("popularTitle")}</Text>
        <View style={GlobalStyles.cont}>
          {articles.map((article) => {
            return (
              <TouchableOpacity
                key={article.id.toString()}
                onPress={() => viewArticle(article.title)}
              >
                <ArticleRow title={article.title} date={article.date} />
              </TouchableOpacity>
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
          <Text>Loading articles </Text>
        </View>
      </View>
    );
  }
};

export default Featured;
