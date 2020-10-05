import React, {useState} from 'react'
import { View, SafeAreaView, ScrollView, TouchableOpacity, Text, Picker } from 'react-native'
import {TextInput, Checkbox} from 'react-native-paper';
import {GlobalStyle, textTheme } from '../../../style/GlobalStyle';

export default function Filtre({route}) {

    const [categorie, setCategorie] = useState("");

    const [city, setCity] = useState("")



    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff'}} >
        <ScrollView style={{padding: 20}} showsVerticalScrollIndicator={false}>


    <Text
    style={{color: '#4898D3', marginTop: 5}}>Choisisez votre categorie</Text>

        <View style={{ borderWidth: 1, borderColor: '#444', borderRadius: 4, marginTop: 10 }}>
        <Picker
        selectedValue={categorie}
        style={{ height: 50, width: '100%'}}
        onValueChange={(itemValue, itemIndex) => setCategorie(itemValue)}>

        <Picker.Item label="-" value="-" />
        <Picker.Item label="Voiture" value="Voiture" />
        <Picker.Item label="Appartement" value="Appartement" />
        <Picker.Item label="Telephone" value="Telephone" />
      </Picker>
      </View>
    
    {categorie == 'Voiture' ? <Text>Voiture here</Text> :  null }
        </ScrollView>
        </SafeAreaView>
    )
}
