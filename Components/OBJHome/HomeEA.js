import { StyleSheet, View, Image, Text } from "react-native";
import COLORS from '../Farben';
import TitleAmountText from '../TextComponents/TitelAmountText';
import NavText from '../TextComponents/NavText';
import DateText from '../TextComponents/DateText';

const HomeIncome= ({text, img}) => {
    return (
        <View style={styles.container}>
            <Text style={{color:COLORS.schriftMid}}><NavText>Einnahmen</NavText></Text>
            <Text style={{color:COLORS.schriftDark}}><DateText>April</DateText></Text>
            
            <View style={styles.bildmittext}>
                <Image source={img} style={styles.image} /> 
                <Text style={{color:COLORS.greenDark}}><TitleAmountText>{text}</TitleAmountText></Text>
            </View>
        </View>
    );
}
export default HomeIncome;

const styles = StyleSheet.create({ 
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 104,
        width: 136,
        backgroundColor: COLORS.greenLight,
        borderRadius: 15,
        padding: 10,
    },
    bildmittext: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        paddingTop: 20,
    },
    image: {
        width: 32,
        height: 32,
    },
});