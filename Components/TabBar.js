import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {TabBarIcon} from './TabBarIcon.js';

export default class TabBar extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <TabBarIcon />
                <TabBarIcon />
                <TabBarIcon />
                <TabBarIcon />
            </View>
        );
    }
  
}

const styles = StyleSheet.create({
  container: {
    width: 600, 
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 15,
  },
  
});