import * as React from 'react';
import { FlatList } from 'react-native';
import ChatIndicator from '../../components/ChatIndicator';
import { db, auth } from '../../API/firebase'

export default function Chats({ navigation }) {
    const [conversations, setConversation] = React.useState([])

    const chatRef = db.collectionGroup('chats')
    const { uid } = auth.currentUser

    React.useEffect(() => {
        console.log('chats here2');
        chatRef.get().then(snap => {
            snap.forEach(d => {
                if (d.id.match(uid)) {
                    setConversation([])
                    d.ref.collection('messages')
                        .orderBy('createdAt', 'desc')
                        .limit(1).onSnapshot(querySnap => {
                            const dbConverstaions = querySnap.docChanges()
                                .filter(({ type }) => type = 'added')
                                .map(({ doc }) => {
                                    const conv = doc.data()
                                    return {
                                        ...conv,
                                        createdAt: conv.createdAt.toDate(),
                                        key: doc.id
                                    }
                                })

                            appendConversations(dbConverstaions)

                        })
                }


            })
        })
    
    }, [])

    const appendConversations = React.useCallback((messages) => {
        messages.forEach(m => {
            setConversation(prev => [...prev, m])
        })
    })
    return (
        <FlatList
            data={conversations}
            renderItem={({ item }) => <ChatIndicator
                click={() => navigation.navigate('Messages', { seller: item.seller })}
                lastMessage={item.text} sellerName={item.seller.owner} />}
        />

    )
}