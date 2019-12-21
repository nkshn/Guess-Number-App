import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = props => {
  return (
    <TextInput {...props} style={{...styles.input, ...props.style}}/>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 15,
    paddingHorizontal: 5,
    textAlign: 'center',
    alignSelf: 'center',
  },
});

export default Input;