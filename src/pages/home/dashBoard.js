import React,{useEffect,useState} from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import {Searchbar} from 'react-native-paper';
import {auth} from '../../API/firebase';
import RNPickerSelect from 'react-native-picker-select';


export default function DashBoard({navigation}) {
    const [user,setUser]=useState({})
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);

    useEffect(() => {
        var unsub = auth.onAuthStateChanged(user=>{
            if(user) setUser(user)
            if(!user) navigation.replace('Splash')
        })
        return () => {
            unsub()
        }
    }, [])

    const logOut = ()=>{
        auth.signOut()
    }


    return (
        <SafeAreaView>
        <ScrollView>

        <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{margin: 5, borderRadius: 10}}
        />


        </ScrollView>
        </SafeAreaView>
    )
}
