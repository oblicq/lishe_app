import { StyleSheet } from "react-native";
import colors from "../../assets/theme/colors";
export default StyleSheet.create({
  mainWrapper: {
    flex: 1,
  },

  backgroundImageContainer: {
    height: "40%",
    backgroundColor: colors.SUCCESS,
  },
  viewOnBGImage: {
    height: "100%",
    opacity: 0.5,
  },
  scrollView: { backgroundColor: colors.SUCCESS },

  logoImage: { height: 150, width: 150, alignSelf: "center", marginTop: 50 },

  welcomeText: {
    fontSize: 40,
    fontWeight: "500",
  },
  signInText: {
    fontSize: 15,
    fontWeight: "300",
  },
  bottomWrapper: {
    flex: 2,
    paddingTop: 50,
    padding: 20,
    backgroundColor: colors.WHITE,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    width: "100%",
    height: "100%",
    bottom: 0,
  },
  form: {
    paddingTop: 10,
  },
  createSection: {
    flexDirection: "row",
  },
  forgotPassSection: { alignSelf: "center", paddingTop: 10 },
  linkButton: {
    paddingLeft: 17,
    color: colors.PRIMARY,
    fontSize: 16,
  },
  infoText: {
    fontSize: 17,
  },
});
