import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Fontisto from 'react-native-vector-icons/Fontisto';
import Drawer from './Drawer';
import Profil from '../pages/settings/Profil';
import StackChat from './StackChat';
import Items from '../pages/settings/Items';

export default function HomeTabs() {
  const [notification, setNotification] = React.useState({})
  const notificationListener = React.useRef();
  const responseListener = React.useRef();
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator backBehavior='none'
      initialRouteName='Accueil'
      keyboardHidesTabBar={true}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Accueil') {
            iconName = focused
              ? 'home'
              : 'home';
          } else if (route.name === 'Profil') {
            iconName = focused
              ? 'person'
              : 'person';
          }
          else if (route.name === 'Messages') {
            iconName = focused
              ? 'comments'
              : 'comments';
          } else if (route.name === 'Boutique') {
            iconName = focused
              ? 'shopping-store'
              : 'shopping-store';
          }
          return <Fontisto name={iconName} size={size} color={color} />;
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