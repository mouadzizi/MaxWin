import React from 'react'
import { View } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { GiftedChat } from 'react-native-gifted-chat';
import { db, auth } from '../API/firebase';
import firebase from 'firebase';

export default function messages({route}) {

    const [messages, setMessages] = React.useState([]);
    const [loading,setLoading]=React.useState(false)


    const chatRef = db.collection('chats')
    const user=auth.currentUser
    const {seller}=route.params

    React.useEffect(() => {
        setLoading(true)
        const unsub = chatRef.doc(chatId()).collection('messages').onSnapshot(querySnapShoot=>{
            const dbMessages=querySnapShoot.docChanges()
                            .filter(({type})=>type==='added')
                            .map(({doc})=>{
                                const messages=doc.data()
                                setLoading(false)
                                return {...messages,createdAt:messages.createdAt.toDate()};
                            })
                            
                            appendMessages(dbMessages)
                            setLoading(false)
        })
        return () => {
            unsub()
        }
    }, [])

    async function sendMessage(messages) {
        messages.reverse()
        const writes=messages.map(m=>
            chatRef.doc(chatId()).collection('messages').add({...m,seller}))
            await chatRef.doc(`${user.uid}-${seller.uid}`).set({test:'test'})
        await Promise.all(writes)
    }

    const appendMessages = React.useCallback((messages)=>{
        setMessages(prevMsg=> GiftedChat.append(prevMsg,messages))
    })


    const chatId=()=> {
        if (user.uid > seller.uid) return `${user.uid}-${seller.uid}`
      else return `${seller.uid}-${user.uid}`;}

    return (

        <View style={{ flex: 1 }}>
{           loading? <ProgressBar color='blue' indeterminate={true} visible={true} /> :null
}
            <GiftedChat
                messages={messages.reverse()}
                onSend={sendMessage}
                user={{
                    id: user.uid,
                    name: user.displayName,
                    avatar: user.photoURL? user.photoURL :'https://placeimg.com/140/140/any'
                }} />
        </View>
    )
}
