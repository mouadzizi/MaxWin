import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { GlobalStyle } from '../style/GlobalStyle';
import { FontAwesome, Entypo, MaterialCommunityIcons, MaterialIcons } from 'react-native-vector-icons';

export default function Product(props) {
	const [ chip1, setChip1 ] = useState(props.p1);
	const [ chip2, setChip2 ] = useState(props.p2);
	
	const [ chip3, setChip3 ] = useState(props.p3);
	const [ chip4, setChip4 ] = useState(props.p4);

	const [ state, setState ] = useState(props.particulier);
	return (
		<View>
			<TouchableOpacity delayPressIn={0} onPress={props.click}>
				<View
					style={
						(chip1 && chip2) || (chip3 && chip4) ? (
							{ flexDirection: 'row', backgroundColor: '#fff', height: 130 }
						) : ( (!chip1 && chip2) || (!chip2 && chip1) ) || (!chip3 && chip4) || (!chip4 && chip3)? (
							{ flexDirection: 'row', backgroundColor: '#fff', height: 110 }
						) : (
							{ flexDirection: 'row', backgroundColor: '#fff', height: 100 }
						)
					}
				>
					<View style={GlobalStyle.cardImgWrapper}>
						<Image source={{ uri: props.img }} resizeMode="contain" style={GlobalStyle.cardImg} />
					</View>

					{/* Info of the card */}
					<View style={GlobalStyle.cardInfo}>
						{/* name */}
						<Text style={GlobalStyle.cardTitle}>{props.name}</Text>

						{/* price */}
						<Text style={GlobalStyle.cardPrice}>{props.price} DHS</Text>

						{/* Product owner */}
						{state ? (
							<View style={{ flexDirection: 'row' }}>
								<Entypo name="user" color="#B9B9BB" />
								<Text style={GlobalStyle.cardOwner}>{props.owner}</Text>
							</View>
						) : (
							<View style={{ flexDirection: 'row' }}>
								<Entypo name="shop" color="#B9B9BB" />
								<Text style={GlobalStyle.cardOwner}>{props.owner}</Text>
							</View>
						)}

						{/* Location */}
						<View style={{ flexDirection: 'row', marginTop: 2 }}>
							<Entypo name="location" size={15} color="#B9B9BB" />
							<Text style={GlobalStyle.cardLocation}>{props.location}</Text>
						</View>

						{chip1 ? (
							<View style={{ flexDirection: 'row', marginTop: 2 }}>
								<MaterialCommunityIcons name="truck-fast" size={15} color="#4898D3" />
								<Text style={GlobalStyle.cardChip}> Livraison possible</Text>
							</View>
						) : null}

						{chip2 ? (
							<View style={{ flexDirection: 'row', marginTop: 2 }}>
								<FontAwesome name="money" size={15} color="#4898D3" />
								<Text style={GlobalStyle.cardChip}> Paiement à la livraison</Text>
							</View>
						) : null}

						{chip3 ? (
							<View style={{ flexDirection: 'row', marginTop: 2 }}>
								<MaterialCommunityIcons name="brightness-percent" size={15} color="#4898D3" />
								<Text style={GlobalStyle.cardChip}> Prix negociable</Text>
							</View>
						) : null}

						{chip4 ? (
							<View style={{ flexDirection: 'row', marginTop: 2 }}>
								<Entypo name="thumbs-up" size={15} color="#4898D3" />
								<Text style={GlobalStyle.cardChip}> Grade A 'Bon Condition' </Text>
							</View>
						) : null}
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
}
