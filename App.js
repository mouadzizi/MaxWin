import React, { useState, useEffect } from 'react';
import { BackHandler, Alert } from 'react-native';

import AuthenticationStack from './src/navigation/AuthenticationStack';

export default function App() {
	useEffect(() => {
		return () => {
			//BackHandler.exitApp();
		};
	}, []);

	return <AuthenticationStack />;
}
