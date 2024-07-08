import { StyleSheet, Image, Pressable } from 'react-native';

export const ButtonSettings = ({ onPress }) => {
    return (
        <Pressable
            onPress={onPress}
            style={styles.containerButtonSettings}
            testID="button-settings"
        >
            <Image
                style={styles.imageSettings}
                source={require('../../Icons/Sonstiges/settings.png')}
                testID="image-settings"
            />
        </Pressable>
    );
};
export default ButtonSettings;

const styles = StyleSheet.create({
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
});
