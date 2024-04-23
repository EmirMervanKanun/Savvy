import React, {useState} from "react";
import { StyleSheet, Image, TouchableOpacity, View } from "react-native-web";
import ButtonText from "../TextComponents/ButtonText";

const data = [

];

const RepetitionDropdown = () => {
    const [selectedData, setSelectedData] = useState('Select Data');

    const [isClicked, setIsClicked] = useState(false);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.dropdownSelector}
                onPress={() => {
                    setIsClicked(!isClicked);
                }}
            >
            <ButtonText>{selectedData}</ButtonText>
            <Image source={require('./Icons/arrowDropdown.png')} style={styles.icon} />
            </TouchableOpacity>
        </View>
    );
}

export default RepetitionDropdown;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dropdownSelector: {
        backgroundColor: COLORS.primaryLight,
        borderRadius: 15,
        height: 48,
        width: 292,
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
        alignItems: 'center',
    },
    icon: {
        width: 24,
        height: 24,
    }
});