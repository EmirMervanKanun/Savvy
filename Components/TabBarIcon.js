import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default class TabBarIcon extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <Image style={styles.image}> source={require('../assets/icon.png')} </Image>
                <Text style={styles.text}> Name Icon </Text>
            </View>
        );
    }
  
}

const styles = StyleSheet.create({
  container: {
    width: 50, 
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 15,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
});