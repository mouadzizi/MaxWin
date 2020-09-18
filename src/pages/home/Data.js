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
            "Location courte durée (vacances)",
            "Autre"]
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
    <View >
        <List.Item
            titleStyle={{
                fontWeight: 'bold',
                fontSize: 19,
                color: '#4898D3'

            }}
            title={title}
            left={() => icon} />
    </View>
)
export const Item = ({ title,action }) => (
    <List.Item
        titleStyle={{
            fontSize: 18
        }}
        title={title}
        onPress={action}
    />
)
