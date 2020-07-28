import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

{/* import pages */}
import Splash from '../pages/authentication/Splash';
import SignIn from '../pages/authentication/SignIn';
import SignUp from '../pages/authentication/SignUp';

{/* Stack navigation */}
export default function AuthenticationStack() {
    
const Stack = createStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Splash'>

          <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}/>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }