import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GlobalStyles from "../../shared/GlobalStyles";

const Settings = () => {
  const [settings, setSettings] = useState("");

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("@storage_Key", value);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={GlobalStyles.contents}>
      <Text>Retrieved key</Text>
      <Button title={"settings"} onPress={() => storeData("settings work")} />
    </View>
  );
};

export default Settings;
