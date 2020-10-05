import React  from 'react'
import {View} from 'react-native'
import { List } from 'react-native-paper';


export  const DATA = [
    
    {
        title: 'VEHICULES',
        data: ["Voiture", "Location de Voiture", "Motos & vélos", "Véhicules professionnels", "Autre"]
    },

    {
        title: "INFORMATIQUE ET MULTIMEDIA",
        data: ['Téléphones', 'Tablettes', 'Ordinateurs', 'Jeux vidéo & Consoles', 'Télévisions', 'Appareils photo', 'Accessoires informatique', 'Accessoires H-TECH', 'Autre']
    },

    {
        title: 'IMMOBILIER',
        data: ["Appartements", "Maisons & Villas",
            "Terrains",
            "Commerces & Bureaux",
            "Location courte durée (vacances)", "Location long durée",
            "Autre"]
    },
    {
        title: "MAISON & DECO",
        data: ["Electroménagers",
            "Meubles et déco",
            "Autres"]
    },

    {
        title: 'HABILLEMENT ET BIEN ETRE',
        data: ["Vêtements Hommes",
            "Vêtements femmes",
            "Vêtements bébés & enfants",
            "Montres, Bijoux & accessoires",
            "Services & Produits de bien être",
            "Autre",]
    },
    
    {
        title: "MATERIELS & SERVICES",
        data: ["Matériels professionnels",
            "Services et travaux professionnels",
            "Formations & autres"]
    }

]
export const ItemHeader = ({ title,icon }) => (

    <View 
    style={{backgroundColor: '#F16E44'}}>

        
        <List.Item
        style={{height: 40}}
        titleStyle={{
            fontSize: 15,
            marginLeft: 10,
            fontFamily: 'monospace',
            fontWeight : 'bold',
            color: 'white'
        }}
        title={title}
        left={() => icon}>
        
        <List.Item
            title={title}
            left={() => icon} />

        </List.Item>

    </View>

    
)
export const Item = ({ title,action }) => (
    <List.Item
        titleStyle={{
            fontSize: 15,
            marginLeft: 20,
            fontFamily: 'serif'
        }}
        title={title}
        onPress={action}
    />
)
