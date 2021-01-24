import React from 'react'
import { View, Text } from 'react-native'
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import  NavigationSections from './NavigationSections';

export default function DashboardHeader(props) {
    return (
        <View style={{width: '100%'}}>

		<View style={{ flexDirection: 'row', paddingHorizontal: 20, backgroundColor: '#fff'}}>

			<View style={{flex: 1}}>
				<Text style={{ color: '#4898D3', fontWeight: 'bold', alignSelf: 'flex-start' }}>Top catégories</Text>
			</View>
			<View style={{ flex: 2}}>
				<MaterialCommunityIcons name="arrow-right" size={20} color="#4898D3" style={{ alignSelf: 'flex-end' }} />
            </View>
        </View>

        <NavigationSections onPress={props.click} />
        </View>
    )
}
