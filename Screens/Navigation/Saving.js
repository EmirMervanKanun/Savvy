import { ImageBackground, View, Text } from 'react-native';
import React from 'react';


export default function Saving() {
  return (
    <ImageBackground source={require('../../assets/grid.png')} style={{flex: 1, resizeMode: "cover", justifyContent: "center"}}>
      <View style={{flex: 1, alignItems: "center", justifyContent:"center"}}>
        <Text>Sparziele Budget</Text>
      </View>
    </ImageBackground>
  );
}