import * as React from 'react';
import {View, Text} from 'react-native';
import ChatIndicator from '../../components/ChatIndicator';

export default function Chats({navigation}){
    return(
        <View>
            <ChatIndicator click={()=>navigation.navigate('Messages')}/>
            <ChatIndicator click={()=>navigation.navigate('Messages')}/>
            <ChatIndicator click={()=>navigation.navigate('Messages')}/>
        </View>
    )
}