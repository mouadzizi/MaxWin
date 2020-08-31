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

    item:{
      height: 200,
      width: '100%',
      borderRadius: 15,
    }
    
  });

  export const textTheme ={
    colors:{
      primary:'#4898D3',
      background: '#fff',
    },
  }

