import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {TextInput,Button} from 'react-native-paper';
import {auth} from '../../API/firebase'


export default function DashBoard({navigation}) {
    const [user,setUser]=useState({})
    useEffect(() => {
        var unsub = auth.onAuthStateChanged(user=>{
            if(user) setUser(user)
            if(!user) navigation.replace('Splash')
        })
        return () => {
            unsub()
        }
    }, [])
    const logOut = ()=>{
        auth.signOut()
    }
    return (
        <View>
            <Button 
            onPress={logOut}
            > Log out </Button>
            <Text>{user.displayName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
