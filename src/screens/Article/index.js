import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import { DateFormat } from "../../shared/DateFormat";
import colors from "../../shared/colors";
import GlobalStyles from "../../shared/GlobalStyles";
import Axios from "axios";
import HTML from "react-native-render-html";
import Header from "../../components/Header";

const Article = ({ route }) => {
  const contentWidth = useWindowDimensions().width;
  const { ArticleId } = route.params;
  const [isFetching, setFetching] = useState(true);
  const [article, setArticle] = useState({});

  const getArticle = async () => {
    await Axios.get(`Articles/${ArticleId}`).then((response) => {
      const data = response.data.article;
      if (data !== null) {
        setArticle(data);
        console.log(data);
        setFetching(false);
      }
    });
  };

  useEffect(() => {
    getArticle();
    return () => {};
  }, []);

  if (!isFetching) {
    return (
      <>
        <Header
          title={
            article.article_number.field_article_number_value !== null
              ? `${article.article_number.field_article_number_value} - ${article.article_types[0].name}`
              : "Number/Numero"
          }
          hideIcon={true}
          isArticle={true}
        />
        <ScrollView style={GlobalStyles.container}>
          <View style={GlobalStyles.contents}>
            <View
              style={{
                backgroundColor: "#fff",
                padding: 20,
                borderRadius: 10,
                elevation: 1,
              }}
            >
              <Text
                style={{
                  fontFamily: "nunito-extra-bold",
                  fontSize: 25,
                  textTransform: "capitalize",
                  marginBottom: 20,
                  color: colors.accent,
                }}
              >
                {article.title}
              </Text>
              <Text
                style={{
                  fontFamily: "nunito-light",
                  fontSize: 20,
                  textTransform: "capitalize",
                  color: colors.accent,
                  marginBottom: 20,
                }}
              >
                {article.article_second_title
                  ? article.article_second_title
                      .field_article_secondary_title_value
                  : "-----"}
              </Text>
              <View style={GlobalStyles.cardTitleContainer}>
                <Text
                  style={{
                    fontFamily: "nunito-bold",
                    fontSize: 14,
                    textTransform: "capitalize",
                    color: colors.main,
                    maxWidth: "50%",
                  }}
                >
                  {article.article_author.field_article_author_value}
                </Text>
                <Text
                  style={{
                    fontFamily: "nunito-bold",
                    fontSize: 14,
                    textTransform: "capitalize",
                    color: colors.main,
                    maxWidth: "50%",
                  }}
                >
                  {DateFormat(article.changed)}
                </Text>
              </View>
            </View>

            <View
              style={{
                backgroundColor: colors.main,
                borderLeftColor: colors.secondary,
                borderLeftWidth: 4,
                padding: 20,
                borderRadius: 2,
                elevation: 1,
                marginVertical: 10,
              }}
            >
              <HTML
                tagsStyles={{
                  p: {
                    fontFamily: "nunito-regular",
                    color: "#fff",
                    fontSize: 16,
                  },
                }}
                source={{
                  html: article.article_abstract.field_article_abstract_value,
                }}
                contentWidth={contentWidth}
              />
            </View>
            <View
              style={{
                flex: 1,
                padding: 10,
                borderTopColor: colors.main,
                borderTopWidth: 3,
                marginVertical: 20,
                borderRadius: 8,
                backgroundColor: "#fff",
              }}
            >
              <HTML
                tagsStyles={{
                  p: {
                    fontFamily: "nunito-regular",
                    color: "#000",
                    fontSize: 16,
                  },
                  i: {
                    fontFamily: "nunito-regular",
                    color: "#000",
                    fontSize: 16,
                  },
                  h1: {
                    fontFamily: "nunito-regular",
                    color: "#000",
                    fontSize: 16,
                  },
                  h2: {
                    fontFamily: "nunito-regular",
                    color: "#000",
                    fontSize: 16,
                  },
                  h3: {
                    fontFamily: "nunito-regular",
                    color: "#000",
                    fontSize: 16,
                  },
                  h4: {
                    fontFamily: "nunito-regular",
                    color: "#000",
                    fontSize: 16,
                  },
                  h5: {
                    fontFamily: "nunito-regular",
                    color: "#000",
                    fontSize: 16,
                  },
                  a: {
                    fontFamily: "nunito-regular",
                    color: colors.main,
                    fontSize: 16,
                  },
                }}
                baseFontStyle={{
                  fontFamily: "nunito-regular",
                  lineHeight: 25,
                  fontSize: 15,
                }}
                source={{
                  html: article.article_content.field_article_content_value,
                }}
                contentWidth={contentWidth}
              />
            </View>
          </View>
        </ScrollView>
      </>
    );
  } else {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <ActivityIndicator size="large" color={colors.secondary} />
      </View>
    );
  }
};

export default Article;
