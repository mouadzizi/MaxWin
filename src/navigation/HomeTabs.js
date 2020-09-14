import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Drawer from '../navigation/Drawer';
import ProfilStack from '../navigation/ProfilStack';
import Chats from '../pages/Chats';
import Categories from '../pages/Categories';

export default function HomeTabs() {

const Tab = createBottomTabNavigator();

return (
      <Tab.Navigator backBehavior='none' 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Accueil') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home';
            } else if (route.name === 'Profil') {
              iconName = focused 
              ? 'md-person' 
              : 'md-person';
            }
            else if (route.name === 'Discussions'){
              iconName = focused 
              ? 'ios-chatbubbles' 
              : 'ios-chatbubbles';
            }
            else if (route.name === 'catégories'){
              iconName = focused 
              ? 'ios-list' 
              : 'ios-list';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#4898D3',
          inactiveTintColor: 'gray',
        }}
      >

      
        <Tab.Screen name="Accueil" component={Drawer} />
        <Tab.Screen name="catégories" component={Categories} />
        <Tab.Screen name="Discussions" component={Chats} />
        <Tab.Screen name="Profil" component={ProfilStack} />

      </Tab.Navigator>
  );
}