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

function productCardListAll({
  productName,
  productDescription,
  productPrice,
  productImage,
  onPress,
}) {
  const { navigate } = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.productContainer}>
          <View style={styles.pictureContainer}>
            <ImageBackground
              source={require("../../assets/images/totoMix.png")}
              style={{
                height: 130,
                width: 90,
                position: "relative",
                top: 0,
                left: 0,
              }}
            ></ImageBackground>
          </View>
          <View style={styles.productInfoContainer}>
            <Text style={{ fontSize: 19, fontWeight: "700" }}>
              {productName}
            </Text>
            <View style={{ justifyContent: "space-between", height: 95 }}>
              <Text
                numberOfLines={3}
                style={{ color: colors.GREY, paddingRight: 10 }}
              >
                {productDescription}
              </Text>

              <View style={{ flexDirection: "row-reverse" }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    paddingRight: 10,
                    fontSize: 17,
                    color: colors.BLACK,
                  }}
                >
                  {productPrice}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default productCardListAll;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: colors.BACKGROUND,
  },
  headerContainer: {
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
  headerText: {
    fontSize: 20,
    paddingLeft: 20,
    color: colors.GREY,
  },
  productContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 5,
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
