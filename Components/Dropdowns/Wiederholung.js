import React, { useState } from 'react';
  import { StyleSheet, View, Text } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  import COLORS from '../Farben';
  import { ButtonText, PlaceholderText } from '../TextComponents/ButtonText';

  const data = [
    { label: 'Keine Wiederholung', value: '1' },
    { label: 'Jährlich', value: '2' },
    { label: 'Monatlich', value: '3' },
    { label: 'Alle zwei Wochen', value: '4' },
    { label: 'Wöchentlich', value: '5' },
    { label: 'Täglich', value: '6' },
  ];

  const DropdownComponent = () => {
    const [value, setValue] = useState(null);

    const renderItem = item => {
      return (
        <View style={styles.item}>
          <Text style={styles.textItem}>{item.label}</Text>
          {item.value === value}
        </View>
      );
    };

    return (
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="help"
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
        renderItem={renderItem}
      />
    );
  };

  export default DropdownComponent;

  const styles = StyleSheet.create({
    dropdown: {
      margin: 16,
      height: 48,
      width: 292,
      backgroundColor: COLORS.primaryLight,
      borderRadius: 15,
      padding: 16,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 2,
    },
    item: {
      padding: 16,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: COLORS.primaryLight,
      borderBottomColor: COLORS.schriftMid,
      borderBottomWidth: 1,
    },
    textItem: {
      flex: 1,
      fontSize: 16,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
  });