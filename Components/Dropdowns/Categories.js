import React, {useState} from "react";
import { StyleSheet, Image, TouchableOpacity, View, FlatList, Text } from "react-native";
import ButtonText from "../TextComponents/ButtonText";
import PlaceholderText from "../TextComponents/PlaceholderText";
import COLORS from "../Colors"


const dropdownData = [
    { label: 'Wähle eine Kategorie aus...', icon:null, value: '0' },         //leerer Eintrag, damit 1. Eintrag nicht hinter Auswahl rutscht
    { label: 'Lebensmittel', icon:<Image source={require('../../Icons/Categories/groceries.png')} style={{width: 32, height: 32}}/>, value: '1' },
    { label: 'Miete', icon:<Image source={require('../../Icons/Categories/rent.png')} style={{width: 32, height: 32}}/>, value: '2' },
    { label: 'Klamotten', icon:<Image source={require('../../Icons/Categories/clothes.png')} style={{width: 32, height: 32}}/>, value: '3' },
    { label: 'Technik', icon:<Image source={require('../../Icons/Categories/devices.png')} style={{width: 32, height: 32}}/>, value: '4' },
    { label: 'Transportmittel', icon:<Image source={require('../../Icons/Categories/transportation.png')} style={{width: 32, height: 32}}/>, value: '5' },
    { label: 'Medikamente', icon:<Image source={require('../../Icons/Categories/medication.png')} style={{width: 32, height: 32}}/>, value: '6' },
    { label: 'Haustier', icon:<Image source={require('../../Icons/Categories/pets.png')} style={{width: 32, height: 32}}/>, value: '7' },
];

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
});
