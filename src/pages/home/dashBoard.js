import React, { useEffect, useState } from 'react'
import { SafeAreaView, Alert, ScrollView, TouchableOpacity, Text, Image } from 'react-native';
import { List, Button, Divider, Searchbar, Chip } from 'react-native-paper';

import { auth } from '../../API/firebase'
import * as Google from 'expo-google-sign-in'
import AsyncStorage from '@react-native-community/async-storage'
import { View } from 'react-native-animatable';
import { GlobalStyle } from '../../style/GlobalStyle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


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

    //SearchBar Const

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    // *********

    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', padding: 20 }} >
        <ScrollView showsVerticalScrollIndicator={false}>

        <View style={{flex:1}}>

        <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        />

        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>

        <List.Section 
        style={{width: 150}}
        expanded={true}>
            <List.Accordion
                title="Categories">
                <List.Item title="categorie1" />
                <List.Item title="categorie2" />
            </List.Accordion>
        </List.Section>

        <List.Section
        style={{width: 150}}>
            <List.Accordion
                title="City">
                <List.Item title="Tanger" />
                <List.Item title="Casablanca" />
            </List.Accordion>
        </List.Section>

        </View>
        </View>

        <Divider />

        <TouchableOpacity
        style={GlobalStyle.item}>
           <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>

           <View style={{flex: 2, backgroundColor: '#1126'}}>
            <Text>Image</Text>
            </View>

           <View style={{flex: 4}}>
                <Text style={{marginLeft: 5, fontWeight: 'bold', fontSize: 18}}>Xiaomi redmi note 7</Text>
                <Text style={{marginLeft: 5, fontWeight: 'bold', fontSize: 15, color:'#4898D3'}}>5000.00 MAD</Text>
                <View style={{flexDirection: 'row'}}>
                <MaterialIcons
                name='place'
                size={15}
                color='#000'
                />
                <Text style={{color:'#000'}}> Tanger-Tétouan</Text>
                </View>
                <Divider />

                <View style={{marginTop: 10}}>
                <Chip 
                icon="information"
                style={{width: 130, height: 30}}>Example Chip</Chip>
                </View>


           </View>

           </View>
        </TouchableOpacity>
        
        <Divider />
            <Button
                onPress={logOut}
            > Log out </Button>

        </ScrollView>
        </SafeAreaView>
    )
}
