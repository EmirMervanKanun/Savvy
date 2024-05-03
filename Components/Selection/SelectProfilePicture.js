import React, {useState} from "react";
import { StyleSheet, Image, TouchableOpacity, View, FlatList, Text } from "react-native";
import ButtonText from "../TextComponents/ButtonText";
import PlaceholderText from "../TextComponents/PlaceholderText";
import COLORS from "../Farben"
import Header from "../TextComponents/Header"; 
import { ButtonMid } from "../Buttons/Buttons";

const ProfilePictureSelector = () => {
    /*const placeholder = profilePicturesData[0].img;      //Default-Profilbild ist standardmäßig ausgewählt
    const [selectedImg, setSelectedIcon] = useState(placeholder);
    const [data, setData] = useState(profilePicturesData);
*/
    const [isClicked, setIsClicked] = useState(false);


    return (
        <View>
            <TouchableOpacity
                style={styles.selectedProfilePicture}
                onPress={() => {setIsClicked(!isClicked);}}>
                <Image source={require('../../Icons/ProfilePictures/profilePictureDefault.png')} style={styles.selImg}></Image>
            </TouchableOpacity>

            {isClicked ? (        //wenn geklickt, dann Dropdown Area anzeigen
                <View style={styles.selectionArea}>
                    <Header>Profilbild auswählen</Header>
                    <View style={styles.images}>      
                        <Image source={require('../../Icons/ProfilePictures/profilePictureDefault.png')} style={styles.image}></Image>
                        <Image source={require('../../Icons/ProfilePictures/profilePicture1.png')} style={styles.image}></Image>
                        <Image source={require('../../Icons/ProfilePictures/profilePicture2.png')} style={styles.image}></Image>
                        <Image source={require('../../Icons/ProfilePictures/profilePicture3.png')} style={styles.image}></Image>
                        <Image source={require('../../Icons/ProfilePictures/profilePicture4.png')} style={styles.image}></Image>
                        <Image source={require('../../Icons/ProfilePictures/profilePicture5.png')} style={styles.image}></Image>
                        <Image source={require('../../Icons/ProfilePictures/profilePicture6.png')} style={styles.image}></Image>
                        <Image source={require('../../Icons/ProfilePictures/profilePicture7.png')} style={styles.image}></Image>
                        <Image source={require('../../Icons/ProfilePictures/profilePicture8.png')} style={styles.image}></Image>
                        <Image source={require('../../Icons/ProfilePictures/profilePicture9.png')} style={styles.image}></Image>
                        <Image source={require('../../Icons/ProfilePictures/profilePicture10.png')} style={styles.image}></Image>
                        <Image source={require('../../Icons/ProfilePictures/profilePicture11.png')} style={styles.image}></Image>
                    </View>
                    <ButtonMid text="Abbrechen" img={<Image source={require('../../Icons/Button/cancel.png')} />}></ButtonMid>
                    <ButtonMid text="Speichern" img={'../../Icons/Button/save.png'}></ButtonMid>
                </View>
            ):(
                null
            )}

            
        </View>

    );
}

export default ProfilePictureSelector;

const styles = StyleSheet.create({
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
});


/*

{isClicked ? (        //wenn geklickt, dann Dropdown Area anzeigen
                <View style={styles.selectionArea}>
                    <FlatList data={data} renderItem={({item})=>{
                        return(
                            <TouchableOpacity style={styles.dropdownItem} onPress={()=>{
                                setSelectedIcon(item.img);
                                setIsClicked(false);
                            }}>
                                <View style={styles.itemContent}> 
                                    <View>{item.img}</View>
                                </View>
                            </TouchableOpacity>
                        )
                    }}/>
                </View>
            ):(
                null
            )}



const CategoriesDropdown = () => {
    const placeholder = dropdownData[0].label;      //"Wähle eine Kategorie aus..." ist standardmäßig ausgewählt

    const [selectedData, setSelectedData] = useState(placeholder);
    const [selectedIcon, setSelectedIcon] = useState(dropdownData[0].icon);

    const [isClicked, setIsClicked] = useState(false);

    const [data, setData] = useState(dropdownData);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.dropdownSelector}
                onPress={() => {setIsClicked(!isClicked);}}>
                
                <View style={styles.dropdownAuswahl}>
                    <View>{selectedIcon}</View>
                    <Text style={styles.fontColor}>
                        <ButtonText style={styles.text}>{selectedData}</ButtonText>
                    </Text>
                </View>

                {!isClicked ? (       //wenn nicht geklickt, dann Pfeil nach unten; ansonten Pfeil nach oben
                    <Image source={require('../../Icons/Objects/arrowDropdown.png')} style={styles.icon} />
                ):(
                    <Image source={require('../../Icons/Objects/arrowDropup.png')} style={styles.icon} />
                )}
            </TouchableOpacity>
             
            {isClicked ? (        //wenn geklickt, dann Dropdown Area anzeigen
                <View style={styles.dropdownArea}>
                    <FlatList data={data} renderItem={({item})=>{
                        return(
                            <TouchableOpacity style={styles.dropdownItem} onPress={()=>{
                                setSelectedData(item.label);
                                setSelectedIcon(item.icon);
                                setIsClicked(false);
                            }}>
                                <View style={styles.itemContent}> 
                                    <View>{item.icon}</View>
                                    <Text style={styles.fontColor}>
                                        <PlaceholderText style={styles.itemText}>{item.label}</PlaceholderText>
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}/>
                </View>
            ):(
                null
            )}
        </View>
    );
}

export default CategoriesDropdown;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
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
        height: 180,
        backgroundColor: COLORS.primaryLight,
        borderRadius: 15,
        transform:[{translateY:-48}],           //Dropdown Area soll hinter Selector sein
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
    itemText: {
    },
    fontColor: {
        color: COLORS.schriftDark
    },
});*/
