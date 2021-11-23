import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HOME, CONSULT, CLASSES, PROFILE } from "./../constants/routeNames";
import Home from "../screens/Home";
import Consult from "../screens/Home";
import Classes from "../screens/Classes";
import Profile from "../screens/Profile";

const HomeBottomNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName={HOME}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name={HOME} component={Home} />
      <Tab.Screen name={CONSULT} component={Consult} />
      <Tab.Screen name={CLASSES} component={Classes} />
      <Tab.Screen name={PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};
export default HomeBottomNavigator;
