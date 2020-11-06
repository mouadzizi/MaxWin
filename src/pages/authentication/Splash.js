import * as React from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native';
import Swiper from 'react-native-swiper';
import { GlobalStyle } from '../../style/GlobalStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { auth } from '../../API/firebase';
import * as Updates from 'expo-updates';

export default function Splash({ navigation }) {
	const [ loading, setLoading ] = React.useState(false);
	const { width, height } = Dimensions.get('window');
	const height_image = height * 0.3;
	const width_image = width * 0.6;

	React.useEffect(() => {
		checkUpdate();

		setLoading(true);
		const unsub = auth.onAuthStateChanged((user) => {
			if (user) {
				navigation.replace('HomeTabs');
			} else {
				setLoading(false);
				console.log('no user');
			}
		});

		return () => {
			setLoading(false);

			unsub();
		};
	}, []);

	const checkUpdate = async () => {
		try {
			const update = await Updates.checkForUpdateAsync();
			if (update.isAvailable) {
				setLoading(true);
				await Updates.fetchUpdateAsync().then(() => setLoading(false));

				await Updates.reloadAsync();
			}
		} catch (e) {
			// handle or log error
		}
	};

	function SwiperIntro() {
		return (
			<Swiper
				loop={false}
				style={{ backgroundColor: 'white' }}
				dot={<View style={GlobalStyle.dot} />}
				activeDot={<View style={GlobalStyle.dotActive} />}
			>
				{/* Swiper number 1 */}
				<View style={GlobalStyle.swiperContainer}>
					<Text style={GlobalStyle.splashHeadTitle}> Maxwin Pro </Text>

					<Image
						source={require('../../../assets/logo.jpg')}
						style={{ height: height_image, width: width_image, alignSelf: 'center', marginTop: 15 }}
						resizeMode={'stretch'}
					/>

					<Text style={GlobalStyle.splashText}> Vendez ou achetez gratuitement et facilement sur Maxwin </Text>
				</View>

				{/* Swiper number 2 */}

				<View style={GlobalStyle.swiperContainer}>
					<Text style={GlobalStyle.splashHeadTitle}> Maxwin </Text>

					<Image
						source={require('../../../assets/slide1.jpg')}
						style={{ height: height_image, width: width_image, alignSelf: 'center', marginTop: 15 }}
						resizeMode={'stretch'}
					/>

					<Text style={GlobalStyle.splashText}>
						Maxwin est une application qui vous facilite la vente de vos produits , publiez vos articles et
						augmenter vos revenus.{' '}
					</Text>
				</View>

				{/* Swiper number 3 */}

				<View style={GlobalStyle.swiperContainer}>
					<Text style={GlobalStyle.splashHeadTitle}> Maxwin </Text>

					<Image
						source={require('../../../assets/slide3.jpg')}
						style={{ height: height_image, width: width_image, alignSelf: 'center', marginTop: 15 }}
						resizeMode={'contain'}
					/>

					<Text style={GlobalStyle.splashText}>
						L'application Maxwin permet un contact instantané entre vendeur et acheteur.
					</Text>
				</View>

				{/* Swiper number 4 */}

				<View style={GlobalStyle.swiperContainer}>
					<Text style={GlobalStyle.splashHeadTitle}> Maxwin </Text>

					<Image
						source={require('../../../assets/slide2.jpg')}
						style={{ height: height_image, width: width_image, alignSelf: 'center', marginTop: 15 }}
						resizeMode={'stretch'}
					/>

					<Text style={GlobalStyle.splashText}>
						{' '}
						Sur la platforme Maxwin vous trouverez tout ce que vous cherchez.
					</Text>
				</View>
			</Swiper>
		);
	}
	return (
		<SafeAreaView style={GlobalStyle.container}>
			<View style={{ flex: 6 }}>
				<ActivityIndicator animating={loading} size="large" />
				<SwiperIntro />
			</View>

			<TouchableOpacity
				style={GlobalStyle.signInBoutton}
				disabled={loading}
				onPress={() => navigation.replace('SignIn')}
			>
				<Text style={GlobalStyle.signInText}>Se connecter</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}
