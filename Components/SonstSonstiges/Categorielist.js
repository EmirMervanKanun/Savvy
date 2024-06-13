import { StyleSheet, View, Image, Text, FlatList } from 'react-native';
import COLORS from '../Farben';
import PlaceholderText from '../TextComponents/PlaceholderText';

const Categories = ({ props }) => {
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={props}
          renderItem={({ item, index }) => {
            const isLastItem = index === props.length - 1;
            return (
              <View style={[styles.categories, isLastItem && styles.lastItem]}>
                <Image source={item.icon} style={styles.icon} />
                <Text style={{ color: COLORS.schriftDark }}>
                  <PlaceholderText>{item.label}</PlaceholderText>
                </Text>
              </View>
            );
          }}
          keyExtractor={(item) => item.label}
        />
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    width: 358,
    height: 650,
  },
  list: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 80,
  },
  icon: {
    width: 32,
    height: 32,
  },
  categories: {
    flexDirection: 'row',
    gap: 20,
    padding: 5,
    paddingLeft: 10,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.schriftMid,
  },
  lastItem: {
    borderBottomWidth: 0,
  },
});
