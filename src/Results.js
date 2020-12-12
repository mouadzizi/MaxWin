import React from 'react'
import { StyleSheet, Text, View, TextInput, FlatList, Button } from 'react-native';
import { db } from './API/firebase';
import Product from './components/Product'



export default function Results({ route, navigation }) {
    const [aResults, setResults] = React.useState([]);

    const { filterOptions } = route.params
    React.useEffect(() => {
        const { selectedCategory, superCategory } = filterOptions
        console.log(filterOptions);
        switch (superCategory) {
            case 'VEHICULES':
                veheculesFilter(selectedCategory);
                break;
            case 'MAISON & DECO':
                maison_decoFilter(selectedCategory)
                break;
            case 'INFORMATIQUE ET ELECTRONIQUE':
                techFilter(selectedCategory)
                break;
            case 'ESPACE HOMMES':
                maison_decoFilter(selectedCategory)
                break;
            case 'ESPACE FEMMES':
                maison_decoFilter(selectedCategory)
                break;
            case 'ESPACE BEBES ET ENFANTS':
                maison_decoFilter(selectedCategory)
                break;
            case 'MATERIELS ET SERVICES':
                servicesFilter(selectedCategory)
                break;
            case 'IMMOBILIER':
                immobilierFilter(selectedCategory)
                break;
        }
        return () => { }
    }, [])

    const veheculesFilter = async (category) => {
        const {
            city, etat, marqueVoiture,
            carburant, transtaction, anneeMax,
            anneeMin, puissance } = filterOptions
        const items = []
        var postsRef = db.collection('posts').where('category.item', '==', category);
        //filter by city
        if (city !='Toutes les villes') {
            postsRef = postsRef.where('city', '==', city)
        }
        //filter by condition
        if (etat != 'neuf/Utilisé') {
            postsRef = postsRef.where('etat', '==', etat)
        }
        //filter by brand 
        if (marqueVoiture != 'tt') {
            postsRef = postsRef.where('marqueVoiture', '==', marqueVoiture)
        }
        //filter by fuel
        if (carburant != '*') {
            postsRef = postsRef.where('carburant', '==', filterOptions.carburant)
        }

        //filter by Transaction 
        if (transtaction != '*') {
            postsRef = postsRef.where('transtaction', '==', filterOptions.transtaction)

        }
        //fiter by year
        //postsRef=postsRef.where('fabrication','>=',anneeMin).where('fabrication','<=',anneeMax)

        else if (puissance == '+10ch') postsRef = postsRef.where('puissance', '==', puissance)


        //fiter by price
        const results = postsRef.where('price', '>=', filterOptions.priceMin)
            .where('price', '<=', filterOptions.priceMax).get();


        (await results).docs
            .filter(doc => doc.data().fabrication >= anneeMin)
            .filter(doc => doc.data().fabrication <= anneeMax)
            .forEach(e => {
                console.log(e.data().fabrication);
                items.push({
                    ...e.data(),
                    key: e.id
                })
            })

        setResults(items)

    }
    const immobilierFilter = async (category) => {
        const { city, priceMax, priceMin, SuperficieMax, SuperficieMin } = filterOptions;
        const items = []
        var postsRef = db.collection('posts').where('category.item', '==', category);
        //filter by city
        if (city != 'Toutes les villes') {
            postsRef = postsRef.where('city', '==', city)
        }

        //fiter by price
        const results = postsRef.where('price', '>=', priceMin)
            .where('price', '<=', priceMax).get();
        (await results).docs
            .filter(doc => doc.data().superficie >= SuperficieMin)
            .filter(doc => doc.data().superficie <= SuperficieMax)
            .forEach(doc => {
                console.log(doc.data().title);
                items.push({
                    ...doc.data(),
                    key: doc.id,
                })
            })
        setResults(items)
    }
    const maison_decoFilter = async (category) => {
        const { city, priceMax, priceMin, etat } = filterOptions;
        const items = []
        var postsRef = db.collection('posts').where('category.item', '==', category);
        //filter by city
        if (city != 'Toutes les villes') {
            postsRef = postsRef.where('city', '==', city)
        }

        //filter by condition
        if (etat != 'neuf/Utilisé') {
            postsRef = postsRef.where('etat', '==', etat)
        }

        //fiter by price
        const results = postsRef.where('price', '>=', priceMin)
            .where('price', '<=', priceMax).get();
        (await results).docs.forEach(doc => {
            console.log(doc.data().title);
            items.push({
                ...doc.data(),
                key: doc.id,
            })
        })
        setResults(items)
    }
    const techFilter = async (category) => {
        const { city, priceMax, priceMin, marquePhone } = filterOptions;
        const items = []
        var postsRef = db.collection('posts').where('category.item', '==', category);
        //filter by city
        if (city != 'Toutes les villes') {
            postsRef = postsRef.where('city', '==', city)
        }

        //filter by brand
        if (marquePhone != '*') {
            postsRef = postsRef.where('marquePhone', '==', marquePhone)
        }

        //fiter by price
        const results = postsRef.where('price', '>=', priceMin)
            .where('price', '<=', priceMax).get();

        console.log((await results).size);
        (await results).docs.forEach(doc => {
            console.log(doc.data().title);
            items.push({
                ...doc.data(),
                key: doc.id,
            })
        })
        setResults(items)
    }
    const servicesFilter = async (category) => {
        const { city, priceMax, priceMin, etat, typeService } = filterOptions;
        const items = []
        var postsRef = db.collection('posts').where('category.item', '==', category);
        //filter by city
        if (city != 'Toutes les villes') {
            postsRef = postsRef.where('city', '==', city)
        }

        //filter by condition
        if (etat != 'neuf/Utilisé') {
            postsRef = postsRef.where('etat', '==', etat)
        }
        //filter by type
        if (typeService != '*') {
            postsRef = postsRef.where('typeService', '==', typeService)
        }
        //fiter by price
        const results = postsRef.where('price', '>=', priceMin)
            .where('price', '<=', priceMax).get();
        (await results).docs.forEach(doc => {
            console.log(doc.data().title);
            items.push({
                ...doc.data(),
                key: doc.id,
            })
        })
        setResults(items)
    }
    return (
        <FlatList
            data={aResults}
            renderItem={({ item }) => (
                <Product
                    name={item.title}
                    owner={item.user.owner}
                    price={item.price}
                    location={item.city}
                    img={item.urls[0]}
                    particulier={!item.user.accountType}
                    p1={item.laivraison}
                    p2={item.paiement}
                    p3={item.negociable}
                    p4={item.bonCondition}
                    click={() => navigation.navigate('ProductDetails', { id: item.key })}
                />
            )}
        />
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        backgroundColor: '#bdc3c7',
    }

})
