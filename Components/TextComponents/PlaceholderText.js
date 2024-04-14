import { StyleSheet, Text, View} from 'react-native';
import OurFont from './OurFont';


const PlaceholderText=({children}) => {
  return (
      <OurFont>
        <Text style={styles.placeholder}>{children}</Text>
      </OurFont>
  );
}

const styles = StyleSheet.create({
  placeholder: {
    fontSize: 15,
  },
});

export default PlaceholderText;