import React, {useState} from 'react';
import { View, SafeAreaView, ScrollView, TouchableOpacity, Text, Picker } from 'react-native';
import {TextInput, Checkbox } from 'react-native-paper';
import {GlobalStyle, textTheme } from '../../../style/GlobalStyle';
import {MaterialIcons} from 'react-native-vector-icons';

export default function AddCar({route}) {

    const [title, setTitle]= useState('')
    const [city, setCity] = useState("")
    const [price, setPrice] = useState("")
    const [etat, setEtat] = useState("")
    const [marque, setMarque] = useState("")
    const [carburant, setCarburant] = useState("")
    const [fabrication, setFabrication] = useState("")
    const [puissance, setPuissance] = useState("")
    const [transtaction, setTransaction] = useState("")
    const [description, setDescription] = useState("")

    const [phone, setPhone] = useState(false);
    const [laivraison, setLaivraison] = useState(false);
    const [paiement, setPaiement] = useState(false);



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

        <Text style={{color:'#4898D3', fontSize: 11}}>
        Les images multiplient les chances par 5 pour vendre votre produit.
        </Text>

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
        Merci d’entrer le Nom exacte de votre article. </Text>
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
            placeholder='DHS'
            theme={textTheme}  
            onChangeText={setPrice}
            style={{marginTop: 10}}
            />
    
    <Text
    style={{color: '#4898D3', marginTop: 5}}>Etat</Text>
    <View style={{ borderWidth: 1, borderColor: '#8C8C8C', borderRadius: 4, marginTop: 5}}>
        <Picker
        prompt='Etat'
        selectedValue={etat}
        style={{ height: 50, width: '100%' }}
        onValueChange={(itemValue, itemIndex) => setEtat(itemValue)}>

        <Picker.Item label="ANCIEN" value="ANCIEN" />
        <Picker.Item label="Neuf" value="neuf" />
      </Picker>
    </View>

    <Text
    style={{color: '#4898D3', marginTop: 5}}>Marque</Text>
    <View style={{ borderWidth: 1, borderColor: '#8C8C8C', borderRadius: 4, marginTop: 5}}>
        <Picker
        selectedValue={marque}
        prompt='Marque'
        style={{ height: 50, width: '100%' }}
        onValueChange={(itemValue, itemIndex) => setMarque(itemValue)}>
       
        <Picker.Item label="choisissez votre marque " value="rien" />
        <Picker.Item label="AUDI" value="AUDI" />
        <Picker.Item label="BMW" value="BMW" />
        <Picker.Item label="CHEVROLET" value="CHEVROLET" />
        <Picker.Item label="CITROEN" value="CITROEN" />
        <Picker.Item label="DACIA" value="DACIA" />
        <Picker.Item label="FIAT" value="FIAT" />
        <Picker.Item label="FORD" value="FORD" />
        <Picker.Item label="HYUNDAI" value="HYUNDAI" />
        <Picker.Item label="INFINITI" value="INFINITI" />
        <Picker.Item label="JAGUAR" value="JAGUAR" />
        <Picker.Item label="KIA " value="KIA" />
        <Picker.Item label="LANDROVER" value="LANDROVER" />
        <Picker.Item label="MASERATI" value="MASERATI" />
        <Picker.Item label="MAZDA" value="MAZDA" />
        <Picker.Item label="MERCEDES" value="MERCEDES" />
        <Picker.Item label="MINI" value="MINI" />
        <Picker.Item label="MITSUBISHI" value="MITSUBISHI" />
        <Picker.Item label="NISSAN" value="NISSAN" />
        <Picker.Item label="OPEL" value="OPEL" />
        <Picker.Item label="PEUGEOT" value="PEUGEOT" />
        <Picker.Item label="PORSCHE" value="PORSCHE" />
        <Picker.Item label="RENAULT" value="RENAULT" />
        <Picker.Item label="ROVER" value="ROVER" />
        <Picker.Item label="SEAT" value="SEAT" />
        <Picker.Item label="SKODA" value="SKODA" />
        <Picker.Item label="SUZUKI" value="SUZUKI" />
        <Picker.Item label="TOYOTA" value="TOYOTA" />
        <Picker.Item label="VOLSWAGEN" value="VOLSWAGEN" />
        <Picker.Item label="VOLVO" value="VOLVO" />
        <Picker.Item label="AUTRE" value="AUTRE" />
      </Picker>
    </View>
    
    <TextInput
            
            onChangeText={setFabrication}
            label='Année de fabrication'
            mode='outlined'
            placeholder='exemple: 2005'
            keyboardType='numeric'
            theme={textTheme}
            style={{marginTop: 10}}
    />

    <Text
    style={{color: '#4898D3', marginTop: 5}}>Carburant</Text>
    <View style={{ borderWidth: 1, borderColor: '#8C8C8C', borderRadius: 4, marginTop: 5}}>
        <Picker
        selectedValue={carburant}
        style={{ height: 50, width: '100%' }}
        prompt='Carburant'
        onValueChange={(itemValue, itemIndex) => setCarburant(itemValue)}>

        <Picker.Item label="Diesel " value="Diesel" />
        <Picker.Item label="Essence" value="Essence" />
      </Picker>
    </View>

    <Text
    style={{color: '#4898D3', marginTop: 5}}>Puissance fiscale</Text>
    <View style={{ borderWidth: 1, borderColor: '#444', borderRadius: 4, marginTop: 5 }}>
        <Picker
        selectedValue={puissance}
        prompt='Puissance Fiscale'
        style={{ height: 50, width: '100%'}}
        onValueChange={(itemValue, itemIndex) => setPuissance(itemValue)}>

        <Picker.Item label="4CH" value="4ch" />
        <Picker.Item label="5CH" value="5ch" />
        <Picker.Item label="6CH" value="6ch" />
        <Picker.Item label="7CH" value="7ch" />
        <Picker.Item label="8CH" value="8ch" />
        <Picker.Item label="9CH" value="9ch" />
        <Picker.Item label="10CH" value="10ch" />
        <Picker.Item label="Plus que 10CH" value="+10ch" />
      </Picker>
      </View>

    <Text
    style={{color: '#4898D3', marginTop: 5}}>Transaction</Text>
    <View style={{ borderWidth: 1, borderColor: '#8C8C8C', borderRadius: 4, marginTop: 5}}>
        <Picker
        mode='dropdown'
        selectedValue={transtaction}
        style={{ height: 50, width: '100%' }}
        onValueChange={(itemValue, itemIndex) => setTransaction(itemValue)}>

        <Picker.Item label="Mannuel " value="Mannuel" />
        <Picker.Item label="Automatique" value="Automatique" />
      </Picker>
    </View>

    <TextInput
            label='Description'
            placeholder='description de produit'
            onChangeText={setDescription}
            theme={textTheme}
            multiline={true}
            style={{marginTop: 10, height: 150}}
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
    style={[GlobalStyle.btn, {marginBottom: 30}]}
    onPress={()=>navigation.navigate('CarDetails')}>
        <Text
        style={GlobalStyle.signInText}>Suivante</Text>
    </TouchableOpacity>

        </View>
        </ScrollView>
        </SafeAreaView>
    )
}
