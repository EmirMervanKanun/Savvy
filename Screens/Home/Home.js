import { Text, Pressable, Image, View, StyleSheet } from 'react-native';
import ButtonSettingsItem from '../../Components/Buttons/SettingsItem';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CommonActions } from '@react-navigation/native';
import EditProfile from '../Settings/EditProfile';
import Notifications from '../Settings/Notifications';
import DataProtection from '../Settings/DataProtection';
import AGB from '../Settings/Agb';
import Imprint from '../Settings/Imprint';
import Header from '../../Components/TextComponents/Header';

const Stack = createNativeStackNavigator();

function SettingsStart({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <Header>Einstellungen</Header>
      </View>

      <View sytle={styles.buttonContainer}>
        <ButtonSettingsItem onPress={() => navigation.dispatch(
          CommonActions.navigate(
            { name: 'EditProfile' }
          ))} >Profil bearbeiten</ButtonSettingsItem>
      </View>

      <View sytle={styles.buttonContainer}>
        <ButtonSettingsItem onPress={() => navigation.dispatch(
          CommonActions.navigate(
            { name: 'Notifications' }
          ))} >Mitteilungen</ButtonSettingsItem>
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
  );
}

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SettingsMain" component={SettingsStart} options={{ headerShown: false }} />
      <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
      <Stack.Screen name="Notifications" component={Notifications} options={{ headerShown: false }} />
      <Stack.Screen name="AGB" component={AGB} options={{ headerShown: false }} />
      <Stack.Screen name="DataProtection" component={DataProtection} options={{ headerShown: false }} />
      <Stack.Screen name="Imprint" component={Imprint} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function Home() {
  return (
    <MyStack />
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
  },
  headerContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
});