import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import HomeNavigator from "./HomeNavigator";
import HomeBottomNavigator from "./HomeBottomNavigator";
import { ActivityIndicator } from "react-native";

const IndexAppNavContainer = () => {
  const isLoggedIn = false;
  const [isLoading, setLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(true);

  return (
    <NavigationContainer>
      {isLoggedIn ? <HomeBottomNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default IndexAppNavContainer;
