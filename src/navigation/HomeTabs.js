import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import DashBoard from '../pages/home/DashBoard';
import Profil from '../pages/home/Profil';

export default function HomeTabs() {

const Tab = createBottomTabNavigator();

return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home';
            } else if (route.name === 'Profil') {
              iconName = focused 
              ? 'md-person' 
              : 'md-person';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#4898D3',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={DashBoard} />
        <Tab.Screen name="Profil" component={Profil} />

      </Tab.Navigator>
  );
}