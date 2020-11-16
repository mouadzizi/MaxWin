import React, {useState} from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity, Alert, InteractionManager, Dimensions, Share, Button } from 'react-native';
import { ProgressBar, Divider } from 'react-native-paper';
import Swiper from 'react-native-swiper';
import { GlobalStyle } from '../../../style/GlobalStyle';
import { MaterialCommunityIcons, FontAwesome, Feather } from 'react-native-vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { db } from '../../../API/firebase';

export default function ProductDetails({ navigation, route }) {

	const [ canRender, setRender ] = React.useState();
	const [ post, setPost ] = React.useState('');

	const _SlideHeight = Dimensions.get('window').height * 0.40;
	const _SlideWidth = Dimensions.get('window').width * 0.95;


	useFocusEffect(
		React.useCallback(() => {
			const { id } = route.params;
			InteractionManager.runAfterInteractions(async () => {
				await db.collection('posts').doc(id).get().then((p) => {
					setPost(p.data());
					setRender(true);
				});
			});

			return () => {}
		}, [])
	);

	

	return (
		
		<View style={{flex: 1}}>

			{canRender ? 
				
			<ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
					
						<View style={{width: _SlideWidth, marginTop: 10, justifyContent: 'center', alignSelf: 'center', borderRadius: 8, height: _SlideHeight}}>
							<Swiper autoplay activeDotColor="#FF6347">

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
						<Text style={{fontSize: 25, fontFamily: 'serif'}}>{post.title}</Text>
						<Text style={{color: '#FF6347', fontSize: 25, fontFamily: 'serif', marginTop: 10 }}>
						{post.price} DHS
						</Text>
					</View>

					
					<View style={{ flexDirection: 'row', marginTop: 10, flex: 1, paddingLeft: 20, paddingRight: 20, alignSelf: 'center' }}>

						<TouchableOpacity
							delayPressIn={0}
							onPress={() => navigation.navigate('Messages',{ seller:post.user }) }
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
							onPress={() => Alert.alert("Information", "Nous vous informons que l'annonceur préfère le contact par Chat Merci de votre compréhension.")}
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

					<View style={GlobalStyle.infoContainer}>
					
					<Text style={{ color: '#4898D3',fontSize: 20}}>Services Disponibles</Text>
					<Divider/>

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

					<View style={GlobalStyle.infoContainer}>
					
					<Text style={{ color: '#4898D3',fontSize: 20}}>Services Disponibles</Text>
					<Divider/>

					
					{post.negociable ? 
						<View style={{ flexDirection: 'row', marginTop: 5}}>
						<MaterialCommunityIcons name="brightness-percent" size={25} color="#4898D3" />
								<Text style={{ color: '#4898D3', fontSize: 17, fontFamily: 'serif' }}> Prix négociable </Text>
							</View>	
					: null }
					
					{post.bonCondition ? 


						<View style={{ flexDirection: 'row', marginTop: 5 }}>		
								<Feather name="thumbs-up" size={25} color="#4898D3" />
								<Text style={{ color: '#4898D3', fontSize: 17, fontFamily: 'serif' }}> En bonne état
								</Text>
						</View>

					: null}
						
					</View>
					</View>
					: null }


					<View style={GlobalStyle.infoContainer}>
					
					<Text style={{ color: '#4898D3',fontSize: 20}}>Description</Text>
					<Divider/>
						<Text style={{ fontFamily: 'sans-serif', textAlign: 'justify', marginRight: 10, fontSize: 17 }}>{post.description}</Text>
					</View>


				<View style={GlobalStyle.infoContainer}>
				<Text style={{ color: '#4898D3',fontSize: 20}}>Details</Text>
				
				{post.city ? 
				<View>
				<Divider/>
					<View
					style={{flexDirection: 'row', marginTop: 5, marginBottom : 5}}>
					<Text
					style={{fontSize: 17, color: '#000', width: '60%'}}>Categorie</Text>
			
					<Text
					style={{fontSize: 17, color: '#767676', width: '40%'}}>{post.category.item}</Text>
					</View>
				
				</View>
				:null
				}
				
				{post.city ? 
				<View>
				<Divider/>
					<View
					style={{flexDirection: 'row', marginTop: 5, marginBottom : 5}}>
					<Text
					style={{fontSize: 17, color: '#000', width: '60%'}}>Ville</Text>
			
					<Text
					style={{fontSize: 17, color: '#767676', width: '35%'}}>{post.city}</Text>
					</View>
				
				</View>
				:null
				}

				{post.etat ? 
				<View>
				<Divider/>
					<View
					style={{flexDirection: 'row', marginTop: 5, marginBottom : 5}}>
					<Text
					style={{fontSize: 17, color: '#000', width: '60%'}}>Etat de Produit</Text>
			
					<Text
					style={{fontSize: 17, color: '#767676', width: '35%'}}>{post.etat}</Text>
					</View>
				
				</View>
				:null
				}

				{/*Voiture Section*/}

				{post.marqueVoiture ? 
				<View>
				<Divider/>
					<View
					style={{flexDirection: 'row', marginTop: 5, marginBottom : 5}}>
					<Text
					style={{fontSize: 17, color: '#000', width: '60%'}}>Marque de Voiture</Text>
			
					<Text
					style={{fontSize: 17, color: '#767676', width: '35%'}}>{post.marqueVoiture}</Text>
					</View>
				
				</View>
				:null
				}

				{post.carburant ? 
				<View>
				<Divider/>
					<View
					style={{flexDirection: 'row', marginTop: 5, marginBottom : 5}}>
					<Text
					style={{fontSize: 17, color: '#000', width: '60%'}}>Carburant</Text>
			
					<Text
					style={{fontSize: 17, color: '#767676', width: '35%'}}>{post.carburant}</Text>
					</View>
				
				</View>
				:null
				}

				{post.fabrication ? 
				<View>
				<Divider/>
					<View
					style={{flexDirection: 'row', marginTop: 5, marginBottom : 5}}>
					<Text
					style={{fontSize: 17, color: '#000', width: '60%'}}>Année de Fabrication</Text>
			
					<Text
					style={{fontSize: 17, color: '#767676', width: '35%'}}>{post.fabrication}</Text>
					</View>
				
				</View>
				:null
				}

				{post.kilometrage ? 
				<View>
				<Divider/>
					<View
					style={{flexDirection: 'row', marginTop: 5, marginBottom : 5}}>
					<Text
					style={{fontSize: 17, color: '#000', width: '60%'}}>Kilometrage</Text>
			
					<Text
					style={{fontSize: 17, color: '#767676', width: '35%'}}>{post.kilometrage} Km</Text>
					</View>
				
				</View>
				:null
				}

				{post.transtaction ? 
				<View>
				<Divider/>
					<View
					style={{flexDirection: 'row', marginTop: 5, marginBottom : 5}}>
					<Text
					style={{fontSize: 17, color: '#000', width: '60%'}}>Boîte de vitesses</Text>
			
					<Text
					style={{fontSize: 17, color: '#767676', width: '35%'}}>{post.transtaction}</Text>
					</View>
				
				</View>
				:null
				}

				{post.puissance ? 
				<View>
				<Divider/>
					<View
					style={{flexDirection: 'row', marginTop: 5, marginBottom : 5}}>
					<Text
					style={{fontSize: 17, color: '#000', width: '60%'}}>Puissance Fiscale</Text>
			
					<Text
					style={{fontSize: 17, color: '#767676', width: '35%'}}>{post.puissance}</Text>
					</View>
				
				</View>
				:null
				}

				{/*Phone Section*/}

				{post.phoneMarque ? 
				<View>
				<Divider/>
					<View
					style={{flexDirection: 'row', marginTop: 5, marginBottom : 5}}>
					<Text
					style={{fontSize: 17, color: '#000', width: '60%'}}>Marque de Télephone</Text>
			
					<Text
					style={{fontSize: 17, color: '#767676', width: '35%'}}>{post.phoneMarque}</Text>
					</View>
				
				</View>
				:null
				}

				{/*Immobilier Section*/}

				{post.superficie ? 
				<View>
				<Divider/>
					<View
					style={{flexDirection: 'row', marginTop: 5, marginBottom : 5}}>
					<Text
					style={{fontSize: 17, color: '#000', width: '60%'}}>Superficie</Text>
			
					<Text
					style={{fontSize: 17, color: '#767676', width: '35%'}}>{post.superficie}</Text>
					</View>
				
				</View>
				:null
				}

				{post.piece ? 
				<View>
				<Divider/>
					<View
					style={{flexDirection: 'row', marginTop: 5, marginBottom : 5}}>
					<Text
					style={{fontSize: 17, color: '#000', width: '60%'}}>Nombre de piece</Text>
			
					<Text
					style={{fontSize: 17, color: '#767676', width: '35%'}}>{post.piece}</Text>
					</View>
				
				</View>
				:null
				}

				{/*Service Section*/}

				{post.servicetype ? 
				<View>
				<Divider/>
					<View
					style={{flexDirection: 'row', marginTop: 5, marginBottom : 5}}>
					<Text
					style={{fontSize: 17, color: '#000', width: '60%'}}>Type de service</Text>
			
					<Text
					style={{fontSize: 17, color: '#767676', width: '35%'}}>{post.servicetype}</Text>
					</View>
				
				</View>
				:null
				}
				</View>

				<View style={GlobalStyle.infoContainer}>
				<Text style={{ color: '#4898D3',fontSize: 20}}>Équipement</Text>

				{post.carSpecefications.jantes ? 
				<View>
				<Divider/>
					<View
					style={{flexDirection: 'row', marginTop: 5, marginBottom : 5}}>

					<MaterialCommunityIcons
					name="pinwheel-outline"
					size={35}
					color='#4898D3'
					/>
					<Text
					style={{fontSize: 17, color: '#767676', marginStart: 80, alignSelf: 'center'}}>Jantes aluminium</Text>
					</View>
				
				</View>
				:null
				}

				{post.carSpecefications.gps ? 
				<View>
				<Divider/>
					<View
					style={{flexDirection: 'row', marginTop: 5, marginBottom : 5}}>

					<MaterialCommunityIcons
					name="google-maps"
					size={35}
					color='#4898D3'
					/>
					<Text
					style={{fontSize: 17, color: '#767676', marginStart: 80, alignSelf: 'center'}}>Système de navigation</Text>
					</View>
				
				</View>
				:null
				}

				{post.carSpecefications.abs ? 
				<View>
				<Divider/>
					<View
					style={{flexDirection: 'row', marginTop: 5, marginBottom : 5}}>

					<MaterialCommunityIcons
					name="car-brake-abs"
					size={35}
					color='#4898D3'
					/>
					<Text
					style={{fontSize: 17, color: '#767676', marginStart: 80, alignSelf: 'center'}}>ABS</Text>
					</View>
				
				</View>
				:null
				}

				{post.carSpecefications.radar ? 
				<View>
				<Divider/>
					<View
					style={{flexDirection: 'row', marginTop: 5, marginBottom : 5}}>

					<MaterialCommunityIcons
					name="car-connected"
					size={35}
					color='#4898D3'
					/>
					<Text
					style={{fontSize: 17, color: '#767676', marginStart: 80, alignSelf: 'center'}}>Radar de recul</Text>
					</View>
				
				</View>
				:null
				}

				{post.carSpecefications.vitre ? 
				<View>
				<Divider/>
					<View
					style={{flexDirection: 'row', marginTop: 5, marginBottom : 5}}>

					<MaterialCommunityIcons
					name="car-connected"
					size={35}
					color='#4898D3'
					/>
					<Text
					style={{fontSize: 17, color: '#767676', marginStart: 80, alignSelf: 'center'}}>Vitre électriques</Text>
					</View>
				
				</View>
				:null
				}

				{post.carSpecefications.airbags ? 
				<View>
				<Divider/>
					<View
					style={{flexDirection: 'row', marginTop: 5, marginBottom : 5}}>

					<MaterialCommunityIcons
					name="car-connected"
					size={35}
					color='#4898D3'
					/>
					<Text
					style={{fontSize: 17, color: '#767676', marginStart: 75, alignSelf: 'center'}}>Airbags</Text>
					</View>
				
				</View>
				:null
				}

				{post.transtaction ? 
				<View>
				<Divider/>
					<View
					style={{flexDirection: 'row', marginTop: 5, marginBottom : 5}}>

					<MaterialCommunityIcons
					name="car-shift-pattern"
					size={35}
					color='#4898D3'
					/>
					<Text
					style={{fontSize: 17, color: '#767676', marginStart: 75, alignSelf: 'center'}}>Transaction : {post.transtaction}</Text>
					</View>
				
				</View>
				:null
				}


				</View>

				

				<View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10, flex: 1, paddingLeft: 20, paddingRight: 20, alignSelf: 'center' }}>

						<TouchableOpacity
							delayPressIn={0}
							onPress={() => console.log(post.urls)}
							style={{
								backgroundColor: '#FF6347',
								borderRadius: 15,
								height: 60,
								width: '33%',
								justifyContent: 'center',
								alignItems: 'center'
							}}
						>
						<Text style={{ color: '#fff', fontSize: 18, fontFamily: 'serif' }}>Discuter</Text>
						</TouchableOpacity>

						<TouchableOpacity
							delayPressIn={0}
							onPress={() => Alert.alert("Information", "Nous vous informons que l'annonceur préfère le contact par Chat Merci de votre compréhension.")}
							style={{
								borderColor: '#4898D3',
								borderWidth : 1.5,
								height: 60,
								borderRadius: 15,
								width: '33%',
								marginLeft : 10,
								justifyContent: 'center',
								alignItems: 'center'
							}}
						>
						<Text style={{ color: '#4898D3', fontSize: 18, fontFamily: 'serif' }}>Appeler</Text>
						</TouchableOpacity>

						<TouchableOpacity
							delayPressIn={0}
							onPress={() => Alert.alert('Partagée')}
							style={{
								backgroundColor: '#4898D3',
								height: 60,
								borderRadius: 15,
								width: '33%',
								marginLeft : 10,
								justifyContent: 'center',
								alignItems: 'center'
							}}
						>
						
						<Feather name="share-2" size={25} color="#fff" />
						</TouchableOpacity>
					</View>

				</ScrollView>
			
			:

					<ProgressBar color="#4898D3" indeterminate={true} visible={true} style={{ height: 10 }} />
			}
			</View>

	);
}
