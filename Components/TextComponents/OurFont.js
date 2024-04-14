import { StyleSheet, Text, View} from 'react-native';

const OurFont= ({children}) => {
  return (
      <Text style={styles.text}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Roboto',
    fontSize: 50,
  },
});

export default OurFont;
