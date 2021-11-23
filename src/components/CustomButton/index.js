import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import colors from "../../assets/theme/colors";
import styles from "./styles";
const CustomButton = ({
  title,
  label,
  secondary,
  primary,
  danger,
  disabled,
  loading,
  onPress,
}) => {
  const [focused, setFocused] = useState(false);
  const getBgColor = () => {
    if (disabled) {
      return colors.GREY;
    }
    if (primary) {
      return colors.PRIMARY;
    }
    if (secondary) {
      return colors.SECONDARY;
    }
    if (danger) {
      return colors.DANGER;
    }
  };
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.wrapper, { backgroundColor: getBgColor() }]}
    >
      <View style={[styles.loaderSection]}>
        {loading && (
          <ActivityIndicator
            color={primary ? colors.SECONDARY : colors.PRIMARY}
          />
        )}
        {title && (
          <Text
            style={{
              color: disabled ? "black" : colors.WHITE,
              paddingLeft: loading ? 5 : 0,
            }}
          >
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};
export default CustomButton;
