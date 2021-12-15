import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import colors from "../../assets/theme/colors";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { useNavigation } from "@react-navigation/core";
import ProductCardListAll from "../../components/productCard/ProductCardListAll";
import { ScrollView } from "react-native-gesture-handler";
import { HOME } from "../../constants/routeNames";
import ClassOverView from "../Classes/ClassOverView";
import ClassContent from "../Classes/ClassContents";
import QuestionAndAnswers from "../Classes/QuestionAndAnswers";

function ClassDetails() {
  const Tab = createMaterialTopTabNavigator();

  const { navigate } = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={colors.PRIMARY} barStyle="light-content" />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Image
          source={require("../../assets/images/loy.jpg")}
          style={{
            // flex: 0.1,
            height: 300,
            width: "95%",
            borderRadius: 20,
            marginHorizontal: 10,
            marginVertical: 10,
          }}
        ></Image>
        <View style={{ paddingLeft: 20, paddingBottom: 10 }}>
          <Text style={{ color: colors.BLACK, fontSize: 20 }}>Class Name</Text>
        </View>
        <Tab.Navigator>
          <Tab.Screen name="Overview" component={ClassOverView} />
          <Tab.Screen name="Content" component={ClassContent} />
          <Tab.Screen name="Q+A" component={QuestionAndAnswers} />
        </Tab.Navigator>
      </ScrollView>
    </View>
  );
}

export default ClassDetails;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.WHITE,
    // backgroundColor: "#d0f0c0",
  },
  headerContainer: {
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  tabHeaderContainer: {
    borderBottomWidth: 2,
    borderColor: colors.PRIMARY,
    backgroundColor: colors.PRIMARY,
    paddingHorizontal: 20,
  },

  productContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: colors.WHITE,
    width: "90%",
    height: 150,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.BACKGROUND,
  },
  pictureContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "40%",
    height: 150,
    backgroundColor: "#d0f0c0",
    borderWidth: 1,
    borderColor: "#d0f0c0",
    borderRadius: 20,
  },
  productInfoContainer: {
    paddingLeft: 10,
    paddingTop: 10,
    width: "60%",
    height: 150,
  },
  descriptionText2: {
    fontSize: 15,
    paddingHorizontal: 20,
    paddingTop: 10,
    color: colors.GREY,
  },
});
