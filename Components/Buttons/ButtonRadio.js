import React, { useState } from 'react';
import { View, Pressable, StyleSheet, Text} from 'react-native';
import RadioDefaultText from '../TextComponents/RadioDefaultText';
import COLORS from '../Farben';

const ButtonRadio = ({selected, onPress, label}) => {
  return (
      <Pressable style={styles.container} onPress={onPress}>
          <View style={styles.button}>
            <View style={[styles.nob, selected? styles.nobOn : styles.nobOff]}></View>
          </View>
          <Text style={{color: COLORS.schriftDark}}><RadioDefaultText>{label}</RadioDefaultText></Text>
      </Pressable>
  );
};

const RadioButtonGroup = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <View style={styles.groupContainer}>
      {options.map((option, index) => (
        <ButtonRadio
          key={index}
          label={option}
          selected={selectedOption === option}
          onPress={() => setSelectedOption(option)}
        />
      ))}
    </View>
  );
}; export default RadioButtonGroup;

const styles = StyleSheet.create({
  groupContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 14,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 5,
  },
  button: {
    width: 26,
    height: 26,
    borderRadius: 25,
    backgroundColor: COLORS.primaryLight,
    padding: 4,
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


