import React from 'react'
import { View, Dimensions } from 'react-native'
import {FAB} from 'react-native-paper'

const _height = Dimensions.get('window').height
const _width = Dimensions.get('window').width

export default function ImageViewer({navigation, route}) {

    
    return (
        <View
        style={{width: _width, height: _height, backgroundColor: 'black'}}>
            <FAB 
            style={{position: 'absolute', margin: 16, left: 0, top: 0,zIndex: 1 , backgroundColor: 'white'}}
            icon="arrow-left"
            onPress={()=> navigation.goBack()}/>


        </View>
    )
}
