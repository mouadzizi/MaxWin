import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Alert, ScrollView, TouchableOpacity, Text, Picker } from 'react-native';
import { Button, Divider, Searchbar } from 'react-native-paper';

import { auth } from '../../API/firebase';
import * as Google from 'expo-google-sign-in';
import AsyncStorage from '@react-native-community/async-storage';

import Product from '../../components/Product';


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

    // Picker 

    const [selectedValueLocation, setSelectedValueLocation] = useState("Ville");
    const [selectedValueCategorie, setSelectedValueCategorie] = useState("Categories");

    return (
        <SafeAreaView style={{ flex: 1}} >
        <ScrollView showsVerticalScrollIndicator={false}>

        <View style={{flex:1, margin: 20 }}>

        <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        />

        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>

        <Picker
        selectedValue={selectedValueCategorie}
        style={{ height: 50, width: '50%' }}
        onValueChange={(itemValue, itemIndex) => setSelectedValueCategorie(itemValue)}>

        <Picker.Item label="Categories" value="Categories" />
        <Picker.Item label="categorie1" value="categorie1" />
        <Picker.Item label="categorie2" value="categorie2" />
        <Picker.Item label="categorie3" value="categorie3" />

        </Picker>

        <Picker
        selectedValue={selectedValueLocation}
        style={{ height: 50, width: '50%' }}
        onValueChange={(itemValue, itemIndex) => setSelectedValueLocation(itemValue)}>

        <Picker.Item label="Location" value="Location" />
        <Picker.Item label="Tanger" value="Tanger" />
        <Picker.Item label="Tetouan" value="Tetouan" />
        <Picker.Item label="Casablanca" value="Casablanca" />
        <Picker.Item label="Rabat" value="Rabat" />
        <Picker.Item label="Agadir" value="Agadir" />
        <Picker.Item label="Merakech" value="Merakech" />
        <Picker.Item label="ouejda" value="ouejda" />

        </Picker>

        </View>
        </View>

        <Divider />

        <View style={{marginRight: 5 }}>
        <Product />
        <Product />
        <Product />
        </View>
            <Button
                onPress={logOut}
            > Log out </Button>

        </ScrollView>
        </SafeAreaView>
    )
}
