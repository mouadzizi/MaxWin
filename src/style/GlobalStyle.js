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
      width: 10,
      height: 10,
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
      width: 150,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },

    signUpBoutton:{
      borderColor: '#4898D3',
      borderRadius: 30,
      borderWidth: 2,
      width: 150,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      marginStart: 15
    },

    signInText:{
      fontWeight: 'bold',
      fontSize: 16,
      color: 'white',
    },

    signUpText:{
      fontWeight: 'bold',
      fontSize: 17,
      color: '#4898D3',
    },

    signInGoogle:{
      backgroundColor: '#fff',
      borderRadius: 5,
      width: '90%',
      height: 35,
      alignSelf:'center',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: '#4898D3',
      marginTop: 10,
    },
 
  });

  export const textTheme ={
    colors:{
      primary:'#4898D3',
      background: '#fff',
    }
  }
