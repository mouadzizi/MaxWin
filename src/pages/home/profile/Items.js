import React from 'react';
import { Text, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Items({navigation}) {
    return (
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

        </ScrollView>
        </SafeAreaView>

    )
}
