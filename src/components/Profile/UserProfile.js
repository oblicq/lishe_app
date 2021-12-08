import React from "react";
import { View, StyleSheet, Platform, StatusBar, Text } from "react-native";

import colors from "../../assets/theme/colors";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import { color } from "react-native-reanimated";
import ProfileMenuComponent from "./../ProfileMenu/ProfileMenuComponent";

import { AuthContext } from "../../context/context";

const UserProfile = ({ iconName, menuName, subMenu, onPress }) => {
  const { signOut } = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.PRIMARY} barStyle="light-content" />
      <View style={styles.header}>
        <View style={styles.userProfileContainer}></View>
        <Text style={styles.profileNameText}>John Doe</Text>
        <Text style={styles.profileEmailText}>johndoe@gmail.com Doe</Text>
      </View>
      <View style={styles.footer}>
        <View style={{ paddingBottom: 20 }}>
          <Text style={{ color: "#808080", fontSize: 15 }}>
            Login and Security
          </Text>
        </View>
        <ProfileMenuComponent iconName="person-outline" menuName="Username" />
        <ProfileMenuComponent iconName="mail-outline" menuName="Email" />
        <ProfileMenuComponent iconName="lock-outline" menuName="Password" />
        <ProfileMenuComponent
          iconName="logout"
          menuName="SignOut"
          onPress={signOut}
        />
      </View>
    </View>
  );
};
export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.PRIMARY,
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  userProfileContainer: {
    height: 150,
    width: 150,
    borderRadius: 100,
    backgroundColor: colors.WHITE,
  },
  profileNameText: {
    color: colors.WHITE,
    fontSize: 20,
  },
  profileEmailText: {
    color: colors.ACCENT,
  },
  footer: {
    flex: 2,
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
    paddingHorizontal: 20,
    alignItems: "center",
    borderBottomWidth: 0.2,
    borderColor: colors.GREY,
    paddingBottom: 5,
  },
  textContainer: {
    paddingLeft: 10,
  },
  upperText: {
    color: colors.PRIMARY,
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
