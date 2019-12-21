import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../constants/colors';

const StartGameScreen = props => {
  const [enteredDigit, setEnteredDigit] = useState('');
  const [acceptDigit, setAcceptDigit] = useState(false);
  const [selectedDigit, setSelectedDigit] = useState();
  
  const enteringDigitHandler = digit => {
    setEnteredDigit(digit.replace(/[^0-9]/g, ''));
  };

  const resetButtonHandler = () => {
    setEnteredDigit('');
    setAcceptDigit(false);
  };

  const acceptButtonHander = () => {
    const digit = parseInt(enteredDigit);
    if(isNaN(digit) || digit <= 0 || digit > 99) {
      Alert.alert('Invalid digit!', 'Digit had to be between 1 and 99.', 
      [
        {text: 'OK', onPress: resetButtonHandler, style: 'destructive'}
      ], {cancelable: false})
      resetButtonHandler(); // Maybe later I'll delete this )
      return;
    }
    setAcceptDigit(true);
    setSelectedDigit(digit);
    setEnteredDigit('');
  };

  let confirmedText;
  if(acceptDigit) {
    confirmedText = <Text style={{textAlign: 'center', marginVertical: 25, fontSize: 18, fontWeight: '600', color: Colors.mainGrey}}>Entered Digit: {selectedDigit}</Text>
  }

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
            <View style={{width: '40%'}}><Button color={Colors.mainRed} title="Reset" onPress={resetButtonHandler} /></View>
            <View style={{width: '40%'}}><Button color={Colors.mainGreen} title="Accept" onPress={acceptButtonHander} /></View>
          </View>
        </Card>
        {confirmedText}
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
    borderColor: Colors.mainPink,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    width: 40,
    height: 35,
    fontSize: 18,
    fontWeight: '300',
  },
  selectNumberButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default StartGameScreen;