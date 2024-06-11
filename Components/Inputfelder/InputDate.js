import React from "react";
import { useState } from "react";
import { TextInput, StyleSheet, View, Pressable, Image, Platform } from "react-native";
import COLORS from "../Farben"
import DateTimePicker from '@react-native-community/datetimepicker';

export default function InputDate () {
    const [dateofTransaction, setDateofTransaction] = useState('');
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const toggleDatePicker = () => {
        setShowPicker(!showPicker);
    };
    const onChange = ({ type }, selectedDate) => {
        if (type === 'set') {
            const currentDate = selectedDate;
            setDate(currentDate);

            if (Platform.OS === 'android') {
                toggleDatePicker();
                setDateofTransaction(formatDate(currentDate));
            }
        } 
        else {
            toggleDatePicker();
        }
    }

    const formatDate = (rawDate) => {
        let date = new Date(rawDate);

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        month = month < 10 ? `0${month}` : month;
        day = day < 10 ? `0${day}` : day;

        return `${day}.${month}.${year}`;
    };

    return(
        <View>
            {showPicker && (
                <DateTimePicker
                    mode="date"
                    display="calendar"
                    value={date}
                    onChange={onChange}
                />
            )}

            {!showPicker && (
                <View style={styles.container}>
                    <Image source={require('../../Icons/Objects/calendar.png')} style={styles.icon} />
                    <Pressable
                        onPress={toggleDatePicker}
                    >
                        <TextInput 
                            style={styles.input}
                            placeholder="DD.MM.YYYY"
                            value={dateofTransaction}
                            onChangeText={setDateofTransaction}
                            placeholderTextColor={COLORS.schriftMid}
                            editable={false}
                        />
                    </Pressable>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 25,
        width: 103,
        textAlign: "center",
        borderRadius: 8,
        backgroundColor: COLORS.schriftLight,
    },
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: 8,
    },
    icon: {
        width: 24,
        height: 24,
    },
});