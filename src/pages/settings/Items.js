import React from 'react';
import { Text, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';



import ProductEdit from '../../components/ProductEdit';

export default function Items({navigation}) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', padding: 20 }} >
        <ScrollView showsVerticalScrollIndicator={false}>

        <ProductEdit />
        <ProductEdit />
        <ProductEdit />
        </ScrollView>
        </SafeAreaView>

    )
}
