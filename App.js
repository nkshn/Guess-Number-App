import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {

  const [userDigit, setUserDigit] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const configureNewGameHandler = () => {
    setUserDigit(null);
    setGuessRounds(0);
  };

  const startGameHandler = (selectedUserDigit) => {
    setUserDigit(selectedUserDigit);
  };

  const gameOverHandler = (counterOfTries) => {
    setGuessRounds(counterOfTries);
  };

  let content = <StartGameScreen onStartGameButton={startGameHandler} />;
  
  if(userDigit && guessRounds <= 0) {
    content = <GameScreen userSelectedDigit={userDigit} onGameOver={gameOverHandler} />;
  } else if (guessRounds > 0) {
    content = <GameOverScreen counterTries={guessRounds} userSelectedDigit={userDigit} restartGame={configureNewGameHandler} />;
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess number" />
      { content }
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 }
});