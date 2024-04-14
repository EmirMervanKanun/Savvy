import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import Header from './Components/TextComponents/Header.js';
import OurFont from './Components/TextComponents/OurFont.js';
import RadioDefaultText from './Components/TextComponents/RadioDefaultText.js';
import NavText from './Components/TextComponents/NavText.js';
import DateText from './Components/TextComponents/DateText.js';
import ButtonText from './Components/TextComponents/ButtonText.js';
import TitelAmountText from './Components/TextComponents/TitelAmountText.js';
import PlaceholderText from './Components/TextComponents/PlaceholderText.js';
import SavingsAmountText from './Components/TextComponents/SavingsAmountText.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hallo Welt!</Text>
      <RadioDefaultText>Hallo Welt!</RadioDefaultText>
      <NavText>Hallo Welt!</NavText>
      <DateText>Hallo Welt!</DateText>
      <ButtonText>Hallo Welt!</ButtonText>
      <TitelAmountText>Hallo Welt!</TitelAmountText>
      <Header>Hallo Welt!</Header>
      <PlaceholderText>Hallo Welt!</PlaceholderText>
      <SavingsAmountText>Hallo Welt!</SavingsAmountText>
      <OurFont>Hallo Welt!</OurFont>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
  },
});
