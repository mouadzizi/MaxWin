import React, { useState, useEffect } from 'react';
import { BackHandler, Alert } from 'react-native';
import Resluts from './src/Results'

import AuthenticationStack from './src/navigation/AuthenticationStack';

export default function App() {
	useEffect(() => {
		return () => {
			//BackHandler.exitApp();
		};
	}, []);

	return (
	<AuthenticationStack />
	//<Resluts/>
	);
}
