import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import HomeMain from "../components/Home/Home";

const AllProducts = () => {
  return (
    <View>
      <Text>All Products</Text>
    </View>
  );
};
const ProductDetails = () => {
  return (
    <View>
      <Text>Product Details</Text>
    </View>
  );
};

const ProductScreenSNavigator = () => {
  const productScreenStack = createNativeStackNavigator();
  return (
    <productScreenStack.Navigator initialRoute="Home">
      <productScreenStack.Screen name="Home" component={HomeMain} />

      <productScreenStack.Screen name="All Products" component={AllProducts} />
      <productScreenStack.Screen
        name="Product Details"
        component={ProductDetails}
      />
    </productScreenStack.Navigator>
  );
};
export default ProductScreenSNavigator;
