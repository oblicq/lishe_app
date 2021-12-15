import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../../assets/theme/colors";
import AntDesign from "react-native-vector-icons/AntDesign";

const ContentList = ({ docTitle, LeftIcon, RightIcon, oPress }) => {
  return (
    <View>
      <TouchableOpacity onPress={oPress}>
        <View
          style={{
            marginHorizontal: 20,
            alignItems: "center",
            borderRadius: 10,
            marginVertical: 5,
            flexDirection: "row",
            justifyContent: "space-between",
            height: 36,
            backgroundColor: colors.WHITE,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <AntDesign
              style={styles.leftIconStyles}
              name={LeftIcon}
              color={colors.PRIMARY}
              size={20}
            />
            <Text style={styles.docText}>{docTitle}</Text>
          </View>
          <AntDesign
            style={styles.rightIconStyles}
            name={RightIcon}
            color={colors.GREY}
            size={20}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ContentList;

const styles = StyleSheet.create({
  leftIconStyles: {
    paddingLeft: 10,
  },
  rightIconStyles: {
    paddingRight: 10,
  },
  docText: {
    paddingLeft: 10,
  },
});
