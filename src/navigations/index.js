import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import HomeNavigator from "./HomeNavigator";
import HomeBottomNavigator from "./HomeBottomNavigator";

const IndexAppNavContainer = () => {
  const isLoggedIn = true;
  return (
    <NavigationContainer>
      {isLoggedIn ? <HomeBottomNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default IndexAppNavContainer;
