import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
  TextInput,
} from "react-native";


const RegisterScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {/* <Text>Open up App.js to start working on your app!</Text> */}
                <Text style={styles.mainText}>Create Account</Text>
                <Image style={styles.logo} source={require('../assets/create_account.png')} />
            </View>
            <View style={styles.body}>
                <Text style={{ marginBottom: 5 }}>Full Name</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="default"
                />
                <Text style={styles.errors}>Name cannot be left empty</Text>
                <Text style={{ marginBottom: 5 }}>Mobile Number</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                />
                <Text style={styles.errors}>Mobile Number already registered</Text>
                <Text style={{ marginBottom: 5 }}>Email</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="default"
                />
                <Text style={styles.errors}>Email already exists</Text>
                <Text style={{ marginBottom: 5 }}>Password</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="default"
                />
                <Text style={styles.errors}>Passwords dont match</Text>
                <Text style={{ marginBottom: 5 }}>Confirm Password</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="default"
                />
                <Text style={styles.errors}>Passwords dont match</Text>

                <Text>Agree to terms and conditions</Text>


                <View style={styles.buttons}>
                <TouchableOpacity >
                        <View style={styles.signup} >
                            <Text style={styles.signupText} onPress={() => navigation.navigate('VerifyScreen', { screen: 'VerifyScreen' })}>Create Account</Text>
                        </View>
                    </TouchableOpacity>

                    {/* <StatusBar style="auto" /> */}
                    <Text>Already have an account?</Text>
                    <Text style={{ color: '#3491ff' }} onPress={() => navigation.navigate('LoginScreen', { screen: 'LoginScreen' })}>Sign In</Text>

                </View>

            </View>
        </View>


  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        marginTop: 40,
        flexDirection: 'column',
        // justifyContent:'center',
        alignItems: 'center',

        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    logo: {
        // marginTop:20,
        // marginLeft:130,
        height: 158,
        width: 120,

    },
    header: {
        //backgroundColor: 'skyblue',
        //flex: 1,
        display: 'flex',
        flexDirection: 'row',
        //  padding: 20,

        //marginTop: 25,
        //height: 300, 

        width: '100%',
        height: '20%',
        alignItems: 'flex-start',
        //   alignContent:'space-between',
        justifyContent: 'space-between',
    },
    errors: {
       // marginTop: 5,
        marginBottom: 5,
        color:'red',
    },
    body: {
        //flex: 5,
        padding: 10,
        width: '100%',
        height: '70%',
    },
    input: {
        height: 40,
        //margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        //padding: 10,
    },

    mainText: {
        color: 'black',
        padding: 10,
        fontSize: 20,
    },
    buttons: {
        marginTop: 10,
        //flex: 2,
        //width: 100,
        //padding: 10,
        // backgroundColor: 'red',
    },
    signup: {
        marginBottom: 10,
        backgroundColor: "#3491ff",
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

export default RegisterScreen;
