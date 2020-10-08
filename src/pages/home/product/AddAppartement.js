import React, {useState} from 'react'
import { View, SafeAreaView, ScrollView, TouchableOpacity, Text, Picker } from 'react-native'
import {TextInput, Checkbox} from 'react-native-paper';
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

    const [phone, setPhone] = useState(false);


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff'}} >
        <ScrollView style={{padding: 20}} showsVerticalScrollIndicator={false}>

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
        style={{color:'#4898D3', fontSize: 11}}>
        Une bonne annonce commence par une par une bonne photo</Text>

        <View
        style={{flex: 1, marginTop: 20}}>

        <TextInput
            label='Titre de votre Produit'
            mode='outlined'
            theme={textTheme}
            onChangeText={setTitle}
            />
        <Text
        style={{color:'#4898D3', fontSize: 11}}>
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
            keyboardType='numeric'
            style={{marginTop: 10}}
            onChangeText={setPrice}
      />
    
    <Text
        style={{color: '#4898D3', marginTop: 5}}>Nature de bien</Text>
    <View style={{ borderWidth: 1, borderColor: '#444', borderRadius: 4, marginTop: 5}}>
        <Picker
        selectedValue={nature}
        style={{ height: 50, width: '100%' }}
        onValueChange={(itemValue, itemIndex) => setNature(itemValue)}>
        
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
            keyboardType='numeric'
            style={{marginTop: 10}}
            onChangeText={setSuperficie}
            />

    <Text
    style={{color: '#4898D3', marginTop: 5}}>Nombre de pièces</Text>
    <View style={{ borderWidth: 1, borderColor: '#444', borderRadius: 4, marginTop: 10}}>
        <Picker
        mode='dropdown'
        selectedValue={piece}
        style={{ height: 50, width: '100%' }}
        onValueChange={(itemValue, itemIndex) => setPiece(itemValue)}>

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
    style={{flexDirection: 'row', marginTop: 10, marginLeft: 5}}>
    <Text
    style={{marginTop: 7}}>Afficher le N° de Téléphone</Text>

    <Checkbox
      status={phone ? 'checked' : 'unchecked'}
      onPress={() => {
        setPhone(!phone);
      }}
      color='#4898D3'
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
