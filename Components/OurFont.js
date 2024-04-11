import { StyleSheet, Text, View} from 'react-native';

export default function OurFont(text_input) {
  return (
    <View style={styles.container}>
      <Text> %text_input</Text>
    </View>
  );
}