import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { ImageBrowser } from 'expo-image-picker-multiple';

export default function ImagesBrowser({ navigation }) {
	const [ images, setImages ] = useState([]);
	const [ imagesUrls, setImagesUrls ] = useState([]);

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
						uri: photo.uri,
						name: photo.filename,
						type: 'image/jpg'
					});
				}
				setImages(cPhotos);
			})
			.catch((e) => console.log(e));
	};

	return (
		<View style={[ styles.flex, styles.container ]}>
			<Button title="Upload" onPress={() => navigation.navigate('AddProduct', { photos: images })} />
			<ImageBrowser
				max={4}
				onChange={(count, onSubmit) => updateHandler(count, onSubmit)}
				callback={imagesCallback}
				renderSelectedComponent={(n) => renderSelectedComponent(n)}
				emptyStayComponent={emptyStayComponent}
				noCameraPermissionComponent={noCameraPermissionComponent}
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
