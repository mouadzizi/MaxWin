import React from 'react'
import { StyleSheet, Text, View, Picker, ActivityIndicator, Alert } from 'react-native';
import { TextInput, ProgressBar } from 'react-native-paper';
import { textTheme, GlobalStyle } from '../../../style/GlobalStyle';
import { db } from '../../../API/firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function EditeForm(props) {
    const [item, setItem] = React.useState({})
    const post_id = props.id
    const [ready, setReady] = React.useState(false)
    const [loading, setLoading] = React.useState(false)


    React.useEffect(() => {
        getItem().then(post => {
            setItem(post)
            setReady(true)
        })
    }, [])

    const getItem = async () => {
        const dbPost = await db.collection('posts').doc(post_id).get()
        return dbPost.data();
    }
    const update = async () => {
        setLoading(true)

        await db.collection('posts').doc(post_id).update({
            title: item.title,
            price: parseInt(item.price),
            etat: item.etat,
            description: item.description,
        }).then(() => {
            setLoading(false)
            Alert.alert('Info','Votre produite a été modifié',[
                {
                    text:'Ok',
                    onPress: props.callBack
                }
            ])
        })
    }
    return (
        <View>
            {ready ?
                <View style={styles.form} >
                    <Text> Catégorie : {item.category.item} </Text>
                    <TextInput
                        style={styles.input}
                        theme={textTheme}
                        value={item.title}
                        label='Titre'
                        mode='outlined'
                        onChangeText={(e => setItem({ ...item, title: e }))}
                    />
                    <TextInput
                        style={styles.input}
                        theme={textTheme}
                        value={item.price.toString()}
                        label='Prix'
                        mode='outlined'
                        onChangeText={(e => setItem({ ...item, price: e }))}
                    />
                    <Text style={{ color: '#4898D3', marginTop: 5 }}>Etat</Text>
                    <View style={{
                        borderWidth: 1, borderColor: '#444', borderRadius: 4, marginTop: 5, marginVertical: 10,
                    }}>
                        <Picker
                            selectedValue={item.etat}
                            prompt="Etat"
                            style={{ height: 50, width: '100%' }}
                            onValueChange={(itemValue, itemIndex) => setItem({ ...item, etat: itemValue })}
                        >
                            <Picker.Item label="Choissisez l'état de produit" value="" />
                            <Picker.Item label="Neuf" value="neuf" />
                            <Picker.Item label="Utilisé" value="Utilisé" />
                        </Picker>
                    </View>
                    <TextInput
                        style={styles.input}
                        theme={textTheme}
                        value={item.description}
                        label='Description'
                        mode='outlined'

                        multiline={true}
                        numberOfLines={4}
                        onChangeText={(e => setItem({ ...item, description: e }))}
                    />

                    <TouchableOpacity
                        onPress={() => update()} mode='contained'
                        style={GlobalStyle.BouttonStyle}>
                        <ActivityIndicator animating={loading} color='white' style={{ position: 'absolute', left: 20 }} size='large' />
                        <Text style={GlobalStyle.BouttonStyleText}>Enregistrer</Text>
                    </TouchableOpacity>
                </View> :
                <ProgressBar indeterminate={true} visible={true} />}
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        justifyContent: 'space-around',
        flex: 1
    },
    input: {
        marginVertical: 10,
    }
})
