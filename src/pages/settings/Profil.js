import React, { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Text, ScrollView, SafeAreaView, View, TouchableOpacity } from 'react-native';
import { Avatar, Divider, FAB, TextInput, ProgressBar } from 'react-native-paper';
import { GlobalStyle, textTheme } from '../../style/GlobalStyle';
import {MaterialCommunityIcons, FontAwesome} from 'react-native-vector-icons'
import { auth, db } from '../../API/firebase';

export default function Profil() {
	const [ edit, setEdit ] = useState(false);
	const [ about, setAbout ] = useState(' ');
	const [ location, setLocation ] = useState(' ');
	const [ email, setEmail ] = useState(' ');
	const [ phone, setPhone ] = useState(' ');
	const [ name, setName ] = useState(' ');
	const [ loading, setLoading ] = useState(false);

	
	const [ isPro, setIsPro] = useState(true);

	
	var userRef = null;

	useFocusEffect(
		useCallback(() => {
			userRef = db.collection('users').doc(auth.currentUser.uid);
			setEmail(auth.email);
			setLoading(true);

			if (!edit) {
				userRef
					.get()
					.then((doc) => {
						loadInfo(doc.data());
						setLoading(false);
					})
					.catch((err) => console.log(err.message));
			}
		}, [])
	);

	const action = () => {
		setEdit(!edit);
		if (edit) {
			setLoading(true);
			db
				.collection('users')
				.doc(auth.currentUser.uid)
				.update({
					aboutMe: about,
					name: name,
					phone: phone,
					location: location
				})
				.then(() => {
					setEdit(!edit);
					setLoading(false);
				});
		}
	};

	const updateUserInfo = async () => {
		await userRef.update({
			aboutMe: about,
			name: name
		});
	};

	const loadInfo = (doc) => {
		setAbout(doc.aboutMe);
		setLocation(doc.location);
		setPhone(doc.phone);
		setName(doc.name);
		setEmail(doc.email);
		setIsPro(doc.accountType);
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: '#fff', padding: 10 }}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<ProgressBar color="#4898D3" indeterminate={true} visible={loading} />

				<View
				style={{ flex: 1, flexDirection: 'row'}}>

				<View
					style={{ flex: 1, justifyContent: 'center', alignSelf: 'center', marginTop: 15, marginBottom: 15, alignItems: 'center' }}
				>
					<TouchableOpacity>
						<Avatar.Image size={110} source={{ uri: auth.currentUser.photoURL }} />
					</TouchableOpacity>
				</View>
				
				<View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center', marginTop: 15, marginBottom: 15 }}>

			
						<Text style={GlobalStyle.usernameProfil}>{auth.currentUser.displayName}</Text>
					
					{isPro ? 
					
					<View style={{flexDirection: 'row', alignSelf: 'center'}}>
					<MaterialCommunityIcons name="store" size={25} color='#F16E44'/>
					<Text style={{ fontWeight: 'bold', color: '#F16E44',textAlign: 'center', marginLeft: 5 }}>Professionel</Text>
					</View>

					
					: 
					<View
					style={{flexDirection: 'row', alignSelf: 'center'}}>
					<FontAwesome name="user-o" color='#F16E44' size={20} />
					<Text style={{ fontWeight: 'bold', color: '#F16E44',textAlign: 'center', marginLeft: 5 }}>Particulier</Text>
					</View>}
					

				</View>

				</View>

				<Divider />

				

				<Divider />
						
				<View style={{ flex: 1, marginTop: 15, marginBottom: 15, marginStart: 15}}>
		
					<TextInput
                        theme={textTheme}
						mode="outlined"
						value={name}
						label="Nom d'utilisateur"
						onChangeText={(e) => setName(e)}
						editable={edit}
						style={{ height: 50, width: '95%' }}	
						left={ <TextInput.Icon name="gender-male-female" color='#4898D3'/> }
					/>
				<Divider style={{marginVertical: 10}}/>
					<TextInput
                        theme={textTheme}
						mode="outlined"
						keyboardType='numeric'
						value={phone}
						label='Téléphone'
						onChangeText={(e) => setPhone(e)}
						editable={edit}
						style={{ height: 50, width: '95%' }}
						left={<TextInput.Icon name='cellphone' color='#4898D3'/>}
					/>
					
				<Divider style={{marginVertical: 10}}/>
					<TextInput
                        theme={textTheme}
						mode="outlined"
						value={location}
						label="Adresse"
						onChangeText={(e) => setLocation(e)}
						editable={edit}
						style={{ height: 50, width: '95%' }}
						left={ <TextInput.Icon name="city-variant" color='#4898D3'/> }
					/>
				
				<Divider style={{marginVertical: 10}}/>

					<TextInput
                        theme={textTheme}
						mode="outlined"
						value={email}
						label="Email"
						onChangeText={(e) => setEmail(e)}
						editable={edit}
						style={{ height: 50, width: '95%' }}
						left={ <TextInput.Icon name="email-check-outline" color='#4898D3'/> }
						/>
				
				<Divider style={{marginVertical: 10}}/>

					<TextInput
                        theme={textTheme}
						mode="outlined"
						label="A propo"
						value={about}
						multiline={true}
						maxLength={150}
						onChangeText={(e) => setAbout(e)}
						editable={edit}
						style={{ width: '95%' }}
					/>
				</View>




			</ScrollView>

			<FAB
				style={{ position: 'absolute', margin: 16, right: 0, bottom: 0, backgroundColor: '#4898D3' }}
				label={edit ? 'enregistrer' : 'modifier'}
				color="#fff"
				onPress={() => action()}
			/>
		</SafeAreaView>
	);
}
