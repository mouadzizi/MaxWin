import React from 'react';
import { View } from 'react-native';
import { List } from 'react-native-paper';

export const DATA = [
	{
		title: 'VEHICULES',
		data: [ 
			'Voiture', 
			'Location de Voiture', 
			'Motos & vélos', 
			'Véhicules professionnels' 
		]
	},

	{
		title: 'INFORMATIQUE ET MULTIMEDIA',
		data: [
			'Téléphones',
			'Tablettes',
			'Ordinateurs',
			'Jeux vidéo & Consoles',
			'Télévisions',
			'Appareils photo',
			'Accessoires informatique',
			'Accessoires H-TECH',
		]
	},

	{
		title: 'IMMOBILIER',
		data: [
			'Appartements',
			'Maisons & Villas',
			'Terrains',
			'Commerces & Bureaux',
			'Location courte durée (vacances)',
			'Location long durée',
		]
	},
	{
		title: 'MAISON & DECO',
		data: [ 'Electroménagers', 'Meubles et déco']
	},

	{
		title: 'Vêtements et Accessoires Homme',
		data: [
			'Vêtements hommes',
			'Chaussures hommes',
			'Montres et accessoires hommes',
			'produits de bien être homme',
		]
	},

	{
		title: 'Vêtements et Accessoires Femme',
		data: [
			'Vêtements femmes',
			'Chaussures femmes',
			'Montres, Bijoux et accessoires femmes',
			'Maquillage et produits de bien être',
		]
	},

	{
		title: 'Espace Enfant',
		data: [
			'Vêtements bébés & enfants',
			'Equipments bébés & enfants',
		]
	},

	{
		title: 'MATERIELS & SERVICES',
		data: [ 
			'Matériels professionnels', 
			'Services et travaux professionnels', 
			'Formations & autres' 
		]
	}
];
export const ItemHeader = ({ title, icon }) => (
	<View style={{ backgroundColor: '#F16E44' }}>
		<List.Item
			style={{ height: 40 }}
			titleStyle={{
				fontSize: 15,
				marginLeft: 10,
				fontFamily: 'monospace',
				fontWeight: 'bold',
				color: 'white'
			}}
			title={title}
			left={() => icon}
		>
			<List.Item title={title} left={() => icon} />
		</List.Item>
	</View>
);
export const Item = ({ title, action }) => (
	<List.Item
		delayPressIn={0}
		style={{ backgroundColor: '#fff', paddingHorizontal: 5 }}
		titleStyle={{
			fontSize: 15,
			marginLeft: 20,
			fontFamily: 'serif'
		}}
		title={title}
		onPress={action}
	/>
);
