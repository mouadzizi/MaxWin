import React, {useState,useEffect} from 'react';
import {View, Text, TouchableOpacity, Alert, Dimensions,Keyboard} from 'react-native';
import {TextInput,Button} from 'react-native-paper';

import * as Animatable from 'react-native-animatable';
import { GlobalStyle,textTheme } from '../../style/GlobalStyle';
import {auth} from '../../API/firebase';
import firebase from 'firebase'
import * as Google from 'expo-google-app-auth';



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

    async function signInWithGoogleAsync() {
      setLoading(true)
      try {
        const result = await Google.logInAsync({
          androidClientId: '296245537422-m64efd4o27agofispfdie1hb99edrf0u.apps.googleusercontent.com',
          //iosClientId: YOUR_CLIENT_ID_HERE,
          behavoir:'web',
          scopes: ['profile', 'email'],
        });
    
        if (result.type === 'success') {
          setLoading(false)
          onSignIn(result)
          
          return result.accessToken;

        } else {
          setLoading(false)
          return { cancelled: true };
        }
      } catch (e) {
        return { error: true };
      }
    }

    const onSignIn = (googleUser) =>{
      console.log('Google Auth Response', googleUser.user);
      // We need to register an Observer on Firebase Auth to make sure auth is initialized.
      var unsubscribe = auth.onAuthStateChanged(function(firebaseUser) {
        unsubscribe();
        // Check if we are already signed-in Firebase with the correct user.
        if (!isUserEqual(googleUser, firebaseUser)) {
          // Build Firebase credential with the Google ID token.
          var credential = firebase.auth.GoogleAuthProvider.credential(
              googleUser.idToken,googleUser.accessToken);
          // Sign in with credential from the Google user.
          auth.signInWithCredential(credential)
          .then(()=>{
            navigation.reset({
              index: 0,
              routes: [{ name: 'Dash' }],
            });
            console.log('user Signed in');
          })
          .catch((error) =>{
            // Handle Errors here.
            var errorCode = error.code;
            console.log(errorCode);
            var errorMessage = error.message;
            console.log(errorMessage);
            // The email of the user's account used.
            var email = error.email;
            console.log(email);
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            console.log(credential)
          });
        } else {
          console.log('User already signed-in Firebase.');
        }
      });
    }
    function isUserEqual(googleUser, firebaseUser) {
      if (firebaseUser) {
        var providerData = firebaseUser.providerData;
        for (var i = 0; i < providerData.length; i++) {
          if (providerData[i].providerId === auth.GoogleAuthProvider.PROVIDER_ID &&
              providerData[i].uid === googleUser.getBasicProfile().getId()) {
            // We don't need to reauth the Firebase connection.
            return true;
          }
        }
      }
      return false;
    }

    return(
        <View style={{flex:1}}>
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
        style={{marginTop:50}}
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

        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
        <Button
        mode='contained'
        uppercase={false}
        style={{alignSelf:'center',marginVertical:10,marginHorizontal:20}}
        loading={loading}
        onPress={SignIn}
        color='#4898D3'
        dark={true}>
          Sign in       
        </Button>
        <TouchableOpacity onPress={signInWithGoogleAsync}>
          <Text> Sign in with google </Text>
        </TouchableOpacity>
        </View>
        
        <View style={{flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginTop: 20}}>
        <Text style={{fontSize: 15, color: 'grey'}}> You don't have an account ? </Text>
        <TouchableOpacity
        >
          <Text style={{color:'green'}}>Sign Up</Text>
        </TouchableOpacity>
        </View>

      </View>
      </View>
    );
}