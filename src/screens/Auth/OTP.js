import { StyleSheet, Image, Text, View, TextInput, ActivityIndicator, ScrollView, Pressable, Platform, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import Theme from '../../utils/Theme'
import OTPTextInput from 'react-native-otp-textinput'
import Toast from 'react-native-simple-toast';
import axios from 'axios'
import { instance } from '../../utils/instance'


const OTP = (props) => {
    const [otp, setOtp] = useState("")
    const [loader, setLoader] = useState(false)

    let email = props?.route?.params?.email;
    let forgot = props?.route?.params?.forgot;
    console.log(forgot);
    const submitOtp = async () => {
        setLoader(true)
        if (forgot==true) {
            await axios.post(instance + 'api/verify_forget_otp.php', {
                email: email, otp: otp
            })
                .then(function (response) {
                    if (response?.data.response == 1) {
                        Toast.show(JSON.stringify(response?.data?.message), Toast.LONG);
                        props.navigation.navigate('ResetPassword',{email:email})
                        setLoader(false)
                    }
                    else {
                        Toast.show(JSON.stringify(response?.data?.message), Toast.LONG);
                        setLoader(false)
                    }
                })
                .catch(function (error) {
                    setLoader(false)
                    console.log(error);
                });
        }
        else {
            console.log("else");
            await axios.post(instance + 'api/verify_opt_registration.php', {
                email: email, otp: otp
            })
                .then(function (response) {
                    console.log(response);
                    console.log(response?.data);
                    setLoader(false)
                    if (response?.data.response == 1) {
                        Toast.show(JSON.stringify(response?.data?.message), Toast.LONG);
                        props.navigation.navigate('Home')
                        setLoader(false)
                    }
                    else {
                        Toast.show(JSON.stringify(response?.data?.message), Toast.LONG);
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
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: Theme.height / 20 }}>
                    <Pressable onPress={() => forgot ? props.navigation.goBack() : props.navigation.navigate('Signup')}>
                        <Image source={require('../../assets/backIcon.png')} style={{ height: Theme.height / 10, width: Theme.height / 9 }} />
                    </Pressable>
                    <View style={Platform.OS == "android" ? { marginLeft: Theme.width / 14 } : null} >
                        <Text style={{ color: Theme.primary, fontSize: Theme.height / 15, textAlign: 'center', fontFamily:Theme.fontFamilyG, marginTop: Theme.height / 40, marginRight: Theme.width / 13 }}>Please Verify!</Text>
                        <Text style={{ color: 'grey', fontSize: Theme.height / 40, textAlign: 'center', marginTop: Theme.height / 40, fontFamily:Theme.fontFamilyO, marginRight: Theme.width / 13 }}>Insert OTP Code sent to your Email to continue</Text>
                    </View>
                    <View></View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: Theme.height / 20 }}>
                    <View></View>
                    <View style={{ marginLeft: Platform.OS=='ios'? Theme.width / 4:Theme.width/3 }}>
                        <OTPTextInput handleTextChange={(text) => setOtp(text)} tintColor={Theme.primary} />
                        <TouchableOpacity onPress={() => submitOtp()} style={{ width: Theme.width / 3, backgroundColor: Theme.primary, padding: Theme.height / 30, alignItems: 'center', borderRadius: Theme.height / 40, marginTop: Theme.height / 10 }}>
                            {loader ? (
                                <ActivityIndicator size={Theme.height / 35} color={Theme.white} />
                            ) : (
                                <Text style={{ color: Theme.white, fontSize: Theme.height / 30,fontFamily:Theme.fontFamilyO}}>Verify</Text>
                            )}
                        </TouchableOpacity>
                    </View>
                    <Image source={require('../../assets/Group.png')} style={{ height: Theme.height / 1.4, width: Theme.height / 1.7, marginTop: Theme.height / -8 }} />
                </View>
            </ScrollView>
        </View>
    )
}

export default OTP

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center'
    },
    logo: {
        height: Theme.height / 4,
        width: Theme.height / 3.3,
        marginRight: Theme.width / 8,
    },
})