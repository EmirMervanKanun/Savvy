import { StyleSheet, View, Image, Text } from "react-native";
import COLORS from '../Farben';
import Header from '../TextComponents/Header';
import PlaceholderText from '../TextComponents/PlaceholderText';
import ButtonBig from "../Buttons/Buttons";
//import Toggle  from "../Buttons/Buttons";
//import BackButton from "../Buttons/Buttons";

const Notifcations = ({img}) => {
    return (
        <View style={styles.container}>
            <View style={styles.personalData}>  
                <Image source={img} style={styles.imagePerson} />
                <Text style={{color:COLORS.schriftLight}}><Header>Mitteilungen</Header></Text>
                <ButtonBig text="Neue Mitteilung" style={styles.btnSet}/>
            </View>
            <View style={styles.lineText}>
                <Text style={{color:COLORS.schriftMid}}><PlaceholderText>Keine neuen Mitteilungen</PlaceholderText></Text>
            </View>
        </View>
    );
}
export default Notifcations;