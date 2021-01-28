import React from 'react'
import { ScrollView, Text, StyleSheet, Alert } from 'react-native'
import VoituresEdit from '../../../components/Edits/Vehicules/Voitures'
import MotoVelo from '../../../components/Edits/Vehicules/Moto_velos'
import Appartement from '../../../components/Edits/Immobilier/Appartement'
import Phone from '../../../components/Edits/Informatique/Phone'
import Service from '../../../components/Edits/Services/Services'
import EditeForm from '../../../components/Edits/Maison et Deco/EditeForm'


export default function EditProductPage({ route,navigation }) {
    const { item_id, cat } = route.params
    React.useEffect(() => {
        console.log(cat);
        return () => {
        }
    }, [])
    const renderComponent = ()=>{
        switch (cat) {
            case 'Voitures' || 'Location de Voiture':
                return  <VoituresEdit id={item_id} callBack={()=>navigation.goBack()} /> 
            case  'Motos & vélos' || 'Véhicules professionnels':
                return   <MotoVelo id={item_id} callBack={()=>navigation.goBack()} />
            case 'Appartements' || 'Maisons & Villas' || 'Terrains' || 'Commerces & Bureaux' || 'Location courte durée (vacances)' || 'Location long durée':
                return   <Appartement id={item_id} callBack={()=>navigation.goBack()} />
            case 'Téléphones' || 'Tablettes':
                return   <Phone id={item_id} callBack={()=>navigation.goBack()} />
            case 'Services et travaux professionnels' :
                return  <Service id={item_id} callBack={()=>navigation.goBack()}/>
            default : return <EditeForm id={item_id} callBack={()=>navigation.goBack()}/>
                
        }
    }
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}> Vous pouvez modifier seulement les données ci dessous ,si votre annonce à besoin de plus de modification, merci de procéder à la création d'une nouvelle annonce . </Text>
            {renderComponent()}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
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