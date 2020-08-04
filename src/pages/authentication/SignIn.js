import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert, Dimensions,Keyboard} from 'react-native';
import {TextInput,Button} from 'react-native-paper';

import * as Animatable from 'react-native-animatable';
import { GlobalStyle,textTheme } from '../../style/GlobalStyle';
import {auth} from '../../API/firebase'

const width=Dimensions.get('screen').width

export default function SignIn({navigation}){
    const [email,setEmail] = useState('');
    const [password,setPassword]=useState('')
    const [loading,setLoading]=useState(false)

    //firebase stuff
    const SignIn = ()=>{
      setLoading(true)
      var isErr =false
      Keyboard.dismiss()
      auth.signInWithEmailAndPassword(email.trim(),password)
      .catch(err=>{
        Alert.alert('Info',err.message)
        setLoading(false)
        isErr = true;
      })
      .then(()=>{
        if(auth.currentUser && !isErr){
          setLoading(false)
          navigation.replace('Home')
        }
      })

    }

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

      <View style={{flex: 4}}>

        <TextInput
        label='Email'
        mode='outlined'
        keyboardType='email-address'
        placeholder='e.g: yourMail@mail.com'
        theme={textTheme}
        style={{marginTop: 50}}
        onChangeText={email=>setEmail(email)}
        />

        <TextInput
        label='Password'
        mode='outlined'
        placeholder='Enter your Password'
        theme={textTheme}
        secureTextEntry={true}
        style={{marginTop: 25}}
        onChangeText={pass=>setPassword(pass)}
        />

        <TouchableOpacity
        onPress={()=> alert('comming up on the next virsion')}>
        <Text style={{
          marginTop: 15,
          fontWeight: 'bold',
          color: '#A8D28F',
        }}>Forgot Password ?</Text>
        </TouchableOpacity>
        <Button
        mode='contained'
        uppercase={false}
        style={{alignSelf:'center',marginVertical:10,}}
        loading={loading}
        onPress={SignIn}
        color='#4898D3'
        dark={true}
        >
          Sign in       
        </Button>
        
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