import { StyleSheet } from "react-native";
import colors from "../../assets/theme/colors";
export default StyleSheet.create({
  contentWrapper: { paddingHorizontal: 20 },
  headerWrapper: {
    height: 50,
  },
  welcomeMessage: {
    fontSize: 20,
    color: colors.BLACK,
  },
  bellowSearchView: {
    flexDirection: "row",
  },
});
