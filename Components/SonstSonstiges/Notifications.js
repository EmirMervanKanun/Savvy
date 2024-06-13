import React from 'react';
import { StyleSheet, View, Text, FlatList } from "react-native";
import COLORS from '../Farben';
import TitelAmountText from '../TextComponents/TitelAmountText';
import { ButtonIcon } from "../Buttons/Buttons";

const Notification = ({ props }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={props}
                renderItem={({ item, index }) => {
                    const isLastItem = index === props.length - 1;
                    return (
                        <View style={[styles.mitteilung, isLastItem && styles.lastItem]}>
                            <Text style={styles.text}><TitelAmountText>{item.label}</TitelAmountText></Text>
                            <ButtonIcon img={require('../../Icons/Button/add.png')} />
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
