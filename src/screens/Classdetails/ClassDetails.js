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

function ClassDetails() {
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

        <View style={styles.productDetailsContainer}>
          <Text style={styles.consultantName}>Ms. Loyce Victor Njila</Text>
          <Text style={styles.descriptionText}>BS. in Human Nutrition</Text>
          <Text style={styles.descriptionText}>
            Sokoine University of agriculture in Tanzania
          </Text>
          <Text style={styles.consultantName}>About</Text>

          <Text style={styles.descriptionText2}>
            She is a competent Nutritionist and HIV practitioner with robust
            experience in providing nutrition education and counseling among
            diverse groups in Tanzania.
          </Text>

          <TouchableOpacity>
            <View
              style={{
                // flexDirection: "row-reverse",
                paddingHorizontal: 20,
              }}
            >
              <View
                style={{
                  backgroundColor: colors.PRIMARY,
                  height: 46,
                  justifyContent: "center",
                  borderRadius: 20,
                  alignItems: "center",
                  marginTop: 15,
                }}
              >
                <Text style={{ color: colors.WHITE, marginHorizontal: 20 }}>
                  Book Appointment
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
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
    flex: 2,
    backgroundColor: colors.WHITE,
    width: "100%",

    borderColor: colors.BACKGROUND,
  },

  consultantName: {
    fontSize: 30,
    paddingLeft: 20,
    paddingTop: 20,
    color: colors.BLACK,
    fontWeight: "bold",
  },
  descriptionText: {
    fontSize: 15,
    paddingHorizontal: 20,
    // paddingTop: 10,
    color: colors.GREY,
    fontWeight: "bold",
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
