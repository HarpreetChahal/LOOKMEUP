import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, Button } from 'react-native';

const OnboardingScreen = ({navigation}) => {
    return (

        <View style={styles.container}>
          <View style={styles.header}>
            {/* <Text>Open up App.js to start working on your app!</Text> */}
            <Image style={styles.logo} source={require('../assets/logo.png')} />
            <Text style={styles.mainText}>Explore the best experience based on your interest.</Text>
            <Image style={styles.logo2} source={require('../assets/main_icon.png')} />
          </View>
          {/* <TouchableOpacity>  */}
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.login} onPress={() => navigation.navigate('RegisterScreen', { screen: 'RegisterScreen' })}>
            <Text style={styles.loginText}>Join Now</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signup} onPress={() => navigation.navigate('LoginScreen', { screen: 'LoginScreen' })}>
              <Text style={styles.signupText}>Sign In</Text>
            </TouchableOpacity>
            {/* <StatusBar style="auto" /> */}
          </View>
          {/* </TouchableOpacity> */}
        </View>
    
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor:'#ffffff',
        // backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'center',
        marginTop:40,
      },
      logo: {
        height: 200,
        width: 300,
      },
      logo2: {
       // marginTop:20,
        marginLeft:130,
        height: 289,
        width: 166,
      },
      header: {
        //backgroundColor: 'skyblue',
        flex: 1,
        marginTop: 25,
        //height: 300, 
        //width: '100%',
        alignItems:'center',
      },
      mainText:{
        color: '#BABABA',
        padding: 10,
        fontSize: 18,
      },
      buttons: {
        //width: 100,
        padding: 10,
       // backgroundColor: 'red',
      },
      login: {
        marginBottom: 10,
        backgroundColor: "#3491ff",
        borderRadius: 10,
        padding: 10,
        //height:40,
        //alignContent:'center',
        alignItems: 'center',
    },
    loginText: {
        color: '#ffffff',
        fontSize: 16,
    },
      signup: {
        marginBottom: 10,
        backgroundColor: "#BABABA",
        borderRadius: 10,
        padding: 10,
        //height:40,
        //alignContent:'center',
        alignItems: 'center',
    },
    signupText: {
        color: '#ffffff',
        fontSize: 16,
    },
    });
    // const LoginScreen = () => {
    //     return(
    //         <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
    //             <Text>Login</Text>
    //         </View>
    //     )
    // }
    

export default OnboardingScreen;