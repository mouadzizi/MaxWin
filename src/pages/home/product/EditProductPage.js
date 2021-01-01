import React from 'react'
import { ScrollView, Text, StyleSheet, Alert } from 'react-native'
import EditForm from '../../../components/EditProductForm'
import {Button} from 'react-native-paper';

export default function EditProductPage() {
    return (
        <ScrollView style={styles.container}>
        <Text style={styles.title}>vous pouvez modifier votre annonce ici</Text>
 
            <EditForm title="titre de annonce" price="250000" Kilometrage="12000" yearFab="2005" Superficielle="500" description="petite dicription ur le produit"/>
            <Button
				mode='contained'
				uppercase={false}
				onPress={() => Alert.alert('update')}
            	color='#4898D3'
				dark={true}>
			Valider le changement
			</Button>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container : {
        paddingHorizontal: 20,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 15,
        marginVertical: 10,
        fontWeight: 'bold',
        color: '#453254',
        textAlign: 'center'
    },
    Buttontyle: { 
        alignSelf: 'center',
        marginVertical: 20,
        width: '100%',
        height: 40,
        borderRadius: 25,
        marginBottom: 30
    },
							
});