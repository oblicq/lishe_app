import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet, Image } from "react-native";
import CustomButton from "../CustomButton/index";
import Input from "../Input/index";
import Container from "../common/container/index";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import { FORGOT_PASSWORD, REGISTER } from "./../../constants/routeNames";

function HomeMain() {
  const { navigate } = useNavigation();

  return (
    <Container>
      <View style={styles.headerWrapper}></View>
      <View style={styles.contentWrapper}>
        <View>
          <Text style={styles.welcomeMessage}>Welcome John</Text>
        </View>
        <Input iconPosition="right" placeholder="Search" />
        <View style={styles.bellowSearchView}>
          <Text style={styles.welcomeMessage}> John</Text>
          <Text style={styles.welcomeMessage}>Welcome John</Text>
        </View>

        <View style={styles.bottomWrapper}>
          <View style={styles.form}></View>
          <CustomButton primary title="Login" />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a new account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(REGISTER);
              }}
            >
              <Text style={styles.linkButton}>Please Register</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.forgotPassSection}>
            <TouchableOpacity
              onPress={() => {
                navigate(FORGOT_PASSWORD);
              }}
            >
              <Text style={styles.linkButton}>Forgot Password</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
}

export default HomeMain;
