import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>"Verwalte deine Ein- und Ausgaben mit *Budget*. Verliere nie mehr den Überblick. Wie viel Willst du Sparen?" </Text>
      <TextInput style={styles.text}> </TextInput>
      <Button title="Jetz Sparen"></Button>
      <StatusBar style="auto" />
    </View>
  );
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
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
  },
});
