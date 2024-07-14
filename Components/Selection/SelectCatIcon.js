import React, { useState } from "react";
import { StyleSheet, Image, TouchableOpacity, View } from "react-native";
import COLORS from '../Colors';
import Header from '../TextComponents/Header';
import Button from '../Buttons/Button';

const CatIconSelector = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [selectedIcon, setSelectedIcon] = useState(require('../../Icons/Categories/groceries.png'));
    const [defaultIcon, setDefaultIcon] = useState(require('../../Icons/Categories/groceries.png'));
    const [lastSelectedIcon, setLastSelectedIcon] = useState(require('../../Icons/Categories/groceries.png'));

    const icons = [
        require('../../Icons/Categories/groceries.png'),
        require('../../Icons/Categories/rent.png'),
        require('../../Icons/Categories/clothes.png'),
        require('../../Icons/Categories/devices.png'),
        require('../../Icons/Categories/transportation.png'),
        require('../../Icons/Categories/medication.png'),
        require('../../Icons/Categories/pets.png'),
        require('../../Icons/Categories/party.png'),
        require('../../Icons/Categories/gaming.png'),
        require('../../Icons/Categories/traveling.png'),
        require('../../Icons/Categories/sports.png'),
        require('../../Icons/Categories/music.png'),
    ];

    const onSave = () => {
        if (selectedIcon) {
            setDefaultIcon(selectedIcon);
            setLastSelectedIcon(selectedIcon);
        }
        setIsClicked(false);
    };

    const onCancel = () => {
        setIsClicked(false);
        setSelectedIcon(lastSelectedIcon);
    };

    const selectIcon = (icon) => {
        setSelectedIcon(icon);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.selIconBg}
                onPress={() => setIsClicked(!isClicked)}
                testID="selected-icon">
                <Image source={defaultIcon} style={styles.selIcon}></Image>
            </TouchableOpacity>

            {isClicked && (
                <View style={styles.selectionArea} testID="selection-area">
                    <Header>Kategorieicon wählen</Header>

                    <View style={styles.icons}>
                        {icons.map((icon, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => selectIcon(icon)}
                                testID={`icon-${index}`}>
                                <View style={styles.iconContainer}>
                                    <Image source={icon} style={styles.icon}></Image>
                                    {selectedIcon !== icon && <View style={styles.iconOverlay}></View>}
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <View style={styles.btns}>
                        <Button props={{
                            img: require('../../Icons/Button/cancel.png'),
                            text: 'Abbrechen',
                            color: 'blue',
                            size: 'small',
                            onPress: onCancel,
                            testID: 'cancel-button'
                        }} />
                        <Button props={{
                            img: require('../../Icons/Button/save.png'),
                            text: 'Speichern',
                            color: 'blue',
                            size: 'small',
                            onPress: onSave,
                            testID: 'save-button'
                        }} />
                    </View>
                </View>
            )}
        </View>
    );
}

export default CatIconSelector;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        gap: 24,
    },
    selIcon: {
        width: 80,
        height: 80,
    },
    selIconBg: {
        width: 120,
        height: 120,
        backgroundColor: COLORS.primaryLight,
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectionArea: {
        width: 292,
        paddingVertical: 16,
        backgroundColor: COLORS.primaryLight,
        borderRadius: 15,
        alignItems: 'center',
        gap: 24,
    },
    icons: {
        width: 250,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 16,
    },
    iconContainer: {
        position: 'relative',
    },
    icon: {
        width: 70,
        height: 70,
    },
    iconOverlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#D5DFF488',
    },
    btns: {
        flexDirection: 'row',
        gap: 16,
    },
});
