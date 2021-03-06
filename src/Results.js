import React from 'react'
import { FlatList } from 'react-native';
import { db } from './API/firebase';
import Product from './components/Product'
import { ProgressBar } from 'react-native-paper'
import { View } from 'react-native-animatable';



export default function Results({ route, navigation }) {
    const [aResults, setResults] = React.useState([]);
    const [ready, setReady] = React.useState(false)

    const { filterOptions } = route.params
    
    React.useEffect(() => {
        const { selectedCategory, superCategory } = filterOptions
        switch (superCategory) {
            case 'VEHICULES':
                veheculesFilter(selectedCategory).then((items) => {
                    setResults(items)
                    setReady(true)
                });
                break;
            case 'MAISON & DECO':
                maison_decoFilter(selectedCategory).then((items) => {
                    setResults(items)
                    setReady(true)
                })
                break;
            case 'INFORMATIQUE ET ELECTRONIQUE':
                techFilter(selectedCategory).then((items) => {
                    setResults(items)
                    setReady(true)
                })
                break;
            case 'ESPACE HOMMES':
                maison_decoFilter(selectedCategory).then((items) => {
                    setResults(items)
                    setReady(true)
                })
                break;
            case 'ESPACE FEMMES':
                maison_decoFilter(selectedCategory).then((items) => {
                    setResults(items)
                    setReady(true)
                })
                break;
            case 'ESPACE BEBES ET ENFANTS':
                maison_decoFilter(selectedCategory).then((items) => {
                    setResults(items)
                    setReady(true)
                })
                break;
            case 'MATERIELS ET SERVICES':
                servicesFilter(selectedCategory).then((items) => {
                    setResults(items)
                    setReady(true)
                })
                break;
            case 'IMMOBILIER':
                immobilierFilter(selectedCategory).then(items => {
                    setResults(items)
                    setReady(true)
                })
                break;
        }
        return () => { }
    }, [])

    const veheculesFilter = async (category) => {
        const {
            city, etat, marqueVoiture,
            carburant, transtaction, anneeMax,
            anneeMin } = filterOptions

        const items = []
        var postsRef = db.collection('posts').where('category.item', '==', category);

        //filter by city
        if (city != 'Toutes les villes') {
            postsRef = postsRef.where('city', '==', city)
        }

        //filter by condition
        if (etat != '') {
            postsRef = postsRef.where('etat', '==', etat)
        }


        //filter by brand 
        if (marqueVoiture != '') {
            postsRef = postsRef.where('marqueVoiture', '==', marqueVoiture)
        }


        //filter by fuel
        if (carburant != '*') {
            postsRef = postsRef.where('carburant', '==', carburant)
        }

        //filter by Transaction 
        if (transtaction != '*') {
            postsRef = postsRef.where('transtaction', '==', transtaction)

        }

        //fiter by price
        const results = await postsRef.where('price', '>=', filterOptions.priceMin)
            .where('price', '<=', filterOptions.priceMax).get();


        (await results).docs
            .filter(doc => doc.data().fabrication >= anneeMin)
            .filter(doc => doc.data().fabrication <= anneeMax)
            .forEach(e => {
                items.push({
                    ...e.data(),
                    key: e.id
                })
            })
        return await Promise.all(items)

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
                items.push({
                    ...doc.data(),
                    key: doc.id,
                })
            })
        return await Promise.all(items)
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
        if (etat != '') {
            postsRef = postsRef.where('etat', '==', etat)
        }

        //fiter by price
        const results = postsRef.where('price', '>=', priceMin)
            .where('price', '<=', priceMax).get();
        (await results).docs.forEach(doc => {
            items.push({
                ...doc.data(),
                key: doc.id,
            })
        })
        return await Promise.all(items)
    }
    const techFilter = async (category) => {
        const { city, priceMax, priceMin, marquePhone, etat } = filterOptions;
        const items = []
        var postsRef = db.collection('posts').where('category.item', '==', category);
        //filter by city
        if (city != 'Toutes les villes') {
            postsRef = postsRef.where('city', '==', city)
        }

        //filter by brand
        if (marquePhone != '*') {
            postsRef = postsRef.where('phoneMarque', '==', marquePhone)
        }
        
        //filter by condition
        if (etat != '') {
            postsRef = postsRef.where('etat', '==', etat)
        }


        //fiter by price
        const results = postsRef.where('price', '>=', priceMin)
            .where('price', '<=', priceMax).get();

       
        (await results).docs.forEach(doc => {
            items.push({
                ...doc.data(),
                key: doc.id,
            })
        })
        return await Promise.all(items)
    }

    const servicesFilter = async (category) => {
        const { city, priceMax, priceMin,  typeService,etat } = filterOptions;
        const items = []
        var postsRef = db.collection('posts').where('category.item', '==', category);
        
        //filter by city
        if (city != 'Toutes les villes') {
            postsRef = postsRef.where('city', '==', city)
        }

        //filter by condition
        if (etat != '') {
            postsRef = postsRef.where('etat', '==', etat)
        }


        //filter by type
        if (typeService != '') {
            postsRef = postsRef.where('servicetype', '==', typeService)
        }
        

        // fiter by price
        const results = postsRef.where('price', '>=', priceMin)
            .where('price', '<=', priceMax).get();
        (await results).docs.forEach(doc => {
            items.push({
                ...doc.data(),
                key: doc.id,
            })
        })
        return await Promise.all(items)
    }
    return (
        <View style={{ flex: 1 }} >
            {
                !ready ?
                    <ProgressBar style={{ height: 7 }} color={'#4898D3'} indeterminate={true} visible={true} />
                    :
                    <FlatList
                        data={aResults.sort((a, b) => b.addDate.toDate().getTime() - a.addDate.toDate().getTime())}
                        renderItem={({ item }) => (
                            <Product
                                name={item.title}
                                owner={item.user.name}
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
            }


        </View>
    )
}

