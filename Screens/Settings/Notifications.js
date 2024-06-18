import { StyleSheet, View } from 'react-native';
import React from 'react';
import Header from '../../Components/TextComponents/Header';
import ButtonBack from '../../Components/Buttons/ButtonBack';
import Notification from '../../Components/SonstSonstiges/Notifications';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CommonActions } from '@react-navigation/native';
import Settings from '../Settings/Settings';

const Stack = createNativeStackNavigator();

const notifications = [
    { label: 'Mitteilungen erhalten' },
    { label: 'Töne' },
    { label: 'Kennzeichen' },
    { label: 'Banner' },
];

function NotificationStart ({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
      <ButtonBack
          onPress={() => navigation.dispatch(
            CommonActions.navigate(
              { name: 'Settings' }
            ))} />
      </View>
      
      <View style={styles.headerContainer}>
        <Header>Mitteilungen</Header>
      </View>

      <View style={styles.notificationContainer}>
        <Notification props={notifications} />
      </View>
    </View>
  );
}

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Notifications" component={NotificationStart} options={{headerShown:false}}/>
      <Stack.Screen name="Settings" component={Settings} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}

export default function Notifications(){
  return(
    <MyStack/>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: 160,
    backgroundColor: 'white',
  },
  buttonContainer: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
  headerContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  notificationContainer: {
    display: 'flex',
    justifyContent: 'flex-start',  
    alignItems: 'center',
    width: '100%',  
    paddingTop: 20, 
  },
});
