import React from 'react'
import { View, Text } from 'react-native'

export default function CarDtails() {
    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff'}} >
        
        <ScrollView style={{padding: 20}} showsVerticalScrollIndicator={false}>
            <Text>hello</Text>

            <TouchableOpacity
            style={[GlobalStyle.btn, {marginBottom: 30}]}>
                <Text
                style={GlobalStyle.signInText}>Valider l’annonce</Text>
            </TouchableOpacity>
            
        </ScrollView>
        </SafeAreaView>
    )
}
