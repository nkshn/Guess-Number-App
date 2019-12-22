import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Colors from '../constants/colors';

const DigitContainer = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>{props.digit}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 13,
  },
  containerText: {
    borderColor: Colors.mainPink,
    borderWidth: 2,
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 7,
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.mainGrey,
  },
});

export default DigitContainer;