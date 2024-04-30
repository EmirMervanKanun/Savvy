import { StyleSheet, ImageBackground, View, Text } from 'react-native';
import React from 'react';
import HomeIncome from '../../Components/OBJHome/HomeEA';
import HomeHeader from '../../Components/OBJHome/HomeHeader';


export default function Home() {
  return (
  <ImageBackground source={require('../../assets/grid.png')} style={{flex: 1, resizeMode: "cover", justifyContent: "center"}}>
    <View style={{flex: 1, alignItems: "center", justifyContent:"center"}}>
      <Text>Hauptmenü</Text>
      <HomeHeader img={require('../../Icons/ProfilePictures/profilePicture1.png')}/>
    </View>
    </ImageBackground>
  );
};

//<HomeIncome text="1.000,00 €" img={require('../../Icons/Objects/arrwoIncome.png')}/>