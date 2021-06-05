import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Share, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import GlobalStyles from "../../shared/GlobalStyles";
import Styles from "./styles";
import i18n from "../../i18n";
import moment from "moment";
import "moment/locale/fr";
import { Bookmarker } from "../../shared/Bookmarker";
import { shareArticle } from "../../shared/ShareArticle";
let lang = i18n.locale;
moment.locale(lang);

import { DateFormat } from "../../shared/DateFormat";
import { Button, Snackbar } from "react-native-paper";

const Issue = ({ title, date, nid, type }) => {
  const [visibleSnack, setVisibleSnack] = React.useState(false);

  const onDismissSnackBar = () => setVisibleSnack(false);

  const navigation = useNavigation();
  // save the bookmark to db
  const setData = async () => {
    Bookmarker(title, date, nid, type);
    setVisibleSnack(!visibleSnack);
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
              node: nid,
              title: title,
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

        <TouchableOpacity onPress={() => shareArticle(nid, title)}>
          <MaterialIcons name="share" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Snackbar
        visible={visibleSnack}
        onDismiss={onDismissSnackBar}
        duration={1000}
      >
        Saved
      </Snackbar>
    </View>
  );
};

export default Issue;
