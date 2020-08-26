import React, {useState} from 'react'
import { Text, ScrollView, SafeAreaView, View, TouchableOpacity} from 'react-native'
import { Avatar, Divider, FAB} from 'react-native-paper';
import {GlobalStyle} from '../../style/GlobalStyle';


export default function Profil({navigation}) {

    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', padding: 20 }} >
        <ScrollView showsVerticalScrollIndicator={false}>

        <View style={{flex:1, justifyContent: 'center', alignSelf: 'center', marginTop: 15, marginBottom: 15}}>
        <Text style={GlobalStyle.usernameProfil}>Max Win</Text>
        <TouchableOpacity>
        <Avatar.Image size={110} source={require('../../../assets/logo.jpg')} />
        </TouchableOpacity>
        </View>

        <Divider />

        <TouchableOpacity 
        style={{flex:1, flexDirection: 'row' ,justifyContent: 'center', alignSelf: 'center', marginTop: 15, marginBottom: 15}}
        onPress={()=>{navigation.push('Items')}}>
        <Text style={GlobalStyle.numberPosts}>5</Text>
        <Text style={GlobalStyle.posts}>Posts </Text>
        </TouchableOpacity>

        <Divider />

        <View style={{flex:1, justifyContent: 'center', marginTop: 15, marginBottom: 15}}>
        <Text style={{textAlign: 'center'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
        </View>

        <Divider />

        <View style={{flex:1, flexDirection: 'row'}}>

        <View style={{flex: 1,alignContent: 'space-around', marginTop: 15, marginBottom: 5}}>
        <Text style={{fontWeight: 'bold', color: '#4898D3'}}>Location</Text>
        <Text>Tanger-Tétouan </Text>
        </View>

        <View style={{flex:1, marginTop: 15, marginBottom: 5}}>
        <Text style={{fontWeight: 'bold', color: '#4898D3'}}>E-mail</Text>
        <Text>Mouad.zizi1@gmail.com </Text>
        </View>

        </View>

        <View style={{flex:1, flexDirection: 'row'}}>

        <View style={{flex: 1,alignContent: 'space-around', marginTop: 15, marginBottom: 5}}>
        <Text style={{fontWeight: 'bold', color: '#4898D3'}}>Télephone</Text>
        <Text>(+212) 6.17.82.12.29 </Text>
        </View>

        <View style={{flex:1, marginTop: 15, marginBottom: 5}}>
        <Text style={{fontWeight: 'bold', color: '#4898D3'}}>Nom et prénom</Text>
        <Text>Mouad zizi</Text>
        </View>

        </View>
        </ScrollView>

        <FAB
        style={{position: 'absolute',margin: 16,right: 0,bottom: 0,backgroundColor: '#4898D3'}}
        label='Modifier le profil'
        color='#fff'
        onPress={()=>{navigation.navigate('EditProfil')}}
        />
        </SafeAreaView>
    )
}

