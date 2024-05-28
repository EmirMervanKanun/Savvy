import React, { useState } from 'react';
import { StyleSheet, View, Image, Pressable, Text } from 'react-native';
import ButtonText from '../TextComponents/ButtonText';
import COLORS from '../Farben';


// größe, farbe rot oder blau, icon an oder aus, text an oder aus aber nur wenn icon an

// button mit icon und text

//button mit Text

//button nur Icon
const Button = ({ props }) => {
    
    //button Color
    if (props.color == null) {

    } else if (props.color == 'red') {
        styles.button = { ...styles.button, backgroundColor: COLORS.redMid, };
    } else if (props.color == 'blue') {
        styles.button = { ...styles.button, backgroundColor: COLORS.primaryMid, };
    }

    //button Size
    if (props.size == null) {

    } else if (props.size == 'big') {
        styles.button = { ...styles.button, height: 32, width: 175, };
    } else if (props.size == 'mid') {
        styles.button = { ...styles.button, height: 32, width: 136, };
    } else if (props.size == 'small') {
        styles.button = { ...styles.button, height: 32, width: 116, };
    }

    //TextButton
    if (props.img == null && props.text != null) {
        return (
            <Pressable onPress={props.onPress} style={styles.button}>
                <Text style={styles.buttonText}><ButtonText>{props.text}</ButtonText></Text>
            </Pressable>
        );
    }
    //IconTextButton
    if (props.img != null && props.text != null) {
        return (
            <Pressable onPress={props.onPress} style={styles.button}>
                <Image style={styles.image} source={props.img} />
                <Text style={styles.buttonText}><ButtonText>{props.text}</ButtonText></Text>
            </Pressable>
        );
    }
    //IconButton
    if (props.img != null && props.text == null) {
        styles.button = { ...styles.button, height: 32, width: 32, };
        return (
            <Pressable onPress={props.onPress} style={styles.button}>
                <Image style={styles.image} source={props.img} />
            </Pressable>
        );
    }
    return (<Text>Button Error</Text>);
}
export default Button;

export const ButtonBack = ({ onPress }) => {
    return (
        <Pressable onPress={onPress} style={styles.containerButtonBack}>
            <Image style={styles.image} source={require('../../Icons/Objects/arrowLeft.png')} />
            <Text style={styles.buttonTextBack}><ButtonText>zurück</ButtonText></Text>
        </Pressable>
    );
}

export const ButtonSettingsItem = ({ children, onPress }) => {
    return (
        <Pressable onPress={onPress} style={styles.containerSettingsItem}>
            <Text style={styles.buttonText}><ButtonText>{children}</ButtonText></Text>
            <Image style={styles.image} source={require('../../Icons/Objects/arrowRight.png')} />
        </Pressable>
    );
}

export const ButtonSettings = ({ onPress }) => {
    return (
        <Pressable onPress={onPress} style={styles.containerButtonSettings}>
            <Image style={styles.imageSettings} source={require('../../Icons/Sonstiges/settings.png')} />
        </Pressable>
    );
}
/*
const ButtonFilterItem=({children, onPress}) => {
    const [isSelected, setIsSelected] = useState(true);

    const changeSelected = () => {
        setiIsSelected(!isSelected);
    }

    if(isSelected){
        return(
        <Pressable onPress={onPress} style={styles.containerFilter}>
            <Text style={styles.buttonTextUnderlined}><ButtonText>{children}</ButtonText></Text>
        </Pressable>
        );
    }
        return(
        <Pressable onPress={onPress} style={styles.containerFilter}>
            <Text style={styles.buttonText}><ButtonText>{children}</ButtonText></Text>
        </Pressable>
        );
}

export let ButtonFilter=({items, startSelected}) => {
    selectedFlag =items[startSelected];
    
    return(
        <View style={styles.containerButtonFilter}>
            <ButtonFilterItem isSelected onPress={()=>{changeSelected; console.log(selectedFlag); }}>{items[0]}</ButtonFilterItem>
            <ButtonFilterItem isSelected onPress={()=>{changeSelected; console.log(selectedFlag);}}>{items[1]}</ButtonFilterItem>
            <ButtonFilterItem isSelected onPress={()=>{changeSelected; console.log(selectedFlag);}}>{items[2]}</ButtonFilterItem>
        </View>

    );
}
*/

styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    containerButtonSettings: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 40,
    },
    imageSettings: {
        resizeMode: 'stretch',
        width: 30,
        height: 30,
    },
    containerButtonFilter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 24,
        width: 292,
    },
    containerSettingsItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: COLORS.schriftLight,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        height: 56,
        width: 340,
        paddingHorizontal: 32,
    },
    containerButtonBack: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 24,
        width: 80,
    },
    image: {
        resizeMode: 'stretch',
        width: 24,
        height: 24,
    },
    buttonText: {
        color: COLORS.schriftDark,
    },
    buttonTextUnderlined: {
        color: COLORS.schriftDark,
        textDecorationLine: 'underline',
    },
    buttonTextBack: {
        color: COLORS.schriftDark,
        alignContent: 'center',
        height: 24,
    },
});