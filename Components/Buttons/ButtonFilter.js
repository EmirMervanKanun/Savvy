import React, { useState } from 'react';
import { View, Pressable, StyleSheet,Text } from 'react-native';
import TitelAmountText from '../TextComponents/TitelAmountText';
import COLORS from '../Farben';

const ButtonFilter = ({selected, onPress, label}) => {
  return (
      <Pressable style={styles.container} onPress={onPress}>
          <Text style={[styles.filterText, selected? styles.underlined : null]}><TitelAmountText>{label}</TitelAmountText></Text>
      </Pressable>
  );
};

const FilterGroup = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <View style={styles.groupContainer}>
      {options.map((option, index) => (
        <ButtonFilter
          key={index}
          label={option}
          selected={selectedOption === option}
          onPress={() => setSelectedOption(option)}
        />
      ))}
    </View>
  );
}; export default FilterGroup;

const styles = StyleSheet.create({
  groupContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 14,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  underlined: {
    textDecorationLine: 'underline',
  },
});


