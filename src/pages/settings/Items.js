import React from 'react';
import { Text, SafeAreaView, Alert, TouchableOpacity, InteractionManager, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { auth, db } from '../../API/firebase';
import ProduitEdit from '../../components/ProductEdit';
export default function Items({ navigation }) {
	const [ items, setItems ] = React.useState([]);
	const [ refresh, setRefresh ] = React.useState(false);
	const [ ready, setReady ] = React.useState(false);
	useFocusEffect(
		React.useCallback(() => {
			InteractionManager.runAfterInteractions(async () => {
				console.log('animation end');
				await fetchItems().then(() => setReady(true));
			});
		}, [])
	);
	const fetchItems = async () => {
		var posts = [];
		setRefresh(true);
		await db
			.collection('posts')
			.where('user.uid', '==', auth.currentUser.uid)
			.get()
			.then((snap) => {
				snap.forEach((s) => {
					posts.push({
						title: s.data().title,
						price: s.data().price,
						key: s.id,
						pics: s.data().urls
					});
				});
				setRefresh(false);
			})
			.catch((e) => {
				console.log(e.message);
			});
		setItems(posts);
		return items;
	};
	const removeItem = async (id) => {
		await db.collection('posts').doc(id).delete().then(() => {
			console.log(id);
		});
	};
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: '#fff', padding: 20 }}>

			{ready ? (
				<FlatList
					data={items}
					renderItem={({ item }) => {
						return (
							<ProduitEdit
								callback={() =>
									removeItem(item.key).then(() => {
										fetchItems();
									})}
								item={item}
							/>
						);
					}}
					ListEmptyComponent={() => (
						<Text style={{ textAlign: 'center', fontSize: 30 }}> NO ITEM FOUND </Text>
					)}
					onRefresh={fetchItems}
					refreshing={refresh}
				/>
			) : null}

		</SafeAreaView>
	);
}
