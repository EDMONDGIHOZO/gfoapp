import React from "react";
import { View, Text, useWindowDimensions } from "react-native";
import GlobalStyles from "../../shared/GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import colors from "../../shared/colors";
import HTML from "react-native-render-html";

const ArticleCard = ({ title, number, author, abstract }) => {
  const navigation = useNavigation();
  const contentWidth = useWindowDimensions().width;

  return (
    <View style={GlobalStyles.articlecard}>
      <View
        style={{
          flex: 1,
        }}
      >
        <View style={GlobalStyles.toprow}>
          <Text style={{ fontFamily: "nunito-bold", color: colors.accent }}>
            {number}
          </Text>
          <Text style={{ fontFamily: "nunito-light", maxWidth: "70%" }}>
            {author}
          </Text>
        </View>
        <Text style={{ fontFamily: "nunito-bold", fontSize: 20 }}>{title}</Text>
      </View>
      <View style={{ flex: 1, marginTop: 20 }}>
        <HTML
          tagsStyles={{
            p: { fontFamily: "nunito-regular", color: colors.accent },
          }}
          source={{ html: abstract }}
          contentWidth={contentWidth}
        />
      </View>
    </View>
  );
};

export default ArticleCard;
