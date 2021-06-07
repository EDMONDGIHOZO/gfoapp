import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  SafeAreaView,
  ScrollView,
  CheckBox,
} from "react-native";
import i18n from "../../i18n";
import GlobalStyles from "../../shared/GlobalStyles";
import Useful from "./Useful";

const Settings = () => {
  return (
    <SafeAreaView style={GlobalStyles.container}>
      <ScrollView style={GlobalStyles.safeScrollable}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "nunito-bold",
            margin: 10,
            textAlign: "center",
            textTransform: "capitalize",
          }}
        >
          {i18n.t("useful")}
        </Text>
        <View style={{ margin: 10 }}>
          <Useful
            title={"About"}
            iconName={"info"}
            link="https://aidspan.org/en/c/about-us"
          />
          <Useful
            title={"Subscribe"}
            iconName={"email"}
            link="https://aidspan.org/en/c/subscribe"
          />
          <Useful
            title={"Visit web"}
            iconName={"feedback"}
            link="https://aidspan.org"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
