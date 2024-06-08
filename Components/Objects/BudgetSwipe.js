import { StyleSheet, View, Image, Text } from 'react-native';
import TitelAmountText from '../TextComponents/TitelAmountText';
import DateText from '../TextComponents/DateText';
import COLORS from '../Farben';

export const BudgetSwipe = ({ props }) => {
    return (
        <View style={{ gap: 5 }}>
            <View style={styles.container}>
                <View style={styles.containerImage}>
                    <Image style={styles.image} source={props.details.img} />
                </View>

                <View style={styles.containerInfo}>
                    <View style={styles.containerTitleBudget}>
                        <Text style={styles.text}>
                            <TitelAmountText>{props.title}</TitelAmountText>
                        </Text>
                        <Text style={styles.text}>
                            <TitelAmountText>{props.details.amount1}€ / {props.details.amount2}€</TitelAmountText>
                        </Text>
                    </View>

                    <View style={styles.containerProgress}>
                        {/* Progressbar */}
                    </View>
                </View>
            </View>

            <View style={styles.containerDate}>
                <Text style={{ color: COLORS.schriftMid }}><DateText>{props.details.dateStart} - {props.details.dateEnd}</DateText></Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 292,
        paddingTop: 10,
        gap: 18,
    },
    containerDate: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    containerImage: {
        width: 48,
        height: 48,
        backgroundColor: COLORS.primaryLight,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 48,
        height: 48,
    },
    containerInfo: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        gap: 5,
    },
    containerTitleBudget: {
        width: 226,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    containerProgress: {
        width: 226,
        height: 16.31,
        backgroundColor: COLORS.primaryLight,
        borderRadius: 8,
    },
    text: {
        color: COLORS.schriftDark,
    },
});