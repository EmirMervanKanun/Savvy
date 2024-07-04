import React, { useState } from "react";
import { StyleSheet, Image, TouchableOpacity, View } from "react-native";
import COLORS from "../Colors";
import Header from "../TextComponents/Header";
import Button from '../Buttons/Button';

const ProfilePictureSelector = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [selectedPicture, setSelectedPicture] = useState(require('../../Icons/ProfilePictures/profilePictureDefault.png'));
    const [defaultPicture, setDefaultPicture] = useState(require('../../Icons/ProfilePictures/profilePictureDefault.png'));
    const [lastSelectedPicture, setLastSelectedPicture] = useState(require('../../Icons/ProfilePictures/profilePictureDefault.png'));

    const onSave = () => {
        if (selectedPicture) {
            setDefaultPicture(selectedPicture);
            setLastSelectedPicture(selectedPicture);
        }
        setIsClicked(false);
    };

    const onCancel = () => {
        setIsClicked(false);
        setSelectedPicture(lastSelectedPicture);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.selectedProfilePicture}
                onPress={() => setIsClicked(!isClicked)}>
                <Image source={defaultPicture} style={styles.selImg}></Image>
            </TouchableOpacity>

            {isClicked && (
                <View style={styles.selectionArea}>
                    <Header>Profilbild auswählen</Header>

                    <View style={styles.images}>
                        {[
                            require('../../Icons/ProfilePictures/profilePictureDefault.png'),
                            require('../../Icons/ProfilePictures/profilePicture1.png'),
                            require('../../Icons/ProfilePictures/profilePicture2.png'),
                            require('../../Icons/ProfilePictures/profilePicture3.png'),
                            require('../../Icons/ProfilePictures/profilePicture4.png'),
                            require('../../Icons/ProfilePictures/profilePicture5.png'),
                            require('../../Icons/ProfilePictures/profilePicture6.png'),
                            require('../../Icons/ProfilePictures/profilePicture7.png'),
                            require('../../Icons/ProfilePictures/profilePicture8.png'),
                            require('../../Icons/ProfilePictures/profilePicture9.png'),
                            require('../../Icons/ProfilePictures/profilePicture10.png'),
                            require('../../Icons/ProfilePictures/profilePicture11.png')
                        ].map((pb, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => setSelectedPicture(pb)}>
                                <Image source={pb} style={styles.image}></Image>
                                {selectedPicture === pb && <View style={styles.pbSelected}></View>}
                            </TouchableOpacity>
                        ))}
                    </View>

                    <View style={styles.btns}>
                    <Button props={{
                            img: require('../../Icons/Button/cancel.png'),
                            text: 'Abbrechen',
                            color: 'blue',
                            size: 'small',
                            onPress: () => onCancel()
                        }} />
                        <Button props={{
                            img: require('../../Icons/Button/save.png'),
                            text: 'Speichern',
                            color: 'blue',
                            size: 'small',
                            onPress: () => onSave()
                        }} />
                    </View>
                </View>
            )}
        </View>
    );
}

export default ProfilePictureSelector;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        gap: 24,
    },
    selImg: {
        width: 120,
        height: 120,
    },
    selectionArea: {
        width: 292,
        paddingVertical: 16,
        backgroundColor: COLORS.primaryLight,
        borderRadius: 15,
        alignItems: 'center',
        gap: 24,
    },
    images: {
        width: 250,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 16,
    },
    image: {
        width: 70,
        height: 70,
    },
    pbSelected: {
        width: 70,
        height: 70,
        borderColor: COLORS.greenDark,
        borderWidth: 3,
        borderRadius: 35,
        position: 'absolute',
    },
    btns: {
        flexDirection: 'row',
        gap: 16,
    },
});
