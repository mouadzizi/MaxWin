import React from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import Swiper from 'react-native-swiper';
import {GlobalStyle} from '../../../style/GlobalStyle';
import {Entypo} from 'react-native-vector-icons'


export default function ProductDetails({navigation}) {

    return (

        <ScrollView  showsVerticalScrollIndicator={false}>

        <View style={GlobalStyle.sliderContainer}>
        <Swiper
          autoplay
          height={200}
          activeDotColor="#FF6347">

          {/* Swiper 1*/}
          <View style={GlobalStyle.slide}>
            <Image
            source={require("../../../../assets/produit.jpg")}
              resizeMode="contain"
              style={GlobalStyle.sliderImage}
            />
          </View>

          {/* Swiper 2*/}
          <View style={GlobalStyle.slide}>
            <Image
            source={require("../../../../assets/produit01.jpg")}
              resizeMode="contain"
              style={GlobalStyle.sliderImage}
            />
          </View>
          
          {/* Swiper 3*/}
          <View style={GlobalStyle.slide}>
            <Image
            source={require("../../../../assets/logo.jpg")}
              resizeMode="cover"
              style={GlobalStyle.sliderImage}
            />
          </View>

          {/* Swiper 4*/}
          <View style={GlobalStyle.slide}>
            <Image
            source={require("../../../../assets/produit02.jpg")}
              resizeMode="cover"
              style={GlobalStyle.sliderImage}
            />
          </View>

      </Swiper>
      </View>

      <View style={GlobalStyle.infoContainer}>
        <Text style={GlobalStyle.h1}>Titre de produit</Text>

        <View
        style={{flexDirection: 'row', marginTop: 10, }}>

        <View
            style={{flexDirection: 'row', width: '50%'}}>
            <Entypo 
              name='user'
              color='#4898D3'
              size={20}
              style={{marginRight: 5}}
            />
            <Text style={{color: '#4898D3', fontSize: 17, fontFamily: 'serif'}}>Mohammed </Text>
        </View>

      <Text style={[GlobalStyle.cardPrice, {fontSize: 18, width: '50%', fontWeight: '700', fontFamily: 'Roboto'} ]}>300.00 DHS</Text>


        </View>
        
      </View>
      
      <Text
      style={{color: '#4898D3', marginLeft: 20}}>
      Contact</Text>

      <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 10, flex: 1}}>

      <TouchableOpacity
      onPress={()=>navigation.navigate("Messages")}
      style={{backgroundColor: '#4898D3', flex: 1, height: 75, justifyContent: 'center', alignItems: 'center'}}>
      <Entypo 
              name='chat'
              color='#fff'
              size={40}
            />
      <Text
      style={{color: '#fff', fontSize: 18, fontFamily: 'serif'}}>Discuter</Text>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={()=>Alert.alert("+212.6 .26.617 611")}
      style={{backgroundColor: '#FF6347', flex: 1, height: 75, justifyContent: 'center', alignItems: 'center'}}>
      <Entypo 
              name='phone'
              color='#fff'
              size={40}
            />
      <Text
      style={{color: '#fff', fontSize: 18, fontFamily: 'serif' }}>Appeler</Text>
      </TouchableOpacity>
 
      </View>

      <Text
      style={{color: '#4898D3', marginLeft: 20}}>
      Description</Text>

      <View style={GlobalStyle.infoContainer}>
        <Text
        style={{fontFamily: 'sans-serif'}}>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
        esse cillum dolore eu fugiat nulla pariatur.
        😉😉😉😉 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
        deserunt mollit anim id est laborum.</Text>
      </View>

      <Text
      style={{color: '#4898D3', marginLeft: 20}}>
       Caractéristiques</Text>

      <View style={GlobalStyle.infoContainer}>
        <View
        style={{flex:1, flexDirection: 'row'}}>

        <View
        style={{flex: 1}}>
        <Text
        style={{fontWeight: 'bold', marginTop: 4}}>Etat</Text>
        <Text
        style={{fontWeight: 'bold', marginTop: 4}}>Etat</Text>
        <Text
        style={{fontWeight: 'bold', marginTop: 4}}>Etat</Text>
        <Text
        style={{fontWeight: 'bold', marginTop: 4}}>Etat</Text>
        <Text
        style={{fontWeight: 'bold', marginTop: 4}}>Etat</Text>
        </View>

        <View
        style={{flex: 1}}>
        <Text
        style={{marginTop: 4}}>Neuf</Text>
        <Text
        style={{marginTop: 4}}>Neuf</Text>
        <Text
        style={{marginTop: 4}}>Neuf</Text>
        <Text
        style={{marginTop: 4}}>Neuf</Text>
        <Text
        style={{marginTop: 4}}>Neuf</Text>
        </View>

        </View>
      </View>

    </ScrollView>

    )
}