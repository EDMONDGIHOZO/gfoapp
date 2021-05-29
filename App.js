import React, { useState } from "react";
import BottomNav from "./src/routes/BottomNav";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

const App = () => {
  let [fontsLoaded] = useFonts({
    "nunito-regular": require("./assets/fonts/NunitoSans-Regular.ttf"),
    "nunito-light": require("./assets/fonts/NunitoSans-Light.ttf"),
    "nunito-bold": require("./assets/fonts/NunitoSans-Bold.ttf"),
  });

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
