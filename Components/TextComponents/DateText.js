import { StyleSheet, Text, View} from 'react-native';
import OurFont from './OurFont';


const DateText=({children}) => {
  return (
      <OurFont>
        <Text style={styles.date}>{children}</Text>
      </OurFont>
  );
}

const styles = StyleSheet.create({
  date: {
    fontSize: 12,
  },
});

export default DateText;