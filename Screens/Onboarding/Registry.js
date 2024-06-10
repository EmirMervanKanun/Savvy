import { StyleSheet, View, ScrollView } from 'react-native';
import COLORS from '../../Components/Farben';

import Header from '../../Components/TextComponents/Header';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SelectProfilePicture from '../../Components/Selection/SelectProfilePicture';
import InputText from '../../Components/Inputfelder/InputText'
import CurrencySmall from '../../Components/Dropdowns/CurrencySmall';
import Button from '../../Components/Buttons/Button';

export default function Registry() {
  return (
    <SafeAreaProvider>
    <ScrollView contentContainerStyle={styles.container} style={styles.contentContainer}>
      <View style={{paddingBottom: 40}}>
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
          <InputText placeholder="Gib dein Startkapital ein" />
          <View style={styles.currency}>
          <CurrencySmall />
          </View>
        </View>
      </View>

      <View style={styles.containerButton}>
        <Button props={{
          size: 'mid',
          color: 'blue',
          img: require('../../Icons/Button/cancel.png'),
          text: 'Abbrechen',
        }}
        />

        <Button props={{
          size: 'mid',
          color: 'blue',
          img: require('../../Icons/Button/save.png'),
          text: 'Speichern',
        }}
        />
      </View>
    </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  contentContainer:
  {
    flex: 1,
  },
  container: {
    paddingVertical: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 150,
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