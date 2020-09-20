import React, { useState } from 'react';
import { View, Text, Alert, Dimensions, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper'
import { textTheme } from '../../style/GlobalStyle';
import { auth, db } from '../../API/firebase';



export default function SignUp({ navigation }) {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [loading, setLoading] = useState(false);


    //firebase stuff
    const createUser = () => {
        setLoading(true)

        if (password === confPassword && password.match('')) {
            var errs = false
            auth.languageCode = 'fr'
            auth.createUserWithEmailAndPassword(email, password)
                .catch(err => {
                    switch (err.code) {
                        case "auth/email-already-in-use":
                            Alert.alert('Error', '(' + email + ') est déja utilisé')
                            break;

                        case 'auth/invalid-email':
                            Alert.alert('Error', ' (' + email + ') est invalide')
                            break;
                        case 'auth/weak-password':
                            Alert.alert('Error', 'Le mot de pass est trop faible')
                            break;

                        default:
                            Alert.alert('Error', err.message)
                    }
                    setLoading(false)
                    errs = true
                })
                .then(() => {

                    if (auth.currentUser && !errs) {
                        auth.currentUser.updateProfile({
                            displayName: userName
                        })
                        setLoading(false)
                        saveUserInfo(auth.currentUser).then(() => navigation.replace('HomeTabs'))

                    }
                })
        }
        if (!password === confPassword) {
            Alert.alert('Error', "Password didn't match")
            setLoading(false)
        }

    }

    const saveUserInfo = async (user) => {
        await db.collection('users').doc(user.uid).set({
            uid: user.uid,
            name: user.displayName,
            email: email,
            phone: '',
            location: '',
            aboutMe: '',
        })

    }

    const { width, height } = Dimensions.get('window');
    const height_image = height * 0.3;
    const width_image = width * 0.6;

    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', padding: 20 }} >
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ flex: 1, backgroundColor: '#fff' }}>

                    <Image source={require('../../../assets/logo.jpg')}
                        style={{ height: height_image, width: width_image, alignSelf: 'center', marginTop: 15 }}
                        resizeMode={"stretch"}
                    />
                </View>

                <View style={{ flex: 4 }}>

                    <TextInput
                        label='Nom d utilisateur'
                        mode='outlined'
                        placeholder='Votre surnom'
                        theme={textTheme}
                        onChangeText={name => setUserName(name)}
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
                        onSubmitEditing={() => createUser()}
                        secureTextEntry={true}
                        theme={textTheme}
                        style={{ marginTop: 20 }}
                        onChangeText={text => setConfPassword(text)}
                    />

                    <Button
                        mode='contained'
                        uppercase={false}
                        style={{ alignSelf: 'center', marginTop: 50, width: '100%' }}
                        loading={loading}
                        onPress={() => createUser()}
                        color='#4898D3'
                        disabled={(!email || !password || !confPassword) || loading}
                        dark={true}>
                        Creat an Account
                    </Button>

                    <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'center' }} >
                        <Text>AVous avez déjà un compte?</Text>
                        <TouchableOpacity
                            onPress={() => navigation.replace('SignIn')}>
                            <Text style={{ color: '#4898D3', fontWeight: 'bold' }}>   Se Connecter</Text>
                        </TouchableOpacity>
                    </View>

                    <Text
                        style={{ fontSize: 12, marginTop: 15, color: '#c2c2c2', textAlign: 'center' }}>
                        en créant ce compte, vous acceptez les
                </Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'center' }} >

                        <TouchableOpacity
                            onPress={() => navigation.push('Privacy')}>
                            <Text style={{ color: '#8C8C8C', fontWeight: 'bold', fontSize: 12, }}> politiques de confidentialité </Text>
                        </TouchableOpacity>
                        <Text
                            style={{ fontSize: 12, color: '#c2c2c2', textAlign: 'center' }}>
                            de MaxWin
                </Text>
                    </View>



                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

