// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../Screens/LoginScreen';
import { AuthContext } from '../Contexts/auth';
import { HomeScreen } from '../Screens/HomeScreen';
import TabRoutes from './tableNavigation';



const Stack = createNativeStackNavigator();

function Routes() {
    const { user } = React.useContext(AuthContext)

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Group>
                    {user.loged ? <Stack.Screen name="TabRoutes" component={TabRoutes} /> : <Stack.Screen name="Login" component={LoginScreen} />}
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;