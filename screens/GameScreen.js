import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Alert, FlatList, ScrollView } from 'react-native';

import Colors from '../constants/colors';
import Card from '../components/Card';
import DigitContainer from '../components/DigitContainer';
import MainButton from '../components/MainButton';
import SubTitle from '../components/SubTitle';

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

  const renderItemList = (value, numberOfRound) => (
    <View style={styles.listItem} key={value}>
      <SubTitle>№ {numberOfRound}</SubTitle>
      <SubTitle>{value}</SubTitle>
    </View>
  );

  return (
    <View style={styles.screen}>
      <MainTitle style={styles.mainTitle}>Random generated digit</MainTitle>
      <DigitContainer style={styles.digitContainer}>{currentGuess}</DigitContainer>
      <Card style={styles.buttonsCard}>
        <MainButton bodyStyles={{ width: 115, backgroundColor: Colors.mainRed, borderColor: Colors.mainRed }} title="Lower" onPress={generateNextDigitHandler.bind(this, 'lower')} />
        <MainButton bodyStyles={{ width: 115, backgroundColor: Colors.mainGreen, borderColor: Colors.mainGreen }} title="Upper" onPress={generateNextDigitHandler.bind(this, 'upper')} />
      </Card>
      <View style={styles.listContainer}>
        <SubTitle style={styles.listTitle}>Previous Guesses</SubTitle>
        <ScrollView showsVerticalScrollIndicator={false}>
          {pastGuesses.map((guessItem, index) => renderItemList(guessItem, pastGuesses.length - index))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
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
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  listContainer: {
    flex: 1,
    marginTop: 25,
    width: '70%',
  },
  listTitle: {
    marginBottom: 10,
    textAlign: 'center',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 13,
    paddingVertical: 7,
    borderColor: Colors.mainPink,
    borderRadius: 10,
    borderWidth: 2,
    marginVertical: 3,
  },
});

export default GameScreen;