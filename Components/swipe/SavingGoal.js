import { StyleSheet, View, Image} from 'react-native';

import TitelAmountText from '../TextComponents/TitelAmountText';
import DateText from '../TextComponents/DateText';
import SavingsAmountText from '../TextComponents/SavingsAmountText';

import CircularProgress from 'react-native-circular-progress-indicator';

import COLORS from '../Farben';

export default SavingGoal=({img, title, amount1, amount2, date}) => {

    return(
        <View style={styles.container}>
            <View style={styles.containerProgress}>
                <Image style={styles.image} source={img} />
            </View>
            <View style={styles.containerInfo}>
                <TitelAmountText style={styles.placeholderText}>{title}</TitelAmountText>
                <SavingsAmountText style={styles.placeholderTextPos}>{amount1} / {amount2}</SavingsAmountText>
                <Text style={{color: COLORS.schriftMid}}><DateText>{date}</DateText></Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        width: 292,
        height: 120,
        gap: 16,
    },
    containerProgress: {
        width: 120,
        height: 120,
    },
    containerInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'left',
        columnGap: 8,
    },
});