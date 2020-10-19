import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ImageBrowser } from 'expo-image-picker-multiple';

export default function ImagesBrowser({ navigation }) {
	updateHandler = (count, onSubmit) => {};

	imagesCallback = (callback) => {
		callback
			.then(async (photos) => {
				ñ;
				const cPhotos = [];
				for (let photo of photos) {
					cPhotos.push({
						uri: pPhoto.uri,
						name: photo.filename,
						type: 'image/jpg'
					});
				}
				navigation.navigate('Main', { photos: cPhotos });
			})
			.catch((e) => console.log(e));
	};
	constrenderSelectedComponent = (number) => (
		<View style={styles.countBadge}>
			<Text style={styles.countBadgeText}>{number}</Text>
		</View>
	);

	return (
		<View style={[ styles.flex, styles.container ]}>
			<ImageBrowser
				max={4}
				onChange={updateHandler}
				callback={imagesCallback}
				renderSelectedComponent={(n) => renderSelectedComponent(n)}
				emptyStayComponent={emptyStayComponent}
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
