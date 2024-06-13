import React, { useState } from "react";
import { StyleSheet, Image, TouchableOpacity, View, Text } from "react-native";
import ButtonText from "../TextComponents/ButtonText";
import PlaceholderText from "../TextComponents/PlaceholderText";
import COLORS from "../Farben";

const CategoriesDropdown = ({ props }) => {
    const placeholder = props[0].label; // "Wähle eine Kategorie aus..." ist standardmäßig ausgewählt
    const [selectedData, setSelectedData] = useState(placeholder);
    const [selectedIcon, setSelectedIcon] = useState(props[0].icon);
    const [isClicked, setIsClicked] = useState(false);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.dropdownSelector}
                onPress={() => setIsClicked(!isClicked)}
            >
                <View style={styles.dropdownAuswahl}>
                    <View>
                        {selectedIcon && <Image source={selectedIcon} style={{ width: 32, height: 32 }} />}
                    </View>
                    <Text style={styles.fontColor}>
                        <ButtonText style={styles.text}>{selectedData}</ButtonText>
                    </Text>
                </View>
                <Image
                    source={
                        isClicked
                            ? require('../../Icons/Objects/arrowDropup.png')
                            : require('../../Icons/Objects/arrowDropdown.png')
                    }
                    style={styles.icon}
                />
            </TouchableOpacity>
            {isClicked && (
                <View style={styles.dropdownArea}>
                    {props.map((item) => (
                        <TouchableOpacity
                            key={item.value}
                            style={styles.dropdownItem}
                            onPress={() => {
                                setSelectedData(item.label);
                                setSelectedIcon(item.icon);
                                setIsClicked(false);
                            }}
                        >
                            <View style={styles.itemContent}>
                                {item.icon && <Image source={item.icon} style={{ width: 32, height: 32 }} />}
                                <Text style={styles.fontColor}>
                                    <PlaceholderText>{item.label}</PlaceholderText>
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
}

export default CategoriesDropdown;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
    },
    dropdownAuswahl: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
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
        transform: [{ translateY: -48 }], // Dropdown Area soll hinter Selector sein
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
    itemContent: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
    },
    fontColor: {
        color: COLORS.schriftDark,
    },
});
