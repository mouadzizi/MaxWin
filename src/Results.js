import React from 'react'
import { StyleSheet, Text, View,TextInput,FlatList,Button } from 'react-native';
import {db} from './API/firebase'



export default function Results({route}) {
    const [aResults,setResults]= React.useState([]);

    const {selectedCategory}=route.params.filterOptions 
    React.useEffect(() => {
        filter(selectedCategory)
        return () => {  }
    }, [])

    const filter = async (category)=>{
        const res = await db.collection('posts')
        .where('category.item','==',category).get()
        res.docs.forEach(e=>{
            console.log('=====================\n',e.data().title);
        })
    } 
    return (
        <View style={styles.conatiner} >
            <FlatList
            data={aResults}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        backgroundColor:'#bdc3c7',
        alignItems:'center',
    }

})
