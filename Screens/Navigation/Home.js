import { StyleSheet, ImageBackground, View, Image, Text } from 'react-native';
import React from 'react';
import HomeIncome from '../../Components/OBJHome/HomeEA';
import HomeHeader from '../../Components/OBJHome/HomeHeader';
import HomeEA from '../../Components/OBJHome/HomeEA';
import Kategorie from '../../Components/SonstSonstiges/Categorielist';
import Categorie from '../../Components/SonstSonstiges/Categorielist';
import CategoriesDropdown from '../../Components/Dropdowns/Categories';

const dropdownData = [
  { label: 'Wähle eine Kategorie aus...', icon: null, value: '0' }, // Leerer Eintrag, damit 1. Eintrag nicht hinter Auswahl rutscht
  { label: 'Lebensmittel', icon: require('../../Icons/Categories/groceries.png'), value: '1' },
  { label: 'Miete', icon: require('../../Icons/Categories/rent.png'), value: '2' },
  { label: 'Klamotten', icon: require('../../Icons/Categories/clothes.png'), value: '3' },
  { label: 'Technik', icon: require('../../Icons/Categories/devices.png'), value: '4' },
  { label: 'Transportmittel', icon: require('../../Icons/Categories/transportation.png'), value: '5' },
  { label: 'Medikamente', icon: require('../../Icons/Categories/medication.png'), value: '6' },
  { label: 'Haustier', icon: require('../../Icons/Categories/pets.png'), value: '7' },
];

export default function Home() {
  return (
    <ImageBackground source={require('../../assets/grid.png')} style={{flex: 1, resizeMode: "cover", justifyContent: "center"}}>
      <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        <CategoriesDropdown props={dropdownData} />
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