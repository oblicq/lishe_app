import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet, Image } from "react-native";
import CustomButton from "../CustomButton/index";
import Input from "../Input/index";
import Container from "../common/container/index";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import { REGISTER } from "../../constants/routeNames";

function ForgotPass() {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Image
        style={styles.logoImage}
        height={70}
        width={70}
        source={require("../../assets/images/logo.png")}
      ></Image>

      <View style={styles.bottomWrapper}>
        <View style={styles.form}>
          <Input label="Email" iconPosition="right" placeholder="Enter email" />
        </View>
        <CustomButton primary title="Submit" />
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
      </View>
    </Container>
  );
}

export default ForgotPass;
