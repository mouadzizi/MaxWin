import React, { useState } from 'react';
import { View, SafeAreaView, ScrollView, Modal, Text, TouchableOpacity, Picker } from 'react-native';
import { TextInput } from 'react-native-paper';
import { GlobalStyle, textTheme } from '../../../style/GlobalStyle';
import { AntDesign } from 'react-native-vector-icons';
import FilterCategory from '../filtre/FilterCat';

export default function Filtre() {
	
	const [ titreModal, setTittreModal ] = useState('Choisisez votre category');
	const [ etat, setEtat ] = useState('');

	{/* filter variables Standard */}
	const [ city, setCity ] = useState('');
	const [ priceMax, setPriceMax ] = useState('');
	const [ priceMin, setPriceMin ] = useState('');

	{ /* filter variables Voiture */}
	const [ marqueVoiture, setMarqueVoiture ] = useState('');
	const [ carburant, setCarburant ] = useState('');
	const [ fabrication, setFabrication ] = useState('');
	const [ puissance, setPuissance ] = useState('');
	const [ transtaction, setTransaction ] = useState('');

	{
		/* filter variables Location */
	}
	const [ Superficie, setSuperficie ] = useState('');

	{ /* filter variables phone */ }
	const [ marquePhone, setMarquePhone ] = useState('');

	{ /* filter variables phone */ }
	const [ typeService, setTypeService ] = useState('');

	{ /* Visibility */ }
	const [ modalVisible, setModalVisible ] = useState(false);
	const [ voiture, setVoiture ] = useState(false);
	const [ location, setLocation ] = useState(false);
	const [ service, setService ] = useState(false);
	const [ phone, setPhone ] = useState(false);
	const [ etatViisbility, setEtatVisibility ] = useState(true);

	const choiseAction = (item) => {
		setTittreModal(item)
		setModalVisible(false);
		switch (true) {

			case (item === 'Voiture' || item === 'Location de Voiture' || item === 'Véhicules professionnels') :
				setVoiture(true)
				break;
			
			case (item === 'Téléphones' || item === 'Tablettes') :
				setPhone(true)
				break;

			case (item === 'Appartements' || item === 'Maisons & Villas' || item === 'Location courte durée (vacances)' || item === 'Location long durée') :
				setLocation(true)
				break;
		
			case (item === 'Services et travaux professionnels') :
				setService(true)
				setEtatVisibility(false)
				break;

			default:
				setService(false);
				setLocation(false);
				setPhone(false);
				setVoiture(false);
				break;
		}
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
			<ScrollView style={{ padding: 20 }} showsVerticalScrollIndicator={false}>
				<TouchableOpacity
					style={{ borderWidth: 1, borderRadius: 5, height: 45 }}
					onPress={() => {
						setModalVisible(true);
					}}
				>
					<Text style={{ alignSelf: 'center', textAlign: 'center', marginTop: 10 }}>
						{titreModal}
					</Text>
				</TouchableOpacity>

				<Modal
					animationType="slide"
					transparent={true}
					visible={modalVisible}
					onRequestClose={() => {setModalVisible(!modalVisible);}}
				>
					<View style={GlobalStyle.modalContainer}>
						<TouchableOpacity
							style={{ alignSelf: 'flex-end', marginRight: 25 }}
							onPress={() => setModalVisible(!modalVisible)}
						>
							<AntDesign name="closesquare" color="red" size={30} />
						</TouchableOpacity>

						<View style={GlobalStyle.modalView}>
							<FilterCategory event={(item, title) => choiseAction(item, title)} />
						</View>
					</View>
				</Modal>

				<View>
					<View style={{ flex: 1, marginTop: 5 }}>
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

						<Text style={{ color: '#4898D3', marginTop: 5 }}>Prix</Text>

						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<TextInput
								label="Prix MIN"
								mode="outlined"
								placeholder="DHS"
								theme={textTheme}
								onChangeText={setPriceMin}
								keyboardType="numeric"
								style={{ width: '45%' }}
							/>

							<TextInput
								label="Prix MAX"
								mode="outlined"
								placeholder="DHS"
								theme={textTheme}
								onChangeText={setPriceMax}
								keyboardType="numeric"
								style={{ width: '45%' }}
							/>
						</View>

						{etatViisbility ? (
							<View>
								<Text style={{ color: '#4898D3', marginTop: 5 }}>Etat</Text>
								<View style={{ borderWidth: 1, borderColor: '#444', borderRadius: 4, marginTop: 5 }}>
									<Picker
										selectedValue={etat}
										prompt="Etat"
										style={{ height: 50, width: '100%' }}
										onValueChange={(itemValue, itemIndex) => setEtat(itemValue)}
									>
										<Picker.Item label="Neuf" value="neuf" />
										<Picker.Item label="Ancien" value="tn" />
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

						{location ? (
							<TextInput
								label="Superficie"
								mode="outlined"
								placeholder="(m²)"
								theme={textTheme}
								keyboardType="numeric"
								style={{ marginTop: 10 }}
								onChangeText={setSuperficie}
							/>
						) : null}

						{phone ? (
							<View>
								<Text style={{ color: '#4898D3', marginTop: 5 }}>Marque</Text>
								<View
									style={{ borderWidth: 1, borderColor: '#8C8C8C', borderRadius: 4, marginTop: 10 }}
								>
									<Picker
										selectedValue={marquePhone}
										prompt="Marque"
										style={{ height: 50, width: '100%' }}
										onValueChange={(itemValue, itemIndex) => setMarquePhone(itemValue)}
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

						{service ? (
							<View>
								<Text style={{ color: '#4898D3', marginTop: 5 }}>Type de service</Text>
								<View style={{ borderWidth: 1, borderColor: '#8C8C8C', borderRadius: 4, marginTop: 5 }}>
									<Picker
										selectedValue={typeService}
										prompt="Type de service"
										style={{ height: 50, width: '100%' }}
										onValueChange={(itemValue, itemIndex) => setTypeService(itemValue)}
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

						<TouchableOpacity style={[ GlobalStyle.btn, { marginBottom: 30 } ]}>
							<Text style={GlobalStyle.signInText}>Valider</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
