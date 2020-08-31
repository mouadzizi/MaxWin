import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import { Chip, Divider } from 'react-native-paper';
import { GlobalStyle } from '../../src/style/GlobalStyle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function ProductEdit() {
    return (
        
        <TouchableOpacity
        style={GlobalStyle.item}>
           <View style={{flex: 1, flexDirection: 'row'}}>

           <View style={{flex: 2, backgroundColor: '#1126'}}>
            <ImageBackground 
                source={require("../../assets/produit.jpg")}
                style={{width: '100%', height: '100%'}}
                resizeMode={"stretch"}
            />
            </View>

           <View style={{flex: 4}}>
                <Text style={{marginLeft: 5, fontWeight: 'bold', fontSize: 18}}>Xiaomi redmi note 7</Text>
                <Text style={{marginLeft: 5, fontWeight: 'bold', fontSize: 15, color:'#4898D3'}}>5000.00 MAD</Text>
                <View style={{flexDirection: 'row'}}>
                <MaterialIcons
                name='place'
                size={15}
                color='#000'
                />
                <Text style={{color:'#000'}}> Tanger-Tétouan</Text>
                </View>
                <Divider />

                <View style={{marginTop: 10}}>
                <Chip 
                icon="information"
                style={{width: 130, height: 30}}>Example Chip</Chip>
                </View>


           </View>

           </View>
        </TouchableOpacity>
    )
}