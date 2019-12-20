import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import Card from '../components/Card'

const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.startNewGameText}>Start a New Game!</Text>
      <Card style={styles.selectNumberCard}>
        <Text style={styles.selectNumberText}>Select a Number</Text>
        <View style={styles.selectNumberButtons}>
          <View style={{width: '40%'}}><Button color='#eb2121' title="Reset" onPress={() => {alert("Pressed Button [Reset]")}} /></View>
          <View style={{width: '40%'}}><Button color='#21eb57' title="Accept" onPress={() => {alert("Pressed Button [Accept]")}} /></View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  startNewGameText: {
    fontSize: 20,
    color: '#777',
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 25,
    letterSpacing: 1,
  },
  selectNumberCard: {
    width: 325,
    maxWidth: '90%',
    alignSelf: 'center',
  },
  selectNumberText: {
    fontSize: 18,
    color: '#777',
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 15,
  },
  selectNumberButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default StartGameScreen;