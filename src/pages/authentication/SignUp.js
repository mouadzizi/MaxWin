import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, Dimensions, TouchableOpacity, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper'
import { GlobalStyle, textTheme } from '../../style/GlobalStyle';
import { auth } from '../../API/firebase'
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



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
                        navigation.replace('Dash')
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
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <Image source={require('../../../assets/logoMax.jpg')}
                    style={{ height: height_image, width: width_image, alignSelf: 'center', marginTop: 15 }}
                    resizeMode={"stretch"}
                />
            </View>
            <View>
                <TextInput
                    keyboardType='email-address'
                    label='Email'
                    mode='outlined'
                    placeholder='e.g: yourMail@mail.com'
                    theme={textTheme}
                    style={{ marginTop: 50 }}
                    onChangeText={email => setEmail(email)}
                />
                <TextInput
                    label='Password'
                    mode='outlined'
                    secureTextEntry={true}
                    theme={textTheme}
                    style={{ marginTop: 50 }}
                    onChangeText={password => setPassword(password)}
                />
                <TextInput
                    label='Confirm password'
                    mode='outlined'
                    returnKeyType='go'
                    secureTextEntry={true}
                    theme={textTheme}
                    style={{ marginTop: 50 }}
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
                    Create account
            </Button>

                <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'center' }} >
                    <Text>Already have an account? </Text>
                    <TouchableOpacity
                        onPress={() => navigation.replace('register')}>
                        <Text style={{ color: '#4898D3', fontWeight: 'bold' }}>Sign In</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}
                    onPress={() => navigation.replace('SignIn')}>
                    <FontAwesome
                        name='arrow-circle-o-left'
                        size={50}
                        color='#4898D3'
                        style={{ marginRight: 25 }}
                    />

                </TouchableOpacity>

            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,

    },
    title: {
        fontSize: 22,
        alignSelf: 'center',
        fontWeight: '700',
        marginTop: 20

    }
})