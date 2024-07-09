import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PlaceholderText from '../TextComponents/PlaceholderText';
import TitelAmountText from '../TextComponents/TitelAmountText';
import COLORS from '../Colors';
import Button from '../Buttons/Button';

export const DeleteOverlay = ({ title, onCancel, onDelete }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.containerText}>
          <PlaceholderText style={styles.placeholderText}>
            Möchtest du
            <TitelAmountText> {title} </TitelAmountText>
            wirklich löschen?
          </PlaceholderText>
        </Text>
      </View>

      <View style={styles.containerButton}>
        <Button text="Abbrechen" img={require('../../Icons/Button/cancel.png')} onPress={onCancel} />
        <Button text="Löschen" img={require('../../Icons/Button/delete.png')} isRed='1' onPress={onDelete} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    width: 324,
    height: 134,
    paddingHorizontal: 32,
    paddingVertical: 24,
    gap: 16,
    backgroundColor: '#FFF',
    borderRadius: 15,
  },
  containerButton: {
    flexDirection: 'row',
    gap: 20,
  },
  containerText: {
    textAlign: 'center',
  },
  placeholderText: {
    color: COLORS.schriftDark,
  },
});

export default DeleteOverlay;
