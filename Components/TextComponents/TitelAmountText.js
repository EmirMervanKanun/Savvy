import React from 'react';
import { StyleSheet, Text } from 'react-native';
import OurFont from './OurFont';

const TitelAmountText = ({ children }) => {
  return (
    <OurFont>
      <Text style={styles.titelAmount}>{children}</Text>
    </OurFont>
  );
};

const styles = StyleSheet.create({
  titelAmount: {
    fontFamily: 'Sora-Bold',
    fontSize: 15,
  },
});

export default TitelAmountText;
