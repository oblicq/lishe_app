import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import SearchTextInput from "../../components/common/SearchTextInput";
import colors from "../../assets/theme/colors";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import AgentsCityComponent from "../../components/common/AgentCityComponent";

const Agents = () => {
  return (
    <View>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.headerText}>Agents</Text>
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <SearchTextInput placeholder="Search Agents" />
      </View>
      {/* <FlatList
        data={agents}
        renderItem={({ item }) => (
          <AgentsCityComponent city={item.cityName} iconName={item.iconName} />
        )}
      /> */}
      <AgentsCityComponent iconName="chevron-right" city="Dar es salaam" />
      <AgentsCityComponent iconName="chevron-right" city="Dar es salaam" />
    </View>
  );
};

export default Agents;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    paddingLeft: 20,
    color: colors.BLACK,
  },
});
