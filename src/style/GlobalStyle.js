import {StyleSheet} from 'react-native';

export const GlobalStyle = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      
    },

    dot:{
      backgroundColor: 'grey',
      width: 8,
      height: 8,
      borderRadius: 4,
      marginHorizontal: 5,
      marginVertical: 3,
    },

    dotActive:{
      backgroundColor: '#4898D3',
      width: 15,
      height: 8,
      borderRadius: 4,
      marginHorizontal: 5,
      marginVertical: 3,
    },

    splashText:{
      color: 'grey',
      marginTop: 30,
      fontSize: 17,
      textAlign: 'center',
    },

    splashHeadTitle:{
      fontSize: 30,
      fontWeight: 'bold',
      color: '#4898D3',
      textAlign: 'center',
      marginTop: 30,
    },
    
    swiperContainer: {
      margin : 30,
    },

    signInBoutton:{
      backgroundColor: '#4898D3',
      borderRadius: 30,
      width: '90%',
      height: 50,
      marginBottom: 35,
      justifyContent: 'center',
      alignItems: 'center',
    },


    signInText:{
      fontWeight: 'bold',
      fontSize: 16,
      color: 'white',
      alignSelf: 'center'
    },

    btn:{
      backgroundColor: '#4898D3',
      borderRadius: 30,
      height: 40,
      marginTop: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },


    text:{
      fontWeight: 'bold',
      fontSize: 16,
      color: 'white',
      alignSelf: 'center'
    },

    usernameProfil:{
      fontWeight: '300',
      fontSize: 17,
      marginBottom: 10,
      textAlign: 'center',
    },

    numberPosts:{
      fontWeight: 'bold',
      fontSize: 20,
      color: '#4898D3',
    },

    posts:{
      fontSize: 20,
      fontWeight: '300',
      marginLeft: 10,
    },

    h1:{
      fontSize: 20,
    },
    
    p:{
      fontSize: 20,
    },

    card: {
      height: 120,
      flexDirection: 'row',
      backgroundColor: '#fff'
    },

    cardImgWrapper: {
      flex: 1,
      borderColor: '#ccc',
      borderWidth: 0.5,
      borderRightWidth: 0,
      backgroundColor: '#fff',
    },

    cardImg: {
      height: '95%',
      width: '95%',
      alignSelf: 'center',
      borderTopLeftRadius: 15,
      borderBottomRightRadius: 15,
      
    },
    
    cardInfo: {
      flex: 2,
      padding: 10,
      borderColor: '#ccc',
      borderWidth: 0.5,
      borderLeftWidth: 0,
      backgroundColor: '#fff',
    },

    cardTitle: {
      fontSize: 13,
    },

    cardPrice: {
      fontSize: 16,
      fontWeight: '600',
      color: '#F16E44'
    },

    cardDetails: {
      fontSize: 12,
      color: '#444',
    },

    cardOwner: {
      color: '#B9B9BB',
      fontSize: 12,
      alignSelf: 'center',
      marginLeft: 4
    },

    cardLocation: {
      color: '#B9B9BB', 
      fontSize: 12, 
      alignSelf: 'center', 
      marginLeft: 2,
    },

    cardDate: {
      color: '#B9B9BB',
      fontSize: 12, 
      alignSelf: 'flex-end',
    },
    
  });

  export const textTheme ={
    colors:{
      primary:'#4898D3',
      background: '#fff',

    },
  }

