import React from 'react';

import { View, ScrollView, Text, StatusBar, SafeAreaView, TouchableWithoutFeedback } from 'react-native';

import { Searchbar } from 'react-native-paper';
import {Ionicons} from 'react-native-vector-icons';
import {colors} from '../../style/GlobalStyle';
import Product from '../../components/Product';


export default function DashBoard({ navigation }) {
    

    const image1 = require('../../../assets/produit.jpg')
    const image2 = require('../../../assets/prod2.jpg')
    const image3 = require('../../../assets/produit3.png')
    const image4 = require('../../../assets/produit01.jpg')
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
                
                <TouchableWithoutFeedback 
                    onPress={()=>{navigation.navigate("AddProductCat")}}
                    accessibilityRole='button'>
                    <View
                    style={{flexDirection: 'row', width: '50%', backgroundColor: colors.second, justifyContent: 'center'}}>       
                    <Ionicons
                        name="md-add-circle"
                        size={35}
                        color='#fff'
                        style={{alignSelf: 'center'}}   
                    />
                    <Text style={{textAlignVertical: 'center' ,marginLeft: 15, fontWeight: 'bold', color: '#fff'}}>Ajouter Produit</Text>
               
                    </View>
                  </TouchableWithoutFeedback>            

                <TouchableWithoutFeedback
                    onPress={()=>{navigation.navigate("Filtre")}}>
                    <View
                    
                    style={{flexDirection: 'row', width: '50%', backgroundColor: colors.primary, justifyContent: 'center', borderWidth: 1.5, borderColor: '#F16E44', elevation: 3}}>
                    
                    <Ionicons
                        name='ios-options'
                        size={35}
                        color='#fff'
                        style={{alignSelf: 'center'}}
                    />
                    <Text style={{textAlignVertical: 'center' ,marginLeft: 15, fontWeight: 'bold', color: '#fff'}}>Filtre</Text>

                    </View>
                    
                </TouchableWithoutFeedback> 

            </View>

            {/* Products Lists */}

            <Product click={()=>navigation.navigate('ProductDetails')} name='Tajin' price={35.50} owner='moad zizi' location='Tanger' img={image1} particulier={true}/>
            <Product click={()=>navigation.navigate('ProductDetails')} name='Titre Vit' price={125} owner='Nezha' location='Merakech' img={image4} particulier={false}/>
            <Product click={()=>navigation.navigate('ProductDetails')} name='Appartemen Mesnana' price={2550} owner='Mohammed' location='Rabat' img={image5} particulier={true}/>
            <Product click={()=>navigation.navigate('ProductDetails')} name='Pc Dell i5 5éme' price={3000} owner='moad zizi' location='Tétouan' img={image6} particulier={false}/>
            <Product click={()=>navigation.navigate('ProductDetails')} name='Passate' price={45000} owner='Sanae' location='Rabat' img={image2} particulier={true}/>
            <Product click={()=>navigation.navigate('ProductDetails')} name='Macarona' price={25} owner='Boutique Sourie' location='Casablanca' img={image3} particulier={false}/>
            <Product click={()=>navigation.navigate('ProductDetails')} name='Pc i7 neuf' price={7500} owner='TotoPRo' location='Agadir' img={image6} particulier={true} />
            <Product click={()=>navigation.navigate('ProductDetails')} name='Voiture test' price={45000} owner='PA kokols' location='Rabat' img={image2} particulier={false}/>
            <Product click={()=>navigation.navigate('ProductDetails')} name='PAsta italian' price={37} owner='moad zizi' location='Tétouan' state='Neuf' img={image3} particulier={true}/>


        </ScrollView>
        </SafeAreaView>
    )
}
