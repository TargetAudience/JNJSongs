import { View, Text, ImageBackground, StyleSheet, StatusBar, Switch, Linking, Image, Pressable, Button, } from 'react-native'
import React, { useEffect, useState, } from 'react'
import Modal from "react-native-modal";
import Theme from '../../utils/Theme'
import Share from 'react-native-share';
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [infoModal, setInfoModal] = useState(false);
    const [sound, setSound] = useState(true);
    const [music, setMusic] = useState(true);
    const [ofline, setOfline] = useState(false);
    const isTablet = DeviceInfo.isTablet();

    useEffect(() => {
        StatusBar.setHidden(true)
        ByDefault()
    }, [])
    const ByDefault = async () => {
        let sound = await AsyncStorage.getItem("sound");
        let music = await AsyncStorage.getItem("music");
        // console.log(JSON.parse (sound),"sound");
        // console.log(JSON.parse (music),"music");
        if (
            sound == null || music == undefined
        ) {
            setSound(true);
            await AsyncStorage.setItem("sound", JSON.stringify(true))
        }
        else {
            setSound(JSON.parse(sound));
            await AsyncStorage.setItem("sound", sound)
        }
        if (music == null || music == undefined) {
            setMusic(true)
            await AsyncStorage.setItem("music", JSON.stringify(true))

        }
        else {
            setMusic(JSON.parse(music))
            await AsyncStorage.setItem("music", music)
        }
    }
    const funct = async (value, type) => {
        console.log(type);
        if (type == "sound") {
            await AsyncStorage.setItem("sound", JSON.stringify(value))
        }
        else if (type == "music") {
            console.log(value);
            await AsyncStorage.setItem("music", JSON.stringify(value))
        }
    }
    const shar = async () => {
        // const url = require("../../assets/logo.png");
        const title = "Jermy and Jezzy";
        const message = "Download the app from here";
        const options = {
            title,
            // url,
            message,
        };
        await Share.open(options)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <View style={{ flex: 1 }}>
            <StatusBar hidden={true} />
            <ImageBackground style={styles.back} source={require('../../assets/splashBack.png')}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Pressable style={styles.iconback} onPress={() => setInfoModal(true)}>
                            <Image source={require('../../assets/i.png')} style={styles.info} />
                        </Pressable>
                        <Pressable style={styles.iconback} onPress={() => setModalVisible(true)}>
                            <Image source={require('../../assets/setting.png')} style={styles.setting} />
                        </Pressable>
                    </View>
                    <Image source={require('../../assets/logo.png')} style={styles.logo} />
                    <View></View>
                </View>
                <View style={styles.btnView}>
                    <Pressable onPress={() => props.navigation.navigate('Stories')}>
                        <Image source={require('../../assets/Stories_Button.png')} style={styles.btn} />
                    </Pressable>
                    <Pressable onPress={() => props.navigation.navigate('Home')}>
                        <Image source={require('../../assets/Songs_Button.png')} style={styles.btn} />
                    </Pressable>
                </View>
                <Modal
                    transparent={true}
                    animationOut="slideOutLeft"
                    animationIn="slideInLeft"
                    // backdropColor='' 
                    // transparent={true}
                    statusBarTranslucent
                    animationInTiming={800}
                    onBackdropPress={() => setModalVisible(false)}
                    // hasBackdrop={false}
                    style={{marginHorizontal: 0,}}
                    // deviceHeight={Theme.height/}
                    isVisible={modalVisible}>
                    <View style={styles.modalMainView}>
                        <Text style={{ fontSize: Theme.height / 20, color: Theme.secondary, fontFamily: Theme.fontFamilyG, }} >Settings</Text>
                        <View style={styles.modalView}>
                            <Text style={styles.text1}>Sound</Text>
                            <View>
                                <Switch
                                    style={{ marginLeft: Theme.height / -80 }}
                                    trackColor={{ false: Theme.primary, true: "green" }}
                                    thumbColor={sound ? "#f4f3f4" : Theme.grey}
                                    ios_backgroundColor={Theme.grey}
                                    onValueChange={(value) => { setSound(!sound), funct(value, "sound") }}
                                    value={sound}
                                />
                            </View>
                            {!isTablet && (
                                <Text style={{ color: Theme.black, fontFamily: Theme.fontFamilyG, fontSize: Theme.height / 30,marginLeft:Theme.width/10 }}>Help</Text>

                            )}
                        </View>
                        <View style={styles.modalView}>
                            <Text style={styles.text1}>Music</Text>
                            <View>
                                <Switch
                                    // style={{ alignSelf:'flex-start' }}
                                    trackColor={{ false: Theme.primary, true: "green" }}
                                    thumbColor={music ? "#f4f3f4" : Theme.grey}
                                    ios_backgroundColor={Theme.grey}
                                    onValueChange={(value) => { setMusic(!music), funct(value, "music") }}
                                    value={music}
                                />
                            </View>
                            {!isTablet && (
                                <Pressable onPress={() => shar()}><Text style={{ color: Theme.black, fontFamily: Theme.fontFamilyG, fontSize: Theme.height / 30 ,marginLeft:Theme.width/11}}>Share</Text></Pressable>
                            )}
                        </View>
                        <Pressable style={styles.modalView} onPress={async () => { await AsyncStorage.setItem("login", JSON.stringify(false)), setModalVisible(false) }}>
                            <Text style={styles.text1}>Logout</Text>
                        </Pressable>
                        {isTablet && (
                            <View>
                                <Text style={{ color: Theme.black, fontFamily: Theme.fontFamilyGR, fontSize: Theme.height / 30, fontWeight: '500', }}>Help</Text>
                                <Pressable onPress={() => shar()}><Text style={{ color: Theme.black, fontFamily: Theme.fontFamilyGR, fontSize: Theme.height / 30, fontWeight: '500', marginVertical: Theme.height / 40 }}>Share</Text></Pressable>
                                {/* <Text style={{ color: Theme.black, fontFamily: Theme.fontFamilyGR, fontWeight: '500', fontSize: Theme.height / 30 }}>Review</Text> */}
                            </View>
                        )}
                    </View>
                </Modal>
                <Modal
                    transparent={true}
                    animationOut="slideOutLeft"
                    animationIn="slideInLeft"
                    // backdropColor='' 
                    // transparent={true}
                    statusBarTranslucent
                    animationInTiming={800}
                    onBackdropPress={() => setInfoModal(false)}
                    // hasBackdrop={false}
                    // deviceHeight={Theme.height/}
                    style={{marginHorizontal: 0,}}
                    
                    isVisible={infoModal}>
                    <View style={[styles.modalMainView, { width: Theme.width / 1.1, padding: Theme.height / 20,height:isTablet? Theme.height/1.1:Theme.height/1.7, flexDirection: 'row' ,flex:1,}]}>
                        <View style={{ width: Theme.width / 2.7 }}>
                            <Text style={{ fontSize: Theme.height / 15, fontFamily: Theme.fontFamilyG, color: Theme.secondary, }} >Information</Text>
                            <Text style={{ color: Theme.black, textAlign: 'justify', fontFamily: Theme.fontFamilyO, fontSize:isTablet? Theme.height / 42 :Theme.height/36}}>Jeremy and Jazzy is an animated musical adventure series about song and story creation for 3-7 year olds that parents will love just as much. It’s about how feelings become songs, songs become stories, and how music, friendship and collaboration create joy.
                                It’s here Jeremy (a storytelling songwriter), his best friend Jazzy (co-vocalist and dancing queen), Stu (a Studio Rat who loves to listen and help), and Tunebug (a musical recording studio on wheels) make music with the Kids-At-Home.
                                minute Jeremy and Jazzy Short invites viewers to sing, dance and discover stories in songs and wonder in the world.
                                <Text style={{ fontFamily: Theme.fontFamilyO, fontSize: Theme.height / 45 }}>Each 2 x 11 minute</Text>  Jeremy and Jazzy Special invites viewers to create a song with Jeremy and Jazzy and join them on an adventure where their song comes to life in an animated musical!</Text>
                        </View>
                        <View style={{ width: Theme.width / 2.8, marginLeft: Theme.width / 20 }}>
                            {/* <Text style={{ fontSize: Theme.height / 20, color: Theme.secondary, fontWeight: '500' }} >Information</Text> */}
                            <Text style={{ color: Theme.black, fontSize: isTablet? Theme.height / 45:Theme.height/36, marginTop: Theme.height / 80, fontFamily: Theme.fontFamilyO, }}>The goal is to bring kids joy by participating in music.
                                The series stars award-winning musicians Jeremy Fisher (Jeremy) and Aiza Ntibarikure (Jazzy), plus celebrity musical guests. Series music is written and composed by Jeremy Fisher, who also acts as an executive producer. Aiza Ntibarikure is the series co-lead and acts as a consulting producer. A JUNO-nominated afro-pop singer-songwriter, Aiza is also an accomplished actor and host.
                                Jeremy and Jazzy is a 360° children’s entertainment brand which includes music, television, game, book, live performance entertainment, and e-learning, available for worldwide distribution in Fall 2022. Vérité Films holds all rights associated with the brand.</Text>
                            <View style={{ flexDirection: 'row', marginTop: Theme.height / 36 }}>
                                <Pressable onPress={() => Linking.openURL('https://www.facebook.com/JeremyandJazzy/')}>
                                    <Image source={require('../../assets/Fb.png')} style={{ height: Theme.height / 15, width: Theme.height / 30, }} />
                                </Pressable>
                                <Pressable onPress={() => Linking.openURL('https://www.instagram.com/jeremyandjazzy/')}>
                                    <Image source={require('../../assets/Insta.png')} style={{ height: Theme.height / 15, width: Theme.height / 15, marginLeft: Theme.width / 40 }} />
                                </Pressable>
                                <Pressable onPress={() => Linking.openURL('https://twitter.com/jeremyandjazzy')}>
                                    <Image source={require('../../assets/Twitter.png')} style={{ height: Theme.height / 15, width: Theme.height / 15, marginHorizontal: Theme.width / 40 }} />
                                </Pressable>
                                <Pressable onPress={() => Linking.openURL('https://www.youtube.com/jeremyandjazzy')}>
                                    <Image source={require('../../assets/youtube.png')} style={{ height: Theme.height / 10, width: Theme.height / 10, marginTop: Theme.height / -70 }} />
                                </Pressable>
                                <Pressable onPress={() => Linking.openURL('https://jeremyandjazzy.com/')}>
                                    <Image source={require('../../assets/web-icon.webp')} style={{ height: Theme.height / 12, width: Theme.height / 12, marginHorizontal: Theme.width / 40 }} />
                                </Pressable>
                            </View>
                        </View>


                    </View>
                </Modal>
            </ImageBackground>
        </View>
    )
}

export default Splash;

const styles = StyleSheet.create({
    iconback:
    {
        backgroundColor: Theme.secondary,
        marginHorizontal: Theme.width / 99,
        height: Theme.height / 8,
        width: Theme.height / 8,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    setting: {
        height: Theme.height / 16,
        width: Theme.height / 16
    },
    btn: {
        width: Theme.height / 2.4,
        height: Theme.height / 10,
        marginHorizontal: Theme.width / 10
    },
    btnView:
    {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        position: 'absolute',
        bottom: Theme.height / 10,
        alignSelf: 'center'
    },
    info:
    {
        height: Theme.height / 14,
        width: Theme.height / 50
    },
    logo: {
        height: Theme.height / 3.7,
        width: Theme.height / 2.55,
        marginRight: Theme.width / 6,
    },
    back: {
        flex: 1,
        padding: Theme.height / 20
    },
    modalView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: Theme.width / 4.4,
        marginVertical: Theme.height / 50
    },
    modalMainView: {
        backgroundColor: Theme.white,
        width: Theme.width / 1.5,
        padding: Theme.height / 10,
        borderTopRightRadius: 200,
        borderBottomRightRadius: 200
    },
    text1: {
        color: Theme.black,
        fontFamily: Theme.fontFamilyG,
        fontSize: Theme.height / 30,

        width: Theme.width / 5
    }
})