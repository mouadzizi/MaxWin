import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import Product from '../components/Product';

export default function results() {

    
    const image1 = require('../../assets/produit.jpg')
    const image2 = require('../../assets/prod2.jpg')
    const image3 = require('../../assets/produit3.png')
    const image4 = require('../../assets/produit01.jpg')
    const image5 = require('../../assets/produit02.jpg')
    const image6 = require('../../assets/produit03.jpg')

    return (
        <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
                        {/* Products Lists */}

            <Product click={()=>navigation.navigate('ProductDetails')} name='Tajin Beldi' price={35.50} owner='moad zizi' location='Tanger-Tétouan' state='Neuf' img={image1} />
            <Product click={()=>navigation.navigate('ProductDetails')} name='Trico' price={125} owner='Nezha' location='Merakech' img={image4} />
            <Product click={()=>navigation.navigate('ProductDetails')} name='Pasta Torilla' price={450} owner='PA kokols' location='Rabat' state='Neuf' img={image5} />
            <Product click={()=>navigation.navigate('ProductDetails')} name='Tajin Beldi' price={35.50} owner='moad zizi' location='Tanger-Tétouan' state='Neuf' img={image6} />
            <Product click={()=>navigation.navigate('ProductDetails')} name='Pasta Torilla' price={450} owner='PA kokols' location='Rabat' state='Neuf' img={image2} />
            <Product click={()=>navigation.navigate('ProductDetails')} name='Tajin Beldi' price={35.50} owner='moad zizi' location='Tanger-Tétouan' state='Neuf' img={image3} />

        </ScrollView>
        </SafeAreaView>
    )
}
