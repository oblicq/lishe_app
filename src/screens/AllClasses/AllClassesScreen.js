import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
  ImageBackground,
} from "react-native";
import colors from "../../assets/theme/colors";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { useNavigation } from "@react-navigation/core";
import ProductCardListAll from "../../components/productCard/ProductCardListAll";
import { ScrollView } from "react-native-gesture-handler";
import {
  HOME,
  PRODUCT_DETAILS,
  CLASS_DETAILS,
} from "../../constants/routeNames";
import SearchTextInput from "../../components/common/SearchTextInput";
import ClassCardListAll from "../../components/classCard/ClassCardListAll";

function AllClassesScreen() {
  const { navigate } = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={colors.PRIMARY} barStyle="light-content" />
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => {
            navigate(HOME);
          }}
        >
          <View style={styles.iconContainer}>
            <EvilIcons name="chevron-left" color={colors.GREY} size={26} />
          </View>
        </TouchableOpacity>
        <Text style={styles.headerText}>All Classes</Text>
      </View>
      {/* search  products */}
      <View style={{ paddingHorizontal: 20 }}>
        <SearchTextInput placeholder="Search Classes" />
      </View>

      {/* End of search Textinput */}
      <ScrollView>
        <ClassCardListAll
          className="Mwaka 1-6"
          classDesc="Maelezo kuhusu Darasa"
          startDate="01/12/2021"
          endDate="24/12/2021"
          classPrice="Tsh. 45,000/="
          onPress={() => {
            navigate(CLASS_DETAILS);
          }}
        />
        <ClassCardListAll
          className="Mwaka 1-6"
          classDesc="Maelezo kuhusu Darasa"
          startDate="01/12/2021"
          endDate="24/12/2021"
          classPrice="Tsh. 45,000/="
        />
      </ScrollView>
    </View>
  );
}

export default AllClassesScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: colors.BACKGROUND,
  },
  headerContainer: {
    paddingLeft: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: colors.WHITE,
    height: 40,
    width: 40,
    borderColor: colors.BACKGROUND,
  },
  headerText: {
    fontSize: 20,
    paddingLeft: 20,
    color: colors.BLACK,
  },
  productContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: colors.WHITE,
    width: "90%",
    height: 150,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.BACKGROUND,
  },
  pictureContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "40%",
    height: 150,
    backgroundColor: "#d0f0c0",
    borderWidth: 1,
    borderColor: "#d0f0c0",
    borderRadius: 20,
  },
  productInfoContainer: {
    paddingLeft: 10,
    paddingTop: 10,
    width: "60%",
    height: 150,
  },
});
