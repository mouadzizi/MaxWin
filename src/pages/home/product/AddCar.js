import React, {useState,useEffect} from 'react'
import { View, SafeAreaView, ScrollView, TouchableOpacity, Text, Picker } from 'react-native'
import {TextInput} from 'react-native-paper';
import {GlobalStyle, textTheme } from '../../../style/GlobalStyle';
import {MaterialIcons} from 'react-native-vector-icons';

export default function AddCar({route}) {

    const [city, setCity] = useState("")
    const [etat, setEtat] = useState("")
    const [marque, setMarque] = useState("")
    const [carburant, setCarburant] = useState("")


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
        mode='dropdown'
        selectedValue={etat}
        style={{ height: 50, width: '100%' }}
        onValueChange={(itemValue, itemIndex) => setEtat(itemValue)}>

        <Picker.Item label="Neuf" value="neuf" />
        <Picker.Item label="ANCIEN" value="ANCIEN" />
      </Picker>
    </View>

    <View style={{ borderWidth: 1, borderColor: '#444', borderRadius: 4, marginTop: 10}}>
        <Picker
        selectedValue={marque}
        style={{ height: 50, width: '100%' }}
        onValueChange={(itemValue, itemIndex) => setMarque(itemValue)}>
        
        <Picker.Item label="Tout les marques" value="tmq" />
        <Picker.Item label="AUDI" value="AUDI" />
        <Picker.Item label="BMW" value="BMW" />
        <Picker.Item label="CHEVROLET" value="CHEVROLET" />
        <Picker.Item label="CITROEN" value="CITROEN" />
        <Picker.Item label="DACIA" value="DACIA" />
        <Picker.Item label="FIAT" value="FIAT" />
      </Picker>
    </View>

    
    <TextInput
            label='Année de fabrication'
            mode='outlined'
            placeholder='exemple: 2005'
            keyboardType='numeric'
            theme={textTheme}
            style={{marginTop: 10}}
            />
    
    <View style={{ borderWidth: 1, borderColor: '#444', borderRadius: 4, marginTop: 10}}>
        <Picker
        mode='dropdown'
        selectedValue={carburant}
        style={{ height: 50, width: '100%' }}
        onValueChange={(itemValue, itemIndex) => setCarburant(itemValue)}>

        <Picker.Item label="Diesel " value="Diesel" />
        <Picker.Item label="Essence" value="Essence" />
      </Picker>
    </View>

    <TextInput
            label='Puissance Fiscale'
            mode='outlined'
            placeholder='CH'
            keyboardType='numeric'
            theme={textTheme}
            style={{marginTop: 10}}
            />

<View style={{ borderWidth: 1, borderColor: '#444', borderRadius: 4, marginTop: 10}}>
        <Picker
        mode='dropdown'
        selectedValue={carburant}
        style={{ height: 50, width: '100%' }}
        onValueChange={(itemValue, itemIndex) => setCarburant(itemValue)}>

        <Picker.Item label="Mannuel " value="Mannuel" />
        <Picker.Item label="Automatique" value="Automatique" />
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
