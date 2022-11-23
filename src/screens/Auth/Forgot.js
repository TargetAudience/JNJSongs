import { StyleSheet, Image, Text, View, TextInput, ScrollView, Pressable, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import Theme from '../../utils/Theme'
import { instance } from '../../utils/instance'
import Toast from 'react-native-simple-toast';
import axios from 'axios'
import DeviceInfo from 'react-native-device-info';
const isTablet = DeviceInfo.isTablet();

const Forgot = (props) => {

    const [email, setEmail] = useState("")
 
    const [loader, setLoader] = useState(false)
    let ema=props?.route?.params?.email;

    const SigninSubmit = async () => {
      if(email==""){
        Toast.show('Enter email first!', Toast.LONG);
setLoader(false)
      }
      else{
        setLoader(true)
        await axios.post(instance + 'api/forget_password.php', {
            email: email
        })
            .then(function (response) {
                console.log(response?.data);
                if (response?.data.response == 1) {
                    Toast.show('OTP sent to your email!', Toast.LONG);
                    props.navigation.navigate('OTP',{email:email,forgot:true})
                    setLoader(false)
                }
                else {
                    Toast.show('Enter invalid Email', Toast.LONG);
                    setLoader(false)
                }
            })
            .catch(function (error) {
                // setLoading(false)
                setLoader(false)
                console.log(error);
            });
          }

    }
    return (
        <View style={styles.main}>
            <ScrollView style={{ flex: 1 }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: Theme.height / 20 }}>
                    <Pressable onPress={()=>props.navigation.goBack()}>
                    <Image source={require('../../assets/backIcon.png')} style={{ height: Theme.height / 10, width: Theme.height / 9 }} />

                    </Pressable>
                    <Image source={require('../../assets/logo.png')} style={styles.logo} />
                    <View></View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: Theme.height / 20 }}>
                    <View></View>
                    <View style={{ marginLeft: Theme.width / 4 }}>
                        <View style={{ borderColor: Theme.black, borderWidth: 0.5, width: Theme.width / 3, borderRadius: Theme.height / 40, alignSelf: 'center' }}>
                            <TextInput value={email} onChangeText={(email) => setEmail(email)} placeholder='Email' style={{ height: Theme.height / 10, paddingStart: Theme.width / 60, fontSize: Theme.height / 30, color: 'grey',fontFamily:Theme.fontFamilyO }} placeholderTextColor={'grey'} />
                        </View>
                        {/* <View style={{ borderColor: Theme.black, borderWidth: 0.5, width: Theme.width / 3, borderRadius: Theme.height / 40, marginTop: Theme.height / 30 }}>
                            <TextInput secureTextEntry={true} onChangeText={(password) => setPassword(password)} value={password} placeholder='Password' style={{ height: Theme.height / 10, paddingStart: Theme.width / 60, color: 'grey', fontSize: Theme.height / 30 }} placeholderTextColor={'grey'} />
                        </View> */}
                        {/* <Text style={{ color: Theme.primary, fontSize: Theme.height / 30, textAlign: 'right', fontWeight: 'bold', marginTop: Theme.height / 90 }}>Forgot Password?</Text> */}
                        <TouchableOpacity onPress={() => SigninSubmit()} style={{ width: Theme.width / 3, backgroundColor: Theme.primary, padding: Theme.height / 30, alignItems: 'center', borderRadius: Theme.height / 40, marginTop: Theme.height / 30 }}>
                            {loader ? (
                                <ActivityIndicator size={Theme.height / 35} color={Theme.white} />

                            ) : (
                                <Text style={{ color: Theme.white, fontSize: Theme.height / 30,fontFamily:Theme.fontFamilyG }}>Reset</Text>

                            )}
                        </TouchableOpacity>
                    </View>
                    <Image source={require('../../assets/Group.png')} style={{ height: isTablet?Theme.height / 1.8: Theme.height / 1.2, width: isTablet?Theme.height / 2.2: Theme.height / 1.5, marginTop: isTablet? Theme.height / -8:Theme.height / -4}} />
                </View>
            </ScrollView>

            {/* <Text>Signin</Text> */}
        </View>
    )
}

export default Forgot

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