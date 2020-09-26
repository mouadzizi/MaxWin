import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

{/* import pages */}
import Dasboard from '../pages/home/dashBoard';
{/* Product*/}
import ProductDetails from '../pages/home/product/ProductDetails';
import AddProduct from '../pages/home/product/AddProduct';
import AddProductCat from '../pages/home/product/AddProductCat';
import AddCar from '../pages/home/product/AddCar';
import CarDetails from '../pages/home/product/CarDtails';
import AddPhone from '../pages/home/product/AddPhone';
import AddAppartement from '../pages/home/product/AddAppartement';
import AddServices from '../pages/home/product/AddServices';
{/* Filtre */}
import Filtre from '../pages/home/filtre/Filtre';
import FilterCat from '../pages/home/filtre/FilterCat';

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

            <Stack.Screen name="AddProductCat" component={AddProductCat}
            options={{ 
            title: 'choisissez votre catégorie', headerTitleAlign: 'center', 
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

            <Stack.Screen name="AddCar" component={AddCar}
            options={{ 
            title: 'Ajouter Voiture', headerTitleAlign: 'center', 
            headerStyle: {
              backgroundColor: '#4898D3',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '500',
            },}}/>

          <Stack.Screen name="AddCar" component={CarDetails}
            options={{ 
            title: 'Ajouter voiture', headerTitleAlign: 'center', 
            headerStyle: {
              backgroundColor: '#4898D3',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '500',
            },}}/>

          <Stack.Screen name="AddPhone" component={AddPhone}
            options={{ 
            title: 'Ajouter Produit', headerTitleAlign: 'center', 
            headerStyle: {
              backgroundColor: '#4898D3',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '500',
            },}}/>

          <Stack.Screen name="AddServices" component={AddServices}
            options={{ 
            title: 'Ajouter Produit', headerTitleAlign: 'center', 
            headerStyle: {
              backgroundColor: '#4898D3',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '500',
            },}}/>

          <Stack.Screen name="AddAppartement" component={AddAppartement}
            options={{ 
            title: 'Ajouter immobilier', headerTitleAlign: 'center', 
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

          <Stack.Screen name="FilterCat" component={FilterCat}
            options={{ 
            title: 'choisissez votre catégorie', headerTitleAlign: 'center', 
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