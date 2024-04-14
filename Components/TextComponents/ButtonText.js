import { StyleSheet, Text, View} from 'react-native';
import OurFont from './OurFont';


const ButtonText=({children}) => {
  return (
      <OurFont>
        <Text style={styles.button}>{children}</Text>
      </OurFont>
  );
}

const styles = StyleSheet.create({
  button: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default ButtonText;