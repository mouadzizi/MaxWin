import React from 'react';
import { View, Picker} from 'react-native';
import {GlobalStyle, textTheme} from '../style/GlobalStyle';
import {TextInput} from 'react-native-paper';


export default function EditProductForm(props) {
    return (
        <View>
        
        <TextInput
            label='Titre de votre annonce'
            mode='outlined'
            value={props.title}
            theme={textTheme}
            style={{marginBottom: 15}}
            />

        <TextInput
            label='Prix de votre annonce'
            mode='outlined'
            value={props.price}
            keyboardType="numeric"
            theme={textTheme}
            style={{marginBottom: 15}}
            />
        
        <TextInput
            label='Kilometrage'
            mode='outlined'
            value={props.Kilometrage}
            keyboardType="numeric"
            theme={textTheme}
            style={{marginBottom: 15}}
            />

        <TextInput
            label='Année de fabrication'
            mode='outlined'
            value={props.yearFab}
            keyboardType="numeric"
            theme={textTheme}
            style={{marginBottom: 15}}
            />
        

        <TextInput
            label='Description de votre annonce'
            mode='outlined'
            value={props.description}
            numberOfLines={4}
			maxLength={266}
            theme={textTheme}
            multiline={true}
            style={{marginBottom: 15}}
            />

        </View>
    )
}

