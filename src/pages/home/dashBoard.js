import React, { useEffect, useState } from 'react';

import { View, Alert, ScrollView, Text, StatusBar, SafeAreaView, TouchableOpacity} from 'react-native';
import { Searchbar,Button } from 'react-native-paper';
import {Ionicons} from 'react-native-vector-icons';

import { auth } from '../../API/firebase';
import * as Google from 'expo-google-sign-in';
import AsyncStorage from '@react-native-community/async-storage';

import Product from '../../components/Product';


export default function DashBoard({ navigation }) {
    

    const image1 = require('../../../assets/produit.jpg')
    const image2 = require('../../../assets/produit3.png')
    const image3 = require('../../../assets/produit2.png')

    

    //SearchBar Const

    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);



    return (
        <SafeAreaView>

        <StatusBar
        backgroundColor="#4898D3" />

        <ScrollView showsVerticalScrollIndicator={false}>

        <View style={{flex:1, backgroundColor: "#4898D3"}}>

        <View
        style={{flexDirection:'row'}}>

        <Ionicons
        name="md-menu"
        size={40}
        color='#fff'
        style={{alignSelf: 'center', margin: 5, marginLeft: 10}}
        onPress={()=>navigation.toggleDrawer()}
        />
        <Searchbar
            placeholder="Rechercher"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={{width: '85%', margin:8}}
        />
        </View>

        </View>

        {/* Filtre product & Add product */}
        <View style={{flexDirection: 'row', elevation: 25, height: 50, marginBottom: 2}}>
                
                <TouchableOpacity
                    onPress={()=>{navigation.navigate("AddProductCat")}}
                    style={{flexDirection: 'row', width: '50%', backgroundColor: '#F16E44', justifyContent: 'center'}}>
                   
                    <Ionicons
                        name="md-add-circle"
                        size={35}
                        color='#fff'
                        style={{alignSelf: 'center'}}   
                    />
                    <Text style={{textAlignVertical: 'center' ,marginLeft: 15, fontWeight: 'bold', color: '#fff'}}>Ajouter Produit</Text>
                </TouchableOpacity>            

                <TouchableOpacity
                    onPress={()=>{navigation.navigate("FilterCat")}}
                    style={{flexDirection: 'row', width: '50%', backgroundColor: '#4898D3', justifyContent: 'center', borderWidth: 1.5, borderColor: '#F16E44', elevation: 3}}>
                    
                    <Ionicons
                        name='ios-options'
                        size={35}
                        color='#fff'
                        style={{alignSelf: 'center'}}
                    />
                    <Text style={{textAlignVertical: 'center' ,marginLeft: 15, fontWeight: 'bold', color: '#fff'}}>Filtre</Text>
                </TouchableOpacity> 

            </View>

            {/* Products Lists */}

            <Product click={()=>navigation.navigate('ProductDetails')} name='Tajin Beldi' price={35.50} owner='moad zizi' location='Tanger-Tétouan' state='Neuf' img={image1} />
            <Product click={()=>navigation.navigate('ProductDetails')} name='Coffee' price={50} owner='Mohamed deraz' location='Casablanca' state='Neuf' img={image3} />
            <Product click={()=>navigation.navigate('ProductDetails')} name='Pasta Torilla' price={450} owner='PA kokols' location='Rabat' state='Neuf' img={image2} />
            <Product click={()=>navigation.navigate('ProductDetails')} name='Tajin Beldi' price={35.50} owner='moad zizi' location='Tanger-Tétouan' state='Neuf' img={image1} />

        </ScrollView>
        </SafeAreaView>
    )
}
