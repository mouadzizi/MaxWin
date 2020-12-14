import React from 'react'
import { View } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { GiftedChat } from 'react-native-gifted-chat';
import { db, auth } from '../API/firebase';
import firebase from 'firebase';
import { warning } from 'react-native-gifted-chat/lib/utils';

export default function messages({route}) {

    const [messages, setMessages] = React.useState([]);
    const [loading,setLoading]=React.useState(false)


    const chatRef = db.collection('chats')
    const user=auth.currentUser
    const {seller}=route.params
    const recId = seller._id? seller._id : seller.uid

    React.useEffect(() => {
        setLoading(true)
        var unsub = chatRef.doc(chatId()).collection('messages').onSnapshot((querySnap)=>{
            const firestoreMessages=querySnap
            .docChanges().filter(({type})=> type == 'added')
            .map(({doc})=>{
                const dbMessage =doc.data() 
                return {...dbMessage,createdAt:dbMessage.createdAt.toDate()}
            })
            appendMessages(firestoreMessages)
            setLoading(false)
        })
        return () => {
             unsub()
        }
    }, [])

    async function sendMessage(messages) {
         const writes=messages.map((m) =>  {
             db.collection('chats')
             .doc(chatId())
             .collection('messages')
             .add({
                 ...m,
                 seller
             })
        })
        await Promise.all(writes)
    }

    const appendMessages = React.useCallback((messages)=>{
        setMessages(prevMsg=> GiftedChat.append(prevMsg,messages))
    })


    const chatId=()=> {
        if (user.uid >recId) return `${user.uid}-${recId}`
      else return `${recId}-${user.uid}`;}

    return (

        <View style={{ flex: 1 }}>
{           loading? <ProgressBar color='blue' indeterminate={true} visible={true} /> :null
}
            <GiftedChat
                messages={messages}
                onSend={(messages)=>sendMessage(messages)}
                user={{
                    _id:user.uid,
                    name:user.displayName,
                }} />
        </View>
    )
}
