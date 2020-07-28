import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';

import * as Animatable from 'react-native-animatable';
import { GlobalStyle } from '../../style/GlobalStyle';


export default function SignIn({navigation}){
    return(
        <View style={GlobalStyle.SplashContainer}>
        <View style={GlobalStyle.SignInHeader}>


        <Text style={{
          color:'white',
          fontSize: 15,
          fontWeight: "100",
        }}>
        Login with Email and password</Text>
      </View>

      <Animatable.View 
      style={GlobalStyle.SignInFooter}
      animation="fadeInUpBig"
      duration={2000}>

        
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
        style={GlobalStyle.buttonSignIn}>Sign In</Text>
        </TouchableOpacity>
        
        <View style={{flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginTop: 20}}>
        <Text style={{fontSize: 15, color: 'grey'}}> You don't have an account ? </Text>
        
        <TouchableOpacity
        onPress={()=> navigation.push('SignUp')}>
          <Text style={{color:'green'}}>Sign Up</Text>
        </TouchableOpacity>
        </View>

      </Animatable.View>
      </View>
    );
}