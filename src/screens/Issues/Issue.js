import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Share, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import GlobalStyles from "../../shared/GlobalStyles";
import Styles from "./styles";
import i18n from "../../i18n";
import moment from "moment";
import "moment/locale/fr";
import db from "../../http/db";
let lang = i18n.locale;
moment.locale(lang);

import { DateFormat } from "../../shared/DateFormat";

const Issue = ({ title, date, nid, type }) => {
  const navigation = useNavigation();
  // save the bookmark to db
  const setData = async () => {
    console.log("starting to save");
    if (title.length == 0 || date.length == 0 || nid.length == 0) {
      Alert("Warning!", "we got nothing to save");
    } else {
      try {
        await db.transaction(async (tx) => {
          await tx.executeSql(
            "INSERT INTO issuebookmarks (id,title, nid, type, date) VALUES (?,?, ?,?,?)",
            [nid, title, nid, type, date]
          );
        });
        alert("bookmark saved!");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: ` title: ${title} -  link: https://aidspan.org/issues/${nid} - download the app : https://playstore.com/aidspanapp`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={Styles.articleContainer}>
      <View style={Styles.article}>
        <Text
          style={{
            fontFamily: "nunito-bold",
            fontSize: 24,
            marginBottom: 20,
            textTransform: "uppercase",
            color: title.includes("Special") ? "#f46517" : "#000",
          }}
        >
          {title}
        </Text>
        <Text style={Styles.date}>{DateFormat(date)}</Text>
      </View>
      <View style={GlobalStyles.iconsContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("singleIssue", {
              issueId: nid,
              issueTitle: title,
            })
          }
        >
          <MaterialIcons
            name="open-in-new"
            size={24}
            color="black"
            style={{
              marginRight: 2,
              marginLeft: 2,
              padding: 2,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={setData}>
          <MaterialIcons name="bookmark" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity>
          <MaterialIcons
            name="share"
            onPress={onShare}
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Issue;
