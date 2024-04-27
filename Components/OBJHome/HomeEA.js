import { StyleSheet, View, Image } from "react-native";
import COLORS from '../Farben';
import TitleAmountText from '../TextComponents/TitelAmountText';
import NavText from '../TextComponents/NavText';
import DateText from '../TextComponents/DateText';

const HomeIncome= ({text, img}) => {
    return (
        <View style={styles.containerI}>
            <NavText style={styles.navText}>Einnahmen</NavText>
            <DateText style={styles.navText}>April</DateText>
            <Image source={img} style={styles.image} /> 
            <TitleAmountText style={styles.amountText}>{text}</TitleAmountText>
        </View>
    );
}
export default HomeIncome;

const styles = StyleSheet.create({ 
    containerI: {
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
    image: {
        width: 32,
        height: 32,
        marginLeft: -70,
    },
    amountText: {
        color: COLORS.greenDark,
        paddingRight: 0,
        justifyContent: 'flex-end',
        
    },
    
});