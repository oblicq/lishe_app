import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import colors from "../../assets/theme/colors";
import styles from "./styles";
const Input = ({
  onChangeText,
  iconPosition,
  icon,
  value,
  label,
  error,
  ...props
}) => {
  const [focused, setFocused] = useState(false);

  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === "left") {
        return "row";
      } else if (iconPosition === "right") {
        return "row-reverse";
      }
    }
  };
  const getBorderColor = () => {
    if (focused) {
      return colors.PRIMARY;
    }
    if (error) {
      return colors.DANGER;
    } else return colors.GREY;
  };
  return (
    <View style={[styles.inputContainer]}>
      {label && <Text>{label}</Text>}
      <View
        style={[
          styles.wrapper,
          { alignItems: icon ? "center" : "baseline" },
          { borderColor: getBorderColor(), flexDirection: getFlexDirection() },
        ]}
      >
        <View>{icon && icon}</View>
        <TextInput
          style={styles.textInput}
          onChangeText={onChangeText}
          value={value}
          error={error}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => setFocused(false)}
          {...props}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};
export default Input;
