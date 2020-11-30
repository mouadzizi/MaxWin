import React, { useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity, InteractionManager, FlatList, Dimensions} from 'react-native';
import { Searchbar, ProgressBar } from 'react-native-paper';
import { Ionicons } from 'react-native-vector-icons';
import { colors } from '../../style/GlobalStyle';
import Product from '../../components/Product';
import { useFocusEffect } from '@react-navigation/native';
import { db } from '../../API/firebase';

export default function DashBoard({ navigation }) {
	const [ ready, setReady ] = useState(false);
	const [ posts, setPosts ] = useState([]);

	useFocusEffect(
		React.useCallback(() => {
			InteractionManager.runAfterInteractions(async () => {
				await fetchItems().then((p) => {
					setPosts(p);
					setReady(true);
				});
			});
		}, [])
	);

	//Dimensions
	const { width, height } = Dimensions.get('window');

	const height_screen = height * 0.782;

	//SearchBar Const

	const [ searchQuery, setSearchQuery ] = useState('');
	const onChangeSearch = (query) => setSearchQuery(query);

	const action = () => {
		navigation.navigate('ProductDetails');
	};
	const fetchItems = async () => {
		let postsA = [];
		var ref = db.collection('posts');
		const allPosts = await ref.orderBy('addDate').get();
		allPosts.forEach((p) => {
			postsA.push({
				...p.data(),
				key: p.id
			});
		});
		return postsA;
	};
	return (
		<View>
			<StatusBar backgroundColor={colors.primary} />

			<View style={{ flexDirection: 'row', backgroundColor: '#4898D3' }}>
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

					<Text style={{ textAlignVertical: 'center', marginLeft: 15, fontWeight: 'bold', color: '#fff' }}>
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
					<Text style={{ textAlignVertical: 'center', marginLeft: 15, fontWeight: 'bold', color: '#fff' }}>
						Filtre
					</Text>
				</TouchableOpacity>
			</View>
			
			<View>

			{/* Products Lists */}
			{ready ? (
				<View style={{ height: height_screen }}>
					<FlatList
						data={posts}
						renderItem={({ item }) => (
							<Product
								name={item.title}
								owner={item.user.owner}
								price={item.price}
								location={item.city}
								img={item.urls[0]}
								particulier={!item.user.accountType}
								p1={item.laivraison}
								p2={item.paiement}
								p3={item.negociable}
								p4={item.bonCondition}
								click={() => navigation.navigate('ProductDetails', { id: item.key })}
							/>
						)}
					/>
				</View>
			) : (
				<ProgressBar color="#4898D3" style={{ height: 8 }} indeterminate={true} visible={true} />
			)}
			
			</View>
		</View>
	);
}
