import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';
import {GlobalStyle} from '../style/GlobalStyle';
import {Fontisto, Entypo} from 'react-native-vector-icons';
import Stars from '../components/StarRating';

export default function Product(props) {
    return (

      <View>
        <TouchableOpacity
        onPress={props.click}>
        <View style={GlobalStyle.card}>
          <View style={GlobalStyle.cardImgWrapper}>
            <Image
              source={props.img}
              resizeMode="contain"
              style={GlobalStyle.cardImg}
            />
          </View>
          <View style={GlobalStyle.cardInfo}>
            <Text style={GlobalStyle.cardTitle}>{props.name}</Text>
            <Text style={GlobalStyle.cardPrice}>{props.price} MAD</Text>
            <View
            style={{flexDirection: 'row'}}>
            <Entypo 
              name='user'
              color='#B9B9BB'
            />
            <Text style={GlobalStyle.cardOwner}>{props.owner}</Text>
            </View>

            <View
            style={{flexDirection: 'row', marginTop: 2}}>
            <Entypo
            name='location'
            size={15}
            color='#B9B9BB'
            />
            <Text style={GlobalStyle.cardLocation}>{props.location}</Text>
            </View>
            <Text style={GlobalStyle.cardState}>{props.state}</Text>
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
            <Text style={GlobalStyle.cardState}>Bon Occasion</Text>
          </View>
        </View>
      </TouchableOpacity>
      </View>
    )
}