import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OurFont from './OurFont';

const ButtonText = ({ children }) => {
  return (
    <OurFont>
      <Text style={styles.button}>{children}</Text>
    </OurFont>
  );
};

const styles = StyleSheet.create({
  button: {
    fontFamily: 'Sora-SemiBold',
    fontSize: 15,
  },
});

export default ButtonText;
