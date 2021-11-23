import React from "react";
import { View, Text, ScrollView } from "react-native";

import styles from "./styles";

function Container({ children }) {
  return (
    <ScrollView>
      <View style={styles.wrapper}>{children}</View>
    </ScrollView>
  );
}

export default Container;
