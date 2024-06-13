import React, { useState } from 'react';
import { View, Pressable, StyleSheet,Text } from 'react-native';
import TitelAmountText from '../TextComponents/TitelAmountText';
import COLORS from '../Farben';

const ButtonFilter = ({selected, onPress, label}) => {
  return (
      <Pressable style={styles.container} onPress={onPress}>
        <View style={selected? {borderBottomWidth:2, borderColor: COLORS.schriftDark} : null}>
          <Text style={styles.filterText}><TitelAmountText>{label}</TitelAmountText></Text>
        </View>
          
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
  filterText: {
    color: COLORS.schriftDark,
    fontSize: 16,
    fontWeight: 'bold',
  },
});


