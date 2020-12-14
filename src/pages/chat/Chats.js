import * as React from 'react';
import { FlatList, View, Text, Image, Dimensions } from 'react-native';
import ChatIndicator from '../../components/ChatIndicator';
import { db, auth } from '../../API/firebase'
import { app } from 'firebase';

export default function Chats({ navigation }) {
    const [conversations, setConversations] = React.useState([])



    const { uid } = auth.currentUser

    const { width, height } = Dimensions.get('window');
    const height_image = height * 0.6;
    const width_image = width;

    React.useEffect(() => {
        //Retrieve the reciever
        let items = []
        db.collection('chats').onSnapshot(querySnapShot => {
            querySnapShot.docs.forEach(doc => {
                if (doc.id.search(uid)>=0) {
                    doc.ref.collection('messages').orderBy('createdAt', 'desc').limit(1).onSnapshot(snap => {
                        snap.docChanges()
                            .filter(({ type }) => type === 'added')
                            .forEach(d => {
                                const data = d.doc.data()
                                items.push({
                                    ...data,
                                    key: doc.id
                                })
                            })
                            setConversations(items)
                    })
                }
            })
        })
        console.log(conversations[1]);
        return () => {
            setConversations(null)
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
                data={conversations}
                keyExtractor={(item,index)=>index.toString()}
                renderItem={({ item }) => 
                <ChatIndicator
                    click={() => navigation.navigate('Messages', { seller: (uid === item.user._id)? item.seller :item.user })}
                    lastMessage={item.text} sellerName = { (uid === item.user._id)? item.seller.owner : item.user.name}  />
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