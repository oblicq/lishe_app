import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FORGOT_PASSWORD, LOGIN, REGISTER } from "../constants/routeNames";
import Login from "./../screens/Login/index";
import SignUp from "./../screens/SignUp/index";
import ForgotPasswordScreen from "../screens/ForgotPassword/index";

const AuthNavigator = () => {
  const AuthStack = createNativeStackNavigator();
  return (
    <AuthStack.Navigator
      initialRouteName={Login}
      screenOptions={{ headerShown: false }}
    >
      <AuthStack.Screen name={LOGIN} component={Login} />
      <AuthStack.Screen name={REGISTER} component={SignUp} />
      <AuthStack.Screen
        name={FORGOT_PASSWORD}
        component={ForgotPasswordScreen}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
