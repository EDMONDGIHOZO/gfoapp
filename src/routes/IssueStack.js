import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../shared/colors";
import Article from "../screens/Article";
import Issues from "../screens/Issues";
import SingleIssue from "../screens/SingleIssue";

const { Navigator, Screen } = createStackNavigator();

const IssueStack = () => {
  return (
    <Navigator headerMode={"screen"} initialRouteName={"Issues"}>
      <Screen
        name="Issues"
        component={Issues}
        options={{
          headerShown: false,
        }}
      />

      <Screen
        name="singleIssue"
        component={SingleIssue}
        options={({ route }) => ({
          title: route.params.title,
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
      <Screen
        name="singleArticle"
        component={Article}
        options={{
          headerTitle: false,
          headerBackTitle: false,
        }}
      />
    </Navigator>
  );
};

export default IssueStack;
