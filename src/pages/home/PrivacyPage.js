import React from 'react'
import { View, StatusBar } from 'react-native'
import { Ionicons } from 'react-native-vector-icons';
import Condition from '../../components/Conditions'


export default function PrivacyPage({navigation}) {
    return (
        <View>

            <View style={{ flexDirection: 'row', backgroundColor: '#4898D3' }}>
            <Ionicons
                onPress={() => navigation.openDrawer()}
                name="md-menu"
                size={40}
                color="#fff"
                style={{ alignSelf: 'center', margin: 5, marginLeft: 10 }}
            />

            </View>

            <Condition />

        </View>
    )
}
