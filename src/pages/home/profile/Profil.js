import React, {useState} from 'react'
import {useFocusEffect} from '@react-navigation/native'
import { Text, ScrollView, SafeAreaView, View, TouchableOpacity} from 'react-native'
import { Avatar, Divider, FAB,TextInput} from 'react-native-paper';
import {GlobalStyle, textTheme} from '../../../style/GlobalStyle';
import { set } from 'react-native-reanimated';
import {auth,db} from '../../../API/firebase'


export default function Profil({navigation}) {
    const [edit,setEdit]=useState(false)
    const [about,setAbout]=useState("")
    const [location,setLocation]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [name,setName]=useState("")

    var userRef = null

    useFocusEffect(()=>{
        userRef = db.collection('users').doc(auth.currentUser.uid)
        if(!edit) {
            userRef.get().then(doc=>{
                console.log('begin loading');
                loadInfo(doc.data())
            })
        }
       return ()=>{
          
       }

    },[])

    const action = ()=>{
        setEdit(!edit)
        if(edit){
        updateUserInfo().then(()=>{
            setEdit(!edit)
        })
    }
    }

    const updateUserInfo = async()=>{
        await userRef.update({
            aboutMe:about,
            name:name,
            phone:phone,
            location:location,
        })
    } 

    const loadInfo = (doc)=>{
        setAbout(doc.aboutMe)
        setLocation(doc.location)
        setPhone(doc.phone)
        setName(doc.name)
        setEmail(doc.email)
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', padding: 20 }} >
        <ScrollView showsVerticalScrollIndicator={false}>

        <View style={{flex:1, justifyContent: 'center', alignSelf: 'center', marginTop: 15, marginBottom: 15}}>
        <Text style={GlobalStyle.usernameProfil}>{auth.currentUser.displayName}</Text>
        <TouchableOpacity>
        <Avatar.Image size={110} source={{uri:auth.currentUser.photoURL}} />
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
         placeholder={about? null : 'set About' }
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
         editable={false}
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
        onPress={()=>action()}
        />
        </SafeAreaView>
    )
}

