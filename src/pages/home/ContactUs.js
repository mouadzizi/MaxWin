import React from 'react'
import { View, Image } from 'react-native';
import {TextInput} from 'react-native-paper'
import { Ionicons } from 'react-native-vector-icons';
import {textTheme} from '../../style/GlobalStyle'

export default function ContactUs({navigation}) {
    return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>

            <View style={{ flexDirection: 'row', backgroundColor: '#4898D3' }}>
            <Ionicons
                onPress={() => navigation.openDrawer()}
                name="md-menu"
                size={40}
                color="#fff"
                style={{ alignSelf: 'center', margin: 5, marginLeft: 10 }}
            />

            </View>

            <View style={{flex: 3}}>
            <Image
						source={require('../../../assets/logo.jpg')}
						style={{height: '100%', width: '100%', alignSelf: 'center', marginTop: 15 }}
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
        </View>
    )
}
