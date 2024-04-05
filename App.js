import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Button, Image, TextInput} from 'react-native';
import {TabBar} from './Components/TabBar.js';
import {TabBarIcon} from './Components/TabBarIcon.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hallo Andac : Was geht AAHAAHAAHAHAAAB!</Text> 
      <Text style={styles.text}> Verliere nie mehr den Überblick. Wie viel Willst du Sparen?</Text>
      <TextInput style={styles.text}> </TextInput>
      <Button onPress={onPressLearnMore} title=" Eimn Milliooiolnen Sparn "></Button>

      <StatusBar style="auto" />
    </View>
  );
}

function onPressLearnMore() {
  // set the View background color to red
  Alert.alert('Wer den Button gedrückt hat ist Dumm');
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
});
