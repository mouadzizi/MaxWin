import * as React from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity,ActivityIndicator } from 'react-native';
import Swiper from 'react-native-swiper';
import { GlobalStyle } from '../../style/GlobalStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import {auth} from '../../API/firebase'


export default function Splash({ navigation }) {
  const [loading,setLoading]= React.useState(false)

  const { width, height } = Dimensions.get('window');
  const height_image = height * 0.3;
  const width_image = width * 0.6;

  React.useEffect(() => {
    setLoading(true)
    const unsub = auth.onAuthStateChanged(user=>{
      if(user){
        navigation.replace('Home')
        setLoading(false)
      }
      else {
        setLoading(false)
      }
    })

    return ()=>{
      unsub()
    }
  }, [])
  function SwiperIntro() {
    return (
      <Swiper
        loop={false}
        style={{ backgroundColor: 'white' }}
        dot={<View style={GlobalStyle.dot} />}
        activeDot={<View style={GlobalStyle.dotActive} />}>
        {/* Swiper number 1 */}
        <View style={GlobalStyle.swiperContainer}>

          <Text style={GlobalStyle.splashHeadTitle}> Recherche  </Text>

          <Image
            source={require("../../../assets/test.jpg")}
            style={{ height: height_image, width: width_image, alignSelf: 'center', marginTop: 15 }}
            resizeMode={"stretch"} />

          <Text style={GlobalStyle.splashText}> ordinateur portable, voiture, appartement ou casque, tout ce que vous voulez, vous pouvez trouver dans MaxWin </Text>

        </View>

        {/* Swiper number 2 */}

        <View style={GlobalStyle.swiperContainer}>

          <Text style={GlobalStyle.splashHeadTitle}> Discuter </Text>

          <Image
            source={require("../../../assets/test3.jpg")}
            style={{ height: height_image, width: width_image, alignSelf: 'center', marginTop: 15 }}
            resizeMode={"stretch"} />

          <Text style={GlobalStyle.splashText}> avec MaxWin lorsque vous trouvez l'article que vous souhaitez acheter, vous pouvez discuter en direct avec l'acheteur et discuter de tous les détails </Text>

        </View>

        {/* Swiper number 3 */}

        <View style={GlobalStyle.swiperContainer}>

          <Text style={GlobalStyle.splashHeadTitle}> Acheter  </Text>

          <Image
            source={require("../../../assets/test2.jpg")}
            style={{ height: height_image, width: width_image, alignSelf: 'center', marginTop: 15 }}
            resizeMode={"stretch"} />

          <Text style={GlobalStyle.splashText}> après avoir bavardé, vous pouvez rencontrer l'acheteur et conclure un accord, MaxWin est votre meilleur marché virtuel au Maroc </Text>

        </View>

      </Swiper>

    );
  }
  return (

    <SafeAreaView style={GlobalStyle.container}>
      
      <View style={{ flex: 6 }}>
      <ActivityIndicator animating={loading} size='large' />
        <SwiperIntro />
      </View>

      <View style={{ flex: 1, flexDirection: 'row', alignContent: 'space-around' }}>
      
        <TouchableOpacity style={GlobalStyle.signInBoutton}
          onPress={() => navigation.push('SignIn')}>
          <Text style={GlobalStyle.signInText}>Se connecter</Text>
        </TouchableOpacity>

        <TouchableOpacity style={GlobalStyle.signUpBoutton}
          onPress={() => navigation.push('SignUp')}>
          <Text style={GlobalStyle.signUpText}>S'inscrire</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}