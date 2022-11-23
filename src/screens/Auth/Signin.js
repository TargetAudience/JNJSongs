import { StyleSheet, Image, Text, View, TextInput, ScrollView, Pressable, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import Theme from '../../utils/Theme'
import { instance } from '../../utils/instance'
import Toast from 'react-native-simple-toast';
import axios from 'axios'
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage';
const isTablet = DeviceInfo.isTablet();

const Signin = (props) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loader, setLoader] = useState(false)

    const SigninSubmit = async () => {
        setLoader(true)
        await axios.post(instance + 'api/login.php', {
            email: email, password: password
        })
            .then(async function (response) {
                // console.log(response?.data);
                if (response?.data.response == 1) {
                    Toast.show("Login Successfully", Toast.LONG);
                    setLoader(false)
                    await AsyncStorage.setItem("login",JSON.stringify(true))
                    props.navigation.replace("Home")
                //   let a=  await AsyncStorage.getItem("login")
                    // props.navigation.replace('')
                }
                else {
                    Toast.show(JSON.stringify(response?.data?.message), Toast.LONG);
                    setLoader(false)
                }
            })
            .catch(function (error) {
                // setLoading(false)
                setLoader(false)
                console.log(error);
            });

    }
    return (
        <View style={styles.main}>
            <ScrollView style={{ flex: 1 }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: Theme.height / 20 }}>
                  <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                  <Image source={require('../../assets/backIcon.png')} style={{ height: Theme.height / 10, width: Theme.height / 9 }} />

                  </TouchableOpacity>
                    <Image source={require('../../assets/logo.png')} style={styles.logo} />
                    <View></View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: Theme.height / 20 }}>
                    <View></View>
                    <View style={{ marginLeft: Theme.width / 4 }}>
                        <View style={{ borderColor: Theme.black, borderWidth: 0.5, width:isTablet?Theme.width / 2.7: Theme.width / 3, borderRadius: Theme.height / 40, alignSelf: 'center' }}>
                            <TextInput value={email} onChangeText={(email) => setEmail(email)} placeholder='Email' style={{ fontFamily:Theme.fontFamilyO, height: Theme.height / 10, paddingStart: Theme.width / 60, fontSize: Theme.height / 30, color: 'grey' }} placeholderTextColor={'grey'} />
                        </View>
                        <View style={{ borderColor: Theme.black, borderWidth: 0.5, width:isTablet?Theme.width / 2.7:Theme.width / 3, borderRadius: Theme.height / 40, marginTop: Theme.height / 30 }}>
                            <TextInput secureTextEntry={true} onChangeText={(password) => setPassword(password)} value={password} placeholder='Password' style={{fontFamily:Theme.fontFamilyO, height: Theme.height / 10, paddingStart: Theme.width / 60, color: 'grey', fontSize: Theme.height / 30 }} placeholderTextColor={'grey'} />
                        </View>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('Forgot')}>
                        <Text style={{ color: Theme.primary, fontSize: Theme.height / 30, textAlign: 'right', fontWeight: 'bold',fontFamily:Theme.fontFamilyO, marginTop: Theme.height / 90 }}>Forgot Password?</Text>

                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => SigninSubmit()} style={{width:isTablet?Theme.width / 2.7: Theme.width / 3,  backgroundColor: Theme.primary, padding: Theme.height / 30, alignItems: 'center', borderRadius: Theme.height / 40, marginTop: Theme.height / 30 }}>
                            {loader ? (
                                <ActivityIndicator size={Theme.height / 35} color={Theme.white} />

                            ) : (
                                <Text style={{ color: Theme.white, fontSize: Theme.height / 30,fontFamily:Theme.fontFamilyG }}>Sign In</Text>

                            )}
                        </TouchableOpacity>
                        <Pressable onPress={() => props.navigation.navigate('Signup')}>

                            <Text style={{ color: Theme.primary, fontSize: Theme.height / 25, textAlign: 'center', fontFamily:Theme.fontFamilyG, marginTop: Theme.height / 40 }}>Signup</Text>
                        </Pressable>

                    </View>
                    <Image source={require('../../assets/Group.png')} style={{ height: isTablet?Theme.height / 1.8: Theme.height / 1.2, width: isTablet?Theme.height / 2.2: Theme.height / 1.5, marginTop: isTablet? Theme.height / -8:Theme.height / -4 }} />
                </View>
            </ScrollView>

            {/* <Text>Signin</Text> */}
        </View>
    )
}

export default Signin

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center'
    },
    logo: {
        height: Theme.height / 4.8,
        width: Theme.height / 3.3,
        // marginLeft: Theme.width / 10,

        marginRight: Theme.width / 8,
    },
})