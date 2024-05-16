import { StyleSheet, View, Image, Text, FlatList } from "react-native";
import COLORS from '../Colors';
import Header from '../TextComponents/Header';
import PlaceholderText from '../TextComponents/PlaceholderText';
import ButtonBig from "../Buttons/Buttons";
//import BackButton from "../Buttons/Buttons"; muss noch erstellt werden

const listCategories = [
    { label: 'Lebensmittel', icon: <Image source={require('../../Icons/Categories/groceries.png')} style= {{width:32, height:32 }}/>},
    { label: 'Miete', icon: <Image source={require('../../Icons/Categories/rent.png')} style={{width:32, height:32 }}/>},
    { label: 'Klamotten', icon: <Image source={require('../../Icons/Categories/clothes.png')} style={{width:32, height:32 }}/>},
    { label: 'Technik', icon: <Image source={require('../../Icons/Categories/devices.png')} style={{width:32, height:32 }}/>},
    { label: 'Transportmittel', icon: <Image source={require('../../Icons/Categories/transportation.png')} style={{width:32, height:32 }}/>},
    { label: 'Medikamente', icon: <Image source={require('../../Icons/Categories/medication.png')} style={{width:32, height:32 }}/>},
]

const Categorie = () => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={{color:COLORS.schriftDark}}><Header>Kategorien</Header></Text>
            </View>
            <View style={styles.list}>
                <FlatList data={listCategories} renderItem={({item})=>{
                    return(
                        <View style={styles.categories}>
                            {item.icon}
                            <Text style={{color:COLORS.schriftDark}}><PlaceholderText>{item.label}</PlaceholderText></Text>
                        </View>
                    )
                }}/>
            </View>
            <View style={styles.btn}>
                <ButtonBig img={require('../../Icons/Button/add.png')} text="Hinzufügen"/>
            </View>
        </View>
    );
};
export default Categorie;

const styles = StyleSheet.create({
    container: {
        width: 358,
        height: 650,
    },
    image: {
        width: 32,
        height: 32,
    },
    top: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
    },
    list:{
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 80,
    },
    categories: {
        flexDirection: 'row',
        gap: 20,
        padding: 5,
        paddingLeft: 10,
        alignItems: 'center',
        borderBottomColor: COLORS.schriftDark,
        borderBottomWidth: 0.2,
    },
    btn: {
        paddingTop: 80,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
});
