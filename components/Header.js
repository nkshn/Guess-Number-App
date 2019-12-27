import React from "react";
import { StyleSheet, View, Text } from "react-native";

import Colors from "../constants/colors";

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.mainPink
  },
  headerText: {
    marginTop: "8%",
    color: Colors.mainWhite,
    fontSize: 25,
    textTransform: "capitalize",
    letterSpacing: 1,
    fontFamily: "lato-bold"
  },
});

export default Header;