import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";

const Contacts = () => {
  return (
    <View>
      <Text>Contacts</Text>
    </View>
  );
};
const Details = () => {
  return (
    <View>
      <Text>Details</Text>
    </View>
  );
};
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
    <HomeStack.Navigator initialRoute="">
      <HomeStack.Screen name="Contact" component={Contacts} />
      <HomeStack.Screen name="Details" component={Details} />
      <HomeStack.Screen name="Create Contact" component={CreateContacts} />
      <HomeStack.Screen name="Settings " component={Settings} />
    </HomeStack.Navigator>
  );
};
export default HomeNavigator;
