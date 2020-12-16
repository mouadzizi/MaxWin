import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function NavigationSections() {
    return (
        <View style={styles.container}>
            <View style={styles.categorieItem}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        alignSelf: 'center'
    },
    categorieItem : {
        borderRadius: 30,
        backgroundColor: '#ccc'
    },
})