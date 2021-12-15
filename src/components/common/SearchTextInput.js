import React from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";
import colors from "../../assets/theme/colors";
import AntDesign from "react-native-vector-icons/AntDesign";

function SearchTextInput({ placeholder }) {
  return (
    <View style={styles.searchView}>
      <View style={styles.textInputContainer}>
        <TextInput placeholder={placeholder} />
      </View>
      <View style={{ paddingRight: 10 }}>
        <AntDesign name="search1" color={colors.GREY} size={20} />
      </View>
    </View>
  );
}

export default SearchTextInput;

const styles = StyleSheet.create({
  searchView: {
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 5,
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: colors.BACKGROUND,
    backgroundColor: colors.WHITE,

    flexDirection: "row",
    height: 40,
    borderRadius: 10,
    alignItems: "center",
  },
  textInputContainer: {
    flex: 1,
  },
});
