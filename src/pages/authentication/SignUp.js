import React, { useState } from 'react';
import { View, Text, Alert, Dimensions, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { TextInput, Button } from 'react-native-paper'
import { textTheme } from '../../style/GlobalStyle';
import { auth } from '../../API/firebase';



export default function SignUp({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [loading, setLoading] = useState(false);

    //firebase stuff
    const createUser = () => {
        setLoading(true)
        if (password.match(confPassword) && password.match('')) {
            var errs = false
            auth.createUserWithEmailAndPassword(email, password)
                .catch(err => {
                    Alert.alert('Error', err.message)
                    setLoading(false)
                    errs = true
                })
                .then(() => {
                    if (auth.currentUser && !errs) {
                        console.log(errs);
                        setLoading(false)
                        navigation.replace('HomeTabs')
                    }
                })
        }
        else if (!password.match(confPassword)) {
            Alert.alert('Error', "Password didn't match")
            setLoading(false)
        }
    }

    const { width, height } = Dimensions.get('window');
    const height_image = height * 0.3;
    const width_image = width * 0.6;

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff', padding: 20}} >

            <View style={{ flex: 1, backgroundColor: '#fff'}}> 

                <Image source={require('../../../assets/logoMax.jpg')}
                    style={{ height: height_image, width: width_image, alignSelf: 'center', marginTop: 15 }}
                    resizeMode={"stretch"}
                />
            </View>

            <View style={{ flex: 4}}>

                 <TextInput
                    label='Nom d utilisateur'
                    mode='outlined'
                    placeholder='Votre surnom'
                    theme={textTheme}
                    style={{ marginTop: 50 }}
                />

                <TextInput
                    keyboardType='email-address'
                    label='E-mail'
                    mode='outlined'
                    placeholder='Votre-mail@mail.ma'
                    theme={textTheme}
                    style={{ marginTop: 20 }}
                    onChangeText={email => setEmail(email)}
                />

                <TextInput
                    label='mot de passe'
                    mode='outlined'
                    secureTextEntry={true}
                    theme={textTheme}
                    style={{ marginTop: 20 }}
                    onChangeText={password => setPassword(password)}
                />

                <TextInput
                    label='Confirmez le mot de passe'
                    mode='outlined'
                    returnKeyType='go'
                    secureTextEntry={true}
                    theme={textTheme}
                    style={{ marginTop: 20 }}
                    onChangeText={text => setConfPassword(text)}
                />

                <Button
                    mode='contained'
                    uppercase={false}
                    style={{ alignSelf: 'center', marginTop: 50, }}
                    loading={loading}
                    onPress={() => createUser}
                    color='#4898D3'
                    disabled={!email || !password || !confPassword}
                    dark={true}>
                    Create account </Button>

                <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'center' }} >
                    <Text>AVous avez déjà un compte?</Text>
                    <TouchableOpacity
                        onPress={() => navigation.replace('SignIn')}>
                        <Text style={{ color: '#4898D3', fontWeight: 'bold' }}>   Se Connecter</Text>
                    </TouchableOpacity>
                </View>

            </View>
            </SafeAreaView>
    );
}

