import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

{/* import pages */}
import Dasboard from '../pages/home/dashBoard';

export default function DashStack(){

    const Stack = createStackNavigator();

    return(

        <Stack.Navigator  initialRouteName='Dasboard'>
          <Stack.Screen name="Dasboard" component={Dasboard} options={{ headerShown: false }}/>
        </Stack.Navigator>

    );
}