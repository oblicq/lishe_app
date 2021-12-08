import React from "react";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { HOME, CONSULT, CLASSES, PROFILE } from "./../constants/routeNames";
import Home from "../screens/Home";
import Consult from "../screens/Consult";
import Classes from "../screens/Classes";

import UserProfileScreen from "./../screens/Profile/UserProfileScreen";
import colors from "../assets/theme/colors";

const HomeBottomNavigator = () => {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName={HOME}
      activeColor={colors.PRIMARY}
      screenOptions={{ headerShown: false }}
      barStyle={{ backgroundColor: colors.WHITE }}
    >
      <Tab.Screen
        name={HOME}
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={colors.PRIMARY}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name={CONSULT}
        component={Consult}
        options={{
          tabBarLabel: "Classes",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={colors.PRIMARY}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name={CLASSES}
        component={Classes}
        options={{
          tabBarLabel: "Consult",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={colors.PRIMARY}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name={PROFILE}
        component={UserProfileScreen}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="user" color={colors.PRIMARY} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default HomeBottomNavigator;
