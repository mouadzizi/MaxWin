import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { Avatar } from 'react-native-paper';


export default function ChatIndicator(props) {

    return (
        <View
            style={{ width: '90%', height: 80 }}>
            {props.badge ?
                <Text
                    style={{
                        position: 'absolute',
                        right: 5,
                        top: '50%',
                        backgroundColor: '#54BB4E',
                        width: 18,
                        height: 18,
                        borderRadius: 15,
                    }} >

                </Text> : null}

            <TouchableOpacity
                delayPressIn={0}
                style={{ padding: 20, flexDirection: 'row' }}
                onPress={props.click}>
                <Avatar.Image size={60} source={{
                    uri: props.sellerAvatar ? props.sellerAvatar
                        : 'https://firebasestorage.googleapis.com/v0/b/maxwinapp-2020.appspot.com/o/transgender_1.png?alt=media&token=8b2f0464-330a-45ef-b35e-6b7f32cd2ed4'
                }}
                />
                <View
                    style={{ marginHorizontal: 5 }}>
                    <Text style={{ fontSize: 20, fontFamily: 'sans-serif', fontWeight: 'bold' }}>
                        {props.sellerName}
                    </Text>
                    <Text style={{ fontSize: 14, color: '#444', marginTop: 9, marginHorizontal: 2 }}>
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
