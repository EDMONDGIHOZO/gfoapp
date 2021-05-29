import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Issues from "../screens/Issues";
import Favorites from "../screens/Favorites";
import Search from "../screens/Search";
import GlobalStyles from "../shared/GlobalStyles";
import NavTab from "../components/NavTab";

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
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <NavTab focus={focused} name={"Home"} iconName="home" />
          ),
        }}
      />
      <Screen
        name="issues"
        options={{
          tabBarIcon: ({ focused }) => (
            <NavTab focus={focused} name={"issues"} iconName="menu-book" />
          ),
        }}
        component={Issues}
      />

      <Screen
        name="favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ focused }) => (
            <NavTab focus={focused} name={"bookmarks"} iconName="bookmark" />
          ),
        }}
      />
      <Screen
        name="search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <NavTab focus={focused} name={"search"} iconName="search" />
          ),
        }}
      />
    </Navigator>
  );
};

export default BottomNav;
