import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../constants/colors';

const StartGameScreen = props => {
  const [enteredDigit, setEnteredDigit] = useState('');
  const enteringDigitHandler = digit => {
    setEnteredDigit(digit.replace(/[^0-9]/g, ''));
  };

  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
      <View style={styles.screen}>
        <Text style={styles.startNewGameText}>Start a New Game!</Text>
        <Card style={styles.selectNumberCard}>
          <Text style={styles.selectNumberText}>Select a Number</Text>
          <Input
            style={styles.input}
            keyboardType='number-pad'
            autoCapitalize='none'
            autoCorrect={false}
            maxLength={2}
            blurOnSubmit
            onChangeText={enteringDigitHandler}
            value={enteredDigit} />
          <View style={styles.selectNumberButtons}>
            <View style={{width: '40%'}}><Button color={Colors.mainRed} title="Reset" onPress={() => alert("Pressed Button [Reset]")} /></View>
            <View style={{width: '40%'}}><Button color={Colors.mainGreen} title="Accept" onPress={() => alert("Pressed Button [Accept]")} /></View>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.mainWhite,
  },
  startNewGameText: {
    fontSize: 20,
    color: Colors.mainGrey,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 25,
    letterSpacing: 1,
  },
  selectNumberCard: {
    width: 325,
    maxWidth: '90%',
    alignSelf: 'center',
  },
  selectNumberText: {
    fontSize: 18,
    color: Colors.mainGrey,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 10,
  },
  input: {
    color: Colors.mainGrey,
    borderBottomColor: Colors.mainPink,
    borderBottomWidth: 1,
    width: 35,
    
    // borderColor: Colors.mainPink,
    // paddingVertical: 5,
    // borderWidth: 1,
    // borderRadius: 10,
    // width: 40,
    // height: 35,
    // fontSize: 18,
    // fontWeight: '300',
  },
  selectNumberButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default StartGameScreen;