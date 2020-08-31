import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import { Chip, Divider } from 'react-native-paper';
import { GlobalStyle } from '../../src/style/GlobalStyle';
import {MaterialIcons, FontAwesome5 } from 'react-native-vector-icons';

export default function Product() {
    return (
        
        <TouchableOpacity
        style={GlobalStyle.item}>
        

           <View style={{flex: 1, flexDirection: 'row'}}>

            {/** Image */}
           <View style={{flex: 1}}>

            <ImageBackground 
                source={require("../../assets/produit.jpg")}
                style={{width: '100%', height: '100%'}}
                resizeMode={"stretch"}/>

            </View>

           <View style={{flex: 2}}>

            {/** Title */}
           <Text style={{marginLeft: 5, fontWeight: 'bold', fontSize: 18}}>Tajin beldi</Text>

                {/** Location */}
                <View style={{flexDirection: 'row'}}>
                <MaterialIcons
                name='place'
                size={15}
                color='#000'
                />
                <Text style={{color:'#000'}}> Tanger-Tétouan</Text>
                </View>

                <Divider />

                {/** Chip View */}
                <View style={{ margin: 7}}>

                <View style={{flexDirection:'row', backgroundColor: '#F07034',justifyContent:'space-around' , borderRadius: 25, width: '65%'}}>
                <Text style={{color: '#fff', fontWeight: 'bold'}}>Livraison gratuit</Text>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 5}}>

                <View style={{flexDirection:'row', backgroundColor: '#F07034',justifyContent:'space-around' , borderRadius: 25, width: '40%'}}>
                <Text style={{color: '#fff', fontWeight: 'bold'}}>Maroc</Text>
                </View>
                
                <View style={{flexDirection:'row', backgroundColor: '#56C02F',justifyContent:'space-around' , borderRadius: 25, width: '50%'}}>
                <Text style={{color: '#fff', fontWeight: 'bold'}}>Sold 10%</Text>
                </View>


                </View>

                <Divider />

                <View style={{flexDirection: 'row', justifyContent: 'flex-end', bottom: 0}}>
                <Text style={{marginLeft: 5, fontWeight: 'bold', fontSize: 15, color:'#C2C2C2', textDecorationLine: 'line-through'}}>35.00 MAD</Text>
                <Text style={{marginLeft: 5, fontWeight: 'bold', fontSize: 15, color:'#4898D3'}}>22.30 MAD</Text>
                </View>
                
                </View>


           </View>

           </View>
        </TouchableOpacity>
    )
}