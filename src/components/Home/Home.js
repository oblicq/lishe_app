import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Image,
  StatusBar,
} from "react-native";

import AntDesign from "react-native-vector-icons/AntDesign";

import Input from "../Input/index";
import Container from "../common/container/index";

import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import { FORGOT_PASSWORD, REGISTER } from "./../../constants/routeNames";

import colors from "../../assets/theme/colors";

import { dummyData } from "../../api/Data";
import Carousel from "./../carousel/Carousel";
import { color } from "react-native-reanimated";
import ProductCard from "../productCard/ProductCard";

function HomeMain() {
  const { navigate } = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={colors.PRIMARY} barStyle="light-content" />
      <View style={styles.greetingsContainer}>
        <View>
          <Text style={styles.userText}>Hi, Glory</Text>
          <Text style={styles.greetingText}>How are you feeling today?</Text>
        </View>
        {/* View for shopping c art icon */}
        <TouchableOpacity>
          <View style={styles.iconContainer}>
            <AntDesign name="shoppingcart" color={colors.PRIMARY} size={26} />
          </View>
        </TouchableOpacity>
      </View>
      {/* -------------- START OF CAROUSEL VIEW */}
      <View>{/* <Carousel data={dummyData} /> */}</View>
      <View style={styles.searchView}>
        <View style={styles.textInputContainer}>
          <TextInput placeholder="Search FAQs" />
        </View>
        <View style={{ paddingRight: 10 }}>
          <AntDesign name="search1" color={colors.PRIMARY} size={20} />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 15,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>Product</Text>
        <TouchableOpacity>
          <Text style={{ color: colors.PRIMARY }}>View all</Text>
        </TouchableOpacity>
      </View>
      {/* PRODUCT CARDS */}
      <View style={{ width: "100%" }}>
        <ProductCard
          productName="TotoMix"
          price="Tsh 8000"
          productDesc="TotoMix Description"
          imageUri="https://i.ibb.co/JxykVBt/flat-lay-photography-of-vegetable-salad-on-plate-1640777.jpg"
        />
      </View>

      {/* CLASSES */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 15,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>Classes</Text>
        <TouchableOpacity>
          <Text style={{ color: colors.PRIMARY }}>View all</Text>
        </TouchableOpacity>
      </View>
      <View></View>
    </View>
  );
}

export default HomeMain;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    justifyContent: "space-between",
    backgroundColor: colors.WHITE,
  },
  userText: { fontWeight: "bold", fontSize: 18 },
  greetingText: { color: colors.GREY },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 36,
    height: 36,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.BACKGROUND,
  },
  greetingsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchView: {
    marginTop: 10,
    paddingLeft: 5,
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: colors.BACKGROUND,
    flexDirection: "row",
    height: 40,
    borderRadius: 10,
    alignItems: "center",
  },
  textInputContainer: {
    flex: 1,
  },
  productInfoContainer: {
    justifyContent: "space-between",
    width: "50%",
    backgroundColor: colors.BACKGROUND,
    padding: 5,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
});
