import { StyleSheet, View, Image, Text } from "react-native";
import COLORS from '../Colors';
import TitleAmountText from '../TextComponents/TitelAmountText';
import NavText from '../TextComponents/NavText';
import DateText from '../TextComponents/DateText';

const HomeEA= ({}) => {
    return (
        <View style={styles.container}>
            <View style={styles.income}>
                <Text style={{color:COLORS.schriftMid}}><NavText>Einnahmen</NavText></Text>
                <Text style={{color:COLORS.schriftDark}}><DateText>April</DateText></Text>

                <View style={styles.bildmittext}>
                    <Image img={require('../../Icons/Objects/arrwoIncome.png')} style={styles.image}/>
                    <Text style={{color:COLORS.greenDark}}><TitleAmountText>1,000 €</TitleAmountText></Text>
                </View>
            </View>
            <View style={styles.expenses}>
                <Text style={{color:COLORS.schriftMid}}><NavText>Ausgaben</NavText></Text>
                <Text style={{color:COLORS.schriftDark}}><DateText>April</DateText></Text>

                <View style={styles.bildmittext}>
                    <Image img={require('../../Icons/Objects/arrowExpenses.png')} style={styles.image}/>
                    <Text style={{color:COLORS.redDark}}><TitleAmountText>1,000 €</TitleAmountText></Text>
                </View>
            </View>
        </View>
    );
}
export default HomeEA;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 20,
        paddingTop: 20,
    },
    income: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 104,
        width: 136,
        backgroundColor: COLORS.greenLight,
        borderRadius: 15,
        padding: 10,
    },
    expenses: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 104,
        width: 136,
        backgroundColor: COLORS.redLight,
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
