import { StyleSheet, Image, Text, View, TextInput, ScrollView, ActivityIndicator, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Theme from '../../utils/Theme'
import Toast from 'react-native-simple-toast';
import axios from 'axios'
import { instance } from '../../utils/instance'

const Signup = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [conferm, setConfermPassword] = useState("")
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [loader, setLoader] = useState(false)

    const SignupSubmit = async () => {
        if (firstname == "" || lastname == "" || email == "" || password == "" || conferm == "") {

            Toast.show('Fill all fields first', Toast.LONG);
        }

        else {
            if (password != conferm) {
                Toast.show('Password not matched with conferm password', Toast.LONG);
            }
            else {
                setLoader(true)
                await axios.post(instance + 'api/create_user.php', {
                    first_name: firstname, last_name: lastname,
                    email: email, password: password
                })
                    .then(function (response) {
                        console.log(response?.data);
                        if (response?.data.code == 200 && response?.data.response == 1) {
                            console.log(response?.data);
                            Toast.show(JSON.stringify(response?.data.message), Toast.LONG);
                            setLoader(false)
                            props.navigation.navigate('OTP', { email: email })
                        }
                        else if (response?.data?.message == "Account already registered against this email!") {
                            Toast.show("Account already register on this email please login or Forgot your password!", Toast.LONG);
                            props.navigation.navigate('Signin')
                            setLoader(false)
                        }
                        else {

                        }
                    })
                    .catch(function (error) {
                        setLoader(false)
                        console.log(error);
                    });
            }

        }

    }
    return (
        <View style={styles.main}>
            <ScrollView style={{ flex: 1 }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: Theme.height / 20 }}>
                    <Pressable onPress={() => props.navigation.navigate('Signin')}>
                        <Image source={require('../../assets/backIcon.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginStart: Theme.width / 30 }} />
                    </Pressable>
                    <Text style={{ color: Theme.primary, fontSize: Theme.height / 13, textAlign: 'center', fontFamily: Theme.fontFamilyG, marginTop: Theme.height / 40, marginRight: Theme.width / 13 }}>SignUp</Text>
                    <View></View>
                </View>
                <View style={{ justifyContent: 'space-evenly', marginTop: Theme.height / 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
                        <View style={{ borderColor: Theme.black, borderWidth: 0.5, width: Theme.width / 3.8, borderRadius: Theme.height / 40, alignSelf: 'center' }}>
                            <TextInput onChangeText={(name) => setFirstName(name)} value={firstname} placeholder='First Name' style={{ fontFamily: Theme.fontFamilyO, height: Theme.height / 10, paddingStart: Theme.width / 60, fontSize: Theme.height / 30, color: 'grey' }} placeholderTextColor={'grey'} />
                        </View>
                        <View style={{ borderColor: Theme.black, borderWidth: 0.5, width: Theme.width / 3.8, borderRadius: Theme.height / 40, marginLeft: Theme.width / 80 }}>
                            <TextInput onChangeText={(name) => setLastName(name)} value={lastname} placeholder='Last Name' style={{ fontFamily: Theme.fontFamilyO, height: Theme.height / 10, paddingStart: Theme.width / 60, color: 'grey', fontSize: Theme.height / 30 }} placeholderTextColor={'grey'} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginTop: Theme.height / 30 }}>
                        <View style={{ borderColor: Theme.black, borderWidth: 0.5, width: Theme.width / 1.85, borderRadius: Theme.height / 40 }}>
                            <TextInput onChangeText={(name) => setEmail(name)} value={email} placeholder='Email' style={{ fontFamily: Theme.fontFamilyO, height: Theme.height / 10, paddingStart: Theme.width / 60, color: 'grey', fontSize: Theme.height / 30 }} placeholderTextColor={'grey'} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginTop: Theme.height / 30 }}>
                        <View style={{ borderColor: Theme.black, borderWidth: 0.5, width: Theme.width / 3.8, borderRadius: Theme.height / 40, alignSelf: 'center' }}>
                            <TextInput onChangeText={(pass) => setPassword(pass)} value={password} placeholder='Password' style={{ fontFamily: Theme.fontFamilyO, height: Theme.height / 10, paddingStart: Theme.width / 60, fontSize: Theme.height / 30, color: 'grey' }} placeholderTextColor={'grey'} />
                        </View>
                        <View style={{ borderColor: Theme.black, borderWidth: 0.5, width: Theme.width / 3.8, borderRadius: Theme.height / 40, marginLeft: Theme.width / 80 }}>
                            <TextInput onChangeText={(cPassword) => setConfermPassword(cPassword)} value={conferm} placeholder='Conferm Password' style={{ fontFamily: Theme.fontFamilyO, height: Theme.height / 10, paddingStart: Theme.width / 60, color: 'grey', fontSize: Theme.height / 30 }} placeholderTextColor={'grey'} />
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => SignupSubmit()} style={{ width: Theme.width / 3, backgroundColor: Theme.primary, padding: Theme.height / 30, alignItems: 'center', alignSelf: 'center', borderRadius: Theme.height / 40, marginTop: Theme.height / 30 }}>
                        {loader ? (
                            <ActivityIndicator size={Theme.height / 35} color={Theme.white} />
                        ) : (
                            <Text style={{ color: Theme.white, fontSize: Theme.height / 30, fontFamily: Theme.fontFamilyG }}>Continue</Text>
                        )}
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* <Text>Signin</Text> */}
        </View>
    )
}

export default Signup

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