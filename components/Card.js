import React from 'react';
import { StyleSheet, View  } from 'react-native';

import Colors from '../constants/colors';

const Card = props => {
  return <View style={{...styles.card, ...props.style}}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 7,
    paddingHorizontal: 5,
    paddingVertical: 15,
    backgroundColor: Colors.mainWhite,
    alignSelf: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
});

export default Card;