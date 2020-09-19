import React from 'react'
import { SectionList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5, Fontisto, Entypo } from 'react-native-vector-icons';
import { DATA, ItemHeader, Item } from '../Data'

export default function AddProductCat({navigation,route}) {
    const getIcon = (title) => {
        switch (title) {
            case 'VEHICULES':
                return <Fontisto name='car' size={30} color='#000' />
            case "INFORMATIQUE ET MULTIMEDIA":
                return <Fontisto name='laptop' size={30} color='#000' />
            case 'IMMOBILIER':
                return <FontAwesome5 name='building' size={30} color='#000' />
            case 'HABILLEMENT ET BIEN ETRE':
                return <FontAwesome5
                    name='tshirt' size={30} color='#000' />
            case 'MATERIELS & SERVICES':
                return <Entypo
                    name='shopping-cart' size={30} color='#000' />
        }
    }

    const action = (title) => {
        switch (title) {

            case 'VEHICULES':
                return navigation.push('AddCar',{ cat:title })

            case "INFORMATIQUE ET MULTIMEDIA":
                return navigation.push('AddPhone',{ cat:title })

            case 'IMMOBILIER':
                return navigation.push('AddAppartement',{ cat:title })

            case 'HABILLEMENT ET BIEN ETRE':
                return navigation.push('AddProduct',{ cat:title })

            case 'MATERIELS & SERVICES':
                return navigation.push('AddProduct',{ cat:title })
        }
    }
    
    return (
        <SafeAreaView>

            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item, section: { title } }) => <Item action={() =>  action(title)} title={item} />}
                renderSectionHeader={({ section: { title} }) => <ItemHeader icon={getIcon(title)} title={title} />
                }
            />
        </SafeAreaView>
    )
}
