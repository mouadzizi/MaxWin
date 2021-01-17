import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Notifications from 'expo-notifications';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Drawer from './Drawer';
import SettingsStack from './SettingsStack';
import StackChat from './StackChat';

export default function HomeTabs() {
  const [notification, setNotification] = React.useState(false)
  const notificationListener = React.useRef();
  const responseListener = React.useRef();
  const Tab = createBottomTabNavigator();

  React.useEffect(() => {
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification)
      console.log(notification.request.content.body);
    });
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
     setNotification(response.notification)
     console.log(response);
    });
    return () => {
      setNotification(false)
    };
  }, [])

  return (
    <Tab.Navigator backBehavior='none'
      initialRouteName='Accueil'
      keyboardHidesTabBar={true}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Accueil') {
            iconName = focused
              ? 'ios-home'
              : 'ios-home';
          } else if (route.name === 'Paramètres') {
            iconName = focused
              ? 'md-settings'
              : 'md-settings';
          }
          else if (route.name === 'Discussions') {
            iconName = focused
              ? 'ios-chatbubbles'
              : 'ios-chatbubbles';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },

      })}
      tabBarOptions={{
        activeTintColor: '#4898D3',
        inactiveTintColor: '#fff',
        inactiveTintColor: 'gray',

      }}
    >
      <Tab.Screen name="Accueil" component={Drawer} />
      <Tab.Screen options={{ tabBarBadge: notification ? true : null }} name="Discussions" component={StackChat} />
      <Tab.Screen name="Paramètres" component={SettingsStack} />

    </Tab.Navigator>
  );
}