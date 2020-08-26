import React, {useState} from 'react';
import { Text, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native'
import { TextInput} from 'react-native-paper';
import {GlobalStyle, textTheme} from '../../../style/GlobalStyle';

export default function EditProfil(){
    
  const [FirstName, setFirstName] = useState('');

    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', padding: 20 }} >
        <ScrollView showsVerticalScrollIndicator={false}>

        <TouchableOpacity
        style={{width: 70, backgroundColor: '#3514', borderRadius: 10}}>
            <Text style={{textAlign: 'center'}}>Retour</Text>
        </TouchableOpacity>
        <TextInput
        label='Prénom'
        mode='outlined'
        value={FirstName}
        theme={textTheme}
        onChangeText={text => setText(text)}
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


        </ScrollView>
        </SafeAreaView>
    );
}