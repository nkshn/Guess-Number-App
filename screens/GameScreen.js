import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Alert, FlatList, Text, ScrollView } from 'react-native';

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

  const [initialGenerateDigit, setInitialGenerateDigit] = useState(generateDigitBetween(1, 100, props.userSelectedDigit));
  const [pastGuesses, setPastGuesses] = useState([initialGenerateDigit]);
  const [currentGuess, setCurrentGuess] = useState(initialGenerateDigit);
  // const [rounds, setRounds] = useState(0);
  const currentMin = useRef(1);
  const currentMax = useRef(100);

  const { userSelectedDigit, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === userSelectedDigit) {
      onGameOver(pastGuesses.length);
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
    else { currentMin.current = currentGuess + 1; }

    const nextDigit = generateDigitBetween(currentMin.current, currentMax.current, currentGuess);
    setCurrentGuess(nextDigit);
    setPastGuesses(curGuess => [nextDigit, ...curGuess]);
  };

  return (
    <View style={styles.screen}>
      <MainTitle style={styles.mainTitle}>Random generated digit</MainTitle>
      <DigitContainer style={styles.digitContainer}>{currentGuess}</DigitContainer>
      <Card style={styles.buttonsCard}>
        <MainButton bodyStyles={{ width: 115, backgroundColor: Colors.mainRed, borderColor: Colors.mainRed }} title="Lower" onPress={generateNextDigitHandler.bind(this, 'lower')} />
        <MainButton bodyStyles={{ width: 115, backgroundColor: Colors.mainGreen, borderColor: Colors.mainGreen }} title="Upper" onPress={generateNextDigitHandler.bind(this, 'upper')} />
      </Card>
      <ScrollView>
        {pastGuesses.map((guess) => (
          <View style={styles.itemContainer} key={guess}>
            <Text>Random Generated Digit: {guess}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainTitle: {
    marginTop: 23,
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
    justifyContent: 'space-around',
  },
  itemContainer: {
    backgroundColor: 'grey',
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 2,
    marginVertical: 3,
  },
});

export default GameScreen;