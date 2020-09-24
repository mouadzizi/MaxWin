import React, {useState,useEffect} from 'react'
import { View, SafeAreaView, ScrollView, TouchableOpacity, Text, Picker } from 'react-native'
import {TextInput, RadioButton} from 'react-native-paper';
import {GlobalStyle, textTheme } from '../../../style/GlobalStyle';
import {MaterialIcons} from 'react-native-vector-icons';

export default function AddProduct({route}) {

    const [title, setTitle] = useState("")
    const [city, setCity] = useState("")
    const [price, setPrice] = useState("")
    const [etat, setEtat] = useState("")
    const [description, setDescription] = useState("")
    const [checked, setChecked] = useState('')


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff'}} >
        <ScrollView
        style={{padding: 20}}
         showsVerticalScrollIndicator={false}>

        <View
        style={{flexDirection: 'row'}}>
        <TouchableOpacity>
        <MaterialIcons 
                name='add-a-photo'
                color='#444'
                size={100}
            />
        </TouchableOpacity>
        </View>
        <Text
        style={{color:'red', fontSize: 11}}>
        les images multiplient les chances par 5 pour vendre votre produit</Text>

        <View
        style={{flex: 1, marginTop: 20}}>

        <TextInput
            label='Titre de votre Produit'
            mode='outlined'
            theme={textTheme}
            onChangeText={setTitle}
            />
        <Text
        style={{color:'red', fontSize: 11}}>
        Merci d’entrer le Nom exacte de votre article
        </Text>

        <View style={{ borderWidth: 1, borderColor: '#444', borderRadius: 4, marginTop: 10 }}>
        <Picker
        selectedValue={city}
        style={{ height: 50, width: '100%'}}
        onValueChange={(itemValue, itemIndex) => setCity(itemValue)}>

        <Picker.Item label="Touts les villes" value="ma" />
        <Picker.Item label="Tanger" value="Tanger" />
        <Picker.Item label="Tétouan" value="Tétouan" />
        <Picker.Item label="Ouejda" value="Ouejda" />
        <Picker.Item label="Berkane" value="Berkane" />
        <Picker.Item label="Rabat" value="Rabat" />
        <Picker.Item label="Temara" value="Temara" />
        <Picker.Item label="Casablanca" value="Casablanca" />
        <Picker.Item label="El Jadida" value="El Jadida" />
        <Picker.Item label="Merakech" value="Merakech" />
      </Picker>
      </View>

      <TextInput
            label='Prix'
            mode='outlined'
            placeholder='DH'
            theme={textTheme}
            onChangeText={setPrice}
            style={{marginTop: 10}}
            />
    
    <View style={{ borderWidth: 1, borderColor: '#444', borderRadius: 4, marginTop: 10}}>
        <Picker
        selectedValue={etat}
        style={{ height: 50, width: '100%' }}
        onValueChange={(itemValue, itemIndex) => setEtat(itemValue)}>

        <Picker.Item label="Neuf" value="neuf" />
        <Picker.Item label="Bon-Ocasion" value="tn" />
      </Picker>
    </View>

    <TextInput
            label='Description'
            placeholder='description de produit'
            theme={textTheme}
            onChangeText={setDescription}
            style={{marginTop: 10, height: 100}}
            theme={{colors: {primary  : '#4898D3', background  : '#fff', surface  : '#fff'}}}
            />

    <View
    style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10}}>

    <Text
    style={{marginTop: 5}}>Afficher le N° de Téléphone</Text>

    <Text
    style={{marginTop: 5}}>OUI</Text>
      <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
        theme = {{ colors : {accent : "#4898D3"}}}
      />

      <Text
      style={{marginTop: 5}}>Non</Text>
      <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
        theme = {{ colors : {accent : "#4898D3"}}}
      />
    </View>


    <TouchableOpacity
    style={[GlobalStyle.btn, {marginBottom: 30}]}>
        <Text
        style={GlobalStyle.signInText}>Valider l’annonce</Text>
    </TouchableOpacity>

      

        </View>
        </ScrollView>
        </SafeAreaView>
    )
}
