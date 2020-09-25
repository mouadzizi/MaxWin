import React from 'react'
import { SectionList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5, MaterialCommunityIcons, Ionicons} from 'react-native-vector-icons';
import { DATA, ItemHeader, Item } from '../Data'

export default function AddProductCat({navigation,route}) {
    const getIcon = (title) => {
        switch (title) {
            case 'VEHICULES':
                return <FontAwesome5 name='car' size={30} color='#fff' />
            case "INFORMATIQUE ET MULTIMEDIA":
                return <MaterialCommunityIcons name='desktop-mac-dashboard' size={30} color='#fff' />
            case 'IMMOBILIER':
                return <FontAwesome5 name='building' size={25} color='#fff' />
            case 'HABILLEMENT ET BIEN ETRE':
                return <Ionicons
                    name='ios-shirt' size={35} color='#fff' />
            case 'MAISON & DECO':
                return <MaterialCommunityIcons
                    name='lamp' size={30} color='#fff' />
            case 'MATERIELS & SERVICES':
                return <FontAwesome5
                    name='hammer' size={25} color='#fff' />
            
        }
    }

    const action = (title) => {
        
        switch (title) {

            case 'Voiture':
                return navigation.push('AddCar',{ cat:title })

            case 'Location de Voiture':
                return navigation.push('AddCar',{ cat:title })

            case "Téléphones":
                return navigation.push('AddPhone',{ cat:title })

            case "Tablettes":
                return navigation.push('AddPhone',{ cat:title })

            case 'Appartements':
                return navigation.push('AddAppartement',{ cat:title })
            
            case 'Maisons & Villas':
                return navigation.push('AddAppartement',{ cat:title })

            case 'Location courte durée (vacances)':
                return navigation.push('AddAppartement',{ cat:title })

            case 'Location long durée':
                return navigation.push('AddAppartement',{ cat:title })
            
            case 'Services et travaux professionnels':
                return navigation.push('AddServices',{ cat:title })
                

            default :
                return navigation.push('AddProduct',{ cat:title })

        }
    }
    
    return (
        <SafeAreaView>

            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Item action={() =>  action(item)} title={item} />}
                renderSectionHeader={({ section: { title} }) => <ItemHeader icon={getIcon(title)} title={title} />
                }
            />
        </SafeAreaView>
    )
}
