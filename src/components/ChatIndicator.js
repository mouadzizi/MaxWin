import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { Avatar } from 'react-native-paper'

export default function ChatIndicator(props) {
    return (
        <View
            style={{ width: '90%', height: 80 }}>
            <TouchableOpacity
                delayPressIn={0}
                style={{ padding: 20, flexDirection: 'row' }}
                onPress={props.click}>
                <Avatar.Image size={60} source={{ uri: props.sellerAvatar }} />
                <View
                    style={{ marginHorizontal: 5 }}>
                    <Text style={{ fontSize: 20, fontFamily: 'sans-serif', fontWeight: 'bold' }}>
                        {props.sellerName}
                    </Text>
                    <Text style={{ fontSize: 14, color: '#444',marginTop:9 , marginHorizontal:2 }}>
                        {props.lastMessage}
                    </Text>
                    <Text style={{ fontSize: 12 }}>
                        {props.time}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
