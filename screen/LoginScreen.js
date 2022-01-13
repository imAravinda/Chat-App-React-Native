import { NavigationContainer } from '@react-navigation/native';
import React, { useState,useEffect } from 'react'
import { View,StyleSheet } from 'react-native'
import { Button, Input } from 'react-native-elements';
import { auth } from '../firebase';
const LoginScreen = ({navigation}) => {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const signin = () => {
        auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential)=>{
            var user=userCredential.user;
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)
        });
    }
    useEffect(() => {
        const unsbuscribe=auth.onAuthStateChanged(function(user){
            if(user){
                navigation.replace('Chat')
            }
            else{
                navigation.canGoBack() && navigation.popToTop();
            }
        });
        return unsbuscribe
    }, [])
    return (
        <View style={styles.container}>
            <Input
                placeholder="Enter your Email"
                lable="Email"
                leftIcon={{type:'material' , name:'email'}}
                value={email}
                onChangeText={text=>setEmail(text)}
            />
            <Input
                placeholder="Enter your Password"
                lable="Password"
                leftIcon={{type:'material' , name:'lock'}}
                value={password}
                onChangeText={text=>setPassword(text)}
                secureTextEntry
            />
            <Button title='Sign In' onPress={signin} style={styles.buttons}/>
            <Button title='Register' style={styles.buttons} onPress={()=>navigation.navigate("Ragister")}/>

        </View>
    )
}

export default LoginScreen
const styles=StyleSheet.create({
    buttons:{
        width: 200,
        marginTop: 10
    },
    container:{
        flex:1,
        alignItems:'center',
        padding: 10
    }
})