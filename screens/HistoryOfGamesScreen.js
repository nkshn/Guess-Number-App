import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import MainTitle from '../components/MainTitle';
import SubTitle from '../components/SubTitle';

import Colors from "../constants/colors";
import MainButton from '../components/MainButton';

const HistoryOfGamesScreen = (props) => {

  const { userSelectedDigit, counterTries, backToGameOver } = props;

  const [dataArray, setDataArray] = useState([
    { id: '1', userDigit: '33', numberOfRounds: '10' },
    { id: '2', userDigit: '65', numberOfRounds: '20' },
    { id: '3', userDigit: '97', numberOfRounds: '30' },
    { id: '4', userDigit: '11', numberOfRounds: '40' },
    { id: '5', userDigit: '47', numberOfRounds: '50' },
  ]);

  return (
    <View style={styles.container}>
      <MainTitle style={styles.title}>History of previos games</MainTitle>
      <FlatList
        data={dataArray}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <Text style={styles.listIsEmptyText}>List Is Empty</Text>}
        renderItem={itemData => (
          <View style={styles.itemContainer}>
            <SubTitle style={{ textAlign: 'center' }}>#{itemData.item.id}</SubTitle>
            <SubTitle>Counter of Rounds:  {itemData.item.numberOfRounds}</SubTitle>
            <SubTitle>User Choosen Digit: {itemData.item.userDigit}</SubTitle>
          </View>
        )} />
      <MainButton
        title="Back"
        onPress={backToGameOver}
        bodyStyles={styles.backButton} />
      <View style={styles.textContainer}>
        <SubTitle style={{ fontSize: 12 }}>User Digit: {userSelectedDigit}</SubTitle>
        <SubTitle style={{ fontSize: 12 }}>Rounds: {counterTries}</SubTitle>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginVertical: 23,
  },
  textContainer: {
    width: 125,
    marginVertical: 7,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  itemContainer: {
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 2,
    marginVertical: 3,
  },
  listIsEmptyText: {
    fontSize: 23,
    letterSpacing: 1,
    color: Colors.mainGrey,
    textTransform: 'capitalize',
  },
  backButton: {
    width: 120,
    marginVertical: 10,
    backgroundColor: Colors.mainRed,
    borderColor: Colors.mainRed,
  },
});

export default HistoryOfGamesScreen;