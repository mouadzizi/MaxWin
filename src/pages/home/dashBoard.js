import React, { useState } from 'react';

import {
	View,
	ScrollView,
	Text,
	StatusBar,
	SafeAreaView,
	TouchableOpacity,
	InteractionManager,
	FlatList
} from 'react-native';

import { Searchbar, ProgressBar } from 'react-native-paper';
import { Ionicons } from 'react-native-vector-icons';
import { colors } from '../../style/GlobalStyle';
import Product from '../../components/Product';
import { useFocusEffect } from '@react-navigation/native';
import { db } from '../../API/firebase';

export default function DashBoard({ navigation }) {
	const image1 = require('../../../assets/produit8.png');
	const image2 = require('../../../assets/prod2.jpg');
	const image3 = require('../../../assets/produit3.png');
	const image4 = require('../../../assets/produit5.jpg');
	const image5 = require('../../../assets/produit02.jpg');
	const image6 = require('../../../assets/produit03.jpg');

	const [ ready, setReady ] = useState(false);
	const [ posts, setPosts ] = useState([]);
	useFocusEffect(
		React.useCallback(() => {
			InteractionManager.runAfterInteractions(async () => {
				await fetchItems().then((p) => {
					setPosts(p);
					setReady(true);
				});
				console.log(ready);
			});
			return () => setReady(false);
		}, [])
	);

	//SearchBar Const

	const [ searchQuery, setSearchQuery ] = useState('');
	const onChangeSearch = (query) => setSearchQuery(query);

	const action = () => {
		navigation.navigate('ProductDetails');
	};
	const fetchItems = async () => {
		let postsA = [];
		var ref = db.collection('posts');
		const allPosts = await ref.orderBy('title').get();
		allPosts.forEach((p) => {
			postsA.push({
				...p.data(),
				key: p.id
			});
		});
		return postsA;
	};
	return (
		<SafeAreaView>
			<StatusBar backgroundColor={colors.primary} />

			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={{ flex: 1, backgroundColor: colors.primary }}>
					<View style={{ flexDirection: 'row' }}>
						<Ionicons
							onPress={() => navigation.openDrawer()}
							name="md-menu"
							size={40}
							color="#fff"
							style={{ alignSelf: 'center', margin: 5, marginLeft: 10 }}
						/>

						<Searchbar
							placeholder="Rechercher"
							onChangeText={onChangeSearch}
							value={searchQuery}
							style={{ width: '83%', margin: 8 }}
						/>
					</View>
				</View>

				{/* Filtre product & Add product */}
				<View style={{ flexDirection: 'row', elevation: 25, height: 50, marginBottom: 2 }}>
					<TouchableOpacity
						delayPressIn={0}
						onPress={() => {
							navigation.navigate('AddProductCat');
						}}
						style={{
							flexDirection: 'row',
							width: '50%',
							backgroundColor: colors.second,
							justifyContent: 'center'
						}}
					>
						<Ionicons name="md-add-circle" size={35} color="#fff" style={{ alignSelf: 'center' }} />

						<Text
							style={{ textAlignVertical: 'center', marginLeft: 15, fontWeight: 'bold', color: '#fff' }}
						>
							Ajouter Produit
						</Text>
					</TouchableOpacity>

					<TouchableOpacity
						delayPressIn={0}
						onPress={() => {
							navigation.navigate('Filtre');
						}}
						style={{
							flexDirection: 'row',
							width: '50%',
							backgroundColor: colors.primary,
							justifyContent: 'center',
							borderWidth: 1.5,
							borderColor: '#F16E44',
							elevation: 3
						}}
					>
						<Ionicons name="ios-options" size={35} color="#fff" style={{ alignSelf: 'center' }} />
						<Text
							style={{ textAlignVertical: 'center', marginLeft: 15, fontWeight: 'bold', color: '#fff' }}
						>
							Filtre
						</Text>
					</TouchableOpacity>
				</View>

				{/* Products Lists */}
				{ready ? (
					<FlatList
						data={posts}
						renderItem={({ item }) => (
							<Product
								name={item.title}
								owner={item.user.owner}
								price={item.price}
								location={item.city}
								img={item.urls[0]}
								particulier={true}
								p1={item.laivraison}
								p2={item.paiement}
								click={() => navigation.navigate('ProductDetails', { id: item.key })}
							/>
						)}
					/>
				) : (
					<ProgressBar color="#4898D3" style={{ height: 8 }} indeterminate={true} visible={true} />
				)}
			</ScrollView>
		</SafeAreaView>
	);
}
