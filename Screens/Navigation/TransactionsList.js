import { ImageBackground, View, Text } from 'react-native';
import React from 'react';

export default function TransactionsList() {
  return (
    <ImageBackground source={require('../../assets/grid.png')} style={{flex: 1, resizeMode: "cover", justifyContent: "center"}}>
    <View style={{flex: 1, alignItems: "center", justifyContent:"center"}}>
      <Text>Transaktionen Liste</Text>
    </View>
    </ImageBackground>
  );
}