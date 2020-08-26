import React, {useState} from 'react'
import { Text, ScrollView, SafeAreaView, View, TouchableOpacity} from 'react-native'
import { Avatar, Divider, FAB,TextInput} from 'react-native-paper';
import {GlobalStyle} from '../../../style/GlobalStyle';

export default function Profil({navigation}) {
    const [edit,setEdit]=useState(false)
    const [about,setAbout]=useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")
    let input;
    const toggleEdite = ()=>{

        setEdit(!edit)
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', padding: 20 }} >
        <ScrollView showsVerticalScrollIndicator={false}>

        <View style={{flex:1, justifyContent: 'center', alignSelf: 'center', marginTop: 15, marginBottom: 15}}>
        <Text style={GlobalStyle.usernameProfil}>Max Win</Text>
        <TouchableOpacity>
        <Avatar.Image size={110} source={require('../../../../assets/logo.jpg')} />
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
        <TextInput
        theme={{colors:{background:'rgba(255,255,255,0.8)'}}}
         multiline 
         style={{textAlign: 'center'}}
         value={about}
         onChangeText={e=>setAbout(e)}
         editable={edit}
         />
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
        label={edit? 'save' : 'modifier le profil'}
        color='#fff'
        onPress={toggleEdite}
        />
        </SafeAreaView>
    )
}

