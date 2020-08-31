import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import { Divider } from 'react-native-paper';
import { GlobalStyle } from '../../src/style/GlobalStyle';
import {MaterialIcons} from 'react-native-vector-icons';

export default function Product() {
    return (

        <View 
        style={{flex: 1, backgroundColor: '#fff', borderRadius: 15, marginBottom: 20}}>
        
        <TouchableOpacity
        style={GlobalStyle.item}>
        

           <View style={{flex: 1, flexDirection: 'row'}}>

            {/** Image */}
           <View style={{flex: 1}}>

            <ImageBackground 
                source={require("../../assets/produit.jpg")}
                style={{width: '100%', height: '100%'}}
                resizeMode={"stretch"}>
            <View style={{backgroundColor: '#56C02F', position: 'absolute', top: 5,height: 'auto', width: '85%', opacity: 0.75}}>
                <Text style={{color: '#fff', fontSize: 12, fontWeight: 'bold'}}>Badge green</Text>
            </View>
            <View style={{flexDirection:'row', position: 'absolute', bottom: 15, right: 10, backgroundColor: '#c2c2c2', borderRadius: 7}}>
            <MaterialIcons
                name='camera-alt'
                size={25}
                color='#000'
            />
            <Text style={{color:'#000', fontSize: 17}}>3</Text>
            </View>


            </ImageBackground>

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
                
                <View style={{ flex: 1}}>

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

                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 5}}>

                <View style={{flexDirection:'row', backgroundColor: '#F07034',justifyContent:'space-around' , borderRadius: 25, width: '40%'}}>
                <Text style={{color: '#fff', fontWeight: 'bold'}}>Maroc</Text>
                </View>

                <View style={{flexDirection:'row', backgroundColor: '#56C02F',justifyContent:'space-around' , borderRadius: 25, width: '50%'}}>
                <Text style={{color: '#fff', fontWeight: 'bold'}}>Sold 10%</Text>
                </View>

                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 5}}>
                
                <View style={{flexDirection:'row', backgroundColor: '#56C02F',justifyContent:'space-around' , borderRadius: 25, width: '50%'}}>
                <Text style={{color: '#fff', fontWeight: 'bold'}}>Sold 10%</Text>
                </View>
                
                <View style={{flexDirection:'row', backgroundColor: '#F07034',justifyContent:'space-around' , borderRadius: 25, width: '40%'}}>
                <Text style={{color: '#fff', fontWeight: 'bold'}}>Maroc</Text>
                </View>

                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 5}}>
                
                <View style={{flexDirection:'row', backgroundColor: '#56C02F',justifyContent:'space-around' , borderRadius: 25, width: '50%'}}>
                <Text style={{color: '#fff', fontWeight: 'bold'}}>Sold 10%</Text>
                </View>
                
                <View style={{flexDirection:'row', backgroundColor: '#F07034',justifyContent:'space-around' , borderRadius: 25, width: '40%'}}>
                <Text style={{color: '#fff', fontWeight: 'bold'}}>Maroc</Text>
                </View>

                </View>

                </View>
                <Divider />

                <View style={{flexDirection: 'row', justifyContent: 'flex-end', bottom: 0, right: 10    }}>
                <Text style={{marginLeft: 5, fontWeight: 'bold', fontSize: 15, color:'#C2C2C2', textDecorationLine: 'line-through'}}>35.00 MAD</Text>
                <Text style={{marginLeft: 5, fontWeight: 'bold', fontSize: 15, color:'#4898D3'}}>22.30 MAD</Text>
                </View>
                
                </View>


           </View>

           </View>
        </TouchableOpacity>

        </View>
    )
}