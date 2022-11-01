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
          <TouchableOpacity> 
          <View style={styles.buttons}>
            <View style={styles.login}>
              <Button  color="#BABABA" title="Sign Up" onPress={() => navigation.navigate('RegisterScreen', { screen: 'RegisterScreen' })}/>
            </View>
            <View style={styles.signup}>
              <Button color="#3491ff" title="Log In" onPress={() => navigation.navigate('LoginScreen', { screen: 'LoginScreen' })}/>
            </View>
            {/* <StatusBar style="auto" /> */}
          </View>
          </TouchableOpacity>
        </View>
    
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor:'#ffffff',
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
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
      },
      signup: {
        marginBottom: 10,
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