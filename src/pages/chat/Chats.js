import * as React from 'react';
import { FlatList, View, Text, Image, Dimensions } from 'react-native';
import ChatIndicator from '../../components/ChatIndicator';
import { useFocusEffect } from '@react-navigation/native'
import { db, auth } from '../../API/firebase'

export default function Chats({ navigation }) {
    const [conversations, setConversations] = React.useState([])
    const { uid } = auth.currentUser

    const { width, height } = Dimensions.get('window');
    const height_image = height * 0.6;
    const width_image = width;

    useFocusEffect(React.useCallback(() => {
        let items = []
        const _unsub = db.collection('chats').onSnapshot(querySnapShot => {
        
            querySnapShot.docs.forEach(doc => {
                if (doc.id.search(uid) >= 0) {
                    doc.ref.collection('messages').orderBy('createdAt', 'desc').limit(1).get().then(snap => {
                        snap.docs.forEach(d => {
                            items.push({
                                ...d.data(),
                                sender: doc.data().senderUID,
                                contact: doc.data().contact,
                                key: d.data()._id
                            })
                        })
                        setConversations(items)
                    })
                }
            })
        })

        return () => {
            // _unsub()
        }
    }, []))

    React.useEffect(() => {
        //Retrieve the reciever
        return () => {
            setConversations([])
        }
    }, [])

    const appendConversations = React.useCallback((messages) => {
        messages.forEach(m => {
            setConversations(prev => [...prev, m])
        })
    })
    return (
        <View
            style={{ backgroundColor: '#fff', flex: 1 }}>
            <FlatList
                data={conversations.sort((a, b) => b.createdAt.toDate().getTime() - a.createdAt.toDate().getTime())}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                    <ChatIndicator
                        sellerAvatar={(uid != item.sender) ? item.user.avatar : item.contact.avatar}
                        click={() => navigation.navigate('Messages', { seller: (uid === item.sender) ? item.contact : item.user })}
                        lastMessage={item.text} sellerName={(uid === item.sender) ? item.contact.name : item.user.name} />
                }

                ListEmptyComponent={() => (
                    <View>
                        <Image
                            source={require('../../../assets/slide3.jpg')}
                            style={{ height: height_image, width: width_image, alignSelf: 'center', marginTop: 15 }}
                            resizeMode={'stretch'} />
                        <Text
                            style={{ textAlign: 'center', color: '#4898D3', fontSize: 20, fontFamily: 'serif' }}>Actuellement ,votre Chat lsit est vide.</Text>
                    </View>
                )}
            />
        </View>

    )
}