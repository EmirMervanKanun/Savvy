import { StyleSheet, View, Image, Text } from "react-native";
import COLORS from '../Farben';
import TitleAmountText from '../TextComponents/TitelAmountText';
import NavText from '../TextComponents/NavText';
import DateText from '../TextComponents/DateText';

//I = Income, E = Expenses

const HomeIE = ({ props }) => {
    return (
        <View style={styles.container}>
            <View style={[styles.income, styles.box]}>
                <View style={styles.text}>
                    <Text style={{ color: COLORS.schriftMid }}><NavText>Einnahmen</NavText></Text>
                    <Text style={{ color: COLORS.schriftDark }}><DateText>April</DateText></Text>
                </View>
                <View style={styles.bildmittext}>
                    <Image source={require('../../Icons/Objects/arrowIncome.png')} style={styles.image} />
                    <Text style={{ color: COLORS.greenDark }}><TitleAmountText>{props.iAmount}€</TitleAmountText></Text>
                </View>
            </View>
            <View style={[styles.expenses, styles.box]}>
                <View style={styles.text}>
                    <Text style={{ color: COLORS.schriftMid }}><NavText>Ausgaben</NavText></Text>
                    <Text style={{ color: COLORS.schriftDark }}><DateText>April</DateText></Text>
                </View>
                <View style={styles.bildmittext}>
                    <Image source={require('../../Icons/Objects/arrowExpense.png')} style={styles.image} />
                    <Text style={{ color: COLORS.redDark }}><TitleAmountText>- {props.eAmount}€</TitleAmountText></Text>
                </View>
            </View>
        </View>
    );
}
export default HomeIE;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 20,
    },
    box: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 104,
        width: 136,
        borderRadius: 15,
        gap: 4,
    },
    income: {
        backgroundColor: COLORS.greenLight,
    },
    expenses: {
        backgroundColor: COLORS.redLight,
    },
    text: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    bildmittext: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
    },
    image: {
        width: 32,
        height: 32,
    },
});