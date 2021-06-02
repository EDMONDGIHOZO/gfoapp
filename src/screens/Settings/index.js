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
          }}
        >
          Useful Infomations
        </Text>
        <View style={{ margin: 10 }}>
          <Useful
            title={"About"}
            iconName={"information"}
            link="https://google.com"
          />
          <Useful
            title={"Subscribe"}
            iconName={"email-newsletter"}
            link="https://google.com"
          />
          <Useful
            title={"Feedback"}
            iconName={"email-newsletter"}
            link="https://google.com"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
