import { StyleSheet, View, Image } from "react-native";
import COLORS from '../Farben';
import TitleAmountText from '../TextComponents/TitelAmountText';
import NavText from '../TextComponents/NavText';
import DateText from '../TextComponents/DateText';

const HomeIncome= ({text, img}) => {
    return (
        <View style={styles.container}>
            <NavText style={styles.navText}>Einnahmen</NavText>
            <DateText style={styles.dateText}>April</DateText>
            
            <View style={styles.bildmittext}>
                <Image source={img} style={styles.image} /> 
                <TitleAmountText style={styles.amountText}>{text}</TitleAmountText>
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
    navText: {
        color: COLORS.schriftMid,
    },
    dateText: {
        color: COLORS.schriftDark,
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
    amountText: {
        color: COLORS.greenDark,
    },
});