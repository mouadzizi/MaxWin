import React from 'react'
import { Text, ScrollView, SafeAreaView, View, TouchableOpacity } from 'react-native'
import { Avatar, Divider  } from 'react-native-paper';
import {GlobalStyle} from '../../style/GlobalStyle';

export default function Profil() {
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

        <TouchableOpacity style={{flex:1, flexDirection: 'row' ,justifyContent: 'center', alignSelf: 'center', marginTop: 15, marginBottom: 15}}>
        <Text style={GlobalStyle.numberPosts}>5</Text>
        <Text style={GlobalStyle.posts}>Posts </Text>
        </TouchableOpacity>

        <Divider />

        <View style={{flex:1, justifyContent: 'center', marginTop: 15, marginBottom: 15}}>
        <Text style={{textAlign: 'center'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
        </View>

        <Divider />

        <View style={{flex:1, flexDirection: 'row' ,justifyContent: 'center', alignSelf: 'center', marginTop: 15, marginBottom: 5}}>
        <Text style={{fontWeight: 'bold', color: '#4898D3'}}>Location</Text>
        <Text style={{marginLeft: 10}}>Tanger-Tétouan </Text>
        </View>

        
        </ScrollView>
        </SafeAreaView>
    )
}

