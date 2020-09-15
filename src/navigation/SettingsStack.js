import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

{/* import pages */}
import Profil from '../pages/settings/Profil';
import Items from '../pages/settings/Items';

export default function ProfilStack(){
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator  initialRouteName='Profil'>
          <Stack.Screen name="Profil" 
          component={Profil}
          options={{ 
          title: 'Paramètres', headerTitleAlign: 'center', 
          headerStyle: {
            backgroundColor: '#4898D3',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '500',
          },}}/>
          <Stack.Screen 
          name="Items" 
          component={Items}
          options={{ 
          title: 'Mes produits', headerTitleAlign: 'center', 
          headerStyle: {
            backgroundColor: '#4898D3',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '500',
          },}}/>
        </Stack.Navigator>
    );
}
