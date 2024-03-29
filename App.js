import React, { useState, useEffect } from "react";
import BottomNav from "./src/routes/BottomNav";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import axios from "axios";
import db from "./src/http/db";

// http configuration
axios.defaults.baseURL = "https://webapi.aidspan.org/api/v1";
axios.defaults.timeout = 20000;
// end of http

const App = () => {
  useEffect(() => {
    createTable();
    return () => {};
  }, []);

  const createTable = async () => {
    await db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists issuebookmarks (id integer primary key not null unique, title text, date text , nid integer , type text);"
      );
    });
    console.log("table created");
  };

  let [fontsLoaded] = useFonts({
    "nunito-regular": require("./assets/fonts/NunitoSans-Regular.ttf"),
    "nunito-light": require("./assets/fonts/NunitoSans-Light.ttf"),
    "nunito-bold": require("./assets/fonts/NunitoSans-Bold.ttf"),
    "nunito-extra-bold": require("./assets/fonts/NunitoSans-ExtraBold.ttf"),
  });

  // check default language

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <BottomNav />
      </NavigationContainer>
    );
  }
};

export default App;
