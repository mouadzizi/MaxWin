import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FAB} from 'react-native-paper';
import { ImageBrowser } from 'expo-image-picker-multiple';
import AsyncStorage from '@react-native-community/async-storage';

export default function ImagesBrowser({ navigation }) {

	const renderSelectedComponent = (number) => (
		<View style={styles.countBadge}>
			<Text style={styles.countBadgeText}>{number}</Text>
		</View>
	);

	const emptyStayComponent = <Text style={styles.emptyStay}>Empty =(</Text>;
	const noCameraPermissionComponent = <Text style={styles.emptyStay}>No access to camera</Text>;

	const updateHandler = (count, onSubmit) => {
		onSubmit();
	};

	const imagesCallback = (callback) => {
		callback
			.then(async (photos) => {
				const cPhotos = [];
				for (let photo of photos) {
					cPhotos.push({
						name: photo.filename,
						uri: photo.uri,
						type: 'image/jpg'
					});
				}
				savePhotos(cPhotos);
			})
			.catch((e) => console.log(e));
	};

	const savePhotos = async (images) => {
		try {
			await AsyncStorage.setItem('images', JSON.stringify(images));
		} catch (e) {
			alert(e.message);
		}
	};
	return (
		<View style={[ styles.flex, styles.container ]}>
			<ImageBrowser
				max={4}
				onChange={(count, onSubmit) => updateHandler(count, onSubmit)}
				callback={imagesCallback}
				renderSelectedComponent={(n) => renderSelectedComponent(n)}
				emptyStayComponent={emptyStayComponent}
				noCameraPermissionComponent={noCameraPermissionComponent}
			/>
			<FAB
				style={{ position: 'absolute', margin: 16, right: 0, bottom: 0, backgroundColor: '#4898D3' }}
				label='Téléchargez'
				color="#fff"
				onPress={() => navigation.goBack()} 
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	flex: {
		flex: 1
	},
	container: {
		position: 'relative'
	},
	emptyStay: {
		textAlign: 'center'
	},
	countBadge: {
		paddingHorizontal: 8.6,
		paddingVertical: 5,
		borderRadius: 50,
		position: 'absolute',
		right: 3,
		bottom: 3,
		justifyContent: 'center',
		backgroundColor: '#0580FF'
	},
	countBadgeText: {
		fontWeight: 'bold',
		alignSelf: 'center',
		padding: 'auto',
		color: '#ffffff'
	}
});
1;
