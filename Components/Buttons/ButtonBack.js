import { Text, Pressable, Image, StyleSheet } from 'react-native';
import ButtonText from '../TextComponents/ButtonText';

const ButtonBack = ({ onPress }) => {
    return (
        <Pressable onPress={onPress} style={styles.containerButtonBack}>
            <Image style={styles.image} source={require('../../Icons/Objects/arrowLeft.png')} />
            <Text style={styles.buttonTextBack}><ButtonText>zurück</ButtonText></Text>
        </Pressable>
    );
} 
export default ButtonBack;

styles = StyleSheet.create({
    containerButtonBack: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 24,
        width: 80,
    },
    image: {
        resizeMode: 'stretch',
        width: 24,
        height: 24,
    },
    buttonTextBack: {
        color: COLORS.schriftDark,
        alignContent: 'center',
        height: 24,
    },
});