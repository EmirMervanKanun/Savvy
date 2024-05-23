import { StyleSheet, View, Image, Text } from "react-native";
import COLORS from '../Farben';
import Header from '../TextComponents/Header';
import PlaceholderText from '../TextComponents/PlaceholderText';
import ButtonIcon  from "../Buttons/Buttons";

const HomeHeader= ({props}) => {
    return (
        <View style={styles.container}>
            <View style={styles.personalData}>  
                <Image source={props.img} style={styles.imagePerson} />
                <Text style={{color:COLORS.schriftLight}}><Header>Hallo,Jason!</Header></Text>
                <ButtonIcon img={require('../../Icons/Sonstiges/settings.png')} style={styles.btnSet}/>
            </View>
            <View style={styles.lineText}>
                <Text style={{color:COLORS.schriftLight}}><Header>{props.amount} €</Header></Text>
                <Text style={{color:COLORS.schriftMid}}><PlaceholderText>Gesamtsaldo</PlaceholderText></Text>
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
        paddingTop:20,
    },
    imagePerson: {
        width: 70,
        height: 70,
    },
    btnSet: {
        width: 40,
        height: 40,
    },
    personalData: {
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center',
        paddingLeft: 40,
    },
    lineText: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingTop: 20,
        paddingLeft: 40,
    },
});