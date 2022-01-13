import React, { useState } from 'react'
import { View,StyleSheet } from 'react-native'
import { Button, Input } from 'react-native-elements';
import { auth } from '../firebase';
const RagisterScreen = ({navigation}) => {
    const[name,setName]=useState('');
    const[imageURL,setImageUrl]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const register = () =>{
        auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;

            user.updateProfile({
            displayName: name,
            photoURL: imageURL ? imageURL:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ficon-icons.com%2Ficon%2Favatar-default-user%2F92824&psig=AOvVaw0NS9pbw9FbHnLfK-EY2esa&ust=1630849048769000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKDI3qS45fICFQAAAAAdAAAAABAD"
            }).then(() => {
            // Update successful
            // ...
            }).catch((error) => {
            // An error occurred
            // ...
            });  
            // ...
            navigation.popToTop();
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
    }
    return (
        <View style={styles.container}>
            <Input
                placeholder="Enter your Name"
                lable="Name"
                leftIcon={{type:'material' , name:'badge'}}
                
                onChangeText={text=>setName(name)}
            />
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
            <Input
                placeholder="Enter your Image URL"
                lable="Profile Picture"
                leftIcon={{type:'material' , name:'face'}}
                value={imageURL}
                onChangeText={text=>setImageUrl(text)}
            />
            <Button title='Register' onPress={register} style={styles.buttons}/>

        </View>
    )
}

export default RagisterScreen
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