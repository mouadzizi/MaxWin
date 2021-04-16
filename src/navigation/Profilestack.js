import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

{/* import pages */}
import profile from '../pages/settings/Profil'

export default function ProfileStack(){

    const Stack = createStackNavigator();

    return(

        <Stack.Navigator  initialRouteName='profile'>
        
          <Stack.Screen name="profile" component={profile}
          options={{ 
            title: 'Mon profil', headerTitleAlign: 'center', 
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