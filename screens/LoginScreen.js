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



const LoginScreen = ({navigation}) => {
    return (



        <View style={styles.container}>
            <View style={styles.header}>
                {/* <Text>Open up App.js to start working on your app!</Text> */}
                <Text style={styles.mainText}>Welcome {'\n'}back</Text>
                <Image style={styles.logo} source={require('../assets/login.png')} />
            </View>
            <View style={styles.body}>

                <Text style={{ marginBottom: 5 }}>Email</Text>
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
                    <Text>Remember Me</Text>
                    <Text>Forgot Password </Text>
                </View>


                <View style={styles.buttons}>
                    <TouchableOpacity >
                        <View style={styles.login} onPress={''}>
                            <Text style={styles.loginText} >Log In</Text>
                        </View>
                    </TouchableOpacity>

                    {/* <StatusBar style="auto" /> */}
                    <Text>Don't have an account?</Text>
                    <Text style={{ color: '#3491ff' }} onPress={() => navigation.navigate('RegisterScreen', { screen: 'RegisterScreen' })}>Sign Up</Text>

                </View>

            </View>
     

        <View style={styles.buttons}>
          <TouchableOpacity>
            <View style={styles.signup}>
              <Button color="#3491ff" title="Log In" />
            </View>
          </TouchableOpacity>

          {/* <StatusBar style="auto" /> */}
          <Text>Don't have an account?</Text>
          <Text
            style={{ color: "#3491ff" }}
            onPress={() =>
              navigation.navigate("RegisterScreen", { screen: "RegisterScreen" })
            }
          >
            Sign Up
          </Text>
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
        justifyContent: 'center',
        alignItems: 'center',


        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    logo: {
        // marginTop:20,
        // marginLeft:130,
        //marginTop:100,
        height: 167,
        width: 179,

    },
    header: {
        //backgroundColor: 'skyblue',
        //flex: 1,
        // marginTop: '10%',
        width: '100%',
        flexDirection: 'row',
        height: '30%',
        //marginTop:100,
        //padding: 20,

        //marginTop: 25,
        //height: 300, 
        //width: '100%',
        //   alignContent:'space-between',
        justifyContent: 'space-between',
        alignContent: 'center',

    },
    body: {
        //flex: 5,
        padding: 10,
        width: '100%',
        height: '70%',
    },
    rememberme: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input: {
        height: 40,
        //margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        //padding: 10,
        marginBottom: 10,
    },

    mainText: {
        color: 'black',
        padding: 10,
        fontSize: 24,
        //marginTop: 85,
    },
    buttons: {
        marginTop: 10,
        //flex: 2,
        //width: 100,
        //padding: 10,
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
});

export default LoginScreen;
