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
import * as Updates from "expo-updates";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GlobalStyles from "../../shared/GlobalStyles";

import Choice from "./Choice";
import Useful from "./Useful";

const Settings = () => {
  const [enSelected, setEnglish] = useState(false);
  const [frSelected, setFrench] = useState(false);
  const [selected, setSelected] = useState("");

  const setLanguage = (short) => {
    storeData(short);
    if (short === "ofm") {
      setFrench(true);
      setEnglish(false);
    } else {
      setEnglish(true);
      setFrench(false);
    }
  };

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("language", value);
      setSelected(value);
    } catch (e) {
      // saving error
      console.log(e);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("language");
      if (value !== null) {
        setLanguage(value);
      } else {
        setLanguage("gfo");
      }
    } catch (e) {
      // error reading value
      console.log(e);
    }
  };

  const saveLanguage = () => {
    Updates.reloadAsync();
  };

  useEffect(() => {
    getData();
    return () => {};
  }, [selected]);

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <ScrollView style={GlobalStyles.safeScrollable}>
        <View style={GlobalStyles.card}>
          <Text style={GlobalStyles.cardTitle}>Newsletter Type</Text>
          <TouchableOpacity onPress={() => setLanguage("ofm")}>
            <Choice title={"OFM"} selected={frSelected} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setLanguage("gfo")}>
            <Choice title={"GFO"} selected={enSelected} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => saveLanguage()}>
            <View style={GlobalStyles.button}>
              <Text style={GlobalStyles.buttonText}>Save</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={GlobalStyles.card}>
          <Text style={GlobalStyles.cardTitle}>More</Text>
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
