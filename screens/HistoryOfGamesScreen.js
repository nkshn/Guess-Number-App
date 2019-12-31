import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import MainTitle from '../components/MainTitle';
import SubTitle from '../components/SubTitle';

const HistoryOfGamesScreen = (props) => {

  const { userSelectedDigit, counterTries } = props;

  const [dataArray, setDataArray] = useState([
    { id: '1', numberOfRounds: '10', userDigit: '33' },
    { id: '2', numberOfRounds: '20', userDigit: '65' },
    { id: '3', numberOfRounds: '30', userDigit: '97' },
    { id: '4', numberOfRounds: '40', userDigit: '11' },
    { id: '5', numberOfRounds: '50', userDigit: '17' }
  ]);

  return (
    <View style={styles.container}>
      <MainTitle style={styles.title}>History Previos Games</MainTitle>
      <FlatList
        data={dataArray}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <Text>NUI</Text>}
        renderItem={itemData => (
          <View style={styles.itemContainer}>
            <Text style={{ textAlign: 'center' }}>#{itemData.item.id}</Text>
            <Text>Counter of Rounds:  {itemData.item.numberOfRounds}</Text>
            <Text>User Choosen Digit: {itemData.item.userDigit}</Text>
          </View>
        )} />
      <View style={styles.textContainer}>
        <SubTitle>User Digit: {userSelectedDigit}</SubTitle>
        <SubTitle>Rounds: {counterTries}</SubTitle>
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
    marginVertical: 13
  },
  textContainer: {
    width: 200,
    marginVertical: 10,
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

export default HistoryOfGamesScreen;