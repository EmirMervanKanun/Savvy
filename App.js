import  Navbar  from './Components/Navigation/Navbar.js';
import Header from './Components/TextComponents/Header.js';
import OurFont from './Components/TextComponents/OurFont.js';
import RadioDefaultText from './Components/TextComponents/RadioDefaultText.js';
import NavText from './Components/TextComponents/NavText.js';
import DateText from './Components/TextComponents/DateText.js';
import ButtonText from './Components/TextComponents/ButtonText.js';
import TitelAmountText from './Components/TextComponents/TitelAmountText.js';
import PlaceholderText from './Components/TextComponents/PlaceholderText.js';
import SavingsAmountText from './Components/TextComponents/SavingsAmountText.js';
import { useFonts } from 'expo-font';


export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Sora-Regular': require('./assets/Fonts/Sora-Regular.ttf'),
    'Sora-Bold': require('./assets/Fonts/Sora-Bold.ttf'),
    'Sora-SemiBold': require('./assets/Fonts/Sora-SemiBold.ttf')
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return(
    <Navbar />
  );
}

    
  
