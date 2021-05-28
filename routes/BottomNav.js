import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Issues from "../screens/Issues";
import Favorites from "../screens/Favorites";
import GStyles from "../shared/Gstyle";
import { View, Text, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import NavTab from "../components/NavTab";

const { Navigator, Screen } = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Navigator
      initialRouteName="home"
      tabBarOptions={{
        showLabel: false,
        style: GStyles.bnavigation,
      }}
    >
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
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <NavTab focus={focused} name={"Home"} iconName="home" />
          ),
        }}
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
    </Navigator>
  );
};

export default BottomNav;
