import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Button, TextInput } from 'react-native'


const RegisterScreen = () => {
    return (


        
        <View style={styles.container}>
            <View style={styles.header}>
                {/* <Text>Open up App.js to start working on your app!</Text> */}
                <Text style={styles.mainText}>Welcome back</Text>
                <Image style={styles.logo} source={require('../assets/login.png')} />
            </View>
            <View style={styles.body}>
        
                <Text>Email</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="default"
                />
                <Text>Password</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="default"
                />
                
                <View style={styles.rememberme}>
                <Text>Rememeber Me</Text>
                <Text>Forgot Password</Text>
                </View>
           
           
                <View style={styles.buttons}>
                <TouchableOpacity>
                    <View style={styles.signup}>
                        <Button color="#3491ff" title="Log In" />
                    </View>
                    </TouchableOpacity>

                    {/* <StatusBar style="auto" /> */}
                    <Text>Don't have an account?</Text>
                    <Text style={{ color: '#3491ff' }}>Sign Up</Text>

                </View>
            
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    logo: {
        // marginTop:20,
        // marginLeft:130,
        height: 167,
        width: 179,

    },
    header: {
        //backgroundColor: 'skyblue',
        //flex: 1,
        flexDirection: 'row',
        padding: 20,

        marginTop: 25,
        //height: 300, 
        //width: '100%',
        //   alignContent:'space-between',
        justifyContent: 'space-between',
    },
    body: {
        //flex: 5,
        padding: 10,
    },
    rememberme: {
        flexDirection:'row',
        justifyContent:'space-between',
    },
    input: {
        height: 40,
        //margin: 12,
        borderWidth: 1,
        //padding: 10,
    },

    mainText: {
        color: 'black',
        padding: 10,
        fontSize: 20,
    },
    buttons: {
        marginTop:20,
        //flex: 2,
        //width: 100,
        //padding: 10,
        // backgroundColor: 'red',
    },
    signup: {
        marginBottom: 10,
    },
});

export default RegisterScreen