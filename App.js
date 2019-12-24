import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {

  const [userDigit, setUserDigit] = useState();

  const startGameHandler = (selectedUserDigit) => {
    setUserDigit(selectedUserDigit);
  };

  let content = <StartGameScreen onStartGameButton={startGameHandler} />;
  
  if(userDigit) {
    content = <GameScreen userSelectedDigit={userDigit} />;
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