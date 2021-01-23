import * as React from 'react';
import { FlatList, View, Text, Image, Dimensions } from 'react-native';
import ChatIndicator from '../../components/ChatIndicator';
import { db, auth } from '../../API/firebase';
import ChatPageIcon from '../../icons/ChatPageIcon'

export default function Chats({ navigation }) {
    const [conversations, setConversations] = React.useState([])
    const { uid } = auth.currentUser

    const { width, height } = Dimensions.get('window');
    const height_image = height * 0.6;
    const width_image = width;

    React.useEffect(() => {
        //Retrieve the reciever
        const _unsub = db.collection('chats').orderBy('createdAt', 'desc').onSnapshot(querySnapShot => {
            const rooms = querySnapShot.docs
                .filter(doc => doc.id.search(uid) >= 0)
                .map(d => {
                    return {
                        key: d.id,
                        ...d.data()
                    }
                })
            setConversations(rooms)
        })
        return () => {
            _unsub()
            setConversations([])
        }
    }, [])

    
    return (
        <View
            style={{ backgroundColor: '#fff', flex: 1 }}>
            <FlatList
                data={conversations}
                renderItem={({ item }) =>
                    <View style={{ justifyContent: 'center' }}>
                        <ChatIndicator
                            badge={(uid===item.senderUID)? null : !item.contact.seen}
                            sellerAvatar={(uid === item.senderUID) ? item.contact.avatar : item.senderPhotoUrl}
                            click={() => {
                               (uid==item.contact._id)?db.collection('chats').doc(item.key).update({contact:{...item.contact,seen:true}}):null
                                navigation.navigate('Messages', { seller: (uid === item.senderUID) ? item.contact._id : item.senderUID })
                            }}
                            lastMessage={item.lastMessage} sellerName={(uid === item.senderUID) ? item.contact.name : item.sender} />

                    </View>
                }
                ListEmptyComponent={() => (
                    <View
                    style={{flex: 1, alignContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: '50%'}}>
                        <ChatPageIcon />
                        <Text
                            style={{ textAlign: 'center', color: '#4898D3', fontSize: 20, fontFamily: 'serif' }}>Actuellement ,votre Messagerie est vide.</Text>
                    </View>
                )}
            />
        </View>

    )
}