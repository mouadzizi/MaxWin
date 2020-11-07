import React from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity, Alert, InteractionManager } from 'react-native';
import { Divider, ProgressBar } from 'react-native-paper';
import Swiper from 'react-native-swiper';
import { GlobalStyle } from '../../../style/GlobalStyle';
import { Entypo, MaterialCommunityIcons, FontAwesome } from 'react-native-vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { db, auth } from '../../../API/firebase';

export default function results({ navigation, route }) {
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
		<View style={{flex: 1}}>

			{canRender ? 
				
			<ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
				<View
				style={{flex: 1}}>
					
						<View style={GlobalStyle.sliderContainer}>
							<Swiper autoplay height={100} activeDotColor="#FF6347">
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
						<Text style={{fontSize: 19, fontFamily: 'Roboto'}}>{post.title}</Text>
						<Text style={[GlobalStyle.cardPrice,{ fontSize: 17, fontWeight: 'bold', fontFamily: 'Roboto', marginTop: 10 }]}>
						{post.price} DHS
						</Text>
					</View>

					
					<View style={{ flexDirection: 'row', marginTop: 10, flex: 1, paddingLeft: 20, paddingRight: 20, alignSelf: 'center' }}>

						<TouchableOpacity
							delayPressIn={0}
							onPress={() => console.log(post.urls)}
							style={{
								backgroundColor: '#4898D3',
								borderRadius: 15,
								height: 60,
								width: '47%',
								marginRight : 20,
								justifyContent: 'center',
								alignItems: 'center'
							}}
						>
						<Text style={{ color: '#fff', fontSize: 18, fontFamily: 'serif' }}>Discuter</Text>
						</TouchableOpacity>

						<TouchableOpacity
							delayPressIn={0}
							onPress={() => Alert.alert('+212.6 .26.617 611')}
							style={{
								borderColor: '#FF6347',
								borderWidth : 1.5,
								height: 60,
								borderRadius: 15,
								width: '47%',
								marginLeft : 20,
								justifyContent: 'center',
								alignItems: 'center'
							}}
						>
						<Text style={{ color: '#FF6347', fontSize: 18, fontFamily: 'serif' }}>Appeler</Text>
						</TouchableOpacity>
					</View>

					{ (post.laivraison || post.paiement  ) ?

					<View> 
					<Text style={{ color: '#4898D3', marginLeft: 20, fontSize: 20, marginTop: 10 }}>Services</Text>

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

					{ (post.negociable || post.bonCondition  )

					? 
					<View> 
					<Text style={{ color: '#4898D3', marginLeft: 20, fontSize: 22, marginTop: 10 }}>Services</Text>

					<View style={GlobalStyle.infoContainer}>

					{post.bonCondition ? 


						<View style={{ flexDirection: 'row', marginTop: 5 }}>		
								<Entypo name="thumbs-up" size={25} color="#4898D3" />
								<Text style={{ color: '#4898D3', fontSize: 17, fontFamily: 'serif' }}> Très Bon Condition
								</Text>
						</View>

					: null}
					{post.negociable ? 
						<View style={{ flexDirection: 'row', marginTop: 5}}>
						<MaterialCommunityIcons name="brightness-percent" size={25} color="#4898D3" />
								<Text style={{ color: '#4898D3', fontSize: 17, fontFamily: 'serif' }}> Prix negociable
								</Text>
							</View>	
					: null }
						
						
					</View>
					</View>
					: null }

					<Text style={{ color: '#4898D3', marginLeft: 20, fontSize: 22, marginTop: 10 }}>Description</Text>

					<View>
						<Text style={{ fontFamily: 'sans-serif' }}>{post.description}</Text>
					</View>


				<View
				style={{backgroundColor: '#fff', padding: 20, marginTop: 10}}>
				<Text style={{ color: '#4898D3',fontSize: 22, fontWeight: 'bold'}}>Details</Text>
				
				<View
				style={{flexDirection: 'row'}}>
				<Text
				style={{fontSize: 15}}>Marque de Voiture</Text>
				</View>

			

				</View>

				</View>
				</ScrollView>
			
			:

				<View>
					<ProgressBar color="#4898D3" indeterminate={true} visible={true} style={{ height: 10 }} />
				</View>
			}
			</View>

	);
}
