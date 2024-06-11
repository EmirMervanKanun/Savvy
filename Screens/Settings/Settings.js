import { Text, Pressable, Image, View, StyleSheet } from 'react-native';
import ButtonSettingsItem from '../../Components/Buttons/SettingsItem';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CommonActions } from '@react-navigation/native';
import EditProfile from '../Settings/EditProfile';
import Notifications from '../Settings/Notifications';
import DataProtection from '../Settings/DataProtection';
import AGB from '../Settings/Agb';
import Imprint from '../Settings/Imprint';
import Categories from '../Settings/Categories';
import Header from '../../Components/TextComponents/Header';

const Stack = createNativeStackNavigator();

function SettingsStart({ navigation }) {
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

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SettingsMain" component={SettingsStart} options={{ headerShown: false }} />
      <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
      <Stack.Screen name="Categories" component={Categories} options={{ headerShown: false }} />
      <Stack.Screen name="Notifications" component={Notifications} options={{ headerShown: false }} />
      <Stack.Screen name="AGB" component={AGB} options={{ headerShown: false }} />
      <Stack.Screen name="DataProtection" component={DataProtection} options={{ headerShown: false }} />
      <Stack.Screen name="Imprint" component={Imprint} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function Settings() {
  return (
    <MyStack />
  )
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