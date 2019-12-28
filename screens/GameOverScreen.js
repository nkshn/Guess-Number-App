import React from "react";
import { View, StyleSheet, Button, Image } from "react-native";

import Colors from '../constants/colors';
import SubTitle from '../components/SubTitle';
import MainTitle from '../components/MainTitle';

const GameOverScreen = props => {
  const { counterTries, userSelectedDigit, restartGame } = props;

  return (
    <View style={styles.screen}>
      <MainTitle>Game is Over!</MainTitle>
      <View style={styles.imageContainer}><Image source={require('../assets/images/success.png')} style={styles.image} resizeMode="cover" /></View>
      <SubTitle>User Digit: {userSelectedDigit}</SubTitle>
      <SubTitle>Tries: {counterTries}</SubTitle>
      <View style={{ width: '35%', marginTop: 10 }}><Button title="New Game" onPress={restartGame} color={Colors.mainGreen} /></View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.mainPink,
    overflow: 'hidden',
    marginVertical: 15,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default GameOverScreen;