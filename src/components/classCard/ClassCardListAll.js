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

function ClassCardListAll({
  className,
  classDesc,
  imageUri,
  classPrice,
  startDate,
  endDate,
  onPress,
}) {
  const { navigate } = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.productContainer}>
          <View style={styles.pictureContainer}>
            <Image
              // source={require("../../assets/images/totoMix.png")}
              source={imageUri}
              // source={{
              //   uri: "https://i.picsum.photos/id/596/200/300.jpg?hmac=pVPfm7n4UQpHw17xww_PzqSAFP5JYEJo6qGFtPJxxA0",
              // }}
              style={{
                height: 125,
                width: 90,
                margin: 10,
                position: "relative",
                top: 0,
                left: 0,
              }}
            ></Image>
          </View>
          <View style={styles.productInfoContainer}>
            <Text numberOfLines={1} style={{ fontSize: 17, fontWeight: "700" }}>
              {className}
            </Text>
            <View style={{ justifyContent: "space-between", height: 95 }}>
              <Text
                numberOfLines={2}
                style={{ color: colors.GREY, paddingRight: 10 }}
              >
                {classDesc}
              </Text>

              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    paddingRight: 10,
                    fontSize: 15,
                    color: colors.PRIMARY,
                  }}
                >
                  {startDate}
                </Text>

                <Text
                  style={{
                    fontWeight: "bold",
                    paddingRight: 10,
                    fontSize: 15,
                    color: colors.PRIMARY,
                  }}
                >
                  {endDate}
                </Text>
              </View>
              <Text style={{ color: colors.BLACK, fontWeight: "700" }}>
                {classPrice}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default ClassCardListAll;

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
    // backgroundColor: "#d0f0c0",
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
