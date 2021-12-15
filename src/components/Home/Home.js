import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from "react-native";

import AntDesign from "react-native-vector-icons/AntDesign";

import { useNavigation } from "@react-navigation/core";
import {
  FORGOT_PASSWORD,
  REGISTER,
  PRODUCT_DETAILS,
  ALL_PRODUCT_SCREEN,
  ALL_CLASSES,
} from "./../../constants/routeNames";

import colors from "../../assets/theme/colors";

import { dummyData } from "../../api/Data";
import Carousel from "./../carousel/Carousel";

import ProductCard from "../productCard/ProductCard";
import ClassCard from "../classCard/ClassCard";
import HomeSeparator from "./../common/HomeSeparator";
import SearchTextInput from "./../common/SearchTextInput";

function HomeMain() {
  const { navigate } = useNavigation();

  //data to populate product flatlist
  const data = [
    {
      productName: "TotoMix2",
      price: "Tsh 8000",
      productDesc: "This is good product for kids vsdbsdh ihsndhbsdb",
      imageUri:
        "https://i.ibb.co/JxykVBt/flat-lay-photography-of-vegetable-salad-on-plate-1640777.jpg",
      id: 2,
    },

    {
      productName: "TotoMix",
      price: "Tsh 8000",
      productDesc: "This is good product for kids",
      imageUri:
        "https://i.ibb.co/JxykVBt/flat-lay-photography-of-vegetable-salad-on-plate-1640777.jpg",
      id: 3,
    },

    {
      productName: "TotoMix",
      price: "Tsh 9000",
      productDesc: "This is good product for kids",
      imageUri:
        "https://i.ibb.co/JxykVBt/flat-lay-photography-of-vegetable-salad-on-plate-1640777.jpg",
      id: 4,
    },
    {
      productName: "TotoMix",
      price: "Tsh 9000",
      productDesc: "This is good product for kids",
      imageUri:
        "https://i.ibb.co/JxykVBt/flat-lay-photography-of-vegetable-salad-on-plate-1640777.jpg",
      id: 5,
    },
    {
      productName: "TotoMix",
      price: "Tsh 9000",
      productDesc: "This is good product for kids",
      imageUri:
        "https://i.ibb.co/JxykVBt/flat-lay-photography-of-vegetable-salad-on-plate-1640777.jpg",
      id: 6,
    },
  ];
  const classData = [
    {
      className: "Lishe kwa Watoto ",
      classPrice: "Tsh 20,000",
      description: "Darasa la lishe ya w ",
      imageUri:
        "https://i.ibb.co/JxykVBt/flat-lay-photography-of-vegetable-salad-on-plate-1640777.jpg",
      startDate: "11/12/2022",
      endDate: "21/12/2022",
      id: 15635,
    },
    {
      className: "Lishe kwa Watoto ",
      classPrice: "Tsh 20,000",
      description: "Darasa la lishe ya watoto  ",
      imageUri:
        "https://i.ibb.co/JxykVBt/flat-lay-photography-of-vegetable-salad-on-plate-1640777.jpg",
      startDate: "11/12/2022",
      endDate: "21/12/2022",
      id: 635,
    },
    {
      className: "Lishe kwa Watoto ",
      classPrice: "Tsh 20,000",
      description: "Darasa la lishe ya watoto  ",
      imageUri:
        "https://i.ibb.co/JxykVBt/flat-lay-photography-of-vegetable-salad-on-plate-1640777.jpg",
      startDate: "11/12/2022",
      endDate: "21/12/2022",
      id: 6357,
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={colors.PRIMARY} barStyle="light-content" />
      <View style={styles.topContainer}>
        <View style={styles.greetingsContainer}>
          <View>
            <Text style={styles.userText}>Hi, Glory</Text>
            <Text style={styles.greetingText}>How are you feeling today?</Text>
          </View>
          {/* View for shopping c art icon */}
          <TouchableOpacity>
            <View style={styles.iconContainer}>
              <AntDesign name="shoppingcart" color={colors.GREY} size={26} />
            </View>
          </TouchableOpacity>
        </View>

        {/* -------------- START OF CAROUSEL VIEW */}
        <View>{/* <Carousel data={dummyData} /> */}</View>
        {/* Home search textInput component */}

        <SearchTextInput placeholder="Search FAQs" />
        {/* Home search textInput component */}
      </View>

      <ScrollView>
        <HomeSeparator
          GroupName="Products"
          ViewAll="View all"
          onPress={() => {
            navigate(ALL_PRODUCT_SCREEN);
          }}
        />

        {/* PRODUCT CARDS */}

        <FlatList
          data={data}
          horizontal={true}
          style={{ marginLeft: 10 }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <ProductCard
              productName={item.productName}
              price={item.price}
              productDesc={item.productDesc}
              imageUri="https://i.ibb.co/JxykVBt/flat-lay-photography-of-vegetable-salad-on-plate-1640777.jpg"
              onPress={() => {
                navigate(PRODUCT_DETAILS);
              }}
            />
          )}
        />

        {/* CLASSES */}
        <HomeSeparator
          GroupName="Classes"
          ViewAll="View all"
          onPress={() => {
            navigate(ALL_CLASSES);
          }}
        />

        <FlatList
          style={{ flex: 2 }}
          data={classData}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <ClassCard
              className={item.className}
              classPrice={item.classPrice}
              description={item.description}
              imageUri="https://i.ibb.co/JxykVBt/flat-lay-photography-of-vegetable-salad-on-plate-1640777.jpg"
              startDate={item.startDate}
              endDate={item.endDate}
            />
          )}
        />
        <HomeSeparator
          GroupName="My Classes"
          ViewAll="View all"
          onPress={() => {
            navigate(FORGOT_PASSWORD);
          }}
        />

        <FlatList
          style={{ flex: 2 }}
          data={classData}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <ClassCard
              className={item.className}
              classPrice={item.classPrice}
              description={item.description}
              imageUri="https://i.ibb.co/JxykVBt/flat-lay-photography-of-vegetable-salad-on-plate-1640777.jpg"
              startDate={item.startDate}
              endDate={item.endDate}
            />
          )}
        />
      </ScrollView>
    </View>
  );
}

export default HomeMain;

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 20,
    justifyContent: "space-between",
    backgroundColor: colors.BACKGROUND,
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
    backgroundColor: colors.WHITE,
    borderColor: colors.WHITE,
  },
  greetingsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  topContainer: {
    paddingHorizontal: 20,
    borderBottomWidth: 1,

    borderColor: colors.BACKGROUND,
  },
  searchView: {
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 5,
    justifyContent: "space-between",
    borderWidth: 1,
    backgroundColor: colors.WHITE,

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
