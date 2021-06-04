import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Issues from "../screens/Issues";
import SingleIssue from "../screens/SingleIssue";
import colors from "../shared/colors";
const { Navigator, Screen } = createStackNavigator();

const IssueStack = () => {
  return (
    <Navigator headerMode={"screen"}>
      <Screen
        name="issues"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <NavTab
              focus={focused}
              name={i18n.t("navIssues")}
              iconName="menu-book"
            />
          ),
        }}
        component={Issues}
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

export default IssueStack;
