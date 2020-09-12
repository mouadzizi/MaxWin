import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

{/* import pages */}
import Dasboard from '../pages/home/dashBoard';
import ProductDetails from '../pages/home/ProductDetails';
import AddProduct from '../pages/home/AddProduct';
import Filtre from '../pages/home/Filtre';

export default function DashStack(){

    const Stack = createStackNavigator();

    return(

        <Stack.Navigator  initialRouteName='Dasboard'>
          <Stack.Screen name="Dasboard" component={Dasboard} options={{ headerShown: false }}/>
          <Stack.Screen name="ProductDetails" component={ProductDetails}
            options={{ 
            title: 'Details', headerTitleAlign: 'center', 
            headerStyle: {
              backgroundColor: '#4898D3',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '500',
            },}}/>

          <Stack.Screen name="AddProduct" component={AddProduct}
            options={{ 
            title: 'Ajouter Produit', headerTitleAlign: 'center', 
            headerStyle: {
              backgroundColor: '#4898D3',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '500',
            },}}/>

          <Stack.Screen name="Filtre" component={Filtre}
            options={{ 
            title: 'Filtre', headerTitleAlign: 'center', 
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