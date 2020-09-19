import React, {useState,useEffect} from 'react'
import { View, SafeAreaView, ScrollView, TouchableOpacity, Text, Picker } from 'react-native'
import {TextInput} from 'react-native-paper';
import {GlobalStyle, textTheme } from '../../../style/GlobalStyle';
import {MaterialIcons} from 'react-native-vector-icons';

export default function AddAppartement({route}) {

    const [city, setCity] = useState("")
    const [etat, setEtat] = useState("")
    const [marque, setMarque] = useState("")


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
            theme={textTheme}/>
        <Text
        style={{color:'red', fontSize: 11}}>
        Merci d’entrer le non exacte de votre article
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
            />
    
 

    <View style={{ borderWidth: 1, borderColor: '#444', borderRadius: 4, marginTop: 10}}>
        <Picker
        selectedValue={marque}
        style={{ height: 50, width: '100%' }}
        onValueChange={(itemValue, itemIndex) => setMarque(itemValue)}>
        
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
            />

    <View style={{ borderWidth: 1, borderColor: '#444', borderRadius: 4, marginTop: 10}}>
        <Picker
        mode='dropdown'
        selectedValue={etat}
        style={{ height: 50, width: '100%' }}
        onValueChange={(itemValue, itemIndex) => setEtat(itemValue)}>

        <Picker.Item label="Nombre de pièces" value="neuf" />
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2-3" value="2" />
        <Picker.Item label="3-4" value="3" />
        <Picker.Item label="5 et plus" value="5" />
      </Picker>
    </View>
    


    <TextInput
            label='Description'
            mode='outlined'
            placeholder='description de produit'
            theme={textTheme}
            style={{marginTop: 10, height: 100}}
        
            />



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
