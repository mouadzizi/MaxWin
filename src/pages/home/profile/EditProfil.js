import React, {useState} from 'react';
import { Text, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native'
import { TextInput} from 'react-native-paper';
import {GlobalStyle, textTheme} from '../../../style/GlobalStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function EditProfil({navigation}){
    


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
        theme={textTheme}
        />

        <TextInput
        label='Nom'
        mode='outlined'
        theme={textTheme}
        />

        <TouchableOpacity
        style={GlobalStyle.btn}>
            <Text style={GlobalStyle.text}>Valider</Text>
        </TouchableOpacity>

        </ScrollView>
        </SafeAreaView>
    );
}