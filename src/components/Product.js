import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';
import {GlobalStyle} from '../style/GlobalStyle';
import {Fontisto, Entypo} from 'react-native-vector-icons';
import { Chip } from 'react-native-paper';

export default function Product(props) {
   
  const COD = props.chip1;
  const LP = props.chip2;
  
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
            <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: 8}}>

                {/* Cash On delevery */}
         
              <View
              style={{backgroundColor:'#4898D3', borderRadius: 15, padding: 5, marginLeft: 7}}>
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 12}}>livraison possible</Text>
              </View>
        
             

                {/* Payment Possible */}
              <View
              style={{backgroundColor:'#4898D3', borderRadius: 15, padding: 5, marginLeft: 7}}>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize: 12}}>paiement à la livraison</Text>
              </View>

            </View>
            

          </View>
        </View>
      </TouchableOpacity>

      </View>
    )
}