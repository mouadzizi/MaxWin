import React, { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import {
	View,
	SafeAreaView,
	ScrollView,
	TouchableOpacity,
	Text,
	TouchableHighlight,
	Picker,
	Image,
	Dimensions,
	InteractionManager,
	ActivityIndicator
} from 'react-native';

import { TextInput, Checkbox } from 'react-native-paper';
import { GlobalStyle, textTheme } from '../../../style/GlobalStyle';
import { MaterialIcons, MaterialCommunityIcons } from 'react-native-vector-icons';
import { addProduct } from './APIFunctions';
import { auth, db, st } from '../../../API/firebase';
import AsyncStorage from '@react-native-community/async-storage';

export default function AddProduct({ route, navigation }) {

	//Variables for inputs for standar product
	const [ title, setTitle ] = useState('');
	const [ city, setCity ] = useState('Touts les villes');
	const [ price, setPrice ] = useState('');
	const [ description, setDescription ] = useState('');

	//Variables for inputs for Voiture
	const [ marqueVoiture, setMarqueVoiture ] = useState('');
	const [ kilometrage, setKilometrage ] = useState('');
	const [ carburant, setCarburant ] = useState('');
	const [ fabrication, setFabrication ] = useState('');
	const [ puissance, setPuissance ] = useState('');
	const [ transtaction, setTransaction ] = useState('');

	
	const [ voitureChips, setVoitureChips ] = useState(false);

	//Variables for inputs for Location
	const [ piece, setPiece ] = useState('');
	const [ superficie, setSuperficie ] = useState('');

	//Variables for inputs for Services
	const [ servicetype, setServiceType ] = useState('');

	//Variables for inputs for Phone
	const [ phoneMarque, setPhoneMarque ] = useState(false);

	//Visibility for State
	const [ etat, setEtat ] = useState('');

	//Variables for chips
	const [ phone, setPhone ] = useState(false);
	const [ laivraison, setLaivraison ] = useState(false);
	const [ paiement, setPaiement ] = useState(false);
	const [negociable, setNegociable] = useState(false);
	const [bonCondition, setBonCondition] = useState(false);

	
	//Variables for equipment Voiture
	const [ jantes, setJanets ] = useState(false);
	const [ airbags, setAirbags ] = useState(false);
	const [ clima, setClima ] = useState(false);
	const [ abs, setAbs ] = useState(false);
	const [ vitre, setVitre ] = useState(false);
	const [ radar, setRadar ] = useState(false);
	const [ gps, setGps ] = useState(false);

	//components Visibility
	const [ chips, setChips ] = useState(true);
	const [ etatVisible, setEtatVisible ] = useState(true);

	//Category Visibility
	const [ voiture, setVoiture ] = useState(false);
	const [ Location, setLocation ] = useState(false);
	const [ services, setServices ] = useState(false);
	const [ Telephone, setTelephone ] = useState(false);
	const [ loading, setLoading ] = useState(false);

	const [ canRender, setCanRender ] = useState(false);

	//Dimensions
	const { width, height } = Dimensions.get('window');

	const height_image = height * 0.115;
	const width_image = width * 0.2;

	//Get pictures once the screen focused

	const [ images, setImages ] = useState([]);
	const [ user, setUser ] = useState(null);

	useFocusEffect(
		React.useCallback(() => {
			InteractionManager.runAfterInteractions(async () => {
				await getPhotos().then((obj) => {
					let imgs = JSON.parse(obj);
					setImages(imgs);
				});
				await getUser().then((u) => {
					setUser(u);
					setCanRender(true);
				});
			});
			return () => {
				console.log('exite');
				AsyncStorage.clear();
				setImages([]);
			};
		}, [])
	);

	const getPhotos = async () => {
		return await AsyncStorage.getItem('images');
	};
	const getUser = async () => {
		let aUser = null;
		await db.collection('users').doc(auth.currentUser.uid).get().then((snap) => {
			aUser = snap.data();
		});
		return aUser;
	};
	useEffect(() => {
		const { parent } = route.params;
		switch (true) {
			case parent.title == 'VEHICULES' && (parent.item == 'Voitures' || parent.item == 'Location de Voiture'):
				setVoitureChips(true);
				setVoiture(true);
				setChips(false);
				navigation.setOptions({ title: 'Ajouter votre Vehicule' });
				break;

			case parent.title == 'VEHICULES':
				navigation.setOptions({ title: 'Ajouter votre Vehicule' });
				setChips(false);
				break;

			case parent.title == 'INFORMATIQUE ET ELECTRONIQUE' &&
				(parent.item == 'Téléphones' || parent.item == 'Tablettes'):
				setTelephone(true);
				break;

			case parent.title == 'IMMOBILIER' &&
				(parent.item == 'Appartements' ||
					parent.item == 'Maisons & Villas' ||
					parent.item == 'Location courte durée (vacances)' ||
					parent.item == 'Commerces & Bureaux' ||
					parent.item == 'Location long durée'):
				setChips(false);
				setEtatVisible(false);
				setLocation(true);
				setVoitureChips(true);
				navigation.setOptions({ title: 'Ajouter votre Immobilier' });
				break;

			case parent.title == 'IMMOBILIER':
				setChips(false);
				setEtatVisible(false);
				navigation.setOptions({ title: 'Ajouter Immobilier' });
				break;

			case parent.item == 'Matériels professionnels':
				setServices(true);
				navigation.setOptions({ title: 'Matériels professionnels' });
				break;

			case parent.item == 'Services et travaux professionnels':
				setChips(false);
				setEtatVisible(false);
				setServices(true);
				navigation.setOptions({ title: 'Services et travaux' });
				break;

			case parent.item == 'Formations & autres':
				setChips(false);
				setEtatVisible(false);
				navigation.setOptions({ title: 'Formations & autres' });
				break;

			default:
				break;
		}
		return () => {};
	}, []);

	const upload = () => {
		setLoading(true);
		var item = {
			title,
			city,
			price,
			etat,
			description,
			marqueVoiture,
			kilometrage,
			carburant,
			fabrication,
			puissance,
			transtaction,
			piece,
			superficie,
			servicetype,
			phoneMarque,
			phone,
			laivraison,
			paiement,
			negociable,
			bonCondition,
			Telephone,
			carSpecefications:{
				gps,
				radar,
				vitre,
				abs,
				clima,
				airbags,
				jantes
			},
			category: route.params.parent,
			user: {
				uid: user.uid,
				accountType: user.accountType,
				owner: user.name
			}
		};
		
		if (images.length === 0) {
			Alert.alert('enter at least one images');
		} else {
			uploadPics(images).then((imagesUrls) => {
				addProduct(item, imagesUrls).then(() => {
					setLoading(false);
					navigation.navigate('Dasboard');
				});
			});
		}
	};

	const uploadPics = async (pics) => {
		let urls = [];
		for (let p of pics) {
			const response = await fetch(p.uri);
			const blob = await response.blob();
			var ref = st.ref().child('images/' + auth.currentUser.uid + '/' + p.name);
			await ref.put(blob).then(async (snapShoot) => {
				await snapShoot.ref.getDownloadURL().then((link) => {
					urls.push(link);
				});
			});
		}

		return urls;
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
			{canRender ? (
				<ScrollView style={{ padding: 20 }} showsVerticalScrollIndicator={false}>
					{images ? (
						<View style={{ flexDirection: 'row', flex: 1 }}>
							{images.map((img, index) => {
								return (
									<View key={index} style={{ width: '23%', marginRight: 8}}>
									<TouchableHighlight 
									onPress={() => navigation.navigate('image')}
									style={{ borderWidth: 1, borderColor: '#444'}}>
										<Image
											source={{ uri: img.uri }}
											style={{ height: height_image, width: width_image }}
											resizeMode={'stretch'}
										/>
									</TouchableHighlight>
									
									<MaterialCommunityIcons
										name='camera-plus-outline'
										color='#444'
										size={30}
										style={{ position: 'absolute', bottom: 2, right: 5 }}
										/>
									</View>
								);
							})}
						</View>
					) : (
						<View>
							
							<View style={{ flexDirection: 'row' }}>
								<TouchableOpacity onPress={() => navigation.navigate('image')} delayPressIn={0}>
									<MaterialIcons name="add-a-photo" color="#444" size={100} />
								</TouchableOpacity>
							</View>
							
							<Text style={{ color: 'red', fontSize: 11}}>Obligatoir *</Text>
							<Text style={{ color: '#4898D3', fontSize: 11 }}>
								Une bonne annonce commence par une bonne photo.
							</Text>
						</View>
					)}

					

					<View style={{ flex: 1, marginTop: 20 }}>

					<Text style={{ color: 'red', fontSize: 11}}>Obligatoir *</Text>
					<Text style={{ color: '#4898D3', fontSize: 11 }}>
							Merci d’entrer le Nom exacte de votre article
						</Text>
						<TextInput
							label="Titre de votre Produit"
							mode="outlined"
							maxLength={25}
							multiline={false}
							theme={textTheme}
							onChangeText={setTitle}
						/>
						

						
					<Text style={{ color: 'red', fontSize: 11, marginTop: 10, marginBottom: 5}}>Obligatoir *</Text>
						<View style={{ borderWidth: 1, borderColor: '#444', borderRadius: 4}}>
							<Picker
								selectedValue={city}
								style={{ height: 50, width: '100%'}}
								onValueChange={(itemValue, itemIndex) => setCity(itemValue)}
							>
								<Picker.Item label="Toutes les villes" value="Toutes les villes" />
								<Picker.Item label="Agadir" value="Agadir" />
								<Picker.Item label="Asilah" value="Asilah" />
								<Picker.Item label="Asfi" value="Asfi" />
								<Picker.Item label="Azrou" value="Arzou" />
								<Picker.Item label="Beni mellal" value="Beni mellal" />
								<Picker.Item label="Berkane" value="Berkane" />
								<Picker.Item label="Casablanca" value="Casablanca" />
								<Picker.Item label="Dakhla" value="Dakhla" />
								<Picker.Item label="El hociema" value="El hociema" />
								<Picker.Item label="El jedida" value="El jedida" />
								<Picker.Item label="Errachidia" value="Errachidia" />
								<Picker.Item label="Fes" value="Fes" />
								<Picker.Item label="Ifrane" value="Ifrane" />
								<Picker.Item label="Kheribga" value="Kheribga" />
								<Picker.Item label="Kser lekebir" value="Kser lekebir" />
								<Picker.Item label="Khenifra" value="Khenifra" />
								<Picker.Item label="Kenitra" value="Kenitra" />
								<Picker.Item label="Larache" value="Larache" />
								<Picker.Item label="Laâyoune" value="Laâyoune" />
								<Picker.Item label="Meknes" value="Meknes" />
								<Picker.Item label="Merakech" value="Merakech" />
								<Picker.Item label="Mohamadia" value="Mohamadia" />
								<Picker.Item label="Nador" value="Nador" />
								<Picker.Item label="Ouejda" value="Ouejda" />
								<Picker.Item label="Rabat" value="Rabat" />
								<Picker.Item label="Rissani" value="Rissani" />
								<Picker.Item label="Sale" value="Sale" />
								<Picker.Item label="Settat" value="Settat" />
								<Picker.Item label="Tanger" value="Tanger" />
								<Picker.Item label="Tétouan" value="Tétouan" />
								<Picker.Item label="Temara" value="Temara" />
							</Picker>
						</View>

						
					<Text style={{ color: 'red', fontSize: 11, marginTop: 10}}>Obligatoir *</Text>
						<TextInput
							label="Prix"
							mode="outlined"
							maxLength={7}
							multiline={false}
							placeholder="DHS"
							theme={textTheme}
							onChangeText={setPrice}
							keyboardType="numeric"
						/>

						{etatVisible ? (
							<View>
								<Text style={{ color: '#4898D3', marginTop: 5 }}>Etat</Text>

								<View style={{ borderWidth: 1, borderColor: '#444', borderRadius: 4, marginTop: 5 }}>
									<Picker
										selectedValue={etat}
										prompt="Etat"
										style={{ height: 50, width: '100%' }}
										onValueChange={(itemValue, itemIndex) => setEtat(itemValue)}
									>	
										<Picker.Item label="Neuf/Utilisé" value="Neuf/Utilisé" />
										<Picker.Item label="Neuf" value="neuf" />
										<Picker.Item label="Utilisé" value="Utilisé" />
									</Picker>
								</View>
							</View>
						) : null}

						{Telephone ? (
							<View>
								<Text style={{ color: '#4898D3', marginTop: 5 }}>Marque</Text>
								
								<View
									style={{ borderWidth: 1, borderColor: '#8C8C8C', borderRadius: 4 }}
								>
									<Picker
										selectedValue={phoneMarque}
										prompt="Marque"
										style={{ height: 50, width: '100%' }}
										onValueChange={(itemValue, itemIndex) => setPhoneMarque(itemValue)}
									>
										<Picker.Item label="Choissisez votre marque" value="rien" />
										<Picker.Item label="Samsung " value="Samsung " />
										<Picker.Item label="Iphone" value="Iphone" />
										<Picker.Item label="Xiaomi" value="Xiaomi" />
										<Picker.Item label="OPPO" value="OPPO" />
										<Picker.Item label="Huawei" value="Huawei" />
										<Picker.Item label="Sony" value="Sony" />
										<Picker.Item label="Nokia" value="Nokia" />
										<Picker.Item label="Autre" value="Autre" />
									</Picker>
								</View>
							</View>
						) : null}

						{voiture ? (
							<View>
							
								<Text style={{ color: '#4898D3', marginTop: 10 }}>Marque</Text>
								
								<View style={{ borderWidth: 1, borderColor: '#8C8C8C', borderRadius: 4}}>
									<Picker
										selectedValue={marqueVoiture}
										prompt="Marque"
										style={{ height: 50, width: '100%' }}
										onValueChange={(itemValue, itemIndex) => setMarqueVoiture(itemValue)}
									>
										<Picker.Item label="Choisissez votre marque " value="rien" />
										<Picker.Item label="AUDI" value="AUDI" />
										<Picker.Item label="BMW" value="BMW" />
										<Picker.Item label="CHEVROLET" value="CHEVROLET" />
										<Picker.Item label="CITROEN" value="CITROEN" />
										<Picker.Item label="DACIA" value="DACIA" />
										<Picker.Item label="FIAT" value="FIAT" />
										<Picker.Item label="FORD" value="FORD" />
										<Picker.Item label="HYUNDAI" value="HYUNDAI" />
										<Picker.Item label="INFINITI" value="INFINITI" />
										<Picker.Item label="JAGUAR" value="JAGUAR" />
										<Picker.Item label="KIA " value="KIA" />
										<Picker.Item label="LANDROVER" value="LANDROVER" />
										<Picker.Item label="MASERATI" value="MASERATI" />
										<Picker.Item label="MAZDA" value="MAZDA" />
										<Picker.Item label="MERCEDES" value="MERCEDES" />
										<Picker.Item label="MINI" value="MINI" />
										<Picker.Item label="MITSUBISHI" value="MITSUBISHI" />
										<Picker.Item label="NISSAN" value="NISSAN" />
										<Picker.Item label="OPEL" value="OPEL" />
										<Picker.Item label="PEUGEOT" value="PEUGEOT" />
										<Picker.Item label="PORSCHE" value="PORSCHE" />
										<Picker.Item label="RENAULT" value="RENAULT" />
										<Picker.Item label="ROVER" value="ROVER" />
										<Picker.Item label="SEAT" value="SEAT" />
										<Picker.Item label="SKODA" value="SKODA" />
										<Picker.Item label="SUZUKI" value="SUZUKI" />
										<Picker.Item label="TOYOTA" value="TOYOTA" />
										<Picker.Item label="VOLSWAGEN" value="VOLSWAGEN" />
										<Picker.Item label="VOLVO" value="VOLVO" />
										<Picker.Item label="AUTRE" value="AUTRE" />
									</Picker>
								</View>

								
								<TextInput
									onChangeText={setKilometrage}
									label="Kilometrage"
									mode="outlined"
									maxLength={7}
									placeholder="12.000 Km"
									keyboardType="numeric"
									theme={textTheme}
									style={{ marginTop: 10 }}
								/>

								<TextInput
									onChangeText={setFabrication}
									label="Année de fabrication"
									mode="outlined"
									maxLength={4}
									placeholder="exemple: 2005"
									keyboardType="numeric"
									theme={textTheme}
									style={{ marginTop: 10 }}
								/>

								<Text style={{ color: '#4898D3', marginTop: 5 }}>Carburant</Text>
								<View style={{ borderWidth: 1, borderColor: '#8C8C8C', borderRadius: 4, marginTop: 5 }}>
									<Picker
										selectedValue={carburant}
										style={{ height: 50, width: '100%' }}
										prompt="Carburant"
										onValueChange={(itemValue, itemIndex) => setCarburant(itemValue)}
									>
										<Picker.Item label="Diesel " value="Diesel" />
										<Picker.Item label="Essence" value="Essence" />
										<Picker.Item label="Hybrid" value="Hybrid" />
										<Picker.Item label="Electrique" value="Electrique" />
									</Picker>
								</View>

								<Text style={{ color: '#4898D3', marginTop: 5 }}>Puissance fiscale</Text>
								<View style={{ borderWidth: 1, borderColor: '#444', borderRadius: 4, marginTop: 5 }}>
									<Picker
										selectedValue={puissance}
										prompt="Puissance Fiscale"
										style={{ height: 50, width: '100%' }}
										onValueChange={(itemValue, itemIndex) => setPuissance(itemValue)}
									>
										<Picker.Item label="4CH" value="4ch" />
										<Picker.Item label="5CH" value="5ch" />
										<Picker.Item label="6CH" value="6ch" />
										<Picker.Item label="7CH" value="7ch" />
										<Picker.Item label="8CH" value="8ch" />
										<Picker.Item label="9CH" value="9ch" />
										<Picker.Item label="10CH" value="10ch" />
										<Picker.Item label="Plus que 10CH" value="+10ch" />
									</Picker>
								</View>

								<Text style={{ color: '#4898D3', marginTop: 5 }}>Boîte de vitesses</Text>
								
								<View style={{ borderWidth: 1, borderColor: '#8C8C8C', borderRadius: 4, marginTop: 5 }}>
									<Picker
										mode="dropdown"
										selectedValue={transtaction}
										style={{ height: 50, width: '100%' }}
										onValueChange={(itemValue, itemIndex) => setTransaction(itemValue)}
									>
										<Picker.Item label="Manuelle" value="Manuelle" />
										<Picker.Item label="Automatique" value="Automatique" />
									</Picker>
								</View>

								<Text style={{ color: '#4898D3', marginTop: 5 }}>Équipements</Text>
								<View style={{ borderWidth: 1, borderColor: '#8C8C8C', borderRadius: 4, marginTop: 5 }}>
									

								<View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 5 }}>
									<Text style={{ marginTop: 7, width: '60%' }}>Jantes Aluminium</Text>
									<Checkbox
										status={jantes ? 'checked' : 'unchecked'}
										onPress={() => {
											setJanets(!jantes);
										}}
										color="#4898D3"
									/>
								</View>
								<View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 5 }}>
									<Text style={{ marginTop: 7, width: '60%' }}>Airbags</Text>
									<Checkbox
										status={airbags ? 'checked' : 'unchecked'}
										onPress={() => {
											setAirbags(!airbags);
										}}
										color="#4898D3"
									/>
								</View>
								<View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 5 }}>
									<Text style={{ marginTop: 7, width: '60%' }}>Climatisation</Text>
									<Checkbox
										status={clima ? 'checked' : 'unchecked'}
										onPress={() => {
											setClima(!clima);
										}}
										color="#4898D3"
									/>
								</View>
								<View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 5 }}>
									<Text style={{ marginTop: 7, width: '60%' }}>Vitres Électriques</Text>
									<Checkbox
										status={vitre ? 'checked' : 'unchecked'}
										onPress={() => {
											setVitre(!vitre);
										}}
										color="#4898D3"
									/>
								</View>
								<View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 5 }}>
									<Text style={{ marginTop: 7, width: '60%' }}>Radar De Recul</Text>
									<Checkbox
										status={radar ? 'checked' : 'unchecked'}
										onPress={() => {
											setRadar(!radar);
										}}
										color="#4898D3"
									/>
								</View>

								<View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 5 }}>
									<Text style={{ marginTop: 7, width: '60%' }}>GPS</Text>
									<Checkbox
										status={gps ? 'checked' : 'unchecked'}
										onPress={() => {
											setGps(!gps);
										}}
										color="#4898D3"
									/>
								</View>

								<View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 5 }}>
									<Text style={{ marginTop: 7, width: '60%' }}>ABS</Text>
									<Checkbox
										status={abs ? 'checked' : 'unchecked'}
										onPress={() => {
											setAbs(!abs);
										}}
										color="#4898D3"
									/>
								</View>
									
									
								</View>
							</View>
						) : null}

						{services ? (
							<View>
								<Text style={{ color: '#4898D3', marginTop: 5 }}>Type de service</Text>
								<View style={{ borderWidth: 1, borderColor: '#8C8C8C', borderRadius: 4, marginTop: 5 }}>
									<Picker
										selectedValue={servicetype}
										prompt="Type de service"
										style={{ height: 50, width: '100%' }}
										onValueChange={(itemValue, itemIndex) => setServiceType(itemValue)}
									>
										<Picker.Item label="Alarme & sécurité" value="Alarme & sécurité" />
										<Picker.Item label="Electricien " value="Electricien" />
										<Picker.Item label="Jardinier" value="Jardinier" />
										<Picker.Item label="Informatique " value="informatique" />
										<Picker.Item label="Maçonnerie" value="Maçonnerie" />
										<Picker.Item label="Menuisier" value="Menuisier" />
										<Picker.Item label="Peinture" value="Peinture" />
										<Picker.Item label="Tapisserie" value="Tapisserie" />
										<Picker.Item label="Plombier" value="Plombier" />
										<Picker.Item label="Soudeur" value="Soudeur" />
										<Picker.Item label="Vitre" value="Vitre" />
										<Picker.Item label="AUTRES" value="AUTRES" />
									</Picker>
								</View>
							</View>
						) : null}

						{Location ? (
							<View>
								<TextInput
									label="Superficie"
									mode="outlined"
									placeholder="(m²)"
									theme={textTheme}
									keyboardType="numeric"
									style={{ marginTop: 10 }}
									onChangeText={setSuperficie}
								/>

								<Text style={{ color: '#4898D3', marginTop: 5 }}>Nombre de pièces</Text>
								<View style={{ borderWidth: 1, borderColor: '#444', borderRadius: 4, marginTop: 10 }}>
									<Picker
										mode="dropdown"
										selectedValue={piece}
										style={{ height: 50, width: '100%' }}
										onValueChange={(itemValue, itemIndex) => setPiece(itemValue)}
									>
										<Picker.Item label="1" value="1" />
										<Picker.Item label="2" value="2" />
										<Picker.Item label="3" value="3" />
										<Picker.Item label="4 et plus" value="5" />
									</Picker>
								</View>
							</View>
						) : null}
						
						<Text style={{ color: 'red', fontSize: 11, marginTop: 10}}>Obligatoir *</Text>
						<TextInput
							label="Description"
							mode="outlined"
							theme={textTheme}
							numberOfLines={4}
							maxLength={266}
							placeholder="description"
							onChangeText={setDescription}
							multiline={true}
						/>

					
					<Text style={{ color: '#4898D3', marginTop: 5 }}>Options</Text>	
					<View style={{ borderWidth: 1, borderColor: '#8C8C8C', borderRadius: 4, marginTop: 5 }}>

						<View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 5 }}>
							<Text style={{ marginTop: 7, width: '60%' }}>Afficher le N° de Téléphone</Text>
							<Checkbox
								status={phone ? 'checked' : 'unchecked'}
								onPress={() => {
									setPhone(!phone);
								}}
								color="#4898D3"
							/>
						</View>

						{chips ? (
							<View>
								<View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 5 }}>
									<Text style={{ marginTop: 7, width: '60%' }}>Livraison Possible</Text>

									<Checkbox
										status={laivraison ? 'checked' : 'unchecked'}
										onPress={() => {
											setLaivraison(!laivraison);
										}}
										color="#4898D3"
									/>
								</View>

								<View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 5 }}>
									<Text style={{ marginTop: 7, width: '60%' }}>Paiement à la livraison</Text>

									<Checkbox
										status={paiement ? 'checked' : 'unchecked'}
										onPress={() => {
											setPaiement(!paiement);
										}}
										color="#4898D3"
									/>
								</View>
							</View>
						) : null}

						{voitureChips ? (
							<View>
								<View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 5 }}>
									<Text style={{ marginTop: 7, width: '60%' }}>En bonne état</Text>

									<Checkbox
										status={bonCondition ? 'checked' : 'unchecked'}
										onPress={() => {
											setBonCondition(!bonCondition);
										}}
										color="#4898D3"
									/>
								</View>

								<View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 5 }}>
									<Text style={{ marginTop: 7, width: '60%' }}>Prix négociable</Text>

									<Checkbox
										status={negociable ? 'checked' : 'unchecked'}
										onPress={() => {
											setNegociable(!negociable);
										}}
										color="#4898D3"
									/>
								</View>
							</View>
						) : null}

						</View>

						<TouchableOpacity
							onPress={() => upload()}
							delayPressIn={10}
							style={[ GlobalStyle.btn, { marginBottom: 30, flexDirection: 'row' } ]}
						>
							<ActivityIndicator color="white" size="large" animating={loading} />
							<Text style={GlobalStyle.signInText}>Valider l’annonce</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			) : null}
		</SafeAreaView>
	);
}
