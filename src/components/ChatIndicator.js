import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { Avatar,Divider } from 'react-native-paper';
import * as Notifications from 'expo-notifications';


export default function ChatIndicator(props) {
    const [notification, setNotification] = React.useState(true)
    const notificationListener = React.useRef();
    const responseListener = React.useRef();
    React.useEffect(() => {
        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
           setNotification(notification)
          console.log(notification.request.content.body);
        });
        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
          setNotification(response.notification)
        });
        return () => {
          //setNotification(false)
        };
      }, [])
    return (
        <View
            style={{ width: '90%', height: 80 }}>
            {props.badge?<Text style={{position:'absolute',right:0,top:'50%',backgroundColor:'red',width:20,height:20,borderRadius:10}} ></Text>:null}    
            <TouchableOpacity
                delayPressIn={0}
                style={{ padding: 20, flexDirection: 'row' }}
                onPress={props.click}>
                <Avatar.Image size={60} source={{ uri: props.sellerAvatar }} />
                <View
                    style={{ marginHorizontal: 5 }}>
                    <Text style={{ fontSize: 20, fontFamily: 'sans-serif', fontWeight: 'bold' }}>
                        {props.sellerName}
                    </Text>
                    <Text style={{ fontSize: 14, color: '#444',marginTop:9 , marginHorizontal:2 }}>
                        {props.lastMessage}
                    </Text>
                    <Text style={{ fontSize: 12 }}>
                        {props.time}
                    </Text>
                </View>
                
            </TouchableOpacity>
            
        </View>
    )
}
