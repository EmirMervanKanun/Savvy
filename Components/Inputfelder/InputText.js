import React from "react";
import { useState } from "react";
import { TextInput, StyleSheet, View } from "react-native";
import COLORS from "../Farben"

export default function InputText({placeholder}) {
    const [input, setInput] = useState('');
    const [bgColor, setBgColor] = useState(COLORS.schriftLight);

    const handleTextChange = (inputText) => {
        setInput(inputText);
        if (inputText.length > 0) {
            setBgColor(COLORS.primaryLight);
        } else {
            setBgColor(COLORS.schriftLight);
        }
    }
    return (
        <View style={[styles.input, { backgroundColor: bgColor }]}>
            <TextInput
                value={input}
                onChangeText={handleTextChange}
                placeholder={placeholder}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 48,
        width: 292,
        padding: 15,
        borderRadius: 15,
    },
});