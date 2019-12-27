import React from "react";
import { Text, StyleSheet } from "react-native";

import Colors from "../constants/colors";

const SubTitle = props => {
  return (
    <Text style={{ ...styles.title, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: Colors.mainGrey,
    fontFamily: "lato-light",
  }
});

export default SubTitle;