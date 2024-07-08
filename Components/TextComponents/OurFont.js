import React from 'react';
import { StyleSheet, Text } from 'react-native';

const OurFont = ({ children }) => {
  return (
    <Text style={styles.text}>{children}</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Sora-Regular',
  },
});

export default OurFont;
