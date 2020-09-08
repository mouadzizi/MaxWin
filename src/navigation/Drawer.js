import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashStack from '../navigation/DashStack';

const DrawerMEnu = createDrawerNavigator();

export default function Drawer() {
  return (
      <DrawerMEnu.Navigator initialRouteName="DashStack">
        <DrawerMEnu.Screen name="DashStack" component={DashStack} />
      </DrawerMEnu.Navigator>
  );
}