import React, {useState} from 'react'
import { View, SafeAreaView, ScrollView, TouchableOpacity, Text, Picker } from 'react-native'
import {TextInput, Checkbox} from 'react-native-paper';
import {GlobalStyle, textTheme } from '../../../style/GlobalStyle';
import {MaterialIcons} from 'react-native-vector-icons';

export default function AddServices({route}) {

    const [title, setTitle]= useState('')
    const [city, setCity] = useState("")
    const [price, setPrice] = useState("")
    const [etat, setEtat] = useState("")
    const [type, setType] = useState("")
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
        style={{color:'#4898D3', fontSize: 11}}>
        Merci d’entrer le non exacte de votre Service
        </Text>

        <View style={{ borderWidth: 1, borderColor: '#8C8C8C', borderRadius: 4, marginTop: 10 }}>
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
        style={{color: '#4898D3', marginTop: 5}}>Etat</Text>
    <View style={{ borderWidth: 1, borderColor: '#8C8C8C', borderRadius: 4, marginTop: 5}}>
        <Picker
        selectedValue={etat}
        prompt='Etat'
        style={{ height: 50, width: '100%' }}
        onValueChange={(itemValue, itemIndex) => setEtat(itemValue)}>

        <Picker.Item label="Neuf" value="neuf" />
        <Picker.Item label="Bon-Ocasion" value="tn" />
      </Picker>
    </View>
    
    <Text
        style={{color: '#4898D3', marginTop: 5}}>Type de service</Text>
    <View style={{ borderWidth: 1, borderColor: '#8C8C8C', borderRadius: 4, marginTop: 5}}>
        <Picker
        selectedValue={type}
        prompt='Type de service'
        style={{ height: 50, width: '100%' }}
        onValueChange={(itemValue, itemIndex) => setType(itemValue)}>

        <Picker.Item label="Alarme & sécurité" value="Alarme & sécurité" />
        <Picker.Item label="Electricien " value="Electricien" />
        <Picker.Item label="Jardinier" value="Jardinier" />
        <Picker.Item label="Informatique " value="informatique" />
        <Picker.Item label="Maçonnerie" value="Maçonnerie" />
        <Picker.Item label="Menuisier" value="Menuisier" />
        <Picker.Item label="Peinture" value="Peinture" />
        <Picker.Item label="Tapisserie" value="Tapisserie" />
        <Picker.Item label="Plombier" value="Plombier" />
        <Picker.Item label="Soudeur" value="Soudeur" />
        <Picker.Item label="Vitre" value="Vitre" />
        <Picker.Item label="AUTRES" value="AUTRES" />
      </Picker>
    </View>

    <TextInput
            label='Description'
            placeholder='description de produit'
            theme={textTheme}
            multiline={true}
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
      color='#4898D3'/>
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
