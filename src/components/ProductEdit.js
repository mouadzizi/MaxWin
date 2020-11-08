import React, { useState } from 'react';
import { View, Text, Image, Alert } from 'react-native';
import { Menu, Divider, Button, Provider } from 'react-native-paper';
import { GlobalStyle } from '../style/GlobalStyle';

export default function ProductEdit({ item, callback }) {
	const logo = require('../../assets/logo.jpg');

	return (
		<View>
			<View style={{ height: 100, width: '100%', flexDirection: 'row', borderWidth: 1.5 , borderColor: '#F16E44', marginBottom: 20 }}>
				<View style={{ flex: 2 }}>
					<Image source={{ uri: item.pics[0] }} resizeMode="contain" style={GlobalStyle.cardImg} />
				</View>

				<View style={{ flex: 3 }}>
					<Text style={{ fontSize: 19, fontWeight: 'bold' }}>{item.title}</Text>
					<Text style={{ color: '#F16E44', fontSize: 18 }}>{item.price}MAD</Text>
				</View>

				<View style={{ flex: 1 }}>
					<Menu.Item
						icon="delete"
						onPress={() => {
							Alert.alert('Suprimer', 'Vous etes sure?', [
								{
									text: 'Annuler'
								},
								{
									text: 'OK',
									onPress: callback
								}
							]);
						}}
					/>
					<Menu.Item
						icon="square-edit-outline"
						onPress={() => {
							Alert.alert('Edit');
						}}
					/>
				</View>
			</View>
		</View>
	);
}
