import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import {Fontisto, MaterialIcons, Octicons} from 'react-native-vector-icons';
import Drawer from './Drawer';
import Profil from '../pages/settings/Profil';
import StackChat from './StackChat';
import Items from '../pages/settings/Items';

export default function HomeTabs() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator backBehavior='none'
      initialRouteName='Accueil'
      keyboardHidesTabBar={true}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let IconTag;
          if (route.name === 'Accueil') {
            iconName = focused
              ? 'home'
              : 'home';
              IconTag = Fontisto;
          } else if (route.name === 'Profil') {
            iconName = focused
              ? 'person'
              : 'person';
              IconTag = Octicons;
          }
          else if (route.name === 'Messages') {
            iconName = focused
              ? 'message'
              : 'message';
              IconTag = MaterialIcons;
          } else if (route.name === 'Boutique') {
            iconName = focused
              ? 'shopping-store'
              : 'shopping-store';
              IconTag = Fontisto;
          }
          return <IconTag name={iconName} size={20} color={color} />;
        },
        

      })}
      tabBarOptions={{
        activeTintColor: '#4898D3',
        inactiveTintColor: '#fff',
        inactiveTintColor: 'gray',
      
      }}
    >
      <Tab.Screen name="Accueil" component={Drawer} />
      <Tab.Screen name="Messages" component={StackChat} />
      <Tab.Screen name="Boutique" component={Items} />
      <Tab.Screen name="Profil" component={Profil} />

    </Tab.Navigator>
  );
}