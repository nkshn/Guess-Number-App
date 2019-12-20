import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header =  props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff4abd',
  },
  headerText: {
    // marginTop: 27,
    marginTop: '8%',
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: "capitalize",
    letterSpacing: 1,
  },
});

export default Header;