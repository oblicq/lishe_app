import { StyleSheet } from "react-native";
import colors from "../../assets/theme/colors";
export default StyleSheet.create({
  wrapper: {
    height: 42,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  textInput: {
    flex: 1,
    width: "100%",
  },
  inputContainer: {
    paddingVertical: 12,
  },
  error: {
    color: colors.DANGER,
    paddingTop: 2,
    fontSize: 12,
  },
});
