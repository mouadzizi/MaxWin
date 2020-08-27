import React, {useState} from 'react'
import { Text, ScrollView, SafeAreaView, View, TouchableOpacity} from 'react-native'
import { Avatar, Divider, FAB,TextInput} from 'react-native-paper';
import {GlobalStyle, textTheme} from '../../../style/GlobalStyle';
import { set } from 'react-native-reanimated';


export default function Profil({navigation}) {
    const [edit,setEdit]=useState(false)
    const [about,setAbout]=useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")
    const [location,setLocation]=useState("Tanger-tétouan")
    const [email,setEmail]=useState("test@mail.com")
    const [phone,setPhone]=useState("test@mail.com")
    const [name,setName]=useState("moad zizi")

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
         theme={{colors:{primary:'#fff',background:'rgba(255,255,225,0)'}}}
         mode='flat'
         multiline
         value={about}
         onChangeText={e=>setAbout(e)}
         editable={edit}
         />
        </View>

        <Divider />

        <View style={{flex:1, flexDirection: 'row'}}>

        <View style={{flex: 1,alignContent: 'space-around', marginTop: 15, marginBottom: 5}}>
        <Text style={{fontWeight: 'bold', color: '#4898D3'}}>Location</Text>
        <TextInput
         theme={{colors:{primary:'#4898D3',background:'rgba(255,255,225,0)'}}}
         mode='flat'
         value={location}
         onChangeText={e=>setLocation(e)}
         editable={edit}
         style={{height: 25, width: '95%'}}
         />
        </View>

        <View style={{flex:1, marginTop: 15, marginBottom: 5}}>
        <Text style={{fontWeight: 'bold', color: '#4898D3'}}>E-mail</Text>

        <TextInput
         theme={{colors:{primary:'#fff',background:'rgba(255,255,225,0)'}}}
         mode='flat'
         value={email}
         onChangeText={e=>setEmail(e)}
         editable={edit}
         style={{height: 25, width: '95%'}}
         />
        </View>

        </View>

        <View style={{flex:1, flexDirection: 'row'}}>

        <View style={{flex: 1,alignContent: 'space-around', marginTop: 15, marginBottom: 5}}>
        <Text style={{fontWeight: 'bold', color: '#4898D3'}}>Télephone</Text>
        <TextInput
         theme={{colors:{primary:'#fff',background:'rgba(255,255,225,0)'}}}
         mode='flat'
         value={phone}
         onChangeText={e=>setPhone(e)}
         editable={edit}
         style={{height: 25, width: '95%'}}
         />
        </View>

        <View style={{flex:1, marginTop: 15, marginBottom: 5}}>
        <Text style={{fontWeight: 'bold', color: '#4898D3'}}>Nom et prénom</Text>
        <TextInput
         theme={{colors:{primary:'#fff',background:'rgba(255,255,225,0)'}}}
         mode='flat'
         value={name}
         onChangeText={e=>setName(e)}
         editable={edit}
         style={{height: 25, width: '95%'}}
         />
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

