import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import HomeBottomNavigator from "./HomeBottomNavigator";
import ProductDetails from "../screens/productDetails/ProductDetails";

import AllProductScreen from "./../screens/AllProducts/AllProductsScreen";
import AllClassesScreen from "../screens/AllClasses/AllClassesScreen";
import ClassDetails from "../screens/Classdetails/ClassDetails";

const CreateContacts = () => {
  return (
    <View>
      <Text>CreateContacts</Text>
    </View>
  );
};

const Settings = () => {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
};

const HomeNavigator = () => {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRoute="HomeBottom"
    >
      <HomeStack.Screen name="HomeBottomTabs" component={HomeBottomNavigator} />
      {/* Screens for PRODUCT LIST AND PRODUCT DETAILS */}
      <HomeStack.Screen name="Product Details" component={ProductDetails} />
      <HomeStack.Screen name="All Products" component={AllProductScreen} />

      <HomeStack.Screen name="Create Contact" component={CreateContacts} />
      <HomeStack.Screen name="Settings " component={Settings} />

      {/* Screens for Class details and All classes */}
      <HomeStack.Screen name="All Classes" component={AllClassesScreen} />
      <HomeStack.Screen name="ClassDetails" component={ClassDetails} />
    </HomeStack.Navigator>
  );
};
export default HomeNavigator;
