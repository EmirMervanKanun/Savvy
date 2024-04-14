import { StyleSheet, Text, View} from 'react-native';
import OurFont from './OurFont';


const Header=({children}) => {
  return (
      <OurFont>
        <Text style={styles.header}>{children}</Text>
      </OurFont>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 24,
  },
});

export default Header;