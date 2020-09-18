import React from 'react'
import { View, Text, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { List } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import {FontAwesome5, Fontisto, MaterialCommunityIcons, Entypo} from 'react-native-vector-icons';

export default function FilterCat() {
    return (
     <SafeAreaView>
        <ScrollView
        style={{paddingLeft: 20, paddingRight: 20}}
        showsVerticalScrollIndicator={false}>


        <List.Item
                title="VEHICULES"
                left={props => <Fontisto
                name='car'
                size={30}
                style={{marginTop: 20}}
                />}/>

        <List.Item 
        onPress={()=>{Alert.alert('sa')}}
        title="Voiture" />

        <List.Item 
        onPress={()=>{Alert.alert('sa')}}
        title="Location de Voiture" />

        <List.Item 
        onPress={()=>{Alert.alert('sa')}}
        title="Motos & vélos" />

        <List.Item 
        onPress={()=>{Alert.alert('sa')}}
        title="Véhicules professionnels" />

        <List.Item 
        onPress={()=>{Alert.alert('sa')}}
        title="Camions" />

        <List.Item 
        onPress={()=>{Alert.alert('sa')}}
        title="Autre" />

        <List.Item
                title="INFORMATIQUE ET MULTIMEDIA"
                left={props => <Fontisto
                name='laptop'
                size={30}
                />}
                />

        <List.Item 
        onPress={()=>{Alert.alert('sa')}}
        title="Téléphones" />

        <List.Item 
        onPress={()=>{Alert.alert('sa')}}
        title="Tablettes" />

        <List.Item 
        onPress={()=>{Alert.alert('sa')}}
        title="Ordinateurs" />

        <List.Item 
        onPress={()=>{Alert.alert('sa')}}
        title="Jeux vidéo & Consoles" />

        <List.Item 
        onPress={()=>{Alert.alert('sa')}}
        title="Télévisions" />

        <List.Item 
        onPress={()=>{Alert.alert('sa')}}
        title="Appareils photo" />

        <List.Item 
        onPress={()=>{Alert.alert('sa')}}
        title="Accessoires informatique" />

        <List.Item 
        onPress={()=>{Alert.alert('sa')}}
        title="Accessoires H-TECH" />

        <List.Item 
        onPress={()=>{Alert.alert('sa')}}
        title="Autre" />


            <List.Item
                title="IMMOBILIER"
                left={props => <FontAwesome5
                name='building'
                size={30}
                />}/>
            
        
        <List.Item 
        onPress={()=>{Alert.alert('sa')}}
        title="Appartements, Maisons & Villas" />

        <List.Item 
        onPress={()=>{Alert.alert('sa')}}
        title="Terrains" />

        <List.Item 
        onPress={()=>{Alert.alert('sa')}}
        title="Commerces & Bureaux" />

        <List.Item 
        onPress={()=>{Alert.alert('sa')}}
        title="Location courte durée (vacances)" />

        <List.Item 
        onPress={()=>{Alert.alert('sa')}}
        title="Location long durée" />

        <List.Item 
        onPress={()=>{Alert.alert('sa')}}
        title="Autre" />

            
            
            <List.Item
                title="MAISON & DECO"
                left={props => <MaterialCommunityIcons
                name='sofa'
                size={30}
                />}/>

        <List.Item 
        onPress={()=>{Alert.alert('sa')}}
        title="Electroménagers" />

        <List.Item 
        onPress={()=>{Alert.alert('sa')}}
        title="Meubles et déco" />

        <List.Item 
        onPress={()=>{Alert.alert('sa')}}
        title="Autre" />


            <List.Item
                title="HABILLEMENT ET BIEN ETRE"
                left={props => <FontAwesome5
                name='tshirt'
                size={30}
                />}/>

        <List.Item 
        onPress={()=>{Alert.alert('sa')}}
        title="Vêtements Hommes" />

        <List.Item 
        onPress={()=>{Alert.alert('sa')}}
        title="Vêtements femmes" />

        <List.Item 
        onPress={()=>{Alert.alert('sa')}}
        title="Vêtements bébés & enfants" />

        <List.Item 
        onPress={()=>{Alert.alert('sa')}}
        title="Montres, Bijoux & accessoires" />

        <List.Item 
        onPress={()=>{Alert.alert('sa')}}
        title="Services & Produits de bien être" />

        <List.Item 
        onPress={()=>{Alert.alert('sa')}}
        title="Autre" />
                
            <List.Item
                title="MATERIELS & SERVICES"
                left={props => <Entypo
                name='shopping-cart'
                size={30}
                />}/>

        <List.Item 
        onPress={()=>{Alert.alert('sa')}}
        title="Matériels professionnels" />

        <List.Item 
        onPress={()=>{Alert.alert('sa')}}
        title="Services et travaux professionnels" />

        <List.Item 
        onPress={()=>{Alert.alert('sa')}}
        style={{marginBottom: 20}}
        title="Formations & autres" />

        </ScrollView>
     </SafeAreaView>
    )
}
