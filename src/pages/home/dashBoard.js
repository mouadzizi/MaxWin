import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, InteractionManager, FlatList, Dimensions, StatusBar, ActivityIndicator,VirtualizedList } from 'react-native';
import { Searchbar, ProgressBar } from 'react-native-paper';
import { Ionicons } from 'react-native-vector-icons';
import { colors } from '../../style/GlobalStyle';
import { db } from '../../API/firebase';
import Product from '../../components/Product';
import DashoboardHeader from '../../components/DashboardHeader';

import { fitler } from './fiterData'

export default function DashBoard({ navigation }) {
	const [ready, setReady] = useState(false);
	const [posts, setPosts] = useState([]);
	const [qte, setQte] = useState(10)
	const [loading, setLoading] = useState(false)
	const [current, setcurrent] = useState('All')
	const [searchQuery, setSearchQuery] = useState("")

	useEffect(() => {
		setQte(10)
		InteractionManager.runAfterInteractions(async () => {
			await fetchItems(qte).then((p) => {
				setPosts(p);
				setReady(true);
			});
		});
	}
		, []);

	useEffect(() => {
		return () => {

		}
	}, [])

	//Dimensions
	const { width, height } = Dimensions.get('window');

	const height_screen = height * 0.782;

	//SearchBar Const

	const fetchItems = async (qte) => {
		let postsA = [];
		var ref = db.collection('posts');
		const allPosts = await ref.orderBy('addDate', 'desc').limit(qte).get();
		allPosts.forEach((p) => {
			postsA.push({
				...p.data(),
				key: p.id
			});
		});
		return postsA
	};
	const loadMore = async () => {
		setLoading(true);
		setQte(qte + 15)
		switch (current) {
			case 'All':
				await fetchItems(qte).then(p => {
					setPosts(p)
					setLoading(false)
				})
				break;
			default:
				await fitler(current, qte).then(data => {
					setPosts(data)
					setLoading(false)
				})
		}
	}
	const handleSearch = async () => {
		if (searchQuery.length === 0) {
			alert('Merci de taper quelque choise')
			return
		}
		var text = searchQuery.toLowerCase().split(' ')

		navigation.navigate('search_results', { searchArr: text })
	}
	
	return (
		<View>
			<StatusBar />
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
					onChangeText={setSearchQuery}
					onEndEditing={handleSearch}
					style={{ width: '83%', margin: 8 }}

				/>
			</View>

			{/* Filtre product & Add product */}
			<View style={{ flexDirection: 'row', elevation: 25, height: 50, marginBottom: 2, backgroundColor: colors.second, alignContent : 'space-between'}}>
				<TouchableOpacity
					delayPressIn={0}
					onPress={() => {
						 navigation.navigate('AddProductCat');
					}}
					style={{
						flexDirection: 'row',
						width: '50%',
						backgroundColor: colors.second,
						justifyContent: 'center',
						marginLeft :2
					}}
				>
					<Ionicons name="md-add-circle" size={35} color="#fff" style={{ alignSelf: 'center' }} />

					<Text style={{ textAlignVertical: 'center', marginLeft: 15, fontWeight: 'bold', color: '#fff' }}>

						Publier une annonce
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
						borderColor: colors.primary,
						borderWidth: 1,
						borderColor : colors.second,
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
						{/* <VirtualizedList 
						data={posts}
						initialNumToRender={5}
						removeClippedSubviews={true}
						ListHeaderComponent={
							<DashoboardHeader click={(category) => {
								setReady(false)
								setcurrent(category)
								switch (category) {
									case 'All':
										fetchItems(qte).then(pata => {
											setPosts(pata)
											setReady(true)
										})
										break;
									default:
										fitler(category, qte).then(data => {
											setPosts(data)
											setReady(true)
										})
										break;
								}
						}}/>}
						renderItem={({ item }) => (
							<Product
								name={item.title}
								owner={item.user.name}
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
						onEndReached={() => loadMore()}
						onEndReachedThreshold={0.01}
						 /> */}
						 
							
						
						<FlatList style={{ flexGrow: 0 }}
							initialNumToRender={3}
							removeClippedSubviews={true}
							disableVirtualization={true}
							data={posts}
							ListHeaderComponent={
								<DashoboardHeader click={(category) => {
										setReady(false)
										setcurrent(category)
										switch (category) {
											case 'All':
												fetchItems(qte).then(pata => {
													setPosts(pata)
													setReady(true)
												})
												break;
											default:
												fitler(category, qte).then(data => {
													setPosts(data)
													setReady(true)
												})
												break;
										}
								}}/>
								}
							renderItem={({ item }) => (
								<Product
									name={item.title}
									owner={item.user.name}
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
							onEndReached={() => loadMore()}
							onEndReachedThreshold={0.01}
								
						/>
					</View>
				) : (
						<ProgressBar color="#4898D3" style={{ height: 8 }} indeterminate={true} visible={true} />
					)}

			</View>
			<ActivityIndicator color="#4898D3" size={45} animating={loading} style={{position: 'absolute', alignSelf: 'center', top: '50%'}} />
		</View>
	);
}
