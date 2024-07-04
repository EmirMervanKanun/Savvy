import React from 'react';
import { StyleSheet, View, Image, Pressable, Text } from 'react-native';
import ButtonText from '../TextComponents/ButtonText';
import COLORS from '../Colors';


// größe, farbe rot oder blau, icon an oder aus, text an oder aus aber nur wenn icon an

// button mit icon und text

//button mit Text 

//button nur Icon
const Button = ({ props }) => {
    //button Color
    if (props.color == null) {
    } else if (props.color == 'red') {
        useStyle = { ...styles.button, backgroundColor: COLORS.redMid, };
    } else if (props.color == 'blue') {
        useStyle = { ...styles.button, backgroundColor: COLORS.primaryMid, };
    }  

    //button Size
    if (props.size == null) {
    } else if (props.size == 'big') {
        useStyle = { ...useStyle, height: 32, width: 175, };
    } else if (props.size == 'mid') {
        useStyle = { ...useStyle, height: 32, width: 136, };
    } else if (props.size == 'small') {
        useStyle = { ...useStyle, height: 32, width: 116, };
    }
    

    //TextButton
    if (props.img == null && props.text != null) {
        return (
            <Pressable onPress={props.onPress} style={useStyle}>
                <Text style={styles.buttonText}><ButtonText>{props.text}</ButtonText></Text>
            </Pressable>
        );
    }
    //IconTextButton
    if (props.img != null && props.text != null) {
        return (
            <Pressable onPress={props.onPress} style={useStyle}>
                <Image style={styles.image} source={props.img} />
                <Text style={styles.buttonText}><ButtonText>{props.text}</ButtonText></Text>
            </Pressable>
        );
    }
    //IconButton
    if (props.img != null && props.text == null) {
        useStyle = { ...useStyle, height: 32, width: 32, };
        return (
            <Pressable onPress={props.onPress} style={useStyle}>
                <Image style={styles.image} source={props.img} />
            </Pressable>
        );
    }
    return (<Text>Button Error</Text>);
}
export default Button;


const styles = StyleSheet.create({
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