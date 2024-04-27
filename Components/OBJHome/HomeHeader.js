import { StyleSheet, View, Image } from "react-native";
import COLORS from '../Farben';
import Header from '../TextComponents/Header';
import PlaceholderText from '../TextComponents/PlaceholderText';
import ButtonIcon  from "../Buttons/Buttons";

const HomeHeader= ({img}) => {
    return (
        <View style={styles.containerHeader}>
            <Image source={img} style={styles.image} />
            <Header style={styles.headerText}>Hallo,Jason!</Header>
            <ButtonIcon  style={styles.btn} img={require('../../Icons/Sonstiges/settings.png')}/>
            <Header style={styles.headerText}>5678,90 €</Header>
            <PlaceholderText style={styles.placeholderText}>Gesamtsaldo</PlaceholderText>
        </View>
    );
}
export default HomeHeader;

const styles = StyleSheet.create({
    containerHeader: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        height: 184,
        width: 358,
        backgroundColor: COLORS.primaryDark,
        borderBottomRightRadius: 70,
    },
    headerText: {
        color: COLORS.schriftLight,
    },
    btn: {
        backgroundColor: COLORS.primaryDark,
    },
    image: {
        width: 70,
        height: 70,
    },
    placeholderText: {
        color: COLORS.schriftMid,
    },
});