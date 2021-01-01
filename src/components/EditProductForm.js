import React from 'react';
import {View} from 'react-native';
import {textTheme} from '../style/GlobalStyle';
import {TextInput} from 'react-native-paper';


export default function EditProductForm(props) {
    return (
        <View>
        
        {props.title ?
            <TextInput
            label='Titre de votre annonce'
            mode='outlined'
            value={props.title}
            theme={textTheme}
            style={{marginBottom: 15}}
            />
            : null
        }

        {props.price ?
            <TextInput
            label='Prix de votre annonce'
            mode='outlined'
            value={props.price}
            keyboardType="numeric"
            theme={textTheme}
            style={{marginBottom: 15}}
            />
            : null
        }

        {props.Kilometrage ?
            <TextInput
            label='Prix de votre annonce'
            mode='outlined'
            value={props.Kilometrage}
            keyboardType="numeric"
            theme={textTheme}
            style={{marginBottom: 15}}
            />
            : null
        }

        {props.yearFab ?
            <TextInput
            label='Prix de votre annonce'
            mode='outlined'
            value={props.yearFab}
            keyboardType="numeric"
            theme={textTheme}
            style={{marginBottom: 15}}
            />
            : null
        }

        {props.Superficielle ?
            <TextInput
            label='Prix de votre annonce'
            mode='outlined'
            value={props.Superficielle}
            keyboardType="numeric"
            theme={textTheme}
            style={{marginBottom: 15}}
            />
            : null
        }

        {props.description ?
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
            : null
        }
        

        

        

        </View>
    )
}

