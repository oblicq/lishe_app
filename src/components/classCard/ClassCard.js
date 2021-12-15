import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

import colors from "../../assets/theme/colors";

function ClassCard({
  className,
  classPrice,
  description,
  imageUri,
  startDate,
  endDate,
  onPress,
}) {
  return (
    <View
      style={{
        flex: 1,
        paddingLeft: 20,
      }}
    >
      {/* PRODUCT CARDS */}
      <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
        <View
          style={{
            width: "100%",
            height: 100,
            marginTop: 10,
            borderTopRightRadius: 10,
            borderTopStartRadius: 10,
          }}
        >
          <Image
            style={{
              width: "100%",
              height: 100,
            }}
            source={{
              uri: imageUri,
            }}
          />
        </View>
        <View style={styles.productInfoContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 17, fontWeight: "700" }}>{className}</Text>
          </View>
          <View>
            <Text style={{ color: colors.GREY }}>{description}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: colors.GREY }}>{startDate}</Text>
              <Text style={{ color: colors.GREY }}>-</Text>
              <Text style={{ color: colors.GREY }}>{endDate}</Text>
            </View>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              {classPrice}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default ClassCard;

const styles = StyleSheet.create({
  productInfoContainer: {
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: colors.WHITE,
    borderWidth: 1,
    borderColor: colors.BACKGROUND,
    padding: 5,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
});
