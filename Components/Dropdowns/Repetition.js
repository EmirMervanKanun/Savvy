import React, { useState } from "react";
import { StyleSheet, Image, TouchableOpacity, View, Text } from "react-native";
import ButtonText from "../TextComponents/ButtonText";
import PlaceholderText from "../TextComponents/PlaceholderText";
import COLORS from "../Farben";

const dropdownData = [
    { label: ' ', value: '0' },         //leerer Eintrag, damit 1. Eintrag nicht hinter Auswahl rutscht
    { label: 'Keine Wiederholung', value: '1' },
    { label: 'Jährlich', value: '2' },
    { label: 'Monatlich', value: '3' },
    { label: '14-tägig', value: '4' },
    { label: 'Wöchentlich', value: '5' },
    { label: 'Täglich', value: '6' },
];

const RepetitionDropdown = () => {
    const placeholder = dropdownData[1].label;      //"keine Wiederholung" ist standardmäßig ausgewählt

    const [selectedData, setSelectedData] = useState(placeholder);
    const [isClicked, setIsClicked] = useState(false);
    const [data, setData] = useState(dropdownData);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.dropdownSelector}
                onPress={() => { setIsClicked(!isClicked); }}>
                <Text style={styles.fontColor}>
                    <ButtonText>{selectedData}</ButtonText>
                </Text>

                {!isClicked ? (       //wenn nicht geklickt, dann Pfeil nach unten; ansonsten Pfeil nach oben
                    <Image source={require('../../Icons/Objects/arrowDropdown.png')} style={styles.icon} />
                ) : (
                    <Image source={require('../../Icons/Objects/arrowDropup.png')} style={styles.icon} />
                )}
            </TouchableOpacity>

            {isClicked && (        //wenn geklickt, dann Dropdown Area anzeigen
                <View style={styles.dropdownArea}>
                    {data.map((item) => (
                        <TouchableOpacity
                            key={item.value}
                            style={styles.dropdownItem}
                            onPress={() => {
                                setSelectedData(item.label);
                                setIsClicked(false);
                            }}
                        >
                            <Text style={styles.fontColor}>
                                <PlaceholderText>{item.label}</PlaceholderText>
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
}

export default RepetitionDropdown;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
    },
    dropdownSelector: {
        backgroundColor: COLORS.primaryLight,
        borderRadius: 15,
        height: 48,
        width: 292,
        paddingLeft: 16, 
        paddingRight: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: COLORS.primaryDark,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.41,
        elevation: 5,
        zIndex: 10,
    },
    icon: {
        width: 24,
        height: 24,
    },
    dropdownArea: {
        width: 292,
        backgroundColor: COLORS.primaryLight,
        borderRadius: 15,
        transform: [{ translateY: -48 }],           //Dropdown Area soll hinter Selector sein
        marginBottom: -48,
    },
    dropdownItem: {
        width: 260,
        height: 48,
        justifyContent: 'center',
        alignSelf: 'center',
        borderBottomWidth: 0.2,
        borderBottomColor: COLORS.schriftMid,
    },
    fontColor: {
        color: COLORS.schriftDark
    },
});
