import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import HomeNavigator from "./HomeNavigator";
import HomeBottomNavigator from "./HomeBottomNavigator";
import { ActivityIndicator, View } from "react-native";
import { AuthContext } from "../context/context";

const IndexAppNavContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userToken, setUserToken] = useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);

        setUserToken("hhh");
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken("hhh");
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      },
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  //function to sign in a user

  //use effect will be used to fetch data from API

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#D31A6B" />
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken != null ? <HomeNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default IndexAppNavContainer;
