import React, {useState} from 'react';
import {Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import {TextInput} from 'react-native-paper';

import { GlobalStyle } from '../../style/GlobalStyle';


export default function SignIn({navigation}){

  const {width, height} = Dimensions.get('window');
  const height_image = height * 0.3 ;
  const width_image =  width * 0.6;

    return(

        <View style={{flex:1, margin: 25, backgroundColor: '#fff'}}>

        <View style={{flex: 1}}>


        <Image
              source={require("../../../assets/logo.jpg")}
              style={{height:height_image, width: width_image, alignSelf: 'center', marginTop: 15}}
              resizeMode={"stretch"}/>

      </View>

      <View style={{flex: 4}}>

        
        <TextInput
        label='Email'
        mode='outlined'
        placeholder='e.g: yourMail@mail.com'
        theme={{colors: {primary: '#A8D28F', background: '#fff' }}}
        style={{marginTop: 50}}
        />

        <TextInput
        label='Password'
        mode='outlined'
        placeholder='Enter your Password'
        theme={{colors: {primary: '#A8D28F', background: '#fff' }}}
        secureTextEntry={true}
        style={{marginTop: 25}}
        />

        <TouchableOpacity
        onPress={()=> alert('comming up on the next virsion')}>
        <Text style={{
          marginTop: 15,
          fontWeight: 'bold',
          color: '#A8D28F',
        }}>Forgot Password ?</Text>
        </TouchableOpacity>

        <TouchableOpacity>
        <Text
        style={GlobalStyle.signInBoutton}>Sign In</Text>
        </TouchableOpacity>
        
        <View style={{flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginTop: 20}}>
        <Text style={{fontSize: 15, color: 'grey'}}> You don't have an account ? </Text>
        
        <TouchableOpacity
        onPress={()=> navigation.push('SignUp')}>
          <Text style={{color:'green'}}>Sign Up</Text>
        </TouchableOpacity>
        </View>

      </View>
      </View>
    );
}