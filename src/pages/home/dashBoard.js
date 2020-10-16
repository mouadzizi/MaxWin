import React from 'react';

import { View, ScrollView, Text, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native';

import { Searchbar } from 'react-native-paper';
import {Ionicons} from 'react-native-vector-icons';
import {colors} from '../../style/GlobalStyle';
import Product from '../../components/Product';

export default function DashBoard({ navigation }) {
    

    const image1 = require('../../../assets/produit8.png')
    const image2 = require('../../../assets/prod2.jpg')
    const image3 = require('../../../assets/produit3.png')
    const image4 = require('../../../assets/produit5.jpg')
    const image5 = require('../../../assets/produit02.jpg')
    const image6 = require('../../../assets/produit03.jpg')

    

    //SearchBar Const

    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);



    return (
        <SafeAreaView>

        <StatusBar
        backgroundColor={colors.primary} />

        <ScrollView showsVerticalScrollIndicator={false}>

        <View style={{flex:1, backgroundColor: colors.primary}}>

        <View
        style={{flexDirection:'row'}}>

        <Ionicons
        onPress={()=> navigation.openDrawer()}
        name="md-menu"
        size={40}
        color='#fff'
        style={{alignSelf: 'center', margin: 5, marginLeft: 10}}
        />

        <Searchbar
            placeholder="Rechercher"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={{width: '83%', margin:8}}
        />
        </View>

        </View>

        {/* Filtre product & Add product */}
        <View style={{flexDirection: 'row', elevation: 25, height: 50, marginBottom: 2}}>
                
                <TouchableOpacity
                delayPressIn={0}
                onPress={()=>{navigation.navigate("AddProductCat")}}
                style={{flexDirection: 'row', width: '50%', backgroundColor: colors.second, justifyContent: 'center'}}>       
                    
                   <Ionicons
                        name="md-add-circle"
                        size={35}
                        color='#fff'
                        style={{alignSelf: 'center'}}/>
                        
                    <Text style={{textAlignVertical: 'center' ,marginLeft: 15, fontWeight: 'bold', color: '#fff'}}>Ajouter Produit</Text>
 
                </TouchableOpacity>            

                <TouchableOpacity
                delayPressIn={0}
                onPress={()=>{navigation.navigate("Filtre")}}
                style={{flexDirection: 'row', width: '50%', backgroundColor: colors.primary, justifyContent: 'center', borderWidth: 1.5, borderColor: '#F16E44', elevation: 3}}>
                    
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

            <Product click={()=>navigation.navigate('ProductDetails')} name='Appartement 60m' price={3500} owner='Mohammed' location='Tanger' img={image5} particulier={true}/>
            <Product click={()=>navigation.navigate('ProductDetails')} name='Pc Dell i5 5éme generation' price={3000} owner='TechPic' location='Tétouan' img={image6} particulier={false} p1={true} p2={true}/>
            <Product click={()=>navigation.navigate('ProductDetails')} name='Passat cc' price={130000} owner='CatPick' location='Rabat' img={image2} particulier={false}/>
            <Product click={()=>navigation.navigate('ProductDetails')} name='Pc i7 neuf' price={7500} owner='Karima' location='Agadir' img={image4} particulier={true} p2={true} />
            <Product click={()=>navigation.navigate('ProductDetails')} name='Top côtelé unicolore' price={550} owner='Shushu store' location='Casablanca' img={image1} particulier={false} p1={true}/>
            <Product click={()=>navigation.navigate('ProductDetails')} name='PAsta italian' price={37} owner='moad zizi' location='Tétouan' state='Neuf' img={image3} particulier={true}/>


        </ScrollView>
        </SafeAreaView>
    )
}
