import React from 'react'
import { View, Text, KeyboardAvoidingView } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { db, auth } from '../API/firebase';
import firebase from 'firebase';

export default function messages() {

    const [messages, setMessages] = React.useState([]);
    const [messageSent, setMessageSent] = React.useState(false);
    var chatRef = null
    React.useEffect(() => {

         loadMessages();
        return () => {
            console.log('chats exite');
            chatRef()
        }
    }, [])

    const onSend = React.useCallback(async (messages = []) => {
        for (let i = 0; i < messages.length; i++) {
            await db.collection('chats')
                .doc('chatID')
                .collection('messages')
                .add({
                    _id: messages[i]._id,
                    text: messages[i].text,
                    user: messages[i].user,
                    sent: true,
                    createdAt: messages[i].createdAt,
                }).then(() => console.log('messageSent'))
                .catch(e => console.log(e.message));
        }


    }, [])

    const loadMessages = () => {
        chatRef = db.collection('chats').doc('chatID').collection('messages').orderBy('createdAt', 'desc')
            .onSnapshot(s => {
                var data = [];
                s.docChanges().forEach((change) => {
                    if (change.type == 'added') {
                        console.log('====================================');
                        console.log('data added');
                        console.log('====================================');
                        try {
                             data.push({
                                _id: change.doc.data()._id,
                                createdAt: new Date(change.doc.data().createdAt.seconds * 1000),
                                sent: change.doc.data().sent,
                                text: change.doc.data().text,
                                user: change.doc.data().user
                            });
                        } catch (error) {
                            console.warn(error.message);
                        }

                    }
                });
                setMessages(data);
            })
    }

    // const  chatId=()=> {
    //     if (auth.currentUser.uid > route.params.item.key) return `${auth.currentUser.uid}-${route.params.item.key}`
    //     else return `${route.params.item.key}-${auth.currentUser.uid}`;}

    return (

        <View style={{ flex: 1 }}>
            <GiftedChat
                messages={messages}
                onSend={message => onSend(message)}
                user={{
                    id: auth.currentUser.uid,
                    name: auth.currentUser.displayName
                }} />
        </View>
    )
}
