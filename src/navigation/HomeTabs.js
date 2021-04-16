import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import {Fontisto, FontAwesome5, AntDesign, Feather, Entypo} from 'react-native-vector-icons';
import Drawer from './Drawer';
import Profil from '../navigation/Profilestack';
import StackChat from './StackChat';
import Boutique from '../navigation/BoutiqueStack';

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
              IconTag = Entypo;
          } else if (route.name === 'Profil') {
            iconName = focused
              ? 'user-alt'
              : 'user-alt';
              IconTag = FontAwesome5;
          }
          else if (route.name === 'Messages') {
            iconName = focused
              ? 'chat'
              : 'chat';
              IconTag = Entypo;
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
      <Tab.Screen name="Boutique" component={Boutique} />
      <Tab.Screen name="Profil" component={Profil} />

    </Tab.Navigator>
  );
}