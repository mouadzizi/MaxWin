import React from 'react'
import { Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native'

import CarCategorie from '../icons/carCategorie'; 
import SmartPhone from '../icons/SmartPhone';
import Appartement from '../icons/AppartementIcon';
import ClothMen from '../icons/ManClothes';
import ClothWomen from '../icons/WomenClothes';

export default function NavigationSections(props) {
 
    return (
        <ScrollView 
        horizontal={true}
        ref={ref=> sRef=ref }
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
            onPress={()=> Alert.alert('Appartements', 'Go to Appartements categorie')}>
            <Appartement/>
            <Text style={styles.textStyle}>Appartements</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.categorieItem}
            onPress={()=> Alert.alert('Téléphones', 'Go to Téléphones categorie')}>
            <SmartPhone/>
            <Text style={styles.textStyle}>Téléphones</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.categorieItem}
            onPress={()=> Alert.alert('Vêtment', 'Go to Homme vêtment  categorie')}>
            <ClothMen/>
            <Text style={styles.textStyle}>Vêtment Homme</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.categorieItem}
            onPress={()=> Alert.alert('Vêtment', 'Go to Femme vêtment categorie')}>
            <ClothWomen/>
            <Text style={styles.textStyle}>Vêtment Femme</Text>
            </TouchableOpacity>

        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    Main: {
        alignContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#fff'

    },

    container: {
        alignContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#fff',
    },
    categorieItem : {
        borderRadius:  30,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#F16E44',
        height: 65,
        padding: 3,
        alignItems: 'center',
        marginHorizontal: 10,
        width: 110,
    },
    textStyle: {
        color: '#4898D3',
        fontWeight: '600',
        textAlign: 'center',
    }
})