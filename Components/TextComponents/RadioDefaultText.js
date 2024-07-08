import React from 'react';
import { StyleSheet, Text } from 'react-native';
import OurFont from './OurFont';

const RadioDefaultText = ({ children }) => {
  return (
    <OurFont>
      <Text style={styles.radio}>{children}</Text>
    </OurFont>
  );
};

const styles = StyleSheet.create({
  radio: {
    fontSize: 14,
  },
});

export default RadioDefaultText;
