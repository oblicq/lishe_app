import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet, Image } from "react-native";

import Input from "../Input/index";
import Container from "../common/container/index";
import ClassCard from "../common/classcard/ClassCard";
import styles from "./styles";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import { FORGOT_PASSWORD, REGISTER } from "./../../constants/routeNames";

// import search icon
import { EvilIcons } from "@expo/vector-icons";
import colors from "../../assets/theme/colors";

function HomeMain() {
  const { navigate } = useNavigation();

  return (
    <Container>
      <View style={styles.headerWrapper}></View>
      <View style={styles.contentWrapper}>
        <View>
          <Text style={styles.welcomeMessage}>Welcome John ..</Text>
        </View>
        <Input
          iconPosition="right"
          placeholder="Search"
          icon={<EvilIcons name="search" size={24} color={colors.ACCENT} />}
        />
        <View style={styles.scrollCard}></View>
        <View style={styles.contentContainer}>
          <View style={styles.contentHeaderWrapper}>
            <Text style={styles.contentHeaderLeft}>Classes</Text>
            <TouchableOpacity>
              <Text style={styles.contentHeaderRight}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cardWrapper}>
            <ClassCard />
            <ClassCard />
            <ClassCard />
          </View>
        </View>
      </View>
    </Container>
  );
}

export default HomeMain;
