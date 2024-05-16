import { StyleSheet, View, Image} from 'react-native';
import TitelAmountText from '../TextComponents/TitelAmountText';
import DateText from '../TextComponents/DateText';
import SavingsAmountText from '../TextComponents/SavingsAmountText';
import React, { useState } from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';
import COLORS from '../Farben';

export default SavingsTarget=({img, title, amount1, amount2, date}) => {

    return(
        <View style={styles.container}>
            <View style={styles.containerInfo}>
                <TitelAmountText style={styles.placeholderText}>{title}</TitelAmountText>
                <SavingsAmountText style={styles.placeholderTextPos}>{amount1} / {amount2}</SavingsAmountText>
                <DateText style={styles.placeholderText}>{date}</DateText>
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
    containerInfo: {
        textAlign: 'left',
        columnGap: 8,
    },
});