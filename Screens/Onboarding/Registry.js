import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from '../../Components/TextComponents/Header';
import SelectProfilePicture from '../../Components/Selection/SelectProfilePicture';
import InputText from '../../Components/Inputfelder/InputText';
import CurrencySmall from '../../Components/Dropdowns/CurrencySmall';
import Button from '../../Components/Buttons/Button';
import { useNavigation } from '@react-navigation/native';

export default function Registry() {
  const navigation = useNavigation();

  return (
    <SafeAreaProvider>
      <ScrollView contentContainerStyle={styles.container} style={styles.contentContainer}>
        <View style={{ paddingBottom: 40 }}>
          <SelectProfilePicture />
        </View>

        <View style={styles.containerInput}>
          <View style={styles.input}>
            <Header>Vorname</Header>
            <InputText placeholder="Vorname" />
          </View>

          <View style={styles.input}>
            <Header>Nachname</Header>
            <InputText placeholder="Nachname" />
          </View>

          <View style={styles.input}>
            <Header>Startkapital</Header>
            <InputText placeholder="Gib dein Startkapital ein" keyboardType='numeric' />
            <View style={styles.currency}>
              <CurrencySmall />
            </View>
          </View>
        </View>

        <View style={styles.containerButton}>
          <Button
            testID="cancel-button" // Test-ID für Abbrechen-Button hinzugefügt
            props={{
              size: 'mid',
              color: 'blue',
              img: require('../../Icons/Button/cancel.png'),
              text: 'Abbrechen',
              onPress: () => navigation.navigate('Onboarding'),
            }}
          />

          <Button
            testID="save-button" // Test-ID für Speichern-Button hinzugefügt
            props={{
              size: 'mid',
              color: 'blue',
              img: require('../../Icons/Button/save.png'),
              text: 'Speichern',
              onPress: () => navigation.navigate('MainTabs'),
            }}
          />

        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  container: {
    paddingVertical: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 150,
    backgroundColor: 'white',
  },
  containerInput: {
    gap: 32,
  },
  input: {
    gap: 8,
  },
  containerButton: {
    marginTop: 16,
    flexDirection: 'row',
    gap: 20,
  },
  currency: {
    display: 'flex',
    flexDirection: 'row-reverse',
    gap: 8,
  }
});
