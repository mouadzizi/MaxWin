import * as React from 'react';
import { FlatList, View, Text, Image, Dimensions } from 'react-native';
import ChatIndicator from '../../components/ChatIndicator';
import { db, auth } from '../../API/firebase'

export default function Chats({ navigation }) {
    const [conversations, setConversation] = React.useState([])

    const chatRef = db.collectionGroup('chats')
    const { uid } = auth.currentUser

    
	const { width, height } = Dimensions.get('window');
	const height_image = height * 0.6;
	const width_image = width;

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
        <View
        style={{backgroundColor: '#fff', flex: 1}}>
        <FlatList
            data={conversations}
            renderItem={({ item }) => <ChatIndicator
                click={() => navigation.navigate('Messages', { seller: item.seller })}
                lastMessage={item.text} sellerName={item.seller.owner} />}
                ListEmptyComponent={() => (
						<View>
							<Image
							source={require('../../../assets/slide2.jpg')}
							style={{ height: height_image, width: width_image, alignSelf: 'center', marginTop: 15 }}
							resizeMode={'stretch'}/>
						<Text
						style={{textAlign: 'center', color: '#4898D3', fontSize: 20, fontFamily: 'serif'}}>Actuellement ,votre Chat lsit est vide.</Text>
						</View>
					)}
        />
        </View>

    )
}