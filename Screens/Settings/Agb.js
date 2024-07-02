import { StyleSheet, View } from 'react-native';
import React from 'react';
import Header from '../../Components/TextComponents/Header';
import PlaceholderText from '../../Components/TextComponents/PlaceholderText';
import ButtonBack from '../../Components/Buttons/ButtonBack';
import { CommonActions } from '@react-navigation/native';

export default function AgbStart({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.buttonContainer}>
        <ButtonBack
          onPress={() => navigation.dispatch(
            CommonActions.navigate(
              { name: 'Settings' }
            ))} />
      </View>

      <View style={styles.headerContainer}>
        <Header>AGB</Header>
      </View>

      <View style={styles.placeholderContainer}>
        <PlaceholderText>Hier könnte ein Text zu den AGBs stehen</PlaceholderText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
    backgroundColor: 'white',
    paddingBottom: 160,
  },
  buttonContainer: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
  headerContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  placeholderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});
