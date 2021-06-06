import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import GlobalStyles from "../shared/GlobalStyles";
import { DateFormatShort } from "../shared/DateFormat";
import i18n from "../i18n";
import { useNavigation } from "@react-navigation/native";
import colors from "../shared/colors";

const ArticleRow = ({ title, date, hits, nid }) => {
  const navigation = useNavigation();
  const viewArticle = () => {
    if (nid !== null) {
      navigation.navigate("singleArticle", {
        node: nid,
      });
    } else {
      alert("sorry");
    }
  };

  return (
    <TouchableOpacity onPress={() => viewArticle()}>
      <View style={GlobalStyles.articleRow}>
        <View style={GlobalStyles.datebox}>
          <Text style={GlobalStyles.featuredDate}>{DateFormatShort(date)}</Text>
        </View>
        <View style={GlobalStyles.titleContainer}>
          <Text style={GlobalStyles.articleTitle}>{title}</Text>
          <Text
            style={{
              color: colors.secondary,
              fontSize: 12,
              fontFamily: "nunito-regular",
              marginVertical: 10,
            }}
          >
            {hits} {i18n.t("hits")}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ArticleRow;
