import React from 'react'
import { View, Text } from 'react-native'

export default function fil() {
    return (
        <View>
            <View
        style={{flex: 1, marginTop: 20}}>
        <TextInput
            label='Titre de Produit chercher'
            mode='outlined'
            theme={textTheme}
            onChangeText={setTitle}
        />

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



    <Text
    style={{color: '#4898D3', marginTop: 5}}>Prix</Text>

    <View
    style={{flexDirection: 'row', justifyContent: 'space-between'}}>
    <TextInput 
    label='Prix MIN'
    mode='outlined'
    placeholder='DHS'
    theme={textTheme}
    onChangeText={setPriceMin}
    keyboardType='numeric'
    style={{width: '45%'}}
    />
    
    <TextInput 
    label='Prix MAX'
    mode='outlined'
    placeholder='DHS'
    theme={textTheme}
    onChangeText={setPriceMax}
    keyboardType='numeric'
    style={{width: '45%'}}
    />
    </View>
    
    <Text
    style={{color: '#4898D3', marginTop: 5}}>Etat</Text>
    <View style={{ borderWidth: 1, borderColor: '#444', borderRadius: 4, marginTop: 5}}>
        <Picker
        selectedValue={etat}
        prompt="Etat"
        style={{ height: 50, width: '100%' }}
        onValueChange={(itemValue, itemIndex) => setEtat(itemValue)}>

        <Picker.Item label="Neuf" value="neuf" />
        <Picker.Item label="Bon-Ocasion" value="tn" />
      </Picker>
    </View>





    <TouchableOpacity
    style={[GlobalStyle.btn, {marginBottom: 30}]}>
        <Text
        style={GlobalStyle.signInText}>Valider</Text>
    </TouchableOpacity>

      

        </View>
        </View>
    )
}
