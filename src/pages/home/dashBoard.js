import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Alert, } from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import { auth } from '../../API/firebase'
import * as Google from 'expo-google-sign-in'
import AsyncStorage from '@react-native-community/async-storage'


export default function DashBoard({ navigation }) {
    const [user, setUser] = useState({})
    const [provider, setProvider] = useState('')
    const [userToken, setUserToken] = useState('')

    const [uid, setUID] = useState('')
    const [response,setResponse]=useState(null)

    
    useEffect(() => {
        var unsub = auth.onAuthStateChanged(user => {
            if (user) {
                setUser(user)
                user.providerData.forEach(e => {
                    setProvider(e.providerId)
                    setUID(e.uid)
                })
            }
            if (!user) navigation.replace('Splash')
        })
        getData();
        return () => {
            unsub()
        }
    }, [])

    const logOut = () => {
        auth.signOut()
            .then(() => {
                provider === 'google.com' ? Google.signOutAsync() : faceBookLogOut();
            })
            .catch(err => { Alert.alert('Error', err.message) })
    }

    const faceBookLogOut = async () => {
        try {
            await fetch(`https://graph.facebook.com/me/permissions?method=delete&access_token=${userToken}`)
                .then(() => alert('Success'))
                .catch(err => alert(err.message))
        }
        catch (e) {
            alert(e.message)
        }

    }

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('userToken')
            if (value !== null) {
                setUserToken(value)
            }
        } catch (e) {
            alert('err' + e.message)
        }
    }


    const getPhotoFromGraph = async() =>{
        try {
            const response = await fetch(
                `https://graph.facebook.com/${uid}/picture?type=large`
              )
             return response; 
        } catch (error) {
            alert(error.message)
        }

    }
    return (
        <View>
            <Button
                onPress={logOut}
            > Log out </Button>
            <Text> {user.photoURL} </Text>
            <Button 
            
            onPress={()=>getPhotoFromGraph().then((response)=>{
                user.updateProfile({
                    photoURL: response.url,
                })
                
            })}
            >
                Get photo
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({})
