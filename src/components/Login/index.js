import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Image,
  ImageBackground,
  StatusBar,
} from "react-native";
import CustomButton from "../CustomButton/index";
import Input from "../Input/index";
import styles from "./styles";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import { FORGOT_PASSWORD, REGISTER } from "./../../constants/routeNames";

import authUIText from "../../constants/authUIText";
import colors from "../../assets/theme/colors";

function Login() {
  const { navigate } = useNavigation();

  return (
    <View style={styles.mainWrapper}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.SUCCESS} />
      <View style={styles.backgroundImageContainer}>
        <Text style={styles.welcomeText}>{authUIText.WELCOME_MESSAGE}</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.bottomWrapper}>
          <View style={styles.form}>
            <Input
              label={authUIText.EMAIL}
              iconPosition="right"
              placeholder={authUIText.EMAIL_PLACEHOLDER}
            />
            <Input
              label={authUIText.PASSWORD}
              icon={<Text>Show</Text>}
              secureTextEntry={true}
              placeholder={authUIText.PASSWORD_PLACEHOLDER}
              iconPosition="right"
            />
          </View>
          <CustomButton primary title={authUIText.LOGIN_BUTTON_LABEL} />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>{authUIText.REGISTER_LINK}</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(REGISTER);
              }}
            >
              <Text style={styles.linkButton}>{authUIText.REGISTER_LINK}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.forgotPassSection}>
            <TouchableOpacity
              onPress={() => {
                navigate(FORGOT_PASSWORD);
              }}
            >
              <Text style={styles.linkButton}>
                {authUIText.FORGOT_PASSWORD_LINK}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Login;
