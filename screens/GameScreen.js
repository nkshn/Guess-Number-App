import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import Colors from '../constants/colors';
import Card from '../components/Card';
import DigitContainer from '../components/DigitContainer';

const generateDigitBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  randomDigit = Math.floor(Math.random() * (max - min)) + min;

  if(randomDigit === exclude) {
    return generateDigitBetween(min, max, digit);
  } else {
    return randomDigit;
  }
};

const GameScreen = props => {

  const [currentGuess, setCurrentGuess] = useState(
    generateDigitBetween(1, 100, props.userSelectedDigit)
  );

  return (
    <View style={styles.container}>
      <Text style={{fontWeight: '100', fontSize: 10}}>User Guess: {props.userSelectedDigit}</Text>
      <Text style={styles.title}>Random generated digit</Text>
      <DigitContainer>{currentGuess}</DigitContainer>
      <Card style={styles.buttonsCard}>
        <View style={{width: '45%'}}><Button color={Colors.mainRed}   title="lower" onPress={() => {alert("Pressed Button [LOWER]")}}/></View>
        <View style={{width: '45%'}}><Button color={Colors.mainGreen} title="upper" onPress={() => {alert("Pressed Button [UPPER]")}}/></View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: Colors.mainGrey,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 5,
    letterSpacing: 1,
  },
  buttonsCard: {
    marginBottom: 30,
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
});

export default GameScreen;