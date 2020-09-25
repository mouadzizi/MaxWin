import React from 'react'
import { View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import {GlobalStyle} from '../style/GlobalStyle';

export default function ProductEdit(props) {
  
  const image2 = require('../../assets/produit3.png')

    return (
        
        <View>
        <View style={[GlobalStyle.card, {height: 70}]}>
          <View style={GlobalStyle.cardImgWrapper}>
            <Image
              source={image2}
              resizeMode="contain"
              style={GlobalStyle.cardImg}
            />
          </View>

          <View style={{flex: 1}}>
            <Text style={GlobalStyle.cardTitle}>Product title</Text>
            <Text style={GlobalStyle.cardPrice}>50 MAD</Text>
          </View>

          <View style={{flex: 1}}>
            <TouchableOpacity
            onPress={()=>Alert.alert('Edit Product')}
            style={{height: '40%', backgroundColor: '#4898D3', borderRadius: 10}}>
              <Text
              style={{textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 15 }}>Modifier</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=>Alert.alert('Delete Product')}
            style={{height: '40%', backgroundColor : 'red', textAlignVertical: 'center', borderRadius: 10, marginTop: 5}}>
              <Text
              style={{textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 15 }}>Surprimer</Text>
            </TouchableOpacity>
          </View>
          </View>
          <Text></Text>
          
        </View>


    )
}