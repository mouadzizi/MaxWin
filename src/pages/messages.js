import React from 'react'
import { View, Text, KeyboardAvoidingView } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

export default function messages() {
   
    return (
      
        <View style={{ flex: 1 }}>
        <GiftedChat />
        {
           Platform.OS === 'android' && <KeyboardAvoidingView behavior="padding" />
        }
     </View>
    )
}
