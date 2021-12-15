import React from "react";
import { Text, View } from "react-native";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import AntDesign from "react-native-vector-icons/AntDesign";

import {
  HOME,
  CONSULT,
  CLASSES,
  PROFILE,
  AGENTS,
} from "./../constants/routeNames";
import Home from "../screens/Home";
import ConsultScreen from "../screens/Consult/ConsultScreen";
import Classes from "../screens/Classes";

import UserProfileScreen from "./../screens/Profile/UserProfileScreen";
import colors from "../assets/theme/colors";
import Agents from "./../screens/Agents/Agents";

const HomeBottomNavigator = () => {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName={HOME}
      activeColor={colors.PRIMARY}
      inactiveColor={colors.GREY}
      screenOptions={{ headerShown: false }}
      barStyle={{
        backgroundColor: colors.WHITE,
        borderWidth: 1,
        borderColor: colors.BACKGROUND,
        borderRadius: 20,
      }}
    >
      <Tab.Screen
        name={HOME}
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" color={colors.GREY} size={24} />
          ),
        }}
      />

      <Tab.Screen
        name={CONSULT}
        component={ConsultScreen}
        options={{
          tabBarLabel: "Consult",
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" color={colors.GREY} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name={AGENTS}
        component={Agents}
        options={{
          tabBarLabel: "Agents",
          tabBarIcon: ({ color }) => (
            <AntDesign name="solution1" color={colors.GREY} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name={PROFILE}
        component={UserProfileScreen}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" color={colors.GREY} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default HomeBottomNavigator;
