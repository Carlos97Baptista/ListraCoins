// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LoginScreen } from '../Screens/LoginScreen';
import { AuthContext } from '../Contexts/auth';
import { HomeSvg } from '../Assets/Svg/home';
import { StoreSvg } from '../Assets/Svg/store';
import { FilledUserSvg } from '../Assets/Svg/filledUser';
import { TabComponent } from '../Components/TabComponent';
import { HomeScreen } from '../Screens/HomeScreen';
import { StoreScreen } from '../Screens/StoreScreen';
import { UserScreen } from '../Screens/UserScreen';


const Tab = createBottomTabNavigator();

function TabRoutes() {
    const { user } = React.useContext(AuthContext)

    return (
        <Tab.Navigator
            tabBar={props => <TabComponent {...props} />}
            screenOptions={({ route }) => ({
                headerShown: false,

            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Store" component={StoreScreen} />
            <Tab.Screen name="User" component={UserScreen} />
        </Tab.Navigator>
    );
}

export default TabRoutes;