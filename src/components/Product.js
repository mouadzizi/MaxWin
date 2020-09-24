import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';
import {GlobalStyle} from '../style/GlobalStyle';
import {Fontisto, Entypo} from 'react-native-vector-icons';
import { Chip } from 'react-native-paper';

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

          {/* Info of the card */}
          <View style={GlobalStyle.cardInfo}>

            {/* name */}
            <Text style={GlobalStyle.cardTitle}>{props.name}</Text>

            {/* price */}
            <Text style={GlobalStyle.cardPrice}>{props.price} DHS</Text>

            {/* Product owner */}
            <View
            style={{flexDirection: 'row'}}>
            <Entypo 
              name='user'
              color='#B9B9BB'
            />
            <Text style={GlobalStyle.cardOwner}>{props.owner}</Text>
            </View>

            {/* Location */}
            <View
            style={{flexDirection: 'row', marginTop: 2}}>
            <Entypo
            name='location'
            size={15}
            color='#B9B9BB'
            />
            <Text style={GlobalStyle.cardLocation}>{props.location}</Text>
            </View>

            {/* Cips */}
            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 5}}>

                {/* Cash On delevery */}
              <View
              style={{backgroundColor:'#F16E44', alignSelf: 'flex-start', borderRadius: 15, padding: 5}}>
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 10}}>Livraison dans tout le Maroc </Text>
              </View>

                {/* Cash On delevery */}
              <View
              style={{backgroundColor:'#4898D3', alignSelf: 'flex-end', borderRadius: 15, padding: 5}}>
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 10}}>Cash on delevery</Text>
              </View>

            </View>
            

          </View>
        </View>
      </TouchableOpacity>

      </View>
    )
}