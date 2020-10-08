import React, {useState} from 'react';
import { View, SafeAreaView, ScrollView, Modal, Text, TouchableOpacity, Picker } from 'react-native';
import {TextInput} from 'react-native-paper'
import {GlobalStyle, textTheme} from '../../../style/GlobalStyle';
import FilterCategory from '../filtre/FilterCat'


export default function Filtre() {
    
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState ("");
  const [city, setCity] = useState ("");
  const [priceMax, setPriceMax] = useState ("");
  const [priceMin, setPriceMin] = useState ("");
  const [etat, setEtat] = useState ("");

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff'}} >
        <ScrollView style={{padding: 20}} showsVerticalScrollIndicator={false}>

    <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text>Choisisez votre categorie</Text>
      </TouchableOpacity>

    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
                setModalVisible(!modalVisible);
        }}>

        <View style={GlobalStyle.modalContainer}>
          <View style={GlobalStyle.modalView}>
            <FilterCategory />

            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text>Hide Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
    </Modal>

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

        </ScrollView>
        </SafeAreaView>
    )
}
