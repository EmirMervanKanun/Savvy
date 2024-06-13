import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

import DateText from '../TextComponents/DateText';
import TitelAmountText from '../TextComponents/TitelAmountText';
import COLORS from '../Farben';

export default Transaction = ({ props }) => {

    return (
        <View style={styles.container}>
            <View style={[styles.containerImage, props.details.isIncome ? styles.containerPositive : styles.containerNegative]}>
                <Image style={styles.image} source={props.details.img} />
            </View>

            <View style={styles.containerInfo}>
                <View style={styles.containerTitleAmount}>
                    <TitelAmountText style={styles.placeholderText}>{props.title}</TitelAmountText>
                    <Text style={[styles.amountText, props.details.isIncome ? styles.greenText : styles.redText]}>
                    <TitelAmountText>{props.details.isIncome ? '' : '- '}{props.details.amount}€</TitelAmountText>
                    </Text>
                </View>

                <View style={styles.containerDateRepeat}>
                    <Text style={{color: COLORS.schriftMid}}><DateText>{props.details.date}</DateText></Text>
                    <View style={styles.containerRepeat}>
                        <Image style={styles.imageRepeat} source={props.details.isStan ? require('../../Icons/Sonstiges/repeat.png') : null} />
                        <Text style={{ color: COLORS.schriftMid }}><DateText>{props.details.isStan ? props.details.stan : null}</DateText></Text>
                    </View>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alighItems: 'center',
        justifyContent: 'center',
        gap: 11,
    },
    containerInfo: {
        width: 223,
        flexDirection: 'column',
        gap: 5,
    },
    containerImage: {
        width: 48,
        height: 48,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 30,
        height: 30,
    },
    containerTitleAmount: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    containerDateRepeat: {
        flexDirection: 'row',        
        justifyContent: 'space-between',
    },
    amountText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    containerRepeat: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    imageRepeat: {
        width: 13,
        height: 12,
    },


    containerPositive: {
        backgroundColor: COLORS.greenLight,
    },
    containerNegative: {
        backgroundColor: COLORS.redLight,
    },
    greenText: {
        color: COLORS.greenDark,
    },
    redText: {
        color: COLORS.redDark,
    },
});

