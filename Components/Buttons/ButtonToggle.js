import React, { useState } from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import COLORS from '../Farben';

const ToggleButton = () => {
  // Initial state ist 'false' (aus)
  const [isOn, setIsOn] = useState(false);

  // Funktion zum Umschalten des Zustands
  const toggleSwitch = () => {
    setIsOn(previousState => !previousState);
  };

  return (
    <Pressable style={[styles.button, isOn ? styles.buttonOn : styles.buttonOff]} onPress={toggleSwitch}>
        <View style={[styles.nob, isOn? styles.nobOn : styles.nobOff]}></View>
    </Pressable>
  );
};
export default ToggleButton;

const styles = StyleSheet.create({
  button: {
    width: 58,
    height: 26,
    borderRadius: 25,
    padding: 4,
    flexDirection: 'row',
    alignContent: 'center',
  },
  buttonOn: {
    backgroundColor: COLORS.primaryDark,
    justifyContent: 'flex-end',
  },
  buttonOff: {
    backgroundColor: COLORS.primaryLight,
    justifyContent: 'flex-start',
  },
  nob: {
    width: 18,
    height: 18,
    borderRadius: 18,
  },
    nobOn: {
        backgroundColor: COLORS.primaryLight,
    },
    nobOff: {
        backgroundColor: COLORS.primaryDark,
    },
});


