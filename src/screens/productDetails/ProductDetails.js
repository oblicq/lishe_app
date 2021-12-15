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
import colors from "../../assets/theme/colors";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { useNavigation } from "@react-navigation/core";
import ProductCardListAll from "../../components/productCard/ProductCardListAll";
import { ScrollView } from "react-native-gesture-handler";
import { HOME } from "../../constants/routeNames";

function ProductDetails() {
  const { navigate } = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={colors.PRIMARY} barStyle="light-content" />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ImageBackground
          source={require("../../assets/images/totoMixDetail.png")}
          style={{
            flex: 2,
            height: 300,
            width: "100%",
          }}
        >
          <View style={styles.headerContainer}>
            <TouchableOpacity
              onPress={() => {
                navigate(HOME);
              }}
            >
              <View style={styles.iconContainer}>
                <EvilIcons name="chevron-left" color={colors.GREY} size={26} />
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <View style={styles.productDetailsContainer}>
          <Text style={styles.headerText}>TotoMix</Text>
          <Text style={styles.descriptionText}>
            This is the natural porridge flour which is gluten free. Totomix is
            originally made for kids aged 7 months to 5 years. This Flour Helps
            underweight children to gain weight in a healthy way.
          </Text>
          <Text style={styles.descriptionText}>
            This is the natural porridge flour which is gluten free. Totomix is
            originally made for kids aged 7 months to 5 years. This Flour Helps
            underweight children to gain weight in a healthy way.
          </Text>
          <Text style={styles.descriptionText}>
            This is the natural porridge flour which is gluten free. Totomix is
            originally made for kids aged 7 months to 5 years. This Flour Helps
            underweight children to gain weight in a healthy way.
          </Text>

          <Text style={styles.descriptionText}>
            This is the natural porridge flour which is gluten free. Totomix is
            originally made for kids aged 7 months to 5 years. This Flour Helps
            underweight children to gain weight in a healthy way.
          </Text>

          <TouchableOpacity>
            <View
              style={{
                flexDirection: "row-reverse",
                paddingHorizontal: 20,
              }}
            >
              <View
                style={{
                  backgroundColor: colors.PRIMARY,
                  height: 36,
                  justifyContent: "center",
                  borderRadius: 20,
                  marginTop: 15,
                }}
              >
                <Text style={{ color: colors.WHITE, marginHorizontal: 20 }}>
                  Contact Agent
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

export default ProductDetails;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#d0f0c0",
  },
  headerContainer: {
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: colors.WHITE,
    height: 40,
    width: 40,
    borderColor: colors.BACKGROUND,
  },
  productDetailsContainer: {
    flex: 3,
    backgroundColor: colors.WHITE,
    width: "100%",
    borderWidth: 1,
    borderColor: colors.BACKGROUND,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  headerText: {
    fontSize: 30,
    paddingLeft: 20,
    paddingTop: 20,
    color: colors.BLACK,
  },
  descriptionText: {
    fontSize: 15,
    paddingHorizontal: 20,
    paddingTop: 20,
    color: colors.GREY,
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
});
