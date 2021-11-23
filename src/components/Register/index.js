import React from "react";
import { Text, View, TextInput, StyleSheet, Image } from "react-native";
import CustomButton from "../CustomButton/index";
import Input from "../Input/index";
import Container from "../common/container/index";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import { LOGIN } from "../../constants/routeNames";

function RegisterComponent() {
  const { navigate } = useNavigation();
  return (
    <Container>
      <Image
        style={styles.logoImage}
        height={70}
        width={70}
        source={require("../../assets/images/logo.png")}
      ></Image>
      <View>
        <Text style={styles.title}>Welcome to Lishenaloy App</Text>
        <Text style={styles.subTitle}>Create a free account</Text>
      </View>

      <View style={styles.bottomWrapper}>
        <View style={styles.form}>
          <Input
            iconPosition="right"
            label="First name"
            placeholder="Enter first name"
          />
          <Input
            iconPosition="right"
            label="First name"
            placeholder="Enter last name"
          />
          <Input iconPosition="right" placeholder="Enter email address" />
          <Input
            icon={<Text>Show</Text>}
            secureTextEntry={true}
            placeholder="Enter Password"
            iconPosition="right"
          />
          <Input
            icon={<Text>Show</Text>}
            secureTextEntry={true}
            placeholder="Repeat Password"
            iconPosition="right"
          />
        </View>
        <CustomButton primary title="Register" />
        <View style={styles.createSection}>
          <Text style={styles.infoText}>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigate(LOGIN);
            }}
          >
            <Text style={styles.linkButton}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
}

export default RegisterComponent;
