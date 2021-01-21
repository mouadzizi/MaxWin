import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { db } from '../API/firebase'
import Product from '../components/Product'
import { ProgressBar } from 'react-native-paper'


export default function Search_results({ route, navigation }) {
    const [aResults, setResults] = React.useState([]);
    const [ready, setReady] = React.useState(false)

    const { searchArr } = route.params

    React.useEffect(() => {
       
       handleSearch().then(data => {
           setResults(data)
           setReady(true)
       })

    }, [])

    const handleSearch=async()=>{
        
        const dbDocs = await db.collection('posts').where('terms','array-contains-any',searchArr).get()
          const itemsArr = dbDocs.docs.map(d=>{
                return {
                    ...d.data(),
                    key:d.id
                }
            })
            return await Promise.all(itemsArr)
    }
    return (
        <View style={{ flex: 1 }} >
            {
                !ready ?
                    <ProgressBar style={{ height: 7 }} color={'#4898D3'} indeterminate={true} visible={true} />
                    : <FlatList

                        data={aResults.sort((a, b) => b.addDate.toDate().getTime() - a.addDate.toDate().getTime())}
                        renderItem={({ item }) => (
                            <Product
                                name={item.title}
                                owner={item.user.name}
                                price={item.price}
                                location={item.city}
                                img={item.urls[0]}
                                particulier={!item.user.accountType}
                                p1={item.laivraison}
                                p2={item.paiement}
                                p3={item.negociable}
                                p4={item.bonCondition}
                                click={() => navigation.navigate('ProductDetails', { id: item.key })}
                            />
                        )}
                    />
            }


        </View>
    )
}

const styles = StyleSheet.create({})
