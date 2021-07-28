import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import Favorites from "../screens/Favorites";
import Search from "../screens/Search";
import GlobalStyles from "../shared/GlobalStyles";
import NavTab from "../components/NavTab";
import HomeStack from "./HomeStack";
import IssueStack from "./IssueStack";
import i18n from "../i18n";
import expoPushTokens from "../http/expoPushTokens";

const { Navigator, Screen } = createBottomTabNavigator();

// impliment push notifications
const registerForPushNotifications = async () => {
  try {
    const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if (!permission.granted) return;
    const token = await Notifications.getExpoPushTokenAsync();
    console.log(token);
  } catch (error) {
    console.log("Error getting a token", error);
  }
};

useEffect(() => {
  registerForPushNotifications();
}, []);

const BottomNav = () => {
  return (
    <Navigator
      initialRouteName="home"
      tabBarOptions={{
        showLabel: false,
        style: GlobalStyles.bnavigation,
        keyboardHidesTabBar: true,
      }}
    >
      <Screen
        name="home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <NavTab focus={focused} name={i18n.t("navHome")} iconName="home" />
          ),
        }}
      />
      <Screen
        name="issues"
        options={{
          tabBarIcon: ({ focused }) => (
            <NavTab
              focus={focused}
              name={i18n.t("navIssues")}
              iconName="menu-book"
            />
          ),
        }}
        component={IssueStack}
      />

      <Screen
        name="favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ focused }) => (
            <NavTab
              focus={focused}
              name={i18n.t("navbookmarks")}
              iconName="bookmark"
            />
          ),
        }}
      />
      <Screen
        name="search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <NavTab
              focus={focused}
              name={i18n.t("navSearch")}
              iconName="search"
            />
          ),
        }}
      />
    </Navigator>
  );
};

export default BottomNav;
