import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Alert } from 'react-native';

import Colors from '../constants/colors';
import Card from '../components/Card';
import DigitContainer from '../components/DigitContainer';
import MainButton from '../components/MainButton';

import MainTitle from '../components/MainTitle';

const generateDigitBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  randomDigit = Math.floor(Math.random() * (max - min)) + min;

  if (randomDigit === exclude) {
    return generateDigitBetween(min, max, exclude);
  } else {
    return randomDigit;
  }
};

const GameScreen = props => {

  const [currentGuess, setCurrentGuess] = useState(
    generateDigitBetween(1, 100, props.userSelectedDigit)
  );

  const [rounds, setRounds] = useState(0);

  const currentMin = useRef(1);
  const currentMax = useRef(100);

  const { userSelectedDigit, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === userSelectedDigit) {
      onGameOver(rounds);
    }
  }, [currentGuess, userSelectedDigit, onGameOver]);

  const generateNextDigitHandler = direction => {
    if ((direction === 'lower' && currentGuess < userSelectedDigit) || (direction === 'upper' && currentGuess > userSelectedDigit)) {
      Alert.alert('Don\'t Lie!', 'You know that this is wrong...',
        [
          { text: 'Okey', style: 'default' }
        ], { cancelable: false })
      return;
    }

    if (direction === 'lower') { currentMax.current = currentGuess; }
    else { currentMin.current = currentGuess; }

    const nextDigit = generateDigitBetween(currentMin.current, currentMax.current, currentGuess);
    setCurrentGuess(nextDigit);
    setRounds(curRounds => curRounds + 1);
  };

  return (
    <View style={styles.screen}>
      <MainTitle>Random generated digit</MainTitle>
      <DigitContainer style={styles.digitContainer}>{currentGuess}</DigitContainer>
      <Card style={styles.buttonsCard}>
        <MainButton bodyStyles={{ width: 115, backgroundColor: Colors.mainRed, borderColor: Colors.mainRed }} title="Lower" onPress={generateNextDigitHandler.bind(this, 'lower')} />
        <MainButton bodyStyles={{ width: 115, backgroundColor: Colors.mainGreen, borderColor: Colors.mainGreen }} title="Upper" onPress={generateNextDigitHandler.bind(this, 'upper')} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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