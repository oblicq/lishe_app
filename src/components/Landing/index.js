import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform,
  StatusBar,
  Alert,
  Image,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { LOGIN } from "./../../constants/routeNames";
import { useNavigation } from "@react-navigation/core";

import colors from "../../assets/theme/colors";
import { MaterialIcons } from "@expo/vector-icons";

const LandingScreenComponent = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.PRIMARY} barStyle="light-content" />
      <View style={styles.header}>
        <Animatable.Image
          animation="fadeIn"
          style={styles.logo}
          source={require("./logo.png")}
          resizeMode="stretch"
        ></Animatable.Image>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <View>
          <Text style={styles.title}>LISHE NA LOY</Text>
        </View>

        <View>
          <Text style={styles.text}>
            We are a Sustainable Nutrition Awareness and Counseling Company
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            paddingTop: 50,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigate(LOGIN);
            }}
          >
            <View
              style={{
                height: 50,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: colors.SECONDARY,
                width: 150,
                borderTopEndRadius: 30,
                borderTopLeftRadius: 30,
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
              }}
            >
              <Text style={styles.textSign}>Get Started</Text>
              <MaterialIcons name="navigate-next" color="#fff" size={20} />
            </View>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};
export default LandingScreenComponent;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.PRIMARY,
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: colors.WHITE,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: colors.PRIMARY,
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    color: "grey",
    fontSize: 17,
    marginTop: 5,
  },
  button: {
    alignItems: "flex-end",
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },
});
