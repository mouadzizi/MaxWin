import React, {useState} from 'react'
import { View, Text, Image, Alert} from 'react-native';
import {Menu, Divider, Button, Provider} from 'react-native-paper';
import {GlobalStyle} from '../style/GlobalStyle';

export default function ProductEdit(props) {

  const logo = require('../../assets/logo.jpg')

    return (

        <View>
        <View style={{height: 100, width: '100%', flexDirection: 'row', borderWidth: 1, borderColor: '#c2c2c2'}}>
          <View style={{flex: 2}}>
            <Image
              source={logo}
              resizeMode="contain"
              style={GlobalStyle.cardImg}
            />
          </View>

          <View style={{flex: 3}}>
            <Text style={{fontSize: 19, fontWeight: 'bold'}}>Product title</Text>
            <Text style={{color: '#F16E44', fontSize: 18}}>50 MAD</Text>
          </View>

          <View style={{flex: 1}}>
          <Menu.Item icon="delete" onPress={() => {Alert.alert("Suprimer")}}/>
          <Menu.Item icon="square-edit-outline" onPress={() => {Alert.alert("Edit")}}/>
          </View>
          </View>
        </View>
        


    )
}