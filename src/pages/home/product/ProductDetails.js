import React from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity, Alert, InteractionManager } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import Swiper from 'react-native-swiper';
import { GlobalStyle } from '../../../style/GlobalStyle';
import { Entypo, MaterialCommunityIcons, FontAwesome } from 'react-native-vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { db, auth } from '../../../API/firebase';

export default function ProductDetails({ navigation, route }) {
	const [ canRender, setRender ] = React.useState();
	const [ post, setPost ] = React.useState('');

	useFocusEffect(
		React.useCallback(() => {
			const { id } = route.params;
			InteractionManager.runAfterInteractions(async () => {
				await db.collection('posts').doc(id).get().then((p) => {
					setPost(p.data());
					setRender(true);
				});
			});

			return () => setRender(false);
		}, [])
	);

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			{canRender ? (
				<View>
					<View style={GlobalStyle.sliderContainer}>
						<Swiper autoplay height={200} activeDotColor="#FF6347">
							{post ? (
								post.urls.map((img, index) => {
									return (
										<View key={index} style={GlobalStyle.slide}>
											<Image
												key={index}
												source={{ uri: img }}
												resizeMode="contain"
												style={GlobalStyle.sliderImage}
											/>
										</View>
									);
								})
							) : null}
						</Swiper>
					</View>

					<View style={GlobalStyle.infoContainer}>
						<Text style={GlobalStyle.h1}>{post.title}</Text>

						<View style={{ flexDirection: 'row', marginTop: 10 }}>
							<View style={{ flexDirection: 'row', width: '50%' }}>
								<Entypo 
								name="user" color="#4898D3" size={20} style={{ marginRight: 5 }} 
								/>
								<Text style={{ color: '#4898D3', fontSize: 17, fontFamily: 'serif' }}>
									{' '}
									{post.user.owner}
								</Text>
							</View>

							<Text
								style={[
									GlobalStyle.cardPrice,
									{ fontSize: 18, width: '50%', fontWeight: '700', fontFamily: 'Roboto' }
								]}
							>
								{post.price} DH
							</Text>
						</View>

						<View style={{ flexDirection: 'row', width: '50%', marginTop: 10 }}>
								<Entypo 
								name="location" color="#4898D3" size={20} style={{ marginRight: 5 }} 
								/>
								<Text style={{ color: '#4898D3', fontSize: 17, fontFamily: 'serif' }}>
									{' '}
									{post.city}
								</Text>
						</View>
						
						
					</View>

					{ (post.laivraison || post.paiement  )

					? 
					<View> 
					<Text style={{ color: '#4898D3', marginLeft: 20 }}>Services</Text>

					<View style={GlobalStyle.infoContainer}>

					{post.laivraison ? 
					

						<View style={{ flexDirection: 'row', marginTop: 5 }}>
								<MaterialCommunityIcons 
								name="truck-fast" color="#4898D3" size={20} style={{ marginRight: 5 }} 
								/>
								<Text style={{ color: '#4898D3', fontSize: 17, fontFamily: 'serif' }}>
								Livraison possible
								</Text>
						</View>

					: null}
					
					{post.paiement ? 
						<View style={{ flexDirection: 'row', marginTop: 5}}>
								<FontAwesome 
								name="money" color="#4898D3" size={20} style={{ marginRight: 5 }} 
								/>
								<Text style={{ color: '#4898D3', fontSize: 17, fontFamily: 'serif' }}>
								Paiement à la livraison
								</Text>
							</View>	
					: null }
						
						
					</View>
					</View>
					: null }
					<Text style={{ color: '#4898D3', marginLeft: 20 }}>Contact</Text>

					<View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10, flex: 1 }}>
						<TouchableOpacity
							delayPressIn={0}
							onPress={() => console.log(post.urls)}
							style={{
								backgroundColor: '#4898D3',
								flex: 1,
								height: 75,
								justifyContent: 'center',
								alignItems: 'center'
							}}
						>
							<Entypo name="chat" color="#fff" size={40} />
							<Text style={{ color: '#fff', fontSize: 18, fontFamily: 'serif' }}>Discuter</Text>
						</TouchableOpacity>

						<TouchableOpacity
							delayPressIn={0}
							onPress={() => Alert.alert('+212.6 .26.617 611')}
							style={{
								backgroundColor: '#FF6347',
								flex: 1,
								height: 75,
								justifyContent: 'center',
								alignItems: 'center'
							}}
						>
							<Entypo name="phone" color="#fff" size={40} />
							<Text style={{ color: '#fff', fontSize: 18, fontFamily: 'serif' }}>Appeler</Text>
						</TouchableOpacity>
					</View>

					<Text style={{ color: '#4898D3', marginLeft: 20 }}>Description</Text>

					<View style={GlobalStyle.infoContainer}>
						<Text style={{ fontFamily: 'sans-serif' }}>{post.description}</Text>
					</View>


				<View>
				<Text style={{ color: '#4898D3', marginLeft: 20 }}>Caractéristiques Produit</Text>

				<View
				style={GlobalStyle.infoContainer}>
				<Text>Voiture</Text>
				<Text>marque de Voiture : {post.marqueVoiture}</Text>
				<Text>kilometrage : {post.kilometrage}</Text>
				<Text>année de fabrication : {post.fabrication}</Text>
				<Text>Imobilier</Text>
				<Text>superficie immobilier: {post.superficie} m^2</Text>
				<Text>Nombre de Piece : {post.piece}</Text>
				<Text>Telephone</Text>
				<Text>Marque de Telephone : {post.phoneMarque}</Text>
				
				<Text>Nombre de piece</Text>

				</View>
				</View>

				</View>
			) : (
				<ProgressBar color="#4898D3" indeterminate={true} visible={true} style={{ height: 10 }} />
			)}
		</ScrollView>
	);
}
