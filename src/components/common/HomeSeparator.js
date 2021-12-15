import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import colors from "../../assets/theme/colors";

function HomeSeparator({ GroupName, ViewAll, onPress }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 15,
        paddingHorizontal: 20,
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 16 }}>{GroupName}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={{ color: colors.PRIMARY }}>{ViewAll}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeSeparator;
