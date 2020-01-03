import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import Colors from '../constants/colors';
import SubTitle from '../components/SubTitle';
import MainTitle from '../components/MainTitle';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
  const { counterTries, userSelectedDigit, restartGame, showGameHistory } = props;

  return (
    <View style={styles.screen}>
      <MainTitle style={styles.title}>Game is Over!</MainTitle>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/success.png')} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.resultContainerText}>
        <SubTitle style={styles.resultText}>
          Your phone needed <Text style={styles.highlightedText}>{counterTries} tries </Text>
          to gueess user <Text style={styles.highlightedText}>digit {userSelectedDigit}</Text>
        </SubTitle>
      </View>
      <View style={styles.buttonsContainer}>
        <MainButton
          title="Show History"
          onPress={showGameHistory}
          bodyStyles={{ width: 135, backgroundColor: Colors.mainPink, borderColor: Colors.mainPink }} />
        <MainButton
          title="New Game"
          onPress={restartGame}
          bodyStyles={{ width: 135, backgroundColor: Colors.mainGreen, borderColor: Colors.mainGreen }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 24,
    marginBottom: 15,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.mainPink,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  highlightedText: {
    color: Colors.mainPink,
    fontFamily: 'lato-bold'
  },
  resultContainerText: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
  resultText: {
    fontSize: 20,
    textAlign: 'center',
  },
  buttonsContainer: {
    width: 280,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default GameOverScreen;