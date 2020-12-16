import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native'
import CarCategorie from '../icons/carCategorie'; 

export default function NavigationSections() {
    return (
        <ScrollView 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.container}>

            <TouchableOpacity
            style={styles.categorieItem}
            onPress={()=> Alert.alert('Voiture', 'Go to voiture categorie')}>
            <CarCategorie/>
            <Text style={styles.textStyle}>Voiture</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.categorieItem}
            onPress={()=> Alert.alert('Voiture', 'Go to voiture categorie')}>
            <CarCategorie/>
            <Text style={styles.textStyle}>Voiture</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.categorieItem}
            onPress={()=> Alert.alert('Voiture', 'Go to voiture categorie')}>
            <CarCategorie/>
            <Text style={styles.textStyle}>Voiture</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.categorieItem}
            onPress={()=> Alert.alert('Voiture', 'Go to voiture categorie')}>
            <CarCategorie/>
            <Text style={styles.textStyle}>Voiture</Text>
            </TouchableOpacity>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#fff'

    },
    categorieItem : {
        borderRadius:  30,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#F16E44',
        height: 50,
        marginHorizontal: 10,
        width: 100,
        alignContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        color: '#4898D3',
        fontWeight: '600',
    }
})