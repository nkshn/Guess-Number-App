import React from "react";
import { Text, StyleSheet } from "react-native";

import Colors from "../constants/colors";

const MainTitle = props => {
  return (
    <Text style={{ ...styles.title, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    color: Colors.mainGrey,
    fontFamily: "lato-bold",
  }
});

export default MainTitle;