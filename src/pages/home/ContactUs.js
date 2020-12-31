import React from 'react'
import { View, Image, Text, Alert, StatusBar} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {TextInput} from 'react-native-paper';
import { Ionicons } from 'react-native-vector-icons';
import {GlobalStyle, textTheme} from '../../style/GlobalStyle';

export default function ContactUs({navigation}) {
    return (
        <ScrollView style={{backgroundColor: '#fff'}}>
        
            <StatusBar/>
            <View style={{ flexDirection: 'row', backgroundColor: '#4898D3'}}>
            <View style={{flex: 1}}>
            <Ionicons
                onPress={() => navigation.openDrawer()}
                name="md-menu"
                size={40}
                color="#fff"
                style={{ alignSelf: 'flex-start', margin: 5, marginLeft: 10 }}
            />
            </View>

            <View  style={{flex: 4, alignSelf: 'center'}}>
                <Text style={{fontWeight: 'bold', color: '#fff', marginStart: 55, fontSize: 17}}>Contactez nous</Text>
            </View>
            

            </View>

            <View style={{flex: 3}}>
            <Image
						source={require('../../../assets/logo.jpg')}
						style={{height: 250, width: '100%', alignSelf: 'center', marginTop: 15 }}
						resizeMode={'cover'}
					/>

            </View>
            <View style={{flex: 4, padding: 20}}>

            <TextInput
            label='Nom complete'
            mode='outlined'
            placeholder='votre nom'
            theme={textTheme}
            style={{marginBottom: 15}}
            />

            <TextInput
            label='E-mail'
            autoCapitalize="none"
            mode='outlined'
            placeholder='votre-mail@mail.com'
            theme={textTheme}
            style={{marginBottom: 15}}
            />
            <TextInput
            label='Message'
            autoCapitalize="none"
            mode='outlined'
            placeholder='votre message'
            theme={textTheme}
            style={{marginBottom: 15}}
            multiline={true}
            numberOfLines={5}
            />
            </View>
            
            <TouchableOpacity 
            style={GlobalStyle.BouttonStyle}
            onPress={()=>{Alert.alert('Message Envoyer', 'votre message est envoyer')}}>
            <Text style={GlobalStyle.BouttonStyleText}>Envoyer</Text>
            </TouchableOpacity>
        </ScrollView>
        
    )
}
