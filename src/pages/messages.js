import React from 'react'
import { View,Button } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { GiftedChat,Bubble } from 'react-native-gifted-chat';
import { db, auth } from '../API/firebase';
import firebase from 'firebase';
import { warning } from 'react-native-gifted-chat/lib/utils';

export default function messages({ route }) {

    const [messages, setMessages] = React.useState([]);
    const [loading, setLoading] = React.useState(false)
    const [qty,setQty]=React.useState(30)


    const chatRef = db.collection('chats')
    const user = auth.currentUser
    const { seller } = route.params
    // const recId = seller._id ? seller._id : seller.uid

    React.useEffect(() => {
        setLoading(true)
        var unsub = chatRef.doc(chatId()).collection('messages').orderBy('createdAt','desc').limit(qty).onSnapshot((querySnap) => {
            setMessages([])
            const firestoreMessages = querySnap
                .docChanges()
                .filter(({ type }) => type == 'added')
                .map(({ doc }) => {
                    const dbMessage = doc.data()
                    return { ...dbMessage, createdAt: dbMessage.createdAt.toDate() }
                })

            appendMessages(firestoreMessages)
            setLoading(false)
        })
        return () => {
            unsub()
        }
    }, [qty])

    async function sendMessage(messages) {
        db.collection('chats')
            .doc(chatId()).set({
                senderUID: user.uid,
                contact:seller
            })
        const writes = messages.map((m) => {
            db.collection('chats')
                .doc(chatId())
                .collection('messages')
                .add(m)
        })
        await Promise.all(writes)
    }

    const appendMessages = React.useCallback((messages) => {
        setMessages(prevMsg => GiftedChat.append(prevMsg, messages))
    })


    const chatId = () => {
        if (user.uid > seller._id) return `${user.uid}-${seller._id}`
        else return `${seller._id}-${user.uid}`;
    }

    const updateQty =()=>{
        console.log(qty);
        setQty(qty+10)
    } 
    return (
        <View style={{ flex: 1 }}>
            {           loading ? <ProgressBar color='blue' indeterminate={true} visible={true} /> : null
            }
            <Button title='Load more' onPress={updateQty} />
            <GiftedChat
                renderBubble = { props =>
                    <Bubble
                    {...props}
                    textStyle={{
                      left: {
                        color: 'white',
                      },
                    }}
                    wrapperStyle={{
                      left: {
                        backgroundColor: '#F16E44',
                      },
                      right :{
                          backgroundColor : '#4898D3'
                      }
                    }}
                  />
                }
                messages={messages
                    // .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
                }
                onSend={(messages) => sendMessage(messages)}
                user={{
                    _id: user.uid,
                    name: user.displayName,
                    avatar: user.photoURL
                }} />
        </View>
    )
}
