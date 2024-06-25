import { StyleSheet, View, Image, Text } from 'react-native';
import TitelAmountText from '../TextComponents/TitelAmountText';
import DateText from '../TextComponents/DateText';
import SavingsAmountText from '../TextComponents/SavingsAmountText';
import * as Progress from 'react-native-progress';
import COLORS from '../Colors';

export default SavingGoal = ({ props }) => {

    return (
        <View style={styles.container}>
            <View style={styles.containerObject}>
                <View style={styles.containerProgress}>
                    <Progress.Circle
                        progress={props.details.amount1 / props.details.amount2}
                        unfilledColor={COLORS.primaryLight}
                        color={COLORS.primaryDark}
                        size={120}
                        thickness={16}
                        animated={true}
                        borderWidth={0}
                    />

                    <Image style={styles.image} source={props.details.img} />
                </View>

                <View style={styles.containerInfo}>
                    <Text style={styles.text}><TitelAmountText>{props.title}</TitelAmountText></Text>
                    <Text style={styles.amountText}><SavingsAmountText>{props.details.amount1}€ / {props.details.amount2}€</SavingsAmountText></Text>
                    <Text style={styles.dateText}><DateText>{props.details.dateStart} - {props.details.dateEnd}</DateText></Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
    },
    containerObject: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    containerProgress: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 60,
        height: 60,
        position: 'absolute',
    },
    containerInfo: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'left',
        gap: 4,
    },
    text: {
        color: COLORS.schriftDark,
    },
    amountText: {
        color: COLORS.primaryDark,
    },
    dateText: {
        color: COLORS.schriftMid,
    },
});