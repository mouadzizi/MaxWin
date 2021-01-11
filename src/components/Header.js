import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default function Header() {
    return (
        <View style={{marginHorizontal: '19%'}}>

        <View style={styles.header}>
        <Text style={styles.max}>Max</Text>
        <Text style={styles.win}>win</Text>
        </View>

        </View>
        
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        flex: 1,
    },
    max: {
        color: '#fff',
        fontSize: 27,
        fontWeight: 'bold',
        fontFamily: 'monospace',
        letterSpacing: 10,
    },
    win: {
        color: '#F16E44',
        fontSize: 27,
        fontWeight: 'bold',
        fontFamily: 'monospace',
        letterSpacing: 10,
    },
})