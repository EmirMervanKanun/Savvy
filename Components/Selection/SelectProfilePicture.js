import React, {useState} from "react";
import { StyleSheet, Image, TouchableOpacity, View, FlatList, Text } from "react-native";
import COLORS from "../Farben"
import Header from "../TextComponents/Header"; 
import { ButtonSmall } from "../Buttons/Buttons";

const ProfilePictureSelector = () => {
    const [isClicked, setIsClicked] = useState(false);  //wenn Dropdown Area geöffnet ist   
    const [selectedPicture, setSelectedPicture] = useState(require('../../Icons/ProfilePictures/profilePictureDefault.png'));   //ausgewähltes Bild
    const [defaultPicture, setDefaultPicture] = useState(require('../../Icons/ProfilePictures/profilePictureDefault.png'));     //Profilbild

    const onSave = () => {      //wenn speichern gedrückt, dann ausgewähltes Bild als Profilbild setzen
        if (selectedPicture) {
            setDefaultPicture(selectedPicture);
        }
        setIsClicked(false);
    };

    const onCancel = () => {    //wenn abbrechen gedrückt, dann Dropdown Area schließen
        setIsClicked(false);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity   //Profilbild anzeigen
                style={styles.selectedProfilePicture}
                onPress={() => {setIsClicked(!isClicked);}}>
                <Image source={defaultPicture} style={styles.selImg}></Image>
            </TouchableOpacity>

            {isClicked ? (        //wenn geklickt, dann Dropdown Area anzeigen
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
                        ].map((pb, index) => (  //alle Bilder anzeigen
                            <TouchableOpacity
                                key={index}  
                                onPress={() => setSelectedPicture(pb)}>
                                <Image source={pb} style={styles.image}></Image> 
                                {selectedPicture === pb && <View style={styles.pbSelected}></View>} 
                            </TouchableOpacity>             // ^ wenn Bild ausgewählt, dann grüner Rahmen
                        ))}
                    </View>

                    
                    <View style={styles.btns}>
                        <ButtonSmall text="Abbrechen" img={require('../../Icons/Button/cancel.png')} onPress={onCancel}></ButtonSmall>
                        <ButtonSmall text="Speichern" img={require('../../Icons/Button/save.png')} onPress={onSave}></ButtonSmall>
                    </View>    
                </View>
            ):(
                null
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