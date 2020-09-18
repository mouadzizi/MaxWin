import React from 'react'
import { Alert, SectionList,} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5, Fontisto, Entypo } from 'react-native-vector-icons';
import {DATA,ItemHeader,Item} from '../Data'

export default function FilterCat() {

    const getIcon = (title) => {
        switch (title) {
            case 'VEHICULES':
                return <Fontisto name='car' size={35} color='#4898D3' />
            case "INFORMATIQUE ET MULTIMEDIA":
                return <Fontisto name='laptop' size={35} color='#4898D3' />
            case 'IMMOBILIER':
                return <FontAwesome5 name='building' size={35} color='#4898D3' />
            case 'HABILLEMENT ET BIEN ETRE':
                return <FontAwesome5
                    name='tshirt' size={35} color='#4898D3' />
            case 'MATERIELS & SERVICES':
                return <Entypo
                    name='shopping-cart' size={35} color='#4898D3' />
        }
    }
    const action = (title) => {
        Alert.alert('Hint', 'redirect to ' + title)
    }
    return (
        <SafeAreaView>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item,section:{title} }) => <Item action={()=>action(title)} title={item} />}
                renderSectionHeader={({ section: { title } }) => <ItemHeader icon={getIcon(title)} title={title} />
                }
            />
        </SafeAreaView>
    )
}
