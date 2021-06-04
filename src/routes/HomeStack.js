import React from "react";
import Settings from "../screens/Settings";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import SingleIssue from "../screens/SingleIssue";
import { BlurView } from "expo-blur";
import StyleSheet from "react-native";
import colors from "../shared/colors";

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
        name="More"
        component={Settings}
        options={{
          headerStyle: {
            backgroundColor: colors.main,
            elevation: 0,
          },

          headerTitleStyle: {
            fontFamily: "nunito-bold",
            color: "#fff",
            display: "none",
          },
          headerBackTitleStyle: {
            display: "none",
          },
        }}
      />

      <Screen
        name="singleIssue"
        component={SingleIssue}
        options={({ route }) => ({
          title: route.params.issueTitle,
          headerStyle: {
            backgroundColor: colors.main,
          },
          headerTitleStyle: {
            fontFamily: "nunito-light",
            textTransform: "uppercase",
            color: "#fff",
          },
          headerTintColor: "#fff",
        })}
      />
    </Navigator>
  );
};

export default HomeStack;
