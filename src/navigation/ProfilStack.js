import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

{/* import pages */}
import Profil from '../pages/home/profile/Profil';
import Items from '../pages/home/profile/Items';

export default function ProfilStack(){
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator  initialRouteName='Profil'>
          <Stack.Screen name="Profil" component={Profil}/>
          <Stack.Screen name="Items" component={Items}/>
        </Stack.Navigator>
    );
}