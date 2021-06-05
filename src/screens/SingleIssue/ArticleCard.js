import React, { useState } from "react";
import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import GlobalStyles from "../../shared/GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import colors from "../../shared/colors";
import HTML from "react-native-render-html";
import BIcon from "../../components/tools/buttonWithIcon";
import { Bookmarker } from "../../shared/Bookmarker";

const ArticleCard = ({ title, number, author, abstract, nid, date }) => {
  const navigation = useNavigation();
  const contentWidth = useWindowDimensions().width;

  const [readlater, setReadlater] = useState({
    color: colors.accent,
    icon: "watch-later",
    title: "Read Later",
  });

  const bookmark = () => {
    Bookmarker(title, date, nid, "Article");
    setReadlater({ color: "#66cd00", icon: "done", title: "saved" });
    console.log("saved");
  };

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
          <Text
            style={{
              fontFamily: "nunito-bold",
              maxWidth: "70%",
              color: colors.accent,
            }}
          >
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
      <View style={GlobalStyles.cardFooter}>
        <TouchableOpacity
          onPress={() => navigation.navigate("singleArticle", { node: nid })}
        >
          <BIcon
            title={"Read Now"}
            color={colors.main}
            iconName={"read-more"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => bookmark()}>
          <BIcon
            title={readlater.title}
            color={readlater.color}
            iconName={readlater.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ArticleCard;
