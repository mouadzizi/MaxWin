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
        showsHorizontalScrollIndicator={false}
        style={styles.container}>

            <TouchableOpacity
            delayPressIn={0}
            style={styles.categorieItem}
            onPress={()=>props.onPress('Voitures')}>
            <CarCategorie/>
            <Text style={styles.textStyle}>Voiture</Text>
            </TouchableOpacity>

            <TouchableOpacity
            delayPressIn={0}
            style={styles.categorieItem}
            onPress={()=> props.onPress('Appartements')}>
            <Appartement/>
            <Text style={styles.textStyle}>Appartements</Text>
            </TouchableOpacity>

            <TouchableOpacity
            delayPressIn={0}
            style={styles.categorieItem}
            onPress={()=> props.onPress('Téléphones')}>
            <SmartPhone/>
            <Text style={styles.textStyle}>Téléphones</Text>
            </TouchableOpacity>

            <TouchableOpacity
            delayPressIn={0}
            style={styles.categorieItem}
            onPress={()=> props.onPress('Vêtements Homme')}>
            <ClothMen/>
            <Text style={styles.textStyle}>Vêtment Homme</Text>
            </TouchableOpacity>

            <TouchableOpacity
            delayPressIn={0}
            style={styles.categorieItem}
            onPress={()=> props.onPress('Vêtements Femmes')}>
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