import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

import DateText from '../TextComponents/DateText';
import TitelAmountText from '../TextComponents/TitelAmountText';
import COLORS from '../Farben';

const Transaction = ({ props }) => {
    
    const isPositive = props.isIncome;

    return (
        <View style={[styles.container, isPositive ? styles.containerPositive : styles.containerNegative]}>
            <View style={styles.containerImage}>
                <Image style={styles.image} source={props.categoryIcon} />
            </View>

            <View style={styles.containerInfo}>
                <View style={styles.containerTitleAmount}>
                    <TitelAmountText style={styles.placeholderText}>{props.title}</TitelAmountText>
                    <Text style={[styles.amountText, isPositive ? styles.greenText : styles.redText]}>
                        <TitelAmountText>{props.amount} €</TitelAmountText>
                    </Text>
                </View>

                <View style={styles.containerDateRepeat}>
                    <Text style={styles.placeholderText}><DateText>{props.date}</DateText></Text>
                    <View style={styles.containerRepeat}>
                        <Image style={styles.imageRepeat} source={require('../../Icons/Sonstiges/repeat.png')} />
                        <Text style={{color: COLORS.schriftMid}}><DateText>Monatlich</DateText></Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 292,
        height: 48,
        gap: 11,
        borderRadius: 15,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    containerPositive: {
        backgroundColor: COLORS.greenLight,
    },
    containerNegative: {
        backgroundColor: COLORS.redLight,
    },
    image: {
        resizeMode: 'stretch',
        width: 30,
        height: 30,
    },
    containerInfo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    containerTitleAmount: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    amountText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    greenText: {
        color: COLORS.greenDark,
    },
    redText: {
        color: COLORS.redDark,
    },
    containerDateRepeat: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    containerRepeat: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },
    imageRepeat: {
        width: 13,
        height: 12,
        marginRight: 5,
    },
});

export default Transaction;
