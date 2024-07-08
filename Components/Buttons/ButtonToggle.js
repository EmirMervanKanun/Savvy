import React, { useState } from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import COLORS from '../Colors';

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(previousState => !previousState);
  };

  return (
    <Pressable
      style={[styles.button, isOn ? styles.buttonOn : styles.buttonOff]}
      onPress={toggleSwitch}
      testID="toggle-button"
    >
      <View
        style={[styles.nob, isOn ? styles.nobOn : styles.nobOff]}
        testID="toggle-nob"
      ></View>
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
