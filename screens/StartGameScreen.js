import React, { useState } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../constants/colors';
import DigitContainer from '../components/DigitContainer';
import MainButton from '../components/MainButton';

import SubTitle from '../components/SubTitle';
import MainTitle from '../components/MainTitle';

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
    if (isNaN(digit) || digit <= 0 || digit > 99) {
      Alert.alert('Invalid digit!', 'Digit had to be between 1 and 99.',
        [
          { text: 'OK', onPress: resetButtonHandler, style: 'default' }
        ], { cancelable: false })
      resetButtonHandler(); // Maybe later I'll delete this )
      return;
    }
    setAcceptDigitTrigger(true);
    setSelectedDigit(digit);
    setEnteredDigit('');
    Keyboard.dismiss();
  };

  let confirmedText;
  if (acceptDigitTrigger) {
    confirmedText = (
      <Card style={styles.chosenDigitCard}>
        <SubTitle>Your Selected Digit</SubTitle>
        <DigitContainer>{selectedDigit}</DigitContainer>
        <MainButton
          title="Start game"
          onPress={() => props.onStartGameButton(selectedDigit)}
          bodyStyles={{ width: 125, backgroundColor: Colors.mainGreen, borderColor: Colors.mainGreen }} />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
      <View style={styles.screen}>
        <MainTitle style={styles.startNewGameText}>Start a New Game!</MainTitle>
        <Card style={styles.selectNumberCard}>
          <SubTitle style={styles.selectNumberText}>Select a Number</SubTitle>
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
            <MainButton bodyStyles={{ width: 105, backgroundColor: Colors.mainRed, borderColor: Colors.mainRed }} title="Reset" onPress={resetButtonHandler} />
            <MainButton bodyStyles={{ width: 105, backgroundColor: Colors.mainGreen, borderColor: Colors.mainGreen }} title="Accept" onPress={acceptButtonHander} />
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
    alignItems: 'center',
    backgroundColor: Colors.mainWhite,
  },
  startNewGameText: {
    marginVertical: 23,
    letterSpacing: 1,
  },
  selectNumberCard: {
    width: 325,
    maxWidth: '90%',
  },
  selectNumberText: {
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
});

export default StartGameScreen;