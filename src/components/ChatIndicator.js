import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import {Avatar, Divider} from 'react-native-paper' 

export default function ChatIndicator(props) {
    return (
        <View
        style={{width: '90%', height: 75}}>
        <TouchableOpacity
        style={{padding: 20, flexDirection: 'row'}}
        onPress={props.click}>
             <Avatar.Image size={50} source={require('../../assets/logo.jpg')} />
             <View
             style={{margin: 5}}>
                
             <Text
             style={{fontSize: 17, fontFamily: 'sans-serif'}}>MaxWin</Text>
             <Text
             style={{fontSize: 12, color: '#444'}}>This is a mesage exemple</Text>
             </View>
        </TouchableOpacity>
        <Divider />
        </View>
    )
}
