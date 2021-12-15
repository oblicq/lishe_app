import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

import colors from "../../assets/theme/colors";

function QnACard({ profilePicture, profileName, question }) {
  return (
    <View style={styles.qnACard}>
      <View style={styles.profileAndNameWrapper}>
        <View style={styles.profileView}></View>

        <Text style={styles.userName}>{profileName}</Text>
      </View>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{question}</Text>
      </View>
      <TouchableOpacity>
        <View style={styles.answerButtonContainer}>
          <AntDesign
            style={{ paddingRight: 5 }}
            name="message1"
            color={colors.GREY}
            size={20}
          />
          <Text>Answer</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default QnACard;

const styles = StyleSheet.create({
  qnACard: {
    backgroundColor: colors.WHITE,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    paddingTop: 10,
    marginTop: 10,
    borderRadius: 20,
  },
  profileView: {
    width: 56,
    height: 56,
    backgroundColor: colors.GREY,
    borderRadius: 50,
  },
  profileAndNameWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  userName: {
    paddingLeft: 10,
    fontSize: 16,
  },
  questionContainer: {
    paddingVertical: 10,
  },
  questionText: {
    color: colors.GREY,
  },
  answerButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    borderTopWidth: 2,
    borderColor: colors.BACKGROUND,
  },
});
