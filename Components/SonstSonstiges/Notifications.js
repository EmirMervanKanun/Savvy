import React from 'react';
import { StyleSheet, View, Text, FlatList } from "react-native";
import COLORS from '../Colors';
import TitelAmountText from '../TextComponents/TitelAmountText';
import ButtonToggle from '../Buttons/ButtonToggle';

const Notification = ({ props }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={props}
                renderItem={({ item, index }) => {
                    const isLastItem = index === props.length - 1;
                    return (
                        <View testID={`notification-item-${index}`} style={[styles.mitteilung, isLastItem && styles.lastItem]}>
                            <Text testID={`notification-label-${index}`} style={styles.text}><TitelAmountText>{item.label}</TitelAmountText></Text>
                            <ButtonToggle img={require('../../Icons/Button/add.png')} />
                        </View>
                    );
                }}
            />
        </View>
    );
}
export default Notification;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
    },
    mitteilung: {
        width: 292,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: COLORS.schriftMid,
    },
    lastItem: {
        borderBottomWidth: 0,
    },
    text: {
        color: COLORS.schriftDark,
    },
});
