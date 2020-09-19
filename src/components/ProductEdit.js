import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';
import {GlobalStyle} from '../style/GlobalStyle';
import {Entypo} from 'react-native-vector-icons';

export default function ProductEdit(props) {
  
  const image1 = require('../../assets/produit.jpg')
  const image2 = require('../../assets/produit3.png')

    return (
        

        
        <View>
        <View style={[GlobalStyle.card, {height: 80}]}>
          <View style={GlobalStyle.cardImgWrapper}>
            <Image
              source={image2}
              resizeMode="contain"
              style={GlobalStyle.cardImg}
            />
          </View>
          <View style={GlobalStyle.cardInfo}>
            <Text style={GlobalStyle.cardTitle}>Product title</Text>
            <Text style={GlobalStyle.cardPrice}>50 MAD</Text>
          </View>
          </View>
          <Text></Text>
          <View style={[GlobalStyle.card, {height: 80}]}>
          <View style={GlobalStyle.cardImgWrapper}>
            <Image
              source={image1}
              resizeMode="contain"
              style={GlobalStyle.cardImg}
            />
          </View>
          <View style={GlobalStyle.cardInfo}>
            <Text style={GlobalStyle.cardTitle}>Product title 2</Text>
            <Text style={GlobalStyle.cardPrice}>300 MAD</Text>
          </View>
          </View>
        </View>


    )
}