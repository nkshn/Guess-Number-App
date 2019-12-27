import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

import * as Font from "expo-font";
import { AppLoading } from "expo";

const fetchFonts = () => {
  return Font.loadAsync({
    "lato-bold": require("./assets/fonts/Lato-Bold.ttf"),
    "lato-light": require("./assets/fonts/Lato-Light.ttf"),
    "lato-regular": require("./assets/fonts/Lato-Regular.ttf")
  });
};

export default function App() {
  const [userDigit, setUserDigit] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }

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

  if (userDigit && guessRounds <= 0) {
    content = (
      <GameScreen userSelectedDigit={userDigit} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        counterTries={guessRounds}
        userSelectedDigit={userDigit}
        restartGame={configureNewGameHandler}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 }
});