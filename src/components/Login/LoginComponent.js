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
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

import colors from "../../assets/theme/colors";
import Input from "./../Input/index";
import CustomButton from "./../CustomButton/index";
import { NavigationContainer } from "@react-navigation/native";

import { useNavigation } from "@react-navigation/core";
import { FORGOT_PASSWORD, REGISTER } from "./../../constants/routeNames";
import { color } from "react-native-reanimated";

const LoginComponent = () => {
  const { navigate } = useNavigation();
  const [data, setData] = React.useState({
    email: "",
    password: "",
    secureTextEntry: true,
  });

  const textInputChange = (value) => {
    if (value.length != 0) {
      setData({
        ...data,
        email: value,
      });
    } else {
      setData({
        ...data,
        email: value,
      });
    }
  };

  const handlePasswordChange = (value) => {
    setData({
      ...data,
      password: value,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.PRIMARY} barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Input
          label="Email"
          onChangeText={(value) => textInputChange(value)}
          iconPosition="right"
          placeholder="Enter Email"
        />
        <Input
          label="Password"
          icon={
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color={colors.PRIMARY} size={20} />
              )}
            </TouchableOpacity>
          }
          secureTextEntry={data.secureTextEntry ? true : false}
          placeholder="Enter Password"
          onChangeText={(value) => handlePasswordChange(value)}
          iconPosition="right"
        />
        <CustomButton primary title="Sign In" />

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>You dont have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigate(REGISTER);
            }}
          >
            <Text style={styles.register_text}>Please Register</Text>
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
export default LoginComponent;

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
