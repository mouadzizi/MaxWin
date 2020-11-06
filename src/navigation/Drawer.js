import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DashStack from '../navigation/DashStack';
import DrawerContent from '../navigation/DrawerContent';
import Privacy from '../pages/authentication/Privacy';

const DrawerMEnu = createDrawerNavigator();

export default function Drawer() {
  return (
      <DrawerMEnu.Navigator backBehavior='none' initialRouteName="DashStack"
      drawerContent={props => <DrawerContent {...props} />
      }>
        <DrawerMEnu.Screen name="DashStack" component={DashStack} />
        <DrawerMEnu.Screen name="Privacy" component={Privacy} />
      </DrawerMEnu.Navigator>
  );
}