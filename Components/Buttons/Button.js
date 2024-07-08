import React from 'react';
import { StyleSheet, View, Image, Pressable, Text } from 'react-native';
import ButtonText from '../TextComponents/ButtonText';
import COLORS from '../Colors';

const Button = ({ props }) => {
    let useStyle = styles.button;

    // Button Color
    if (props.color) {
        if (props.color === 'red') {
            useStyle = { ...styles.button, backgroundColor: COLORS.redMid };
        } else if (props.color === 'blue') {
            useStyle = { ...styles.button, backgroundColor: COLORS.primaryMid };
        }
    }

    // Button Size
    if (props.size) {
        if (props.size === 'big') {
            useStyle = { ...useStyle, height: 32, width: 175 };
        } else if (props.size === 'mid') {
            useStyle = { ...useStyle, height: 32, width: 136 };
        } else if (props.size === 'small') {
            useStyle = { ...useStyle, height: 32, width: 116 };
        }
    }

    // TextButton
    if (!props.img && props.text) {
        return (
            <Pressable
                onPress={props.onPress}
                style={useStyle}
                testID="text-button"
            >
                <Text style={styles.buttonText}>
                    <ButtonText>{props.text}</ButtonText>
                </Text>
            </Pressable>
        );
    }

    // IconTextButton
    if (props.img && props.text) {
        return (
            <Pressable
                onPress={props.onPress}
                style={useStyle}
                testID="icon-text-button"
            >
                <Image style={styles.image} source={props.img} />
                <Text style={styles.buttonText}>
                    <ButtonText>{props.text}</ButtonText>
                </Text>
            </Pressable>
        );
    }

    // IconButton
    if (props.img && !props.text) {
        useStyle = { ...useStyle, height: 32, width: 32 };
        return (
            <Pressable
                onPress={props.onPress}
                style={useStyle}
                testID="icon-button"
            >
                <Image style={styles.image} source={props.img} />
            </Pressable>
        );
    }

    return <Text>Button Error</Text>;
};

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
