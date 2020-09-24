import React, {useState,useEffect} from 'react'
import { View, SafeAreaView, ScrollView, TouchableOpacity, Text, Picker } from 'react-native'
import {TextInput, RadioButton} from 'react-native-paper';
import {GlobalStyle, textTheme } from '../../../style/GlobalStyle';
import {MaterialIcons} from 'react-native-vector-icons';

export default function AddAppartement({route}) {

    const [title, setTitle]= useState('')
    const [city, setCity] = useState("")
    const [price, setPrice] = useState("")
    const [piece, setPiece] = useState("")
    const [superficie, setSuperficie] = useState("")
    const [nature, setNature] = useState("")
    const [description, setDescription] = useState("")
    const [checked, setChecked] = useState('');


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
        Les images multiplient les chances par 5 pour vendre votre produit</Text>

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
        <Picker.Item label="Casablanca" value="Casablanca" />
        <Picker.Item label="Merakech" value="Merakech" />
      </Picker>
      </View>

      <TextInput
            label='Prix'
            mode='outlined'
            placeholder='DH'
            theme={textTheme}
            style={{marginTop: 10}}
            onChangeText={setPrice}
            />
    
 

    <View style={{ borderWidth: 1, borderColor: '#444', borderRadius: 4, marginTop: 10}}>
        <Picker
        selectedValue={nature}
        style={{ height: 50, width: '100%' }}
        onValueChange={(itemValue, itemIndex) => setNature(itemValue)}>
        
        <Picker.Item label="nature de bien" value="tmq" />
        <Picker.Item label="Appartement " value="SAMSUNG " />
        <Picker.Item label="Maison" value="IPHONE" />
        <Picker.Item label="Villa" value="OPPO" />
      </Picker>
    </View>

    <TextInput
            label='Superficie'
            mode='outlined'
            placeholder='(m²)'
            theme={textTheme}
            style={{marginTop: 10}}
            onChangeText={setSuperficie}
            />

    <View style={{ borderWidth: 1, borderColor: '#444', borderRadius: 4, marginTop: 10}}>
        <Picker
        mode='dropdown'
        selectedValue={piece}
        style={{ height: 50, width: '100%' }}
        onValueChange={(itemValue, itemIndex) => setPiece(itemValue)}>

        <Picker.Item label="Nombre de pièces" value="neuf" />
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2-3" value="2" />
        <Picker.Item label="3-4" value="3" />
        <Picker.Item label="5 et plus" value="5" />
      </Picker>
    </View>
    


    <TextInput
            label='Description'
            multiline={true}
            placeholder='description de produit'
            theme={textTheme}
            style={{marginTop: 10, height: 120}}
            onChangeText={setDescription}
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
        style={GlobalStyle.signInText}>Valider</Text>
    </TouchableOpacity>

      

        </View>
        </ScrollView>
        </SafeAreaView>
    )
}
