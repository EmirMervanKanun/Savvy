import { StyleSheet, ImageBackground, View, Image, Text } from 'react-native';
import React from 'react';
import HomeIncome from '../../Components/OBJHome/HomeEA';
import HomeHeader from '../../Components/OBJHome/HomeHeader';
import HomeEA from '../../Components/OBJHome/HomeEA';
import Kategorie from '../../Components/SonstSonstiges/Categorielist';
import Categorie from '../../Components/SonstSonstiges/Categorielist';
import CategoriesDropdown from '../../Components/Dropdowns/Categories';

const dropdownData = [
  { label: 'Wähle eine Kategorie aus...', icon:null, value: '0' },         //leerer Eintrag, damit 1. Eintrag nicht hinter Auswahl rutscht
  { label: 'Lebensmittel', icon:<Image source={require('../../Icons/Categories/groceries.png')} style={{width: 32, height: 32}}/>, value: '1' },
  { label: 'Miete', icon:<Image source={require('../../Icons/Categories/rent.png')} style={{width: 32, height: 32}}/>, value: '2' },
  { label: 'Klamotten', icon:<Image source={require('../../Icons/Categories/clothes.png')} style={{width: 32, height: 32}}/>, value: '3' },
  { label: 'Technik', icon:<Image source={require('../../Icons/Categories/devices.png')} style={{width: 32, height: 32}}/>, value: '4' },
  { label: 'Transportmittel', icon:<Image source={require('../../Icons/Categories/transportation.png')} style={{width: 32, height: 32}}/>, value: '5' },
  { label: 'Medikamente', icon:<Image source={require('../../Icons/Categories/medication.png')} style={{width: 32, height: 32}}/>, value: '6' },
  { label: 'Haustier', icon:<Image source={require('../../Icons/Categories/pets.png')} style={{width: 32, height: 32}}/>, value: '7' },
];

export default function Home() {
  return (
  <ImageBackground source={require('../../assets/grid.png')} style={{flex: 1, resizeMode: "cover", justifyContent: "center"}}>
    <View style={{flex: 1, alignItems: "center", justifyContent:"center"}}>
      <CategoriesDropdown props={dropdownData}/>
    </View>
    </ImageBackground>
  );
}

/*const styles = StyleSheet.create({
  buttoncolor: {
    backgroundColor: COLORS.redMid,
  },
});*/

//<HomeHeader img={require('../../Icons/ProfilePictures/profilePicture1.png')}/>