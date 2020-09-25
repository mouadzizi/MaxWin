import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

{/* import pages */}
import Chat from '../pages/chat/Chats';

export default function StackChat(){

    const Stack = createStackNavigator();

    return(

        <Stack.Navigator  initialRouteName='Chat'>
          <Stack.Screen name="Dasboard" component={Chat}
          options={{ 
            title: 'Chat', headerTitleAlign: 'center', 
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