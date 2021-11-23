import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet, Image } from "react-native";
import CustomButton from "../CustomButton/index";
import Input from "../Input/index";
import Container from "../common/container/index";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import { FORGOT_PASSWORD, REGISTER } from "./../../constants/routeNames";

function LoginComponent() {
  const { navigate } = useNavigation();

  return (
    <Container>
      {/* Home header view */}
      <View style={styles.headerWrapper}></View>
      <Image
        style={styles.logoImage}
        height={70}
        width={70}
        source={require("../../assets/images/logo.png")}
      ></Image>

      <View>
        <Text style={styles.title}>Welcome to Lishenaloy App</Text>
        <Text style={styles.subTitle}>Please login here</Text>
      </View>

      <View style={styles.bottomWrapper}>
        <View style={styles.form}>
          <Input label="Email" iconPosition="right" placeholder="Enter email" />
          <Input
            label="Password"
            icon={<Text>Show</Text>}
            secureTextEntry={true}
            placeholder="Enter Password"
            iconPosition="right"
          />
        </View>
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
    </Container>
  );
}

export default LoginComponent;
