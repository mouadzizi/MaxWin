import React, {useState} from 'react'
import { View, SafeAreaView, ScrollView, TouchableOpacity, Text, Picker } from 'react-native'
import {TextInput} from 'react-native-paper';
import {GlobalStyle, textTheme } from '../../style/GlobalStyle';
import {MaterialIcons} from 'react-native-vector-icons';

export default function AddProduct() {

    const [statue, setStatue] = useState("")
    const [city, setCity] = useState("")
    const [etat, setEtat] = useState("")

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', padding: 20 }} >
        <ScrollView showsVerticalScrollIndicator={false}>

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

        <Picker
        selectedValue={statue}
        style={{ height: 50, width: '100%' }}
        onValueChange={(itemValue, itemIndex) => setStatue(itemValue)}>

        <Picker.Item label="Particulier" value="par" />
        <Picker.Item label="Professionnel" value="pro" />
      </Picker>

        <TextInput
            label='Titre de votre Produit'
            mode='outlined'
            theme={textTheme}/>
        <Text
        style={{color:'red', fontSize: 11}}>
        Merci d’entrer le non exacte de votre article (Peugeot 308, Ford focus, Samsung J6..)
        </Text>

        <Picker
        selectedValue={city}
        style={{ height: 50, width: '100%' }}
        onValueChange={(itemValue, itemIndex) => setCity(itemValue)}>

        <Picker.Item label="Touts les villes" value="ma" />
        <Picker.Item label="Tanger" value="tn" />
      </Picker>

      <TextInput
            label='Prix'
            mode='outlined'
            placeholder='MAD'
            theme={textTheme}/>

        <Picker
        selectedValue={etat}
        style={{ height: 50, width: '100%' }}
        onValueChange={(itemValue, itemIndex) => setEtat(itemValue)}>

        <Picker.Item label="Neuf" value="neuf" />
        <Picker.Item label="Bon-Ocasion" value="tn" />
      </Picker>

      <TextInput
            label='Description'
            mode='outlined'
            placeholder='description de produit'
            theme={textTheme}/>

        </View>
        </ScrollView>
        </SafeAreaView>
    )
}
