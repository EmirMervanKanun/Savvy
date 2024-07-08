import { StyleSheet, Image, Pressable, Text } from 'react-native';
import COLORS from '../Colors';
import ButtonText from '../TextComponents/ButtonText';

export const ButtonSettingsItem = ({ children, onPress }) => {
    return (
        <Pressable
            onPress={onPress}
            style={styles.containerSettingsItem}
            testID="button-settings-item"
        >
            <Text style={styles.buttonText}>
                <ButtonText>{children}</ButtonText>
            </Text>
            <Image
                style={styles.image}
                source={require('../../Icons/Objects/arrowRight.png')}
                testID="button-settings-item-image"
            />
        </Pressable>
    );
};
export default ButtonSettingsItem;

const styles = StyleSheet.create({
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
    image: {
        resizeMode: 'stretch',
        width: 24,
        height: 24,
    },
    buttonText: {
        color: COLORS.schriftDark,
    },
});
