import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  useWindowDimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { DateFormat } from "../../shared/DateFormat";
import colors from "../../shared/colors";
import GlobalStyles from "../../shared/GlobalStyles";
import Axios from "axios";
import HTML from "react-native-render-html";
import Styles from "./styles";
import { FAB } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { shareArticle } from "../../shared/ShareArticle";
import { Bookmarker } from "../../shared/Bookmarker";
import ArticleRow from "../../components/ArticleRow";
import i18n from "../../i18n";
import { CommonActions } from "@react-navigation/native";

const Article = ({ route, navigation }) => {
  const contentWidth = useWindowDimensions().width;
  const { node } = route.params;
  const [isFetching, setFetching] = useState(true);
  const [article, setArticle] = useState({});
  const [FontSize, setFontSize] = useState(16);

  const scrollRef = useRef();

  const getArticle = async () => {
    await Axios.get(`Articles/${node}`).then((response) => {
      const data = response.data.article;
      if (data !== null) {
        setArticle(data);
        setFetching(false);
      }
    });
  };

  const bookmark = async () => {
    Bookmarker(article.title, article.changed, article.nid, "gfo_article");
  };

  const fontingPlus = () => {
    let maxFont = 30;
    if (FontSize < maxFont) {
      setFontSize(FontSize + 3);
    } else {
      setFontSize(FontSize - 10);
    }
  };

  useEffect(() => {
    getArticle();
    return () => {};
  }, []);

  if (!isFetching) {
    return (
      <>
        <ScrollView
          style={GlobalStyles.container}
          zoomScale={true}
          maximumZoomScale={1.5}
          ref={scrollRef}
        >
          <View style={GlobalStyles.articleContainer}>
            <View style={Styles.titleContainer}>
              <Text style={Styles.firsttitle} selectable>
                {article.title}
              </Text>
              <Text style={Styles.secondtitle}>
                {article.article_second_title
                  ? article.article_second_title
                      .field_article_secondary_title_value
                  : "-----"}
              </Text>
              <View style={GlobalStyles.cardTitleContainer}>
                <Text style={Styles.smalltext}>
                  {article.article_author !== null
                    ? article.article_author.field_article_author_value
                    : "aidspan"}
                </Text>
                <Text style={Styles.smalltext}>
                  {DateFormat(article.changed)}
                </Text>
              </View>
            </View>

            {/* little detailas container */}
            <View
              style={{
                backgroundColor: colors.secondary,
                height: 50,
                marginVertical: 20,
                borderRadius: 6,
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 20,
                flexDirection: "row",
              }}
            >
              <Text style={{ color: "#fff", fontFamily: "nunito-bold" }}>
                {article.article_number !== null
                  ? article.article_number.field_article_number_value
                  : "number"}
              </Text>
              <Text style={{ color: "#fff", fontFamily: "nunito-bold" }}>
                {article.article_types !== null
                  ? article.article_types[0].name
                  : "no type found"}
              </Text>

              <TouchableOpacity onPress={() => bookmark()}>
                <MaterialIcons name="bookmark" size={20} color="#fff" />
              </TouchableOpacity>
            </View>

            <View style={Styles.abstractcontainer}>
              <HTML
                tagsStyles={{
                  p: {
                    fontFamily: "nunito-regular",
                    color: "#fff",
                    fontSize: 16,
                  },
                }}
                source={{
                  html:
                    article.article_abstract !== null ? (
                      article.article_abstract.field_article_abstract_value
                    ) : (
                      <p> no absctract </p>
                    ),
                }}
                contentWidth={contentWidth}
              />
            </View>
            <View style={Styles.contentcontainer}>
              <HTML
                ignoredStyles={[
                  "fontFamily",
                  "font-family",
                  "textDecorationStyle",
                ]}
                containerStyle={{
                  backgroundColor: "#fff",
                  padding: 10,
                  margin: 0,
                }}
                tagsStyles={{
                  p: {
                    fontFamily: "nunito-regular",
                    color: "#000",
                    fontSize: FontSize,
                    lineHeight: 30,
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
                  fontSize: FontSize,
                }}
                source={{
                  html: article.article_content.field_article_content_value,
                }}
                contentWidth={contentWidth}
              />
            </View>
          </View>
          <View
            style={{
              padding: 12,
              minHeight: 400,
              backgroundColor: "#F8F9FA",
              margin: 10,
              borderRadius: 10,
              marginBottom: 80,
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontFamily: "nunito-bold",
                color: colors.accent,
                marginVertical: 20,
              }}
            >
              | {article.article_issue[0].title}
            </Text>
            {article.article_issue[0].related_articles.map((a) => {
              return (
                <TouchableOpacity
                  key={a.nid}
                  onPress={() =>
                    navigation.push("singleArticle", { node: a.nid })
                  }
                >
                  <ArticleRow
                    title={a.title}
                    date={a.changed}
                    hits={a.gfo_hits}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
        <FAB
          style={GlobalStyles.fab2}
          small
          icon="share"
          color={"white"}
          onPress={() => shareArticle(node, article.title)}
        />
        <FAB
          style={GlobalStyles.fab}
          small
          icon="format-font-size-increase"
          color={"white"}
          onPress={() => fontingPlus()}
        />
        <FAB
          style={GlobalStyles.fab3}
          small
          icon="format-align-top"
          color={"white"}
          onPress={() =>
            scrollRef.current?.scrollTo({
              y: 0,
              animated: true,
            })
          }
        />
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
