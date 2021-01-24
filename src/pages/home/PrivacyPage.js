import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import { Ionicons } from 'react-native-vector-icons';
import Condition from '../../components/Conditions'


const { width, height } = Dimensions.get('window');


export default function PrivacyPage({navigation}) {

    return (
        <View style={{height: height*0.88, width: width}}>

            <View style={{ flexDirection: 'row', backgroundColor: '#4898D3' }}>
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
                <Text style={{fontWeight: 'bold', color: '#fff', marginStart: 55, fontSize: 17}}>Conditions Générales</Text>
            </View>
            

            </View>

            <Condition />

        </View>
    )
}
