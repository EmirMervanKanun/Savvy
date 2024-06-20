import { View, StyleSheet} from 'react-native';
import Button from '../../Components/Buttons/Button';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CommonActions } from '@react-navigation/native';
import Home from '../Home/Home';
import MyTabs from '../../Components/Navigation/MyTabs';

const Stack = createNativeStackNavigator();


const RegistryScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Button props={{
                color: 'blue',
                size: 'big',
                text: 'Los geht`s',
                onPress: () => navigation.dispatch(
                  CommonActions.navigate({
                      name: 'MainTab',
                    },
                  )
                )
              }}
              />
      </View>
    );
}

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Registry" component={RegistryScreen} options={{headerShown: false}} />
      <Stack.Screen name="MainTab" component={MyTabs} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

export default function Registry() {
  return (
    <MyStack />
  );
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 20,
    backgroundColor: COLORS.white,
  },
});