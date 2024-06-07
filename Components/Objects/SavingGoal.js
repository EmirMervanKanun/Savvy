import { StyleSheet, View, Image, Text } from 'react-native';
import TitelAmountText from '../TextComponents/TitelAmountText';
import DateText from '../TextComponents/DateText';
import SavingsAmountText from '../TextComponents/SavingsAmountText';

import COLORS from '../Farben';

export default SavingGoal = ({ props }) => {

    return (
        <View style={styles.container}>
            <View style={styles.containerProgress}>
                <Image style={styles.image} source={props.img} />
            </View>

            <View style={styles.containerInfo}>
                <Text style={styles.text}>
                    <TitelAmountText>{props.title}</TitelAmountText>
                </Text>
                <Text style={{ color: COLORS.primaryMid }}><SavingsAmountText>{props.amount1}€ / {props.amount2}€</SavingsAmountText></Text>
                <Text style={{ color: COLORS.schriftMid }}><DateText>{props.date}</DateText></Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alighItems: 'center',
        justifyContent: 'center',
        width: 292,
        height: 120,
        gap: 16,
    },
    image: {
        width: 48,
        height: 48,
    },
    containerProgress: {
        width: 120,
        height: 120,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primaryLight,
    },
    containerInfo: {
        flexDirection: 'collumn',
        justifyContent: 'center',
        alignItems: 'left',
        columnGap: 8,
    },
    text: {
        color: COLORS.schriftDark,
    },
});