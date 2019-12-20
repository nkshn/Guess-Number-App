import React from 'react';
import { StyleSheet, View  } from 'react-native';

import Colors from '../constants/colors';

const Card = props => {
  return <View style={{...styles.card, ...props.style}}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 7,
    elevation: 8,
    paddingHorizontal: 5,
    paddingVertical: 15,
    backgroundColor: Colors.mainWhite,
  },
});

export default Card;