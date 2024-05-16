import { StyleSheet, View, Image, Text} from 'react-native';
import DateText from '../TextComponents/DateText';
import TitelAmountText from '../TextComponents/TitelAmountText';
import COLORS from '../Farben';

export const Transaction=({img, title, amount, date, isPos}) => {
        if(isPos >= 0){
            return(
                <View style={styles.container}>
                    <View style={styles.containerImagePos}>
                        <Image style={styles.image} source={img} />
                    </View>
        
                    <View style={styles.containerInfo}>
                        <View style={styles.containerTitleAmount}>
                            {/* if amount is negative, color is red - */}
                            <TitelAmountText style={styles.placeholderText}>{title}</TitelAmountText>
                            <Text style={styles.placeholderTextPos}><TitelAmountText>{amount}€</TitelAmountText></Text>
                        </View>

                        <View style={styles.containerDateRepeat}>
                            <Text style={styles.placeholderText}><DateText >{date}</DateText></Text>
                            <View style={styles.containerRepeat}>
                                <Image style={styles.imageRepeat} source={require('../../Icons/Sonstiges/repeat.png')} />

                                {/* switch oder wo was und wie für zeit (monatlich, jährlich...) */}
                                <Text style={styles.placeholderText}><DateText>Monatlich</DateText></Text>
                            </View>
                        </View>
                    </View>

                </View>
            );
        }
        return(
            <View style={styles.container}>
                <View style={styles.containerImageNeg}>
                    <Image style={styles.image} source={img} />
                </View>
        
                <View style={styles.containerInfo}>
                    <View style={styles.containerTitleAmount}>
                    {/* if amount is negative, color is red - */}
                    <TitelAmountText style={styles.placeholderText}>{title}</TitelAmountText>
                    <Text style={styles.placeholderTextNeg}><TitelAmountText>{amount}</TitelAmountText></Text>
                </View>

                <View style={styles.containerDateRepeat}>
                    <Text style={styles.placeholderText}><DateText >{date}</DateText></Text>
                    <View style={styles.containerRepeat}>
                        <Image style={styles.imageRepeat} source={require('../../Icons/Sonstiges/repeat.png')} />

                        {/* switch oder wo was und wie für zeit (monatlich, jährlich...) */}
                        <Text style={styles.placeholderText}><DateText>Monatlich</DateText></Text>
                    </View>
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
        height: 48,
        gap: 11,
    },
    image: {
        resizeMode: 'stretch',
        width: 30,
        height: 30,
    },
    containerImagePos: {
        backgroundColor: COLORS.greenLight,
        borderRadius: 15,
        width: 48,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerImageNeg: {
        backgroundColor: COLORS.redLight,
        borderRadius: 15,
        width: 48,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
    },
    placeholderTextPos: {
        color: COLORS.greenDark,
    },
    placeholderTextNeg: {
        color: COLORS.redDark,
    },
    placeholderText: {
        color: COLORS.schriftMid,
    },
    containerInfo: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        columnGap: 9,
        width: 226,

    },
    containerTitleAmount: {
        width: 226,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    containerDateRepeat: {
        flexDirection: 'row',
        width: 226,
        justifyContent: 'space-between',
    },
    containerRepeat: {
        flexDirection: 'row',
        gap: 5,
    },
    imageRepeat: {
        marginTop: 5,
        width: 13,
        height: 12,
    },
});