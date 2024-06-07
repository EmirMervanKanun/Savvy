import React, {useState} from "react";
import { StyleSheet, Image, TouchableOpacity, View, FlatList, Text } from "react-native";
import ButtonText from "../TextComponents/ButtonText";
import PlaceholderText from "../TextComponents/PlaceholderText";
import COLORS from "../Farben"


const dropdownData = [
    { label: ' ', value: '0' },         //leerer Eintrag, damit 1. Eintrag nicht hinter Auswahl rutscht
    { label: 'Euro €', value: '1' },
    { label: 'USD $', value: '2' },
];

const CurrencySmallDropdown = () => {
    const placeholder = dropdownData[1].label;      //"Euro €" ist standardmäßig ausgewählt

    const [selectedData, setSelectedData] = useState(placeholder);

    const [isClicked, setIsClicked] = useState(false);

    const [data, setData] = useState(dropdownData);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.dropdownSelector}
                onPress={() => {setIsClicked(!isClicked);}}>
                <Text style={styles.fontColor}>
                    <ButtonText>{selectedData}</ButtonText>
                </Text>

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
                                setIsClicked(false);
                            }}>
                                <Text>
                                    <PlaceholderText>{item.label}</PlaceholderText>
                                </Text>
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

export default CurrencySmallDropdown;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    dropdownSelector: {
        backgroundColor: COLORS.primaryLight,
        borderRadius: 15,
        height: 48,
        width: 90,
        paddingLeft: 12, 
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 4,
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
        width: 90,
        height: 144,
        backgroundColor: COLORS.primaryLight,
        borderRadius: 15,
        transform:[{translateY:-48}],           //Dropdown Area soll hinter Selector sein
    },
    dropdownItem: {
        width: 80,
        height: 48,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        borderBottomWidth: 0.2,
        borderBottomColor: COLORS.schriftMid,
    },
    fontColor: {
        color: COLORS.schriftDark
    },
});
