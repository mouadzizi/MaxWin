import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper'
import { auth } from '../../API/firebase'

export default function Home({navigation}) {

    useEffect(() => {
        const unsub = auth.onAuthStateChanged(user=>{
            if(user) console.log('user signed in');
            else{
                navigation.replace('Splash')
            }
        })
        return () => {
            unsub()
        }
    }, [])

    const logOut = () => {
        auth.signOut()
    }

    return (
        <View>
            <Text>Home</Text>
            <Button
                onPress={logOut}
            >
                log out
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({})
