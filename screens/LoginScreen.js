import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Button, TextInput } from 'react-native'


const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {/* <Text>Open up App.js to start working on your app!</Text> */}
                <Text style={styles.mainText}>Create Account</Text>
                <Image style={styles.logo} source={require('../assets/create_account.png')} />
            </View>
            <View style={styles.body}>
                <Text>Full Name</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="default"
                />
                <Text>Mobile Number</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                />
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
                <Text>Confirm Password</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="default"
                />
                <Text>Agree to terms and conditions</Text>
           
           
                <View style={styles.buttons}>
                <TouchableOpacity>
                    <View style={styles.signup}>
                        <Button color="#3491ff" title="Sign Up" />
                    </View>
                    </TouchableOpacity>

                    {/* <StatusBar style="auto" /> */}
                    <Text>Already have an account?</Text>
                    <Text style={{ color: '#3491ff' }}>Sign In</Text>

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
        height: 158,
        width: 120,

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

export default LoginScreen