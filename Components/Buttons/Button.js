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
        flex: null,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    image: {
        resizeMode: 'stretch',
        width: 24,
        height: 24,
    },
    buttonText: {
        color: COLORS.schriftDark,
    },
});