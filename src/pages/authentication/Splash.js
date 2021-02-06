import * as React from 'react';
import { Text, View } from 'react-native';
import { GlobalStyle } from '../../style/GlobalStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { auth } from '../../API/firebase';
import {ProgressBar} from 'react-native-paper';

import ButtonGlobal from '../../components/ButtonGlobal';
import Slider from '../../components/Slider';


export default function Splash({ navigation }) {
	const [ loading, setLoading ] = React.useState(false);

	React.useEffect(() => {
		setLoading(true);
		const unsub = auth.onAuthStateChanged((user) => {
			if (user) {
				navigation.replace('HomeTabs');
			} else {
				setLoading(false);
			}
		});

		return () => {
			setLoading(false);
			unsub();
		};
	}, []);



	return (
		<SafeAreaView style={GlobalStyle.container}>
			<View style={{ flex: 5 }}>
				<ProgressBar indeterminate={true} visible={loading}  />
				
			<Text style={GlobalStyle.splashHeadTitle}> Maxwin </Text>
				<Slider />
			</View>

			<ButtonGlobal title="Se connecter" click={()=> navigation.replace('SignIn')}/>
			
		</SafeAreaView>
	);
}
