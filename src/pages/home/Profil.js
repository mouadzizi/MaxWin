import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { auth } from '../../API/firebase'

export default function Profil() {
    const [user, setUser] = useState(null)

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) setUser(user)
        })
        return () => {
        }
    }, [])

    return (
        <View style={styles.container} >
            {user ?
                <View style={{flex:1,justifyContent:'center'}} >
                    <Text>user name : {user.displayName}</Text>
                    <Text>phone : {user.phoneNumber}</Text>
                    <Text>IMG : {user.photoURL}</Text>
                    <Image style={{width:200,height:200}} source={{uri:user.photoURL}} resizeMode='contain'/>
                </View>

                : <Text> no user </Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'

    }
})
