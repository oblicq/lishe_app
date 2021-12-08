import React from "react";
import { View, StyleSheet, Platform, Text } from "react-native";

import colors from "../../assets/theme/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const ProfileMenuComponent = ({ iconName, menuName, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ paddingBottom: 10 }}>
      <View style={styles.editBtn}>
        <MaterialIcons name={iconName} color="#1469A9" size={25} />
        <View style={styles.textContainer}>
          <Text style={styles.menuText}>{menuName}</Text>
        </View>
        <MaterialIcons name="chevron-right" color="#808080" size={25} />
      </View>
    </TouchableOpacity>
  );
};
export default ProfileMenuComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.GREY,
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  editBtn: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.2,
    borderColor: colors.GREY,
    paddingBottom: 5,
  },
  textContainer: {
    paddingLeft: 10,
    flex: 1,
  },
  menuText: {
    color: colors.BLACK,
    fontSize: 17,
  },
  lowerText: { fontSize: 12, color: colors.GREY },

  register_text: {
    color: colors.PRIMARY,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
