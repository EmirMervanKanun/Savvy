import { StyleSheet, View, Image, Text} from 'react-native';
import PlaceholderText from '../TextComponents/PlaceholderText';
import COLORS from '../Farben';


export const CategorySwipe =({img, text}) => {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={img} />
            <Text style={{color: COLORS.schriftDark}}><PlaceholderText>{text}</PlaceholderText></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 292,
        height: 48,
        paddingHorizontal: 16,
        paddingVertical: 8,
        gap: 8,
    },
    image: {
        resizeMode: 'stretch',
        width: 32,
        height: 32,
    },
});