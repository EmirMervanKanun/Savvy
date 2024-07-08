import React from 'react';
import { StyleSheet, Text } from 'react-native';
import OurFont from './OurFont';

const NavText = ({ children }) => {
  return (
    <OurFont>
      <Text style={styles.nav}>{children}</Text>
    </OurFont>
  );
};

const styles = StyleSheet.create({
  nav: {
    fontSize: 11,
    fontFamily: 'Sora-SemiBold',
  },
});

export default NavText;
