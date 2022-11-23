import { StyleSheet, Image, Text, View, TextInput, ScrollView,ActivityIndicator, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Theme from '../../utils/Theme'
import Toast from 'react-native-simple-toast';
import axios from 'axios'
import { instance } from '../../utils/instance'

const ResetPassword = (props) => {
    // const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [conferm, setConfermPassword] = useState("")
    // const [firstname, setFirstName] = useState("")
    // const [lastname, setLastName] = useState("")
    const [loader, setLoader] = useState(false)

    let email = props?.route?.params?.email;

    const SignupSubmit = async () => {
        if(password!=conferm){
            Toast.show('Passwords not Matched', Toast.LONG);
        }
        else{
        setLoader(true)
        await axios.post(instance + 'api/reset_password.php', {
            email: email, password: password
        })
            .then(function (response) {
                console.log(response?.data);
                if (response?.data.response == 1) {
                    console.log(response?.data);
                    Toast.show(JSON.stringify(response?.data.message), Toast.LONG);
                    setLoader(false)
                    props.navigation.navigate('Signin')
                }
                else {
                    Toast.show(JSON.stringify(response?.data.message), Toast.LONG);
                    setLoader(false)
                }
            })
            .catch(function (error) {
                setLoader(false)
                console.log(error);
            });
        }

    }
    return (
        <View style={styles.main}>
            <ScrollView style={{ flex: 1 }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: Theme.height / 20 }}>
                    <Pressable onPress={() => props.navigation.navigate('Signin')}>
                        <Image source={require('../../assets/backIcon.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginStart: Theme.width / 30 }} />
                    </Pressable>
                    <Text style={{ color: Theme.primary, fontSize: Theme.height / 13, textAlign: 'center', fontWeight: 'bold', marginTop: Theme.height / 40, marginRight: Theme.width / 13 }}>ResetPassword</Text>
                    <View></View>
                </View>
                <View style={{ justifyContent: 'space-evenly', marginTop: Theme.height / 20 }}>
                   
                    <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginTop: Theme.height / 30 }}>
                        <View style={{ borderColor: Theme.black, borderWidth: 0.5, width: Theme.width / 3, borderRadius: Theme.height / 40 }}>
                            <TextInput onChangeText={(name) => setPassword(name)} value={password} placeholder='Password' style={{ height: Theme.height / 10, paddingStart: Theme.width / 60, color: 'grey', fontSize: Theme.height / 30 }} placeholderTextColor={'grey'} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginTop: Theme.height / 30 }}>
                        <View style={{ borderColor: Theme.black, borderWidth: 0.5, width: Theme.width /3, borderRadius: Theme.height / 40 }}>
                            <TextInput onChangeText={(name) => setConfermPassword(name)} value={conferm} placeholder='Confirm Password' style={{ height: Theme.height / 10, paddingStart: Theme.width / 60, color: 'grey', fontSize: Theme.height / 30 }} placeholderTextColor={'grey'} />
                        </View>
                    </View>
                   
                    <TouchableOpacity onPress={() => SignupSubmit()} style={{ width: Theme.width / 3, backgroundColor: Theme.primary, padding: Theme.height / 30, alignItems: 'center', alignSelf: 'center', borderRadius: Theme.height / 40, marginTop: Theme.height / 30 }}>
                        {loader ? (
                            <ActivityIndicator size={Theme.height / 35} color={Theme.white} />
                        ) : (
                            <Text style={{ color: Theme.white, fontSize: Theme.height / 30 }}>Continue</Text>
                        )}
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* <Text>Signin</Text> */}
        </View>
    )
}

export default ResetPassword

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center'
    },
    logo: {
        height: Theme.height / 4,
        width: Theme.height / 3.3,
        // marginLeft: Theme.width / 10,

        // marginRight: Theme.width / 8,
    },
})