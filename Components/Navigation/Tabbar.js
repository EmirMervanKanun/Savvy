import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Budget, Saving } from '../../Screens/Navigation';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Budget" component={Budget} />
            <Tab.Screen name="Sparziele" component={Saving} />
        </Tab.Navigator>
    )
}