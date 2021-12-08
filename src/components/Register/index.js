import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Dimensions,
  Platform,
  StatusBar,
  Alert,
} from "react-native";
import * as Animatable from "react-native-animatable";
import Feather from "react-native-vector-icons/Feather";

import colors from "../../assets/theme/colors";
import Input from "./../Input/index";
import CustomButton from "./../CustomButton/index";
import { NavigationContainer } from "@react-navigation/native";
import client from "../../api/client";

import { useNavigation } from "@react-navigation/core";
import { FORGOT_PASSWORD, REGISTER, LOGIN } from "./../../constants/routeNames";

const RegisterComponent = () => {
  const { navigate } = useNavigation();

  const [userName, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const [confirm_secureTextEntry, setConfirm_secureTextEntry] =
    React.useState(true);

  //hooks to check Errors on text inputs
  const [userInputErr, setUserInputErr] = React.useState(false);

  //Object to hold error messages
  const [error, setError] = React.useState({
    userName: "Username must be provided",
    email: "Email must be provided",
    password: "Password must be provided",
    confirmPassword: "Confirm Password must be provided",
  });

  const registerUser = () => {
    client
      .post("/api/accounts", {
        username: "juma asda ",
        password: "password",
        email: "jumasas@gmail.com",
      })
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const userNameTextInputChange = (value) => {
    setUsername(value);
  };

  const emailTextInputChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleConfirmPasswordChange = (value) => {
    setConfirmPassword(value);
  };

  const updateSecureTextEntry = () => {
    setSecureTextEntry((secureTextEntry) => !secureTextEntry);
  };
  const updateConfirmSecureTextEntry = () => {
    setConfirm_secureTextEntry(
      (confirm_secureTextEntry) => !confirm_secureTextEntry
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.PRIMARY} barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Please Sign Up</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Input
          label="Full Name"
          onChangeText={(value) => userNameTextInputChange(value)}
          iconPosition="right"
          placeholder="Enter Full Name"
          // error={userInputErr}
        />
        <Input
          label="Email"
          onChangeText={(value) => emailTextInputChange(value)}
          iconPosition="right"
          placeholder="Enter Email"
          // error={error.email}
        />
        <Input
          label="Password"
          icon={
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color={colors.PRIMARY} size={20} />
              )}
            </TouchableOpacity>
          }
          secureTextEntry={secureTextEntry ? true : false}
          placeholder="Enter Password"
          onChangeText={(value) => handlePasswordChange(value)}
          iconPosition="right"
          // error={error.password}
        />
        <Input
          label="Confirm Password"
          icon={
            <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
              {confirm_secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color={colors.PRIMARY} size={20} />
              )}
            </TouchableOpacity>
          }
          secureTextEntry={confirm_secureTextEntry ? true : false}
          placeholder="Confirm Password"
          onChangeText={(value) => handleConfirmPasswordChange(value)}
          iconPosition="right"
          // error={error.confirmPassword}
        />
        <CustomButton primary title="Register Now" onPress={registerUser} />

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>You have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigate(LOGIN);
            }}
          >
            <Text style={styles.register_text}>Please Sign In</Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingTop: 10, alignSelf: "center" }}>
          <TouchableOpacity
            onPress={() => {
              navigate(FORGOT_PASSWORD);
            }}
          >
            <Text style={styles.register_text}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};
export default RegisterComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.PRIMARY,
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  register_text: {
    color: colors.PRIMARY,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
