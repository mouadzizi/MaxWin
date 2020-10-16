import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, ScrollView, TouchableOpacity, Text, Picker } from 'react-native';
import { TextInput, Checkbox } from 'react-native-paper';
import { GlobalStyle, textTheme } from '../../../style/GlobalStyle';
import { MaterialIcons } from 'react-native-vector-icons';

export default function AddProduct({ route }) {
	{
		/*Variables for inputs for standar product*/
	}
	const [ title, setTitle ] = useState('');
	const [ city, setCity ] = useState('');
	const [ price, setPrice ] = useState('');
	const [ etat, setEtat ] = useState('');
	const [ description, setDescription ] = useState('');

	{
		/*Variables for inputs for Voiture product*/
	}
	const [ marqueVoiture, setMarqueVoiture ] = useState('');
	const [ carburant, setCarburant ] = useState('');
	const [ fabrication, setFabrication ] = useState('');
	const [ puissance, setPuissance ] = useState('');
	const [ transtaction, setTransaction ] = useState('');
	{
		/*Variables for inputs for Location product*/
	}
	const [ piece, setPiece ] = useState('');
	const [ superficie, setSuperficie ] = useState('');
	{
		/*Variables for inputs for Location product*/
	}
	const [ servicetype, setServiceType ] = useState('');
	{
		/*Variables for inputs for Location product*/
	}
	const [ phoneMarque, setPhoneMarque ] = useState(false);

	{
		/*Variables for chips*/
	}
	const [ phone, setPhone ] = useState(false);
	const [ laivraison, setLaivraison ] = useState(false);
	const [ paiement, setPaiement ] = useState(false);
	{
		/*Chips Visibility*/
	}
	const [ chips, setChips ] = useState(true);
	{
		/*Category Visibility*/
	}
	const [ voiture, setVoiture ] = useState(false);
	const [ Location, setLocation ] = useState(false);
	const [ services, setServices ] = useState(false);
	const [ Telephone, setTelephone ] = useState(false);

	useEffect(() => {
		const { parent } = route.params;
		switch (parent) {
			case 'Voiture':
				setVoiture(true);
				setChips(false);
				break;
			case 'VEHICULES': 
				setChips(false)
				break;
			case 'Téléphones':
				setTelephone(true);
				break;
			case 'Tablettes':
				setTelephone(true);
				break;
			case 'Location de Voiture':
				setVoiture(true);
				setChips(false)
				break;
			case 
				'Appartements':
				setLocation(true);
				setChips(false)
				break;
			case 
				'Maisons & Villas':
				setLocation(true);
				setChips(false)
				break;
			case 
				'Terrains':
				setChips(false)
				break;
			case 'Services et travaux professionnels':
				setServices(true);
				setChips(false)
				break;
			case 'Formations & autres':
					setChips(false)
					break;
			case 'Autre':
				setLocation(false)
				break;

			default:
				break;
		}
		return () => {};
	}, []);

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
			<ScrollView style={{ padding: 20 }} showsVerticalScrollIndicator={false}>
				<View style={{ flexDirection: 'row' }}>
					<TouchableOpacity
					delayPressIn={0}>
						<MaterialIcons name="add-a-photo" color="#444" size={100} />
					</TouchableOpacity>
				</View>

				<Text style={{ color: '#4898D3', fontSize: 11 }}>
					Une bonne annonce commence par une par une bonne photo.
				</Text>

				<View style={{ flex: 1, marginTop: 20 }}>
					<TextInput
						label="Titre de votre Produit"
						mode="outlined"
						theme={textTheme}
						onChangeText={setTitle}
					/>
					<Text style={{ color: '#4898D3', fontSize: 11 }}>
						Merci d’entrer le Nom exacte de votre article
					</Text>

					<View style={{ borderWidth: 1, borderColor: '#444', borderRadius: 4, marginTop: 10 }}>
						<Picker
							selectedValue={city}
							style={{ height: 50, width: '100%' }}
							onValueChange={(itemValue, itemIndex) => setCity(itemValue)}
						>
							<Picker.Item label="Touts les villes" value="ma" />
							<Picker.Item label="Tanger" value="Tanger" />
							<Picker.Item label="Tétouan" value="Tétouan" />
							<Picker.Item label="Ouejda" value="Ouejda" />
							<Picker.Item label="Berkane" value="Berkane" />
							<Picker.Item label="Rabat" value="Rabat" />
							<Picker.Item label="Temara" value="Temara" />
							<Picker.Item label="Casablanca" value="Casablanca" />
							<Picker.Item label="El Jadida" value="El Jadida" />
							<Picker.Item label="Merakech" value="Merakech" />
						</Picker>
					</View>

					<TextInput
						label="Prix"
						mode="outlined"
						placeholder="DHS"
						theme={textTheme}
						onChangeText={setPrice}
						keyboardType='numeric'
						style={{ marginTop: 10 }}
					/>

					<Text style={{ color: '#4898D3', marginTop: 5 }}>Etat</Text>

					<View style={{ borderWidth: 1, borderColor: '#444', borderRadius: 4, marginTop: 5 }}>
						<Picker
							selectedValue={etat}
							prompt="Etat"
							style={{ height: 50, width: '100%' }}
							onValueChange={(itemValue, itemIndex) => setEtat(itemValue)}
						>
							<Picker.Item label="Neuf" value="neuf" />
							<Picker.Item label="Bon-Ocasion" value="tn" />
						</Picker>
					</View>

					{Telephone ? (
						<View>
							<Text style={{ color: '#4898D3', marginTop: 5 }}>Marque de Télephone Portable</Text>
							<View style={{ borderWidth: 1, borderColor: '#8C8C8C', borderRadius: 4, marginTop: 10 }}>
								<Picker
									selectedValue={phoneMarque}
									prompt="Marque"
									style={{ height: 50, width: '100%' }}
									onValueChange={(itemValue, itemIndex) => setPhoneMarque(itemValue)}
								>
									<Picker.Item label="Choissisez votre marque" value="rien" />
									<Picker.Item label="SAMSUNG " value="SAMSUNG " />
									<Picker.Item label="IPHONE" value="IPHONE" />
									<Picker.Item label="OPPO" value="OPPO" />
									<Picker.Item label="HUAWEI" value="HUAWEI" />
									<Picker.Item label="SONY" value="SONY" />
									<Picker.Item label="NOKIA" value="NOKIA" />
								</Picker>
							</View>
						</View>
					) : null}

					{voiture ? (
						<View>
							<Text style={{ color: '#4898D3', marginTop: 5 }}>Marque</Text>
							<View style={{ borderWidth: 1, borderColor: '#8C8C8C', borderRadius: 4, marginTop: 5 }}>
								<Picker
									selectedValue={marqueVoiture}
									prompt="Marque"
									style={{ height: 50, width: '100%' }}
									onValueChange={(itemValue, itemIndex) => setMarqueVoiture(itemValue)}
								>
									<Picker.Item label="choisissez votre marque " value="rien" />
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
								onChangeText={setFabrication}
								label="Année de fabrication"
								mode="outlined"
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

							<Text style={{ color: '#4898D3', marginTop: 5 }}>Transaction</Text>
							<View style={{ borderWidth: 1, borderColor: '#8C8C8C', borderRadius: 4, marginTop: 5 }}>
								<Picker
									mode="dropdown"
									selectedValue={transtaction}
									style={{ height: 50, width: '100%' }}
									onValueChange={(itemValue, itemIndex) => setTransaction(itemValue)}
								>
									<Picker.Item label="Mannuel " value="Mannuel" />
									<Picker.Item label="Automatique" value="Automatique" />
								</Picker>
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
									<Picker.Item label="2-3" value="2" />
									<Picker.Item label="3-4" value="3" />
									<Picker.Item label="5 et plus" value="5" />
								</Picker>
							</View>
						</View>
					) : null}

					<TextInput
						label="Description"
						mode='outlined'
						numberOfLines={5}
						maxLength={266}
						placeholder="description"
						style={{marginTop: 10}}
						theme={{ colors: { primary: '#4898D3', background: '#fff', surface: '#fff', accent : '#fff', backdrop : '#fff' } }}
						onChangeText={setDescription}
						multiline={true}
						/>

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
								<Text style={{ marginTop: 7, width: '60%' }}>Laivraison Possible</Text>

								<Checkbox
									status={laivraison ? 'checked' : 'unchecked'}
									onPress={() => {
										setLaivraison(!laivraison);
									}}
									color="#4898D3"
								/>
							</View>

							<View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 5 }}>
								<Text style={{ marginTop: 7,  width: '60%' }}>Paiement à la livraison</Text>

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

					<TouchableOpacity style={[ GlobalStyle.btn, { marginBottom: 30 } ]}>
						<Text style={GlobalStyle.signInText}>Valider l’annonce</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
