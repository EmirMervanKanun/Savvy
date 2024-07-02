import { Text, Pressable, Image, View, StyleSheet } from 'react-native';
import ButtonSettingsItem from '../../Components/Buttons/SettingsItem';
import { CommonActions } from '@react-navigation/native';
import Header from '../../Components/TextComponents/Header';

export default function Settings({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <Header>Einstellungen</Header>
      </View>

      <View>
        <View style={styles.headerMenu}>
          <Header>Profil</Header>
        </View>
        <View sytle={styles.buttonContainer}>
          <ButtonSettingsItem onPress={() => navigation.dispatch(
            CommonActions.navigate(
              { name: 'EditProfile' }
            ))} >Profil bearbeiten</ButtonSettingsItem>
        </View>
      </View>


      <View>
        <View style={styles.headerMenu}>
          <Header>Allgemeines</Header>
        </View>
        <View sytle={styles.buttonContainer}>
          <ButtonSettingsItem onPress={() => navigation.dispatch(
            CommonActions.navigate(
              { name: 'Categories' }
            ))} >Kategorien</ButtonSettingsItem>
        </View>

        <View sytle={styles.buttonContainer}>
          <ButtonSettingsItem onPress={() => navigation.dispatch(
            CommonActions.navigate(
              { name: 'Notifications' }
            ))} >Mitteilungen</ButtonSettingsItem>
        </View>
      </View>


      <View>
        <View style={styles.headerMenu}>
          <Header>Sonstiges</Header>
        </View>
        <View sytle={styles.buttonContainer}>
          <ButtonSettingsItem onPress={() => navigation.dispatch(
            CommonActions.navigate(
              { name: 'AGB' }
            ))} >AGB</ButtonSettingsItem>
        </View>

        <View sytle={styles.buttonContainer}>
          <ButtonSettingsItem onPress={() => navigation.dispatch(
            CommonActions.navigate(
              { name: 'DataProtection' }
            ))} >Datenschutz</ButtonSettingsItem>
        </View>

        <View sytle={styles.buttonContainer}>
          <ButtonSettingsItem onPress={() => navigation.dispatch(
            CommonActions.navigate(
              { name: 'Imprint' }
            ))} >Impressum</ButtonSettingsItem>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 160,
    backgroundColor: 'white',
    height: '100%',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    margin: 10,
  },
  headerContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  headerMenu: {
    marginTop: 40,
    alignItems: 'flex-start',
    marginBottom: 5,
  },
});