import { StyleSheet, View, Image, Text } from 'react-native';
import TitelAmountText from '../TextComponents/TitelAmountText';
import DateText from '../TextComponents/DateText';
import COLORS from '../Farben';
import * as Progress from 'react-native-progress';

export const BudgetSwipe = ({ props }) => {
    return (
        <View style={{ gap: 5 }}>
            <View style={styles.container}>
                <View style={styles.containerDate}>

                    <View style={styles.containerImage}>

                        <Image style={styles.image} source={props.img} />

                        <View style={styles.containerProgress}>

                            <View style={styles.containerInfo}>
                                <Text style={styles.text}><TitelAmountText>{props.title}</TitelAmountText></Text>
                                <Text style={styles.text}><TitelAmountText>{props.amount1}€ / {props.amount2}€</TitelAmountText></Text>
                            </View>

                            <Progress.Bar 
                            style={styles.progressBar} 
                            progress={props.amount1/props.amount2} 
                            unfilledColor={COLORS.primaryLight} 
                            color={COLORS.primaryDark} 
                            width={225}
                            height={15}
                            />

                        </View>
                    </View>

                    <Text style={styles.dateText}><DateText>{props.dateStart} - {props.dateEnd}</DateText></Text>
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
    containerDate: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 4,
    },
    containerInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    containerProgress: {
        flexDirection: 'column',
        gap: 8,
    },
    containerImage: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
    },
    image: {
        width: 48,
        height: 48,
        backgroundColor: COLORS.primaryLight,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    progressBar: {
        width: 225,
        height: 15,
        borderRadius: 8,
        borderWidth: 0,
    },
    text: {
        color: COLORS.schriftDark,
    },
    dateText: {
        color: COLORS.schriftMid,
    },
});