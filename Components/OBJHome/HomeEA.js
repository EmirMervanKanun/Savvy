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
            <Image source={img} style={styles.image} /> 
            <TitleAmountText style={styles.amountText}>{text}</TitleAmountText>
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
        flex:1,
        color: COLORS.schriftMid,
        backgroundColor: COLORS.yellowDark,
        
    },
    dateText: {
        flex:1,
        color: COLORS.schriftDark,
    },
    image: {
        flex:1,
        width: 32,
        height: 32,
        marginLeft: 0,
        backgroundColor: COLORS.redDark,
    },
    amountText: {
        flex:1,
        color: COLORS.greenDark,
        paddingRight: 0,
        backgroundColor: COLORS.blueDark,  
    },
});