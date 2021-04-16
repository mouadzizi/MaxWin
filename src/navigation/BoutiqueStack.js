import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

{/* import pages */}
import Boutique from '../pages/settings/Items'
import EditProduct from '../pages/home/product/EditProductPage';

export default function BoutiqueStack(){

    const Stack = createStackNavigator();

    return(

        <Stack.Navigator  initialRouteName='Boutique'>
        
          <Stack.Screen name="Boutique" component={Boutique}
          options={{ 
            title: 'Ma Boutique', headerTitleAlign: 'center', 
            headerStyle: {
              backgroundColor: '#4898D3',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '500',
            },}}/>

          <Stack.Screen name="EditProduct" component={EditProduct}
          options={{ 
            title: 'EditProduct', headerTitleAlign: 'center', 
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