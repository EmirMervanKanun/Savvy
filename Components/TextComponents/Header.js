import React from 'react';
import { StyleSheet, Text } from 'react-native';
import OurFont from './OurFont';

const Header = ({ children }) => {
  return (
    <OurFont>
      <Text style={styles.header}>{children}</Text>
    </OurFont>
  );
};

const styles = StyleSheet.create({
  header: {
    fontFamily: 'Sora-Bold',
    fontSize: 20,
    lineHeight: 24,
  },
});

export default Header;
