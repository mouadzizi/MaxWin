import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert, Image, Dimensions ,Keyboard, SafeAreaView, ScrollView} from 'react-native';
import {TextInput,Button, ActivityIndicator} from 'react-native-paper';
import { GlobalStyle,textTheme } from '../../style/GlobalStyle';
import {auth} from '../../API/firebase';
import firebase from 'firebase';
import * as Google from 'expo-google-app-auth';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



export default function SignIn({navigation}){
    const [email,setEmail] = useState('');
    const [password,setPassword]=useState('')
    const [loading,setLoading]=useState(false)
    const [gLoading,setGLoading]=useState(false)

    //firebase SignIn
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
          navigation.replace('HomeTabs')
        }
      })
    }

    async function signInWithGoogleAsync() {
      setGLoading(true)
      try {
        const result = await Google.logInAsync({
          androidClientId: '296245537422-m64efd4o27agofispfdie1hb99edrf0u.apps.googleusercontent.com',
          //iosClientId: YOUR_CLIENT_ID_HERE,
          behavoir:'web',
          scopes: ['profile', 'email'],
        });
    
        if (result.type === 'success') {
          setGLoading(false)
          onSignIn(result)
          
          return result.accessToken;

        } else {
          setGLoading(false)
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
              routes: [{ name: 'HomeTabs' }],
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
          console.log('User already signed-in');
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
    const { width, height } = Dimensions.get('window');
    const height_image = height * 0.3;
    const width_image = width * 0.6;

    return(

      <SafeAreaView style={{flex: 1, backgroundColor: '#fff', padding: 20}} >
          <ScrollView showsVerticalScrollIndicator={false}> 

        <View style={{flex:1, backgroundColor: '#fff'}}>
        
        <Image source={require('../../../assets/logo.jpg')}
               style={{ height: height_image, width: width_image, alignSelf: 'center', marginTop: 15 }}
               resizeMode={"stretch"}
        />
        </View>
      <View style={{flex: 4}}>
        <TextInput
        label='E-mail'
        mode='outlined'
        keyboardType='email-address'
        placeholder='votre-mail@mail.com'
        theme={textTheme}
        onChangeText={email=>setEmail(email)}
        />

        <TextInput
        label='mot de passe'
        mode='outlined'
        placeholder='Enter votre mot de passe'
        theme={textTheme}
        secureTextEntry={true}
        style={{marginTop: 20}}
        onChangeText={pass=>setPassword(pass)}
        />

        <TouchableOpacity
        onPress={()=> alert('comming up on the next virsion')}>
        <Text style={{
          marginTop: 15,
          fontWeight: 'bold',
          color: '#4898D3',
        }}>Oublie mon mot de passe ?</Text>
        </TouchableOpacity>

        <Button
        mode='contained'
        uppercase={false}
        style={{alignSelf:'center',marginVertical:10,marginHorizontal:20, width: '100%', height: 40}}
        loading={loading}
        onPress={()=>SignIn()}
        color='#4898D3'
        disabled={(!email || !password) || loading}
        dark={true}>
          Se Connecter      
        </Button>


        <TouchableOpacity onPress={()=>signInWithGoogleAsync()}
        style={GlobalStyle.signInGoogle}>
        <View style={{flexDirection: 'row', alignContent: 'space-around' }}>
        <ActivityIndicator style={{position:'absolute',right:"-10%"}} animating={gLoading} size='small' color='#4898D3' />
        <FontAwesome
            name='google'
            size={25}
            color='#4898D3'
            style={{marginRight: 25}}
            />
        
        <Text style={GlobalStyle.signUpText}> Se Connecter avec Google </Text>
        </View> 
        </TouchableOpacity>

        <View style={{flexDirection:'row',marginVertical:20,justifyContent:'center'}} >
        <Text>vous n'avez pas de compte? </Text>
        <TouchableOpacity
          onPress={()=>navigation.replace('register')}>
          <Text style={{color:'#4898D3',fontWeight:'bold'}}>   S'inscrire</Text>
        </TouchableOpacity>
        </View>

        </View>
        </ScrollView>
      </SafeAreaView>
      
    );
}