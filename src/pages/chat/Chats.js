import * as React from 'react';
import { FlatList, View, Text, Dimensions } from 'react-native';
import ChatIndicator from '../../components/ChatIndicator';
import { db, auth } from '../../API/firebase';
import ChatPageIcon from '../../icons/ChatPageIcon'

export default function Chats({ navigation }) {
    const [conversations, setConversations] = React.useState([])
    const { uid } = auth.currentUser

    const { width, height } = Dimensions.get('window');
    const height_image = height * 0.6;
    const width_image = width;
    var _unsub
    React.useEffect(() => {
        //Retrieve the reciever
         _unsub = db.collection('chats').orderBy('createdAt', 'desc').onSnapshot(querySnapShot => {
            const rooms = querySnapShot.docs
                .filter(doc => doc.data().contact1._id.search(uid) >= 0 || doc.data().contact2._id.search(uid) >= 0 )
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

    const getName = async (uid)=>{
          const user = await db.collection('users').doc(uid).get()
          return await user.data().name;
           
    } 
    return (
        <View
            style={{ backgroundColor: '#fff', flex: 1}}>
            <FlatList
            style={{flexGrow:0,padding:6}}
                data={conversations}
                renderItem={({ item }) =>
                    <View style={{ justifyContent: 'center' }}>
                        <ChatIndicator
                             badge={(uid===item.contact1._id)? null : !item.seen}
                            sellerAvatar={item.chatPic}
                            click={() => {
                                (uid==item.contact2._id)? db.collection('chats').doc(item.key).update({seen:true}):null
                                navigation.navigate('Messages', {
                                     seller: (uid === item.contact1._id) ? item.contact2 : item.contact1 ,
                                     chatId:item.key,
                                     pic:item.chatPic,
                                     postTitle:item.title   
                                    })
                                
            
                            }}
                            lastMessage={item.lastMessage} 
                            contact = { uid == item.contact1._id? item.contact2.name : item.contact1.name }
                            product={item.title}
                            />

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