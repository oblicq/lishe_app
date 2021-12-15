import React from "react";
import { View, Text } from "react-native";
import ContentList from "../../components/classContent/ContentList";

const ClassContent = () => {
  return (
    <View>
      <ContentList
        RightIcon="download"
        LeftIcon="pdffile1"
        docTitle="HAMU YA KULA HAFIFU"
      />
    </View>
  );
};

export default ClassContent;
