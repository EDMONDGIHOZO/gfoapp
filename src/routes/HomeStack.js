import React from "react";
import Settings from "../screens/Settings";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";

const { Navigator, Screen } = createStackNavigator();

const HomeStack = () => {
  return (
    <Navigator headerMode={"screen"}>
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Settings"
        component={Settings}
        options={{
          headerStyle: {
            backgroundColor: "rgba(0,212,255,1) 100%)",
            elevation: 0,
          },
          headerTitleStyle: {
            fontFamily: "nunito-bold",
            color: "#fff",
          },
          headerBackTitleStyle: {
            color: "white",
          },
        }}
      />
    </Navigator>
  );
};

export default HomeStack;
