import React, {useState} from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';
import {GlobalStyle} from '../style/GlobalStyle';
import {FontAwesome, Entypo, MaterialCommunityIcons} from 'react-native-vector-icons';

export default function Product(props) {
  const [chip1, setChip1] = useState(false)
  const [chip2, setChip2] = useState(false)

  return (
      <View>
        <TouchableOpacity
        onPress={props.click}>
        <View 
        style={ 
        (chip1 && chip2) ? {flexDirection: "row", backgroundColor: '#fff', height: 130} :
        ( (!chip1 && chip2) || (!chip2 && chip1) )  ? {flexDirection: "row", backgroundColor: '#fff', height: 110} :
        {flexDirection: "row", backgroundColor: '#fff', height: 100}}>
          
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

            {chip1 ? 
              <View
            style={{flexDirection: 'row', marginTop: 2}}>
            <MaterialCommunityIcons
            name='truck-fast'
            size={15}
            color='#4898D3'
            />
            <Text style={GlobalStyle.cardChip}> Laivraison possible</Text>
            </View>
            : null}
            

            {chip2 ? <View
            style={{flexDirection: 'row', marginTop: 2}}>
            <FontAwesome
            name='money'
            size={15}
            color='#4898D3'
            />
            <Text style={GlobalStyle.cardChip}> Paiement à la livraison</Text>
            </View>
            : null}
            


          </View>
        </View>
      </TouchableOpacity>



      </View>
    )
}