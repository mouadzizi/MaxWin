import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

export default function Header() {
    return (
        <View style={styles.header}>
        <Image
			source={require('../../assets/logo.png')}
			style={styles.headerImageStyle}
			resizeMode={'cover'}
		/>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerImageStyle: {
        height: 120 , 
        width: 150, 
        marginRight: 30
    }
})