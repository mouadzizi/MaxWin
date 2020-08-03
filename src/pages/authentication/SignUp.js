import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert,KeyboardAvoidingView } from 'react-native';
import { TextInput, Button } from 'react-native-paper'
import { GlobalStyle, textTheme } from '../../style/GlobalStyle';
import { auth } from '../../API/firebase'


export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [loading, setLoading] = useState(false);

    //firebase stuff
    const createUser = () => {
        setLoading(true)
        var err = false
        if (password.match(confPassword) && password.match('') ) {
            auth.createUserWithEmailAndPassword(email, password)
                .catch(err => {
                    Alert.alert('Error', err.message)
                    setLoading(false)
                    err=true
                })
                .then(() => {
                    if (auth.currentUser && err) {
                        setLoading(false)
                        Alert.alert('Info', 'welcome ' + email)
                    }
                })
        }
        else if(!password.match(confPassword)) {
            Alert.alert('Error',"Password didn't match")
            setLoading(false)
        }
    }
    return (
        
        <KeyboardAvoidingView  style={{flex:1}} behavior='height' >
            <View style={styles.container} >
            <Text style={styles.title}> SIGN UP WITH US </Text>
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
                onSubmitEditing={createUser}
                returnKeyType='go'
                secureTextEntry={true}
                theme={textTheme}
                style={{ marginTop: 50 }}
                onChangeText={text => setConfPassword(text)}
            />

            <Button
                mode='contained'
                uppercase={false}
                style={{ alignSelf: 'center', marginVertical: 50, }}
                loading={loading}
                onPress={createUser}
                color='#4898D3'
                dark={true}
            >
                Create account
        </Button>
        </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        
    },
    title: {
        fontSize: 22,
        alignSelf: 'center',
        fontWeight: '700',

    }
})