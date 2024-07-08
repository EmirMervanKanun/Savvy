import React from 'react';
import { StyleSheet, Text } from 'react-native';
import OurFont from './OurFont';

const SavingsAmountText = ({ children }) => {
  return (
    <OurFont>
      <Text style={styles.savam}>{children}</Text>
    </OurFont>
  );
};

const styles = StyleSheet.create({
  savam: {
    fontSize: 14,
    fontFamily: 'Sora-SemiBold',
  },
});

export default SavingsAmountText;
