import React, { useState } from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import RadioDefaultText from '../TextComponents/RadioDefaultText';
import COLORS from '../Farben';

const ToggleButton = (props) => {
  // Initial state ist 'false' (aus)
  const [isOn, setIsOn] = useState(false);

  // Funktion zum Umschalten des Zustands
  const toggleSwitch = () => {
    setIsOn(previousState => !previousState);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={toggleSwitch}>
          <View style={[styles.nob, isOn? styles.nobOn : styles.nobOff]}></View>
      </Pressable>
      <RadioDefaultText>{props.text}</RadioDefaultText>
    </View>
  );
};
export default ToggleButton;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 5,
  },
  button: {
    width: 24,
    height: 24,
    borderRadius: 23,
    alignContent: 'center',
    justifyContent: 'center',
  },
  nob: {
    width: 18,
    height: 18,
    borderRadius: 17,
  },
    nobOn: {
        backgroundColor: COLORS.primaryDark,
    },
    nobOff: {
        backgroundColor: COLORS.primaryLight,
    },
});


