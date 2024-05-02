import React, {useState} from "react";
import { StyleSheet, Image, TouchableOpacity, View, FlatList, Text } from "react-native";
import ButtonText from "../TextComponents/ButtonText";
import PlaceholderText from "../TextComponents/PlaceholderText";
import COLORS from "../Farben"

const profilePicturesData = [
    { label: 'default', img:<Image source={require('../../Icons/ProfilePictures/profilePictureDefault.png')}/>, value: '0' },         //leerer Eintrag, damit 1. Eintrag nicht hinter Auswahl rutscht
    { label: 'pb1', img:<Image source={require('../../Icons/ProfilePictures/profilePicture1.png')}/>, value: '1' },
    { label: 'pb2', img:<Image source={require('../../Icons/ProfilePictures/profilePicture2.png')}/>, value: '2' },
    { label: 'pb3', img:<Image source={require('../../Icons/ProfilePictures/profilePicture3.png')}/>, value: '3' },
    { label: 'pb4', img:<Image source={require('../../Icons/ProfilePictures/profilePicture4.png')}/>, value: '4' },
    { label: 'pb5', img:<Image source={require('../../Icons/ProfilePictures/profilePicture5.png')}/>, value: '5' },
    { label: 'pb6', img:<Image source={require('../../Icons/ProfilePictures/profilePicture6.png')}/>, value: '6' },
    { label: 'pb7', img:<Image source={require('../../Icons/ProfilePictures/profilePicture7.png')}/>, value: '7' },
    { label: 'pb8', img:<Image source={require('../../Icons/ProfilePictures/profilePicture8.png')}/>, value: '8' },
    { label: 'pb9', img:<Image source={require('../../Icons/ProfilePictures/profilePicture9.png')}/>, value: '9' },
    { label: 'pb10', img:<Image source={require('../../Icons/ProfilePictures/profilePicture10.png')}/>, value: '10' },
    { label: 'pb11', img:<Image source={require('../../Icons/ProfilePictures/profilePicture11.png')}/>, value: '11' },
];

const ProfilePictureSelector = () => {
    const placeholder = profilePicturesData[0].img;      //Default-Profilbild ist standardmäßig ausgewählt
    return (
        <View>
            <Text>
                Wähle ein Profilbild aus:
            </Text>
            
                <Image source={require('../../Icons/ProfilePictures/profilePictureDefault.png')}/>
            
        </View>

    );
}

export default ProfilePictureSelector;

/*

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
