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
      fontSize: 18,
      fontFamily: 'serif',
    },
    
    p:{
      fontSize: 12,
      fontFamily: 'Roboto',
    },

    card: {
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
      marginTop: 3,
      
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
      fontSize: 14,
      fontFamily: 'serif',
    },

    cardPrice: {
      fontSize: 16,
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

    cardChip: {
      color: '#B9B9BB', 
      fontSize: 12,
      alignSelf: 'center', 
      marginLeft: 2,
      fontWeight: 'bold'
    },

    LaivrasionTTMaroc: {
      backgroundColor:'#F16E44',
      fontSize: 12, 
      alignSelf: 'flex-end',
    },
    

    sliderContainer: {
      height: 200,
      width: '90%',
      marginTop: 10,
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: 8,
    },
  
    slide: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'transparent',
      borderRadius: 8,
    },
    sliderImage: {
      height: '100%',
      width: '100%',
      alignSelf: 'center',
      borderRadius: 8,
    },

    infoContainer:{
      width: '100%',
      margin: 10,
      alignSelf: 'center',
      backgroundColor: '#fff',
      paddingLeft: 30,
      paddingBottom: 15,
    },
    modalView: {
    width: '92%',
    backgroundColor: "white",
    borderRadius: 15,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
    },

    modalContainer:{
      flex: 1,
      alignItems: "center",
      padding: 15,
      marginBottom: 100,
    },
  });

  export const textTheme ={
    colors:{
      primary:'#4898D3',
      background: '#fff',

    },
  }
    export const colors ={
        primary:'#4898D3',
        second: '#F16E44'
    }

