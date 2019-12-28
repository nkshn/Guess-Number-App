import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/colors';

const MainButton = props => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={props.onPress}>
      <View style={{ ...styles.button, ...props.bodyStyles }}>
        <Text style={{ ...styles.buttonText, ...props.textStyles }}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 90,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: Colors.mainPink,
    paddingVertical: 7,
    paddingHorizontal: 17,
    backgroundColor: Colors.mainPink,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    color: Colors.mainWhite,
  },
});

export default MainButton;