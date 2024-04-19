import { StyleSheet, Text, View} from 'react-native';
import OurFont from './OurFont';


const RadioDefaultText=({children}) => {
  return (
      <OurFont>
        <Text style={styles.radio}>{children}</Text>
      </OurFont>
  );
}

const styles = StyleSheet.create({
  radio: {
    fontSize: 11,
  },
});

export default RadioDefaultText;