import { StyleSheet, View, Image, Text} from 'react-native';

import TitelAmountText from '../TextComponents/TitelAmountText';
import DateText from '../TextComponents/DateText';
import SavingsAmountText from '../TextComponents/SavingsAmountText';

import COLORS from '../Farben';

export default SavingGoal=({img, title, amount1, amount2, date}) => {

    return(
        <View style={styles.container}>
            <View style={styles.containerProgress}>
                <Image style={styles.image} source={img} />
            </View>

            <View style={styles.containerInfo}>
                <TitelAmountText>{title}</TitelAmountText>
                <Text style={{ color: COLORS.primaryMid }}><SavingsAmountText>{amount1}€ / {amount2}€</SavingsAmountText></Text>
                <Text style={{color: COLORS.schriftMid}}><DateText>{date}</DateText></Text>
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
        width: 40,
        height: 40,
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
});