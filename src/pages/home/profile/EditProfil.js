import React, {useState} from 'react';
import { Text, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native'
import { TextInput} from 'react-native-paper';
import {GlobalStyle, textTheme} from '../../../style/GlobalStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function EditProfil({navigation}){
    
  const [firstName, setFirstName] = useState('');
  const [lasttName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [about, setAbout] = useState('');

    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', padding: 20 }} >
        <ScrollView showsVerticalScrollIndicator={false}>

        <TouchableOpacity
        style={{flex:1, flexDirection: 'row', marginBottom: 15}}
        onPress={()=>navigation.goBack()}>
            <Ionicons
            name='ios-arrow-back'
            color='#4898D3'
            size={35}
            />
            <Text
            style={{fontWeight: '700', fontSize: 20, marginLeft: 20, color:'#4898D3'}}>
            Retour au profil</Text>

        </TouchableOpacity>

        <TextInput
        label='Prénom'
        mode='outlined'
        value={firstName}
        theme={textTheme}
        onChangeText={text => setFirstName(text)}
        />

        <TextInput
        label='Nom'
        mode='outlined'
        value={FirstName}
        theme={textTheme}
        onChangeText={text => setText(text)}
        />

        <TextInput
        label='Télphone'
        mode='outlined'
        value={FirstName}
        theme={textTheme}
        onChangeText={text => setText(text)}
        />
        
        <TextInput
        label='E-mail'
        mode='outlined'
        value={FirstName}
        theme={textTheme}
        onChangeText={text => setText(text)}
        />

        <TextInput
        label='Location'
        mode='outlined'
        value={FirstName}
        theme={textTheme}
        onChangeText={text => setText(text)}
        />

        <TextInput
        label='À propos de moi'
        mode='outlined'
        value={FirstName}
        theme={textTheme}
        style={{height: 120}}
        onChangeText={text => setText(text)}
        />

        <TouchableOpacity
        style={GlobalStyle.btn}>
            <Text style={GlobalStyle.text}>Valider</Text>
        </TouchableOpacity>

        </ScrollView>
        </SafeAreaView>
    );
}