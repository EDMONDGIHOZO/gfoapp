import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Issues from "../screens/Issues";
import Favorites from "../screens/Favorites";
import Search from "../screens/Search";
import GlobalStyles from "../shared/GlobalStyles";
import NavTab from "../components/NavTab";
import HomeStack from "./HomeStack";
import i18n from "../i18n";

const { Navigator, Screen } = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Navigator
      initialRouteName="home"
      tabBarOptions={{
        showLabel: false,
        style: GlobalStyles.bnavigation,
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
        component={Issues}
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
