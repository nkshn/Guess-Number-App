import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';

import Colors from '../constants/colors';
import Card from '../components/Card';
import DigitContainer from '../components/DigitContainer';

const generateDigitBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  randomDigit = Math.floor(Math.random() * (max - min)) + min;

  if(randomDigit === exclude) {
    return generateDigitBetween(min, max, exclude);
  } else {
    return randomDigit;
  }
};

const GameScreen = props => {

  const [currentGuess, setCurrentGuess] = useState(
    generateDigitBetween(1, 100, props.userSelectedDigit)
  );
  
  const currentMin = useRef(1);
  const currentMax = useRef(100);

  const generateNextDigitHandler = direction => {
    if((direction === 'lower' && currentGuess < props.userSelectedDigit) || (direction === 'upper' && currentGuess > props.userSelectedDigit)) {
      Alert.alert('Don\'t Lie!', 'You know that this is wrong...', 
      [
        {text: 'Okey', style: 'default'}
      ], {cancelable: false})
      return;
    }

    if(direction === 'lower') { currentMax.current = currentGuess; }
    else { currentMin.current = currentGuess; }

    const nextDigit = generateDigitBetween(currentMin.current, currentMax.current, currentGuess);
    setCurrentGuess(nextDigit);
  };

  return (
    <View style={styles.container}>
      <Text style={{marginVertical: 5, fontWeight: '100', fontSize: 10}}>User Guess: {props.userSelectedDigit}</Text>
      <Text style={styles.title}>Random generated digit</Text>
      <DigitContainer style={styles.digitContainer}>{currentGuess}</DigitContainer>
      <Card style={styles.buttonsCard}>
        <View style={{width: '45%'}}><Button color={Colors.mainRed}   title="Lower" onPress={generateNextDigitHandler.bind(this, 'lower')}/></View>
        <View style={{width: '45%'}}><Button color={Colors.mainGreen} title="Upper" onPress={generateNextDigitHandler.bind(this, 'upper')}/></View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    color: Colors.mainGrey,
    fontWeight: '600',
    textAlign: 'center',
    // marginVertical: 5,
    letterSpacing: 1,
  },
  digitContainer: {
    marginTop: 10,
    marginBottom: 13,
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