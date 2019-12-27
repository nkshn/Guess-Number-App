import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Colors from '../constants/colors';

const GameOverScreen = props => {

  const { counterTries, userSelectedDigit, restartGame } = props;

  return (
    <View style={styles.screen}>
      <Text>Game is Over!</Text>
      <Text>Tries: {counterTries}</Text>
      <Text>User Digit: {userSelectedDigit}</Text>
      <Button title="New Game" onPress={restartGame}/>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GameOverScreen;