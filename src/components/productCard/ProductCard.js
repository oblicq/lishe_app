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

function ProductCard({ productName, productDesc, price, imageUri, onPress }) {
  return (
    <View
      style={{
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {/* PRODUCT CARDS */}
      <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
        <View
          style={{
            width: "100%",

            height: 150,
            marginTop: 10,
            borderTopEndRadius: 10,
            borderTopStartRadius: 10,
          }}
        >
          <Image
            style={{ width: "100%", height: 150 }}
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
            <Text style={{ fontSize: 17, fontWeight: "700" }}>
              {productName}
            </Text>
            <Text style={{ fontWeight: "bold" }}>{price}</Text>
          </View>
          <View>
            <Text style={{ color: colors.GREY }}>{productDesc}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default ProductCard;

const styles = StyleSheet.create({
  productInfoContainer: {
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: colors.BACKGROUND,
    padding: 5,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
});
