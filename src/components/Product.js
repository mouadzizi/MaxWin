import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';
import {GlobalStyle} from '../style/GlobalStyle';
import {Fontisto, Entypo} from 'react-native-vector-icons'

export default function Product() {
    return (

      <View>
        <TouchableOpacity>
        <View style={GlobalStyle.card}>
          <View style={GlobalStyle.cardImgWrapper}>
            <Image
              source={require('../../assets/produit.jpg')}
              resizeMode="contain"
              style={GlobalStyle.cardImg}
            />
          </View>
          <View style={GlobalStyle.cardInfo}>
            <Text style={GlobalStyle.cardTitle}>Tajin Beldi</Text>
            <Text style={GlobalStyle.cardPrice}>300.00 MAD</Text>
            <View
            style={{flexDirection: 'row'}}>
            <Entypo 
              name='user'
              color='#B9B9BB'
            />
            <Text style={GlobalStyle.cardOwner}>Moad Zizi</Text>
            </View>

            <View
            style={{flexDirection: 'row', marginTop: 2}}>
            <Entypo
            name='location'
            size={15}
            color='#B9B9BB'
            />
            <Text style={GlobalStyle.cardLocation}>Tout le Maroc</Text>
            </View>
            <Text style={GlobalStyle.cardDate}>Aujourd'hui</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={GlobalStyle.card}>
          <View style={GlobalStyle.cardImgWrapper}>
            <Image
              source={require('../../assets/prod2.jpg')}
              resizeMode="contain"
              style={GlobalStyle.cardImg}
            />
          </View>
          <View style={GlobalStyle.cardInfo}>
            <Text style={GlobalStyle.cardTitle}>Golf ki 300 TDI</Text>
            <Text style={GlobalStyle.cardPrice}>30000.00 MAD</Text>
            <View
            style={{flexDirection: 'row'}}>
            <Fontisto 
              name='shopping-store'
              color='#B9B9BB'
            />
            <Text style={GlobalStyle.cardOwner}>Tanger car shop</Text>
            </View>

            <View
            style={{flexDirection: 'row', marginTop: 2}}>
            <Entypo
            name='location'
            size={15}
            color='#B9B9BB'
            />
            <Text style={GlobalStyle.cardLocation}>Tout le Maroc</Text>
            </View>
            <Text style={GlobalStyle.cardDate}>07/09/2020</Text>
          </View>
        </View>
      </TouchableOpacity>
      </View>
    )
}