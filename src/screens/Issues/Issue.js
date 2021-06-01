import React, { useState } from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import GlobalStyles from "../../shared/GlobalStyles";
import Styles from "./styles";

import moment from "moment";
import "moment/locale/fr";
moment.locale("en");

const Issue = ({ title, date, nid }) => {
  const issueDate = moment.unix(date).format("MMMM D, YYYY");

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
          {title.length > 15 ? title.substring(0, 10, -3) + "..." : title}
        </Text>
        <Text style={Styles.date}>{issueDate}</Text>
      </View>
      <View style={GlobalStyles.iconsContainer}>
        <TouchableOpacity>
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
        <TouchableOpacity>
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
