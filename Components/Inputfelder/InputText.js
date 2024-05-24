import React from "react";
import { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

export default function InputText({placeholder}) {
    const [input, setInput] = useState('');
    return (
        <TextInput
            style={styles.input}
            value={input}
            onChangeText={setInput}
            placeholder={placeholder}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        height: 48,
        width: 292,
        padding: 15,
        borderRadius: 15,
        backgroundColor: '#DCDEE4',
    },
});