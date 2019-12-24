import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../constants/colors';
import DigitContainer from '../components/DigitContainer';

const StartGameScreen = props => {
  const [enteredDigit, setEnteredDigit] = useState('');
  const [acceptDigitTrigger, setAcceptDigitTrigger] = useState(false);
  const [selectedDigit, setSelectedDigit] = useState();
  
  const enteringDigitHandler = digit => {
    setEnteredDigit(digit.replace(/[^0-9]/g, ''));
  };

  const resetButtonHandler = () => {
    setEnteredDigit('');
    setAcceptDigitTrigger(false);
  };

  const acceptButtonHander = () => {
    const digit = parseInt(enteredDigit);
    if(isNaN(digit) || digit <= 0 || digit > 99) {
      Alert.alert('Invalid digit!', 'Digit had to be between 1 and 99.', 
      [
        {text: 'OK', onPress: resetButtonHandler, style: 'default'}
      ], {cancelable: false})
      resetButtonHandler(); // Maybe later I'll delete this )
      return;
    }
    setAcceptDigitTrigger(true);
    setSelectedDigit(digit);
    setEnteredDigit('');
    Keyboard.dismiss();
  };

  let confirmedText;
  if(acceptDigitTrigger) {
    confirmedText = (
      <Card style={styles.chosenDigitCard}>
        <Text style={styles.chosenDigitTitle}>Your Selected Digit</Text>
        <DigitContainer>{selectedDigit}</DigitContainer>
        <View style={{width: '60%'}}>
          <Button title="Start game" color={Colors.mainGreen} onPress={() => props.onStartGameButton(selectedDigit)}/>
        </View>
      </Card>
    );
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
  chosenDigitCard: {
    marginTop: 30,
    width: 275,
    maxWidth: '65%',
    alignItems: 'center',
  },
  chosenDigitTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.mainGrey,
  },
});

export default StartGameScreen;