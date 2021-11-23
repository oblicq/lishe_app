import { StyleSheet } from "react-native";
import colors from "../../assets/theme/colors";
export default StyleSheet.create({
  logoImage: { height: 150, width: 150, alignSelf: "center", marginTop: 50 },
  title: {
    fontSize: 21,
    textAlign: "center",
    paddingTop: 20,
    fontWeight: "500",
  },
  subTitle: {
    fontSize: 17,
    textAlign: "center",
    paddingVertical: 20,
    fontWeight: "500",
  },
  bottomWrapper: {
    padding: 20,
    backgroundColor: colors.WHITE,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  form: {
    paddingTop: 20,
  },
  createSection: {
    flexDirection: "row",
  },
  linkButton: {
    paddingLeft: 17,
    color: colors.PRIMARY,
    fontSize: 16,
  },
  infoText: {
    fontSize: 17,
  },
});
