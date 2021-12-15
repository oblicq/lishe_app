import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AntDesign from "react-native-vector-icons/AntDesign";
import colors from "../../assets/theme/colors";
import QnACard from "./../../components/classContent/QnACard";

const QuestionAndAnswers = () => {
  return (
    <View>
      <ScrollView>
        <QnACard profileName="Gloria Mero" question="This is a question" />
        <QnACard />
      </ScrollView>
      <TouchableOpacity>
        <View style={styles.floatingButton}>
          <AntDesign name="edit" color={colors.WHITE} size={20} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default QuestionAndAnswers;

const styles = StyleSheet.create({
  floatingButton: {
    width: 56,
    height: 56,
    backgroundColor: colors.PRIMARY,
    position: "absolute",
    bottom: 20,
    right: 20,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
