import { StyleSheet, View, Image } from 'react-native';
import TitelAmountText from '../TextComponents/TitelAmountText';
import COLORS from '../Farben';

export const BudgetSwipe = ({img, title, amount1, amount2}) => {
    return(
        <View style={styles.container}>
            <View style={styles.containerImage}>
                <Image style={styles.image} source={img} />
            </View>
            
            <View style={styles.containerInfo}>
                <View style={styles.containerTitleBudget}>
                    <TitelAmountText style={styles.placeholderText}>{title}</TitelAmountText>
                    <TitelAmountText style={styles.placeholderTextPos}>{amount1} / {amount2}</TitelAmountText>
                </View>

                <View style={styles.containerProgress}>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 292,
        height: 68,
        paddingVertical: 10,
        gap: 18,
    },
    containerImage: {
        width: 48,
        height: 48,
        backgroundColor: COLORS.primaryDark,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        resizeMode: 'stretch',
        width: 30,
        height: 30,
    },
    containerInfo: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        columnGap: 5,
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
});