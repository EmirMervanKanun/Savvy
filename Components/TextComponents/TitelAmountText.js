import { StyleSheet, Text, View} from 'react-native';
import OurFont from './OurFont';


const TitelAmountText=({children}) => {
  return (
      <OurFont>
        <Text style={styles.titelAmount}>{children}</Text>
      </OurFont>
  );
}

const styles = StyleSheet.create({
  titelAmount: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default TitelAmountText;