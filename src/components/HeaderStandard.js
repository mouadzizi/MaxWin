import React from 'react'
import { View, Text, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window');

export default function HeaderStandard(props) {
    return (
        <View style={{ backgroundColor: '#4898D3', height: height*0.07, alignItems: 'center', justifyContent: 'center'}}>

            <Text style={{fontWeight: 'bold', color: '#fff',fontSize: 17, alignSelf: 'center'}}> {props.title}</Text>

        </View>
    )
}
