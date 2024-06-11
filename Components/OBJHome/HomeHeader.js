import { StyleSheet, View, Image, Text } from "react-native";
import COLORS from '../Farben';
import Header from '../TextComponents/Header';
import PlaceholderText from '../TextComponents/PlaceholderText';
import ButtonSettings from "../Buttons/ButtonSettings";

const HomeHeader = ({ props }) => {
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <View style={styles.personalData}>
                    <Image source={props.profilePicture} style={styles.imagePerson} />
                    <Text style={styles.name}><Header>Hallo, {props.name}!</Header></Text>
                </View>

            </View>
            <View style={styles.money}>
                <Text style={{ color: COLORS.schriftLight }}><Header>{props.amount}€</Header></Text>
                <Text style={{ color: COLORS.schriftMid }}><PlaceholderText>Gesamtsaldo</PlaceholderText></Text>
            </View>
        </View>
    );
}
export default HomeHeader;

const styles = StyleSheet.create({
    container: {
        height: 184,
        width: '100%',
        backgroundColor: COLORS.primaryDark,
        borderBottomRightRadius: 70,
        paddingTop: 20,
    },
    imagePerson: {
        width: 70,
        height: 70,
    },
    head: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: 40,
    },
    personalData: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    name: {
        color: COLORS.schriftLight,
        width: '60%',
    },
    money: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingTop: 20,
        paddingLeft: 40,
    },
});