import { StyleSheet, ImageBackground, View, Text, Image } from 'react-native';
import React from 'react';
import Categories from '../../Components/SonstSonstiges/Categorielist';
import Notifcation from '../../Components/SonstSonstiges/Notifications';

const listCategories = [
  { label: 'Lebensmittel', icon: require('../../Icons/Categories/groceries.png') },
  { label: 'Miete', icon: require('../../Icons/Categories/rent.png') },
  { label: 'Klamotten', icon: require('../../Icons/Categories/clothes.png') },
  { label: 'Technik', icon: require('../../Icons/Categories/devices.png') },
  { label: 'Transportmittel', icon: require('../../Icons/Categories/transportation.png') },
  { label: 'Medikamente', icon: require('../../Icons/Categories/medication.png') },
  { label: 'Haustier', icon: require('../../Icons/Categories/pets.png') },
];

const notificationList1 = [
  { label: 'Mitteilungen erhalten'},
];

const notificationList2 = [
  { label: 'Mitteilung 1'},
  { label: 'Mitteilung 2'},
  { label: 'Mitteilung 3'},
];


export default function Home() {
  return (
    <ImageBackground source={require('../../assets/grid.png')} style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center' }}>
      <View style={{ flex: 1 }}>
        <Notifcation props={notificationList1} />
        <Notifcation props={notificationList2} />
        <Categories props={listCategories} />
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