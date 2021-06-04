import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import GlobalStyles from "../../shared/GlobalStyles";
import colors from "../../shared/colors";
import BIcon from "./buttonWithIcon";
import { DateFormat } from "../../shared/DateFormat";
import db from "../../http/db";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Card = ({ title, date, nid, type, updateData }) => {
  const navigation = useNavigation();

  const removebookmark = () => {
    try {
      db.transaction((tx) => {
        tx.executeSql(`delete from issuebookmarks where nid = ?;`, [nid]);
        console.log("removed");
      }, updateData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={GlobalStyles.card}>
      <View style={GlobalStyles.cardTitleContainer}>
        <Text style={GlobalStyles.cardtitle}>{type}</Text>

        <TouchableOpacity onPress={() => removebookmark()}>
          <MaterialIcons
            name="delete-forever"
            size={24}
            color={colors.secondary}
          />
        </TouchableOpacity>
      </View>
      <Text style={GlobalStyles.cardText}>{title}</Text>
      <View style={GlobalStyles.cardFooter}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(
              type === "issue" ? "singleIssue" : "singleArticle",
              {
                issueId: nid,
                issueTitle: title,
              }
            )
          }
        >
          <BIcon
            title={"Read"}
            color={colors.secondary}
            iconName={"chrome-reader-mode"}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 14,
            color: colors.main,
            fontFamily: "nunito-bold",
          }}
        >
          {DateFormat(date)}
        </Text>
      </View>
    </View>
  );
};

export default Card;