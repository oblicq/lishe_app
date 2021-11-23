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
  scrollCard: {
    flex: 1,
    height: 200,
    backgroundColor: "white",
    borderRadius: 20,
  },
  contentContainer: {},
  contentHeaderWrapper: {
    flexDirection: "row",
    paddingTop: 5,
    justifyContent: "space-between",
  },
  contentHeaderLeft: {
    fontSize: 17,
    color: colors.BLACK,
  },
  cardWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contentHeaderRight: {
    fontSize: 17,
    color: colors.PRIMARY,
  },
});
