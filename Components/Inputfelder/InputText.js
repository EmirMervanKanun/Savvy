import React from "react";
import { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

export default function InputText() {
    const [input, setInput] = useState('');
    return (
        <TextInput
            style={styles.input}
            value={input}
            onChangeText={setInput}
            placeholder="Placeholder"
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