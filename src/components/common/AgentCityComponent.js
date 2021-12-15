import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import SearchTextInput from "../../components/common/SearchTextInput";
import colors from "../../assets/theme/colors";
import EvilIcons from "react-native-vector-icons/EvilIcons";

const AgentsCityComponent = ({ city, iconName }) => {
  const [isOpen, setIsOpened] = React.useState(false);
  function open() {
    setIsOpened((isOpen) => !isOpen);
  }

  return (
    <View>
      <TouchableOpacity onPress={open}>
        <View
          style={{
            marginHorizontal: 20,
            alignItems: "center",
            borderRadius: 10,
            marginVertical: 5,
            flexDirection: "row",
            height: 36,
            backgroundColor: colors.WHITE,
          }}
        >
          {/* <EvilIcons name="chevron-right" color={colors.GREY} size={26} /> */}
          <EvilIcons
            name={isOpen != true ? "chevron-right" : "chevron-down"}
            color={colors.GREY}
            size={26}
          />
          <Text>{city}</Text>
        </View>
      </TouchableOpacity>
      {isOpen != false ? (
        <View style={{ paddingLeft: 20 }}>
          <View>
            <Text>Agent Name</Text>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default AgentsCityComponent;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    paddingLeft: 20,
    color: colors.BLACK,
  },
});
