import { Image, StyleSheet, Text, View, TouchableOpacity, Platform, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import Theme from '../../utils/Theme';
import FastImage from 'react-native-fast-image';
import Tts from 'react-native-tts';
import TrackPlayer, { State } from 'react-native-track-player';
import DeviceInfo from 'react-native-device-info';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const isTablet = DeviceInfo.isTablet();

const AfterVideo = (props) => {
  const [press, setPress] = useState(false)
  const [text, setText] = useState("");
  const [val, setVal] = useState(null);
  const [load, setload] = useState(false);
  const [hint, setHint] = useState(false);


  const [arra, setArray] = useState([
    {
      id: 1,
      value: false,
      name: "",
      confetti: false

    },
    {
      id: 2,
      value: false,
      name: "",
      confetti: false



    },
    {
      id: 3,
      value: false,
      name: "",
      confetti: false



    },
    {
      id: 4,
      value: false,
      name: "",
      confetti: false


    },
    {
      id: 5,
      value: false,
      name: "",
      confetti: false
    },
    {
      id: 6,
      value: false,
      name: "",
      confetti: false
    },
    {
      id: 7,
      value: false,
      name: "",
      confetti: false
    }
  ])
  
  const b = props?.route?.params?.back;

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setHidden(true)
        getFlag()
        start()
    }, [])
);
  const getFlag=async()=>{
    // setFlag(JSON.parse( ))
console.log(JSON.parse(await AsyncStorage.getItem("sound")),"sooound"); 
  }
  const start = async () => {
let a=JSON.parse( await AsyncStorage.getItem("sound"))
    await TrackPlayer.reset()
    await TrackPlayer.add({
      id: 2323,
      url: require('../../assets/initial.mp3'),
    });
    if(a){
      console.log("sdas");
      await TrackPlayer.play();
    }
  }
  const fun = async () => {
    let a=JSON.parse( await AsyncStorage.getItem("sound"))

    setTimeout(() => {
      setPress(true);
    }, 1500)
    setload(!load)
    await TrackPlayer.reset()
    await TrackPlayer.add({
      id: 2323,
      url: require('../../assets/sound.mp3'),
    });

if(a){
      await TrackPlayer.play();
    }
    setTimeout(() => {
      setPress(false)
    }, 3000)
  }

  const setAll = async () => {
    let a=JSON.parse( await AsyncStorage.getItem("sound"))

    await TrackPlayer.reset()
    await TrackPlayer.add({
      id: 432,
      url: require("../../assets/try.mp3"),
    });
    if(a){
      await TrackPlayer.play();
    }

    arra.map((item, index) => {
      item.value = false;
      item.confetti = false
      item.name = ""
    })
    setload(!load)
  }
  let id = b.id;
  const funct = (element) => {
    const target = arra?.find((obj) => obj.id === element.id);
    Object.assign(target, element);
    console.log(arra);
    setload(!load)
  }
  const conf = (val) => {
    setTimeout(() => {
      arra[val].confetti = false;
      setload(!load)
    }, 500)
  }
  const voic = async (message) => {
    let a=JSON.parse( await AsyncStorage.getItem("sound"))

    await TrackPlayer.reset()
    await TrackPlayer.add({
      id: message.source,
      url: message.source,
    });
    if(a){
      await TrackPlayer.play();
    }
  }

  const renderElement = () => {

    if (id == '1') {

      return <View style={{ flex: 1 }}>
        <View >
          <FastImage source={{ uri: b.background, priority: FastImage.priority.high }} resizeMode="stretch" style={styles.backImage} >
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 2 : Theme.width / 1.9, zIndex: 1, marginTop: Theme.height / 4.5 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/1/1.1s.mp3") }), funct({ id: 1, value: true, name: "RainDrop", confetti: true }), conf(0), arra[1].value == true && arra[2].value == true && arra[3].value == true && arra[4].value == true ? fun() : null }} >
                <Image source={arra[0].value ? require('../../assets/1/1.1g.png') : require('../../assets/1/1.1.png')} style={{ height: Theme.height / 6, width: Theme.height / 10 }} />

              </TouchableOpacity>
              {arra[0].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}

            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 4 : Theme.width / 3.5, marginTop: val == 1 ? Theme.height / 10 : Theme.height / 14, zIndex: 1, }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/1/1.5s.mp3") }), funct({ id: 2, value: true, name: "umbrella", confetti: true }), conf(1), arra[0].value == true && arra[2].value == true && arra[3].value == true && arra[4].value == true ? fun() : null }} >
                <Image source={arra[1].value ? require('../../assets/1/1.5g.png') : require('../../assets/1/1.5.png')} style={{ height: Theme.height / 4, width: Theme.height / 4 }} />

              </TouchableOpacity>
              {arra[1].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginTop: Theme.height / -17, marginLeft: Theme.width / -6 }} />
              )}

            </View>
            <View style={[styles.ass, { marginLeft: Theme.width / 1.6, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/1/1.3s.mp3") }), funct({ id: 3, value: true, name: "sun", confetti: true }), conf(2), arra[1].value == true && arra[0].value == true && arra[3].value == true && arra[4].value == true ? fun() : null }} >
                <Image source={arra[2].value ? require('../../assets/1/1.3g.png') : require('../../assets/1/1.3.png')} style={{ height: Theme.height / 5, width: Theme.height / 4.7 }} />

              </TouchableOpacity>
              {arra[2].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -6 }} />
              )}

            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 2.5 : Theme.width / 2.5, marginTop: Theme.height / 2.7, zIndex: 1, }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/1/1.2s.mp3") }), funct({ id: 4, value: true, name: "salmon", confetti: true }), conf(3), arra[1].value == true && arra[2].value == true && arra[0].value == true && arra[4].value == true ? fun() : null }} >
                <Image source={arra[3].value ? require('../../assets/1/1.2g.png') : require('../../assets/1/1.2.png')} style={{ height: Theme.height / 6, width: Theme.height / 7 }} />

              </TouchableOpacity>
              {arra[3].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 4 : Theme.width / 3.9, marginTop: Theme.height / 2.3, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/1/1.4s.mp3") }), funct({ id: 5, value: true, name: "ukulele", confetti: true }), conf(4), arra[1].value == true && arra[2].value == true && arra[3].value == true && arra[0].value == true ? fun() : null }} >
                <Image source={arra[4].value ? require('../../assets/1/1.4g.png') : require('../../assets/1/1.4.png')} style={{ height: Theme.height / 6, width: Theme.height / 9 }} />

              </TouchableOpacity>
              {arra[4].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginTop: Theme.height / -12, marginLeft: Theme.width / -5 }} />
              )}
            </View>
          </FastImage>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: Theme.height / 70 }}>
          <TouchableOpacity activeOpacity={0.5} onPress={() => setAll()}>
            <Image source={require('../../assets/replay.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginLeft: Theme.width / 50 }} />
          </TouchableOpacity>
          <View >
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/1/1.1s.mp3") })}>
                <Text style={arra[0].name == "RainDrop" ? styles.redText : styles.greyText}>RainDrop</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/1/1.5s.mp3") })}>
                <Text style={arra[1].name == "umbrella" ? styles.redText : styles.greyText}>umbrella</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/1/1.3s.mp3") })}>
                <Text style={arra[2].name == "sun" ? styles.redText : styles.greyText}>Sun</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/1/1.2s.mp3") })}>
                <Text style={arra[3].name == "salmon" ? styles.redText : styles.greyText}>salmon</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/1/1.4s.mp3") })}>
                <Text style={arra[4].name == "ukulele" ? styles.redText : styles.greyText}>ukulele</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.navigate('Home')}>
            <Image source={require('../../assets/cross.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginRight: Theme.width / 20 }} />
          </TouchableOpacity>
        </View>
      </View>
    }
    if (id == '15') {


      return <View style={{ flex: 1 }}>
        <View >
          <FastImage source={{ uri: b.background, priority: FastImage.priority.high }} resizeMode="stretch" style={styles.backImage} >
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.8 : Theme.width / 1.7, zIndex: 1, marginTop: Theme.height / 1.9 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={arra[0].value ? null : () => { voic({ source: require("../../assets/31/31.1s.mp3") }), funct({ id: 1, value: true, name: "Basket", confetti: true }), conf(0), arra[1].value == true && arra[2].value == true && arra[3].value == true && arra[4].value == true ? fun() : null }} >
                <Image source={arra[0].value ? require('../../assets/31/31.1g.png') : require('../../assets/31/31.1.png')} style={{ height: Theme.height / 6, width: Theme.height / 5.6 }} />
              </TouchableOpacity>
              {arra[0].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.3 : Theme.width / 1.2, marginTop: val == 1 ? Theme.height / 1.7 : Theme.height / 1.7, zIndex: 1, }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/31/31.5s.mp3") }), funct({ id: 2, value: true, name: "Spatula", confetti: true }), conf(1), arra[0].value == true && arra[2].value == true && arra[3].value == true && arra[4].value == true ? fun() : null }} >
                <Image source={arra[1].value ? require('../../assets/31/31.5g.png') : require('../../assets/31/31.5.png')} style={{ height: Theme.height / 10, width: Theme.height / 3.5 }} />

              </TouchableOpacity>
              {arra[1].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginTop: Theme.height / -17, marginLeft: Theme.width / -6 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 30.6 : Theme.width / 15.6, zIndex: 1, marginTop: Theme.height / 2 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/31/31.3s.mp3") }), funct({ id: 3, value: true, name: "Soup", confetti: true }), conf(2), arra[1].value == true && arra[0].value == true && arra[3].value == true && arra[4].value == true ? fun() : null }} >
                <Image source={arra[2].value ? require('../../assets/31/31.3g.png') : require('../../assets/31/31.3.png')} style={{ height: Theme.height / 13, width: Theme.height / 6 }} />

              </TouchableOpacity>
              {arra[2].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -6 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.23 : Theme.width / 1.23, marginTop: Theme.height / 5.3, zIndex: 1, }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/31/31.2s.mp3") }), funct({ id: 4, value: true, name: "Bat", confetti: true }), conf(3), arra[1].value == true && arra[2].value == true && arra[0].value == true && arra[4].value == true ? fun() : null }} >
                <Image source={arra[3].value ? require('../../assets/31/31.2g.png') : require('../../assets/31/31.2.png')} style={{ height: Theme.height / 5, width: Theme.height / 6 }} />

              </TouchableOpacity>
              {arra[3].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.7 : Theme.width / 1.6, marginTop: Theme.height / 5.5, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/31/31.4s.mp3") }), funct({ id: 5, value: true, name: "Doctor", confetti: true }), conf(4), arra[1].value == true && arra[2].value == true && arra[3].value == true && arra[0].value == true ? fun() : null }} >
                <Image source={arra[4].value ? require('../../assets/31/31.4g.png') : require('../../assets/31/31.4.png')} style={{ height: Theme.height / 3, width: Theme.height / 6.3 }} />

              </TouchableOpacity>
              {arra[4].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginTop: Theme.height / -12, marginLeft: Theme.width / -5 }} />
              )}
            </View>
          </FastImage>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: Theme.height / 70 }}>
          <TouchableOpacity activeOpacity={0.5} onPress={() => setAll()}>
            <Image source={require('../../assets/replay.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginLeft: Theme.width / 50 }} />
          </TouchableOpacity>
          <View >
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/31/31.1s.mp3") })}>
                <Text style={arra[0].name == "Basket" ? styles.redText : styles.greyText}>Basket</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/31/31.5s.mp3") })}>
                <Text style={arra[1].name == "Spatula" ? styles.redText : styles.greyText}>Spatula</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/31/31.3s.mp3") })}>
                <Text style={arra[2].name == "Soup" ? styles.redText : styles.greyText}>Soup</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/31/31.2s.mp3") })}>
                <Text style={arra[3].name == "Bat" ? styles.redText : styles.greyText}>Bat</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/31/31.4s.mp3") })}>
                <Text style={arra[4].name == "Doctor" ? styles.redText : styles.greyText}>Doctor</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.navigate('Home')}>
            <Image source={require('../../assets/cross.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginRight: Theme.width / 20 }} />
          </TouchableOpacity>
        </View>

      </View>
    }
    else if (id == "2") {
      return <View style={{ flex: 1 }}>
        <View >
          <FastImage source={{ uri: b.background, priority: FastImage.priority.high }} resizeMode="stretch" style={styles.backImage} >
            <View style={[styles.ass, arra[0].value ? { marginLeft: isTablet ? Theme.width / 5 : Theme.width / 4.2, zIndex: 1, marginTop: Theme.height / 6 } : { marginLeft: isTablet ? Theme.width / 4 : Theme.width / 3.6, zIndex: 1, marginTop: Theme.height / 3.2 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/2/2.1s.mp3") }), funct({ id: 1, value: true, name: "Apple", confetti: true }), conf(0), arra[1].value == true && arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[0].value ? require('../../assets/2/2.1g.png') : require('../../assets/2/2.1.png')} style={arra[0].value ? { height: Theme.height / 2.6, width: Theme.height / 3.6 } : { height: Theme.height / 10, width: Theme.height / 10 }} />
              </TouchableOpacity>
              {arra[0].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.6 : Theme.width / 1.5, marginTop: arra[1].value ? Theme.height / 1.8 : Theme.height / 1.8, zIndex: 1, }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/2/2.5s.mp3") }), funct({ id: 2, value: true, name: "Flower", confetti: true }), conf(1), arra[0].value == true && arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[1].value ? require('../../assets/2/2.5g.png') : require('../../assets/2/2.5.png')} style={{ height: Theme.height / 4, width: Theme.height / 4.7 }} />
              </TouchableOpacity>
              {arra[1].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: arra[2].value ? Theme.width / 2.13 : Theme.width / 2.05, marginTop: arra[2].value ? Theme.height / 2.35 : Theme.height / 2.1, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/2/2.3s.mp3") }), funct({ id: 3, value: true, name: "Beehive", confetti: true }), conf(2), arra[1].value == true && arra[0].value == true && arra[3].value == true && arra[4].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[2].value ? require('../../assets/2/2.3g.png') : require('../../assets/2/2.3.png')} style={arra[2].value ? { height: Theme.height / 4, width: Theme.height / 5 } : { height: Theme.height / 7, width: Theme.height / 9 }} />
              </TouchableOpacity>
              {arra[2].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.5 : Theme.width / 1.5, marginTop: Theme.height / 10, zIndex: 1, }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/2/2.2s.mp3") }), funct({ id: 4, value: true, name: "Bee", confetti: true }), conf(3), arra[1].value == true && arra[2].value == true && arra[0].value == true && arra[4].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[3].value ? require('../../assets/2/2.2g.png') : require('../../assets/2/2.2.png')} style={{ height: Theme.height / 5, width: Theme.height / 5 }} />
              </TouchableOpacity>
              {arra[3].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 14.9 : Theme.width / 10, marginTop: Theme.height / 2.2, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/2/2.4s.mp3") }), funct({ id: 5, value: true, name: "Grapevine", confetti: true }), conf(4), arra[1].value == true && arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[4].value ? require('../../assets/2/2.4g.png') : require('../../assets/2/2.4.png')} style={{ height: Theme.height / 4, width: Theme.height / 4 }} />
              </TouchableOpacity>
              {arra[4].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.23 : Theme.width / 1.18, marginTop: Theme.height / 1.6, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/2/2.6s.mp3") }), funct({ id: 6, value: true, name: "Watermelon", confetti: true }), conf(5), arra[1].value == true && arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[0].value == true ? fun() : null }} >
                <Image source={arra[5].value ? require('../../assets/2/2.6g.png') : require('../../assets/2/2.6.png')} style={{ height: arra[5].value ? Theme.height / 10 : Theme.height / 10, width: arra[5].value ? Theme.height / 4 : Theme.height / 4 }} />
              </TouchableOpacity>
              {arra[5].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
          </FastImage>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: Theme.height / 70 }}>
          <TouchableOpacity activeOpacity={0.5} onPress={() => setAll()}>
            <Image source={require('../../assets/replay.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginLeft: Theme.width / 50 }} />
          </TouchableOpacity>

          <View >
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/2/2.4s.mp3") })}>
                <Text style={arra[4].name == "Grapevine" ? styles.redText : styles.greyText}>Grapevine</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/31/31.5s.mp3") })}>
                <Text style={arra[3].name == "Bee" ? styles.redText : styles.greyText}>Bee</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/2/2.6s.mp3") })}>
                <Text style={arra[5].name == "Watermelon" ? styles.redText : styles.greyText}>Watermelon</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/2/2.1s.mp3") })}>
                <Text style={arra[0].name == "Apple" ? styles.redText : styles.greyText}>Apple</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/2/2.3s.mp3") })}>
                <Text style={arra[2].name == "Beehive" ? styles.redText : styles.greyText}>Beehive</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/2/2.5s.mp3") })}>
                <Text style={arra[1].name == "Flower" ? styles.redText : styles.greyText}>Flower</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.navigate('Home')}>
            <Image source={require('../../assets/cross.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginRight: Theme.width / 20 }} />
          </TouchableOpacity>
        </View>


      </View>
    }
    else if (id == "6") {

      return <View style={{ flex: 1 }}>
        <View >
          <FastImage source={{ uri: b.background, priority: FastImage.priority.high }} resizeMode="stretch" style={styles.backImage} >
            <TouchableOpacity activeOpacity={0.5} onPress={() => setHint(true)} style={{ alignSelf: 'flex-end' }}>
            </TouchableOpacity>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 4 : Theme.width / 3.6, zIndex: 1, marginTop: Theme.height / 14 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => {
                voic({ source: require("../../assets/4/4.3s.mp3") }), funct({ id: 1, value: true, name: "ButterFly", confetti: true }), conf(0), arra[1].value == true && arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[5].value == true ? fun() : null
              }} >
                <Image source={arra[0].value ? require('../../assets/4/4.3g.png') : require('../../assets/4/4.3.png')} style={{ height:arra[0].value? Theme.height / 9:Theme.height / 10, width: arra[0].value? Theme.height / 5:Theme.height / 6 }} />
              </TouchableOpacity>
              {arra[0].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.4 : Theme.width / 1.4, marginTop: Theme.height / 2.5, zIndex: 1, }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => {
                voic({ source: require("../../assets/4/4.6s.mp3") }), funct({ id: 2, value: true, name: "Tambourine", confetti: true }), conf(1), arra[0].value == true && arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[5].value == true ? fun() : null
              }} >
                <Image source={arra[1].value ? require('../../assets/4/4.6g.png') : require('../../assets/4/4.6.png')} style={{ height: Theme.height / 11, width: Theme.height / 11 }} />
              </TouchableOpacity>
              {arra[1].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: Theme.width / 5.05, marginTop: Theme.height / 2.4, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => {
                voic({ source: require("../../assets/4/4.1s.mp3") }), funct({ id: 3, value: true, name: "Ball", confetti: true }), conf(2), arra[1].value == true && arra[0].value == true && arra[3].value == true && arra[4].value == true && arra[5].value == true ? fun() : null
              }} >
                <Image source={arra[2].value ? require('../../assets/4/4.1g.png') : require('../../assets/4/4.1.png')} style={{ height: Theme.height / 13, width: Theme.height / 13 }} />
              </TouchableOpacity>
              {arra[2].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -8 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 3.8 : Theme.width / 3.8, marginTop: Theme.height / 2, zIndex: 1, }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => {
                voic({ source: require("../../assets/4/4.2s.mp3") }), funct({ id: 4, value: true, name: "Bee", confetti: true }), conf(3), arra[1].value == true && arra[2].value == true && arra[0].value == true && arra[4].value == true && arra[5].value == true ? fun() : null
              }} >
                <Image source={arra[3].value ? require('../../assets/4/4.2g.png') : require('../../assets/4/4.2.png')} style={{ height: Theme.height / 4, width: Theme.height / 7 }} />
              </TouchableOpacity>
              {arra[3].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.3 : Theme.width / 1.24, marginTop: Theme.height / 3.2, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => {
                voic({ source: require("../../assets/4/4.4s.mp3") }), funct({ id: 5, value: true, name: "Caterpillar", confetti: true }), conf(4), arra[1].value == true && arra[2].value == true && arra[3].value == true && arra[0].value == true && arra[5].value == true ? fun() : null
              }} >
                <Image source={arra[4].value ? require('../../assets/4/4.4g.png') : require('../../assets/4/4.4.png')} style={{ height: Theme.height / 8, width: Theme.height / 4 }} />
              </TouchableOpacity>
              {arra[4].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 4 : Theme.width / 4, marginTop: Theme.height / 5, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => {
                voic({ source: require("../../assets/4/4.5s.mp3") }), funct({ id: 6, value: true, name: "Stinkbug", confetti: true }), conf(5), arra[1].value == true && arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[0].value == true ? fun() : null
              }} >
                <Image source={arra[5].value ? require('../../assets/4/4.5g.png') : require('../../assets/4/4.5.png')} style={{ height: Theme.height / 10, width: Theme.height / 12 }} />
              </TouchableOpacity>
              {arra[5].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>

          </FastImage>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: Theme.height / 70 }}>
          <TouchableOpacity activeOpacity={0.5} onPress={() => setAll()}>
            <Image source={require('../../assets/replay.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginLeft: Theme.width / 50 }} />
          </TouchableOpacity>
          <View >
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/4/4.3s.mp3") })}>
                <Text style={arra[0].name == "ButterFly" ? styles.redText : styles.greyText}>ButterFly</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/4/4.5s.mp3") })}>
                <Text style={arra[5].name == "Stinkbug" ? styles.redText : styles.greyText}>Stinkbug</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/4/4.1s.mp3") })}>
                <Text style={arra[2].name == "Ball" ? styles.redText : styles.greyText}>Ball</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/4/4.4s.mp3") })}>
                <Text style={arra[4].name == "Caterpillar" ? styles.redText : styles.greyText}>Caterpillar</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/4/4.2s.mp3") })}>
                <Text style={arra[3].name == "Bee" ? styles.redText : styles.greyText}>Bee</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/4/4.6s.mp3") })}>
                <Text style={arra[1].name == "Tambourine" ? styles.redText : styles.greyText}>Tambourine</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.navigate('Home')}>
            <Image source={require('../../assets/cross.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginRight: Theme.width / 20 }} />
          </TouchableOpacity>
        </View>
      </View>
    }
    else if (id == "7") {

      return <View style={{ flex: 1 }}>
        <View >
          <FastImage source={{ uri: b.background, priority: FastImage.priority.high }} resizeMode="stretch" style={styles.backImage} >
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 3 : Theme.width / 2.9, zIndex: 1, marginTop: Theme.height / 2.6 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/3/3.3s.mp3") }), funct({ id: 1, value: true, name: "Cocoon" }), arra[1].value == true && arra[2].value == true && arra[3].value == true && arra[4].value == true ? fun() : null }} >
                <Image source={arra[0].value ? require('../../assets/3/3.3g.png') : require('../../assets/3/3.3.png')} style={{ height: Theme.height / 9, width: Theme.height / 15 }} />
              </TouchableOpacity>
              {arra[0].value && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 4, width: Theme.width / 4, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: Theme.width / 14, marginTop: Theme.height / 4, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/3/3.1s.mp3") }), funct({ id: 2, value: true, name: "ButterFly" }), arra[0].value == true && arra[2].value == true && arra[3].value == true && arra[4].value == true ? fun() : null }} >
                <Image source={arra[1].value ? require('../../assets/3/3.1g.png') : require('../../assets/3/3.1.png')} style={{ height: Theme.height / 12, width: Theme.height / 8 }} />
              </TouchableOpacity>
              {arra[1].value && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 3, width: Theme.width / 3, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.6 : Theme.width / 1.6, marginTop: Theme.height / 17, zIndex: 1, }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/3/3.2s.mp3") }), funct({ id: 3, value: true, name: "Caterpillar", }), arra[0].value == true && arra[1].value == true && arra[3].value == true && arra[4].value == true ? fun() : null }} >
                <Image source={arra[2].value ? require('../../assets/3/3.2g.png') : require('../../assets/3/3.2.png')} style={{ height: Theme.height / 10, width: Theme.height / 12 }} />
              </TouchableOpacity>
              {arra[2].value && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 3, width: Theme.width / 3, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.9 : Theme.width / 1.8, marginTop: Theme.height / 1.9, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/3/3.4s.mp3") }), funct({ id: 4, value: true, name: "Leaf" }), arra[2].value == true && arra[1].value == true && arra[0].value == true && arra[4].value == true ? fun() : null }} >
                <Image source={arra[3].value ? require('../../assets/3/3.4g.png') : require('../../assets/3/3.4.png')} style={{ height: Theme.height / 13, width: Theme.height / 8 }} />
              </TouchableOpacity>
              {arra[3].value && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 3, width: Theme.width / 3, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 5 : Theme.width / 5, marginTop: Theme.height / 1.8, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={arra[4].value ? null : () => { voic({ source: require("../../assets/3/3.5s.mp3") }), setText("Tambourine"), funct({ id: 5, value: true, name: "Tambourine" }), arra[2].value == true && arra[3].value == true && arra[1].value == true && arra[0].value == true ? fun() : null }} >
                <Image source={arra[4].value ? require('../../assets/3/3.5g.png') : require('../../assets/3/3.5.png')} style={{ height: Theme.height / 13, width: Theme.height / 13 }} />
              </TouchableOpacity>
              {arra[4].value && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 3, width: Theme.width / 4, marginLeft: Theme.width / -5 }} />
              )}
            </View>

          </FastImage>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: Theme.height / 70 }}>
          <TouchableOpacity activeOpacity={0.5} onPress={() => setAll()}>
            <Image source={require('../../assets/replay.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginLeft: Theme.width / 50 }} />
          </TouchableOpacity>
          <View >
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/3/3.3s.mp3") })}>
                <Text style={arra[0].name == "Cocoon" ? styles.redText : styles.greyText}>Cocoon</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/3/3.2s.mp3") })}>
                <Text style={arra[2].name == "Caterpillar" ? styles.redText : styles.greyText}>Caterpillar</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/3/3.1s.mp3") })}>
                <Text style={arra[1].name == "ButterFly" ? styles.redText : styles.greyText}>ButterFly</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/3/3.4s.mp3") })}>
                <Text style={arra[3].name == "Leaf" ? styles.redText : styles.greyText}>Leaf</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/3/3.5s.mp3") })}>
                <Text style={arra[4].name == "Tambourine" ? styles.redText : styles.greyText}>Tambourine</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.navigate('Home')}>
            <Image source={require('../../assets/cross.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginRight: Theme.width / 20 }} />
          </TouchableOpacity>
        </View>
      </View>
    }
    else if (id == "8") {

      return <View style={{ flex: 1 }}>
        <View >
          <FastImage source={{ uri: b.background, priority: FastImage.priority.high }} resizeMode="stretch"  style={styles.backImage} >
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 5 : Theme.width / 4.5, zIndex: 1, marginTop: Theme.height / 10 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/5/5.3s.mp3") }), funct({ id: 1, value: true, name: "Guitar", confetti: true }), conf(0), arra[1].value == true && arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[0].value ? require('../../assets/5/5.3g.png') : require('../../assets/5/5.3.png')} style={{ height: Theme.height / 7, width: Theme.height / 10 }} />
              </TouchableOpacity>
              {arra[0].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -6 }} />
              )}
            </View>

            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.43 : Theme.width / 1.42, marginTop: Theme.height / 7.1, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/5/5.1s.mp3") }), funct({ id: 3, value: true, name: "Apple", confetti: true }), conf(2), arra[0].value == true && arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[2].value ? require('../../assets/5/5.1g.png') : require('../../assets/5/5.1.png')} style={{ height: Theme.height / 24, width: Theme.height / 22 }} />
              </TouchableOpacity>
              {arra[2].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -6 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.23 : Theme.width / 1.2, marginTop: Theme.height / 2.5, zIndex: 1, }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/5/5.2s.mp3") }), funct({ id: 4, value: true, name: "Bicycle", confetti: true }), conf(3), arra[1].value == true && arra[2].value == true && arra[0].value == true && arra[4].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[3].value ? require('../../assets/5/5.2g.png') : require('../../assets/5/5.2.png')} style={{ height: Theme.height / 7.9, width: Theme.height / 5 }} />
              </TouchableOpacity>
              {arra[3].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -6 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? arra[4].value?  Theme.width / 15: Theme.width / 13 : Theme.width / 15, marginTop: arra[4].value? Theme.height / 2.2:Theme.height / 2.14, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/5/5.4s.mp3") }), funct({ id: 5, value: true, name: "Turtle", confetti: true }), conf(4), arra[1].value == true && arra[2].value == true && arra[3].value == true && arra[0].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[4].value ? require('../../assets/5/5.4g.png') : require('../../assets/5/5.4.png')} style={{ height:arra[4].value? Theme.height / 5 :Theme.height/5.5, width:arra[4].value? Theme.height / 7:Theme.height/8 }} />
              </TouchableOpacity>
              {arra[4].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -6 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.7 : Theme.width / 1.6, marginTop: Theme.height / 2.3, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/5/5.5s.mp3") }), funct({ id: 6, value: true, name: "Guy", confetti: true }), conf(5), arra[1].value == true && arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[0].value == true ? fun() : null }} >
                <Image source={arra[5].value ? require('../../assets/5/5.5g.png') : require('../../assets/5/5.5.png')} style={{ height: Theme.height / 4, width: Theme.height / 9 }} />
              </TouchableOpacity>
              {arra[5].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -6 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 2.5 : Theme.width / 2.43, marginTop: Theme.height / 2.4, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/5/5.6s.mp3") }), funct({ id: 2, value: true, name: "Sandwich", confetti: true }), conf(1), arra[0].value == true && arra[2].value == true && arra[3].value == true && arra[0].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[1].value ? require('../../assets/5/5.6g.png') : require('../../assets/5/5.6.png')} style={{ height: Theme.height / 17, width: Theme.height / 20 }} />
              </TouchableOpacity>
              {arra[1].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -6, marginTop: Theme.height / -20 }} />
              )}
            </View>
          </FastImage>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: Theme.height / 70 }}>
          <TouchableOpacity activeOpacity={0.5} onPress={() => setAll()}>
            <Image source={require('../../assets/replay.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginLeft: Theme.width / 50 }} />
          </TouchableOpacity>

          <View >
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/5/5.3s.mp3") })}>
                <Text style={arra[0].name == "Guitar" ? styles.redText : styles.greyText}>Guitar</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/5/5.2s.mp3") })}>
                <Text style={arra[3].name == "Bicycle" ? styles.redText : styles.greyText}>Bicycle</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/5/5.1s.mp3") })}>
                <Text style={arra[2].name == "Apple" ? styles.redText : styles.greyText}>Apple</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/5/5.4s.mp3") })}>
                <Text style={arra[4].name == "Turtle" ? styles.redText : styles.greyText}>Turtle</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/5/5.5s.mp3") })}>
                <Text style={arra[5].name == "Guy" ? styles.redText : styles.greyText}>Guy</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/5/5.6s.mp3") })}>
                <Text style={arra[1].name == "Sandwich" ? styles.redText : styles.greyText}>Sandwich</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.navigate('Home')}>
            <Image source={require('../../assets/cross.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginRight: Theme.width / 20 }} />
          </TouchableOpacity>
        </View>
      </View>
    }
    else if (id == "9") {
      return <View style={{ flex: 1 }}>
        <View >
          <FastImage source={{ uri: b.background, priority: FastImage.priority.high }} resizeMode="stretch" style={styles.backImage} >
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 7 : Theme.width / 6.7, zIndex: 1, marginTop: Theme.height / 8 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => {
                 voic({ source: require("../../assets/7/7.3s.mp3") }),
                funct({ id: 1, value: true, name: "Harmonica", confetti: true }), conf(0), arra[1].value == true && arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[5].value == true ? fun() : null
              }} >
                <Image source={arra[0].value ? require('../../assets/7/7.3g.png') : require('../../assets/7/7.3.png')} style={{ height: Theme.height / 20, width: Theme.height / 10 }} />
              </TouchableOpacity>
              {arra[0].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>

            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 2.4 : Theme.width / 2.4, marginTop: Theme.height / 2.4, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => {
                voic({ source: require("../../assets/7/7.1s.mp3") }), 
                funct({ id: 3, value: true, name: "Brush", confetti: true }), conf(2), arra[1].value == true && arra[0].value == true && arra[3].value == true && arra[4].value == true && arra[5].value == true ? fun() : null
              }} >
                <Image source={arra[2].value ? require('../../assets/7/7.1g.png') : require('../../assets/7/7.1.png')} style={{ height: Theme.height / 8, width: Theme.height / 16 }} />
              </TouchableOpacity>
              {arra[2].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.6 : Theme.width / 1.6, marginTop: Theme.height / 8.5, zIndex: 1, }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => {
                voic({ source: require("../../assets/7/7.2s.mp3") }),
                funct({ id: 4, value: true, name: "Bubble", confetti: true }), conf(3), arra[1].value == true && arra[2].value == true && arra[0].value == true && arra[4].value == true && arra[5].value == true ? fun() : null
              }} >
                <Image source={arra[3].value ? require('../../assets/7/7.2g.png') : require('../../assets/7/7.2.png')} style={{ height: Theme.height / 7.9, width: Theme.height / 8 }} />
              </TouchableOpacity>
              {arra[3].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.2 : Theme.width / 1.15, marginTop: Theme.height / 2.9, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => {
                 voic({ source: require("../../assets/7/7.4s.mp3") }),
                funct({ id: 5, value: true, name: "Maracas", confetti: true }), conf(4), arra[1].value == true && arra[2].value == true && arra[3].value == true && arra[0].value == true && arra[5].value == true ? fun() : null
              }} >
                <Image source={arra[4].value ? require('../../assets/7/7.4g.png') : require('../../assets/7/7.4.png')} style={{ height: Theme.height / 8, width: Theme.height / 6 }} />
              </TouchableOpacity>
              {arra[4].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 2.26 : Theme.width / 2.19, marginTop: Theme.height / 4, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => {
                voic({ source: require("../../assets/7/7.5s.mp3") }),
                funct({ id: 6, value: true, name: "Sponge", confetti: true }), conf(5), arra[1].value == true && arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[0].value == true ? fun() : null
              }} >
                <Image source={arra[5].value ? require('../../assets/7/7.5g.png') : require('../../assets/7/7.5.png')} style={{ height: Theme.height / 15, width: Theme.height / 12 }} />
              </TouchableOpacity>
              {arra[5].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.5 : Theme.width / 1.4, marginTop: Theme.height / 2, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => {
                voic({ source: require("../../assets/7/7.6s.mp3") }), 
                funct({ id: 2, value: true, name: "Tub", confetti: true }), conf(1), arra[0].value == true && arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[5].value == true ? fun() : null
              }} >
                <Image source={arra[1].value ? require('../../assets/7/7.6g.png') : require('../../assets/7/7.6.png')} style={{ height: Theme.height / 4.9, width: Theme.height / 4 }} />
              </TouchableOpacity>
              {arra[1].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>

          </FastImage>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: Theme.height / 70 }}>
          <TouchableOpacity activeOpacity={0.5} onPress={() => setAll()}>
            <Image source={require('../../assets/replay.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginLeft: Theme.width / 50 }} />
          </TouchableOpacity>

          <View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5}
              onPress={() => voic({ source: require("../../assets/7/7.3s.mp3") })}
              >
                <Text style={arra[0].name == "Harmonica" ? styles.redText : styles.greyText}>Harmonica</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5}
               onPress={() => voic({ source: require("../../assets/7/7.2s.mp3") })}
              >
                <Text style={arra[3].name == "Bubble" ? styles.redText : styles.greyText}>Bubble</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5}
              onPress={() => voic({ source: require("../../assets/7/7.1s.mp3") })}
              >
                <Text style={arra[2].name == "Brush" ? styles.redText : styles.greyText}>Brush</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5}
              onPress={() => voic({ source: require("../../assets/7/7.4s.mp3") })}
              >
                <Text style={arra[4].name == "Maracas" ? styles.redText : styles.greyText}>Maracas</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5}
              onPress={() => voic({ source: require("../../assets/7/7.5s.mp3") })}
              >
                <Text style={arra[5].name == "Sponge" ? styles.redText : styles.greyText}>Sponge</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5}
               onPress={() => voic({ source: require("../../assets/7/7.6s.mp3") })}
              >
                <Text style={arra[1].name == "Tub" ? styles.redText : styles.greyText}>Tub</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.navigate('Home')}>
            <Image source={require('../../assets/cross.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginRight: Theme.width / 20 }} />
          </TouchableOpacity>
        </View>


      </View>
    }
    else if (id == "10") {
      return <View style={{ flex: 1 }}>
        <View >
          <FastImage source={{ uri: b.background, priority: FastImage.priority.high }} resizeMode="stretch" style={styles.backImage} >
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.12 : Theme.width / 1.11, zIndex: 1, marginTop: Theme.height / 4.6 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/6/6.3s.mp3") }), funct({ id: 1, value: true, name: "Salmon", confetti: true }), conf(0), arra[5].value == true && arra[2].value == true && arra[3].value == true && arra[4].value == true ? fun() : null }} >
                <Image source={arra[0].value ? require('../../assets/6/6.3g.png') : require('../../assets/6/6.3.png')} style={{ height: Theme.height / 5.9, width: Theme.height / 9 }} />
              </TouchableOpacity>
              {arra[0].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>

            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.56 : Theme.width / 1.45, marginTop: Theme.height / 2.6, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/6/6.1s.mp3") }), funct({ id: 3, value: true, name: "Bear", confetti: true }), conf(2), arra[5].value == true && arra[0].value == true && arra[3].value == true && arra[4].value == true ? fun() : null }} >
                <Image source={arra[2].value ? require('../../assets/6/6.1g.png') : require('../../assets/6/6.1.png')} style={{ height: Theme.height / 3.6, width: Theme.height / 5 }} />
              </TouchableOpacity>
              {arra[2].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 23.6 : Theme.width / 23.6, marginTop: Theme.height / 10.5, zIndex: 1, }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/6/6.2s.mp3") }), funct({ id: 4, value: true, name: "ButterFly", confetti: true }), conf(3), arra[5].value == true && arra[2].value == true && arra[0].value == true && arra[4].value == true ? fun() : null }} >
                <Image source={arra[3].value ? require('../../assets/6/6.2g.png') : require('../../assets/6/6.2.png')} style={{ height: Theme.height / 7.9, width: Theme.height / 2.9 }} />
              </TouchableOpacity>
              {arra[3].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 2.3 : Theme.width / 2, marginTop: Theme.height / 4, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/6/6.4s.mp3") }), funct({ id: 5, value: true, name: "Tunepub", confetti: true }), conf(4), arra[5].value == true && arra[2].value == true && arra[3].value == true && arra[0].value == true ? fun() : null }} >
                <Image source={arra[4].value ? require('../../assets/6/6.4g.png') : require('../../assets/6/6.4.png')} style={{ height: Theme.height / 4.2, width: Theme.height / 3.2 }} />
              </TouchableOpacity>
              {arra[4].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 3.76 : Theme.width / 3.39, marginTop: Theme.height / 2.3, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/6/6.5s.mp3") }), funct({ id: 6, value: true, name: "Turtle", confetti: true }), conf(0), arra[0].value == true && arra[2].value == true && arra[3].value == true && arra[4].value == true ? fun() : null }} >
                <Image source={arra[5].value ? require('../../assets/6/6.5g.png') : require('../../assets/6/6.5.png')} style={{ height: Theme.height / 8, width: Theme.height / 12 }} />
              </TouchableOpacity>
              {arra[5].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
          </FastImage>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: Theme.height / 70 }}>
          <TouchableOpacity activeOpacity={0.5} onPress={() => setAll()}>
            <Image source={require('../../assets/replay.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginLeft: Theme.width / 50 }} />
          </TouchableOpacity>
          <View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/6/6.3s.mp3") })}>
                <Text style={arra[0].name == "Salmon" ? styles.redText : styles.greyText}>Salmon</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/6/6.2s.mp3") })}>
                <Text style={arra[3].name == "ButterFly" ? styles.redText : styles.greyText}>ButterFly</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/6/6.1s.mp3") })}>
                <Text style={arra[2].name == "Bear" ? styles.redText : styles.greyText}>Bear</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/6/6.4s.mp3") })}>
                <Text style={arra[4].name == "Tunepub" ? styles.redText : styles.greyText}>Tunepub</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/6/6.5s.mp3") })}>
                <Text style={arra[5].name == "Turtle" ? styles.redText : styles.greyText}>Turtle</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.navigate('Home')}>
            <Image source={require('../../assets/cross.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginRight: Theme.width / 20 }} />
          </TouchableOpacity>
        </View>
      </View>
    }
    else if (id == "11") {

      return <View style={{ flex: 1 }}>
        <View >
          <FastImage source={{ uri: b.background, priority: FastImage.priority.high }} resizeMode="stretch" style={styles.backImage} >
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.6 : Theme.width / 1.5, zIndex: 1, marginTop: Theme.height / 20 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/8/8.3s.mp3") }), funct({ id: 1, value: true, name: "Sun", confetti: true }), conf(0), arra[5].value == true && arra[2].value == true && arra[3].value == true && arra[4].value == true ? fun() : null }} >
                <Image source={arra[0].value ? require('../../assets/8/8.3g.png') : require('../../assets/8/8.3.png')} style={{ height: Theme.height / 6, width: Theme.height / 5.7 }} />
              </TouchableOpacity>
              {arra[0].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>

            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.2 : Theme.width / 1.14, marginTop: Theme.height / 1.9, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/8/8.1s.mp3") }), funct({ id: 3, value: true, name: "Harmonica", confetti: true }), conf(2), arra[5].value == true && arra[0].value == true && arra[3].value == true && arra[4].value == true ? fun() : null }} >
                <Image source={arra[2].value ? require('../../assets/8/8.1g.png') : require('../../assets/8/8.1.png')} style={{ height: Theme.height / 17, width: Theme.height / 6 }} />
              </TouchableOpacity>
              {arra[2].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.24 : Theme.width / 1.26, marginTop: Theme.height / 2.8, zIndex: 1, }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/8/8.2s.mp3") }), funct({ id: 4, value: true, name: "Maracas", confetti: true }), conf(3), arra[5].value == true && arra[2].value == true && arra[0].value == true && arra[4].value == true ? fun() : null }} >
                <Image source={arra[3].value ? require('../../assets/8/8.2g.png') : require('../../assets/8/8.2.png')} style={{ height: Theme.height / 10, width: Theme.height / 6 }} />
              </TouchableOpacity>
              {arra[3].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 3.4 : Theme.width / 3.2, marginTop: Theme.height / 6, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/8/8.4s.mp3") }), funct({ id: 5, value: true, name: "Toothbrush", confetti: true }), conf(4), arra[5].value == true && arra[2].value == true && arra[3].value == true && arra[0].value == true ? fun() : null }} >
                <Image source={arra[4].value ? require('../../assets/8/8.4g.png') : require('../../assets/8/8.4.png')} style={{ height: Theme.height / 10.5, width: Theme.height / 9 }} />
              </TouchableOpacity>
              {arra[4].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 4.76 : Theme.width / 4.8, marginTop: Theme.height / 2.3, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/8/8.5s.mp3") }), funct({ id: 6, value: true, name: "Two", confetti: true }), conf(5), arra[0].value == true && arra[2].value == true && arra[3].value == true && arra[4].value == true ? fun() : null }} >
                <Image source={arra[5].value ? require('../../assets/8/8.5g.png') : require('../../assets/8/8.5.png')} style={{ height: Theme.height / 7, width: Theme.height / 7 }} />
              </TouchableOpacity>
              {arra[5].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
          </FastImage>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: Theme.height / 70 }}>
          <TouchableOpacity activeOpacity={0.5} onPress={() => setAll()}>
            <Image source={require('../../assets/replay.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginLeft: Theme.width / 50 }} />
          </TouchableOpacity>
          <View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/8/8.3s.mp3") })}>
                <Text style={arra[0].name == "Sun" ? styles.redText : styles.greyText}>Sun</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/8/8.2s.mp3") })}>
                <Text style={arra[3].name == "Maracas" ? styles.redText : styles.greyText}>Maracas</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/8/8.1s.mp3") })}>
                <Text style={arra[2].name == "Harmonica" ? styles.redText : styles.greyText}>Harmonica</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/8/8.4s.mp3") })}>
                <Text style={arra[4].name == "Toothbrush" ? styles.redText : styles.greyText}>Toothbrush</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/8/8.5s.mp3") })}>
                <Text style={arra[5].name == "Two" ? styles.redText : styles.greyText}>Two</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.navigate('Home')}>
            <Image source={require('../../assets/cross.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginRight: Theme.width / 20 }} />
          </TouchableOpacity>
        </View>


      </View>
    }
    else if (id == "5") {

      return <View style={{ flex: 1 }}>
        <View >
          <FastImage source={{ uri: b.background, priority: FastImage.priority.high }} resizeMode="stretch" style={styles.backImage} >
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 3.7 : Theme.width / 3.6, zIndex: 1, marginTop: Theme.height / 2.6 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={val == 0 ? null : () => { voic({ source: require("../../assets/11/11.2s.mp3") }), funct({ id: 1, value: true, name: "Doughnut", confetti: true }), conf(0), arra[5].value == true && arra[2].value == true && arra[3].value == true && arra[4].value == true ? fun() : null }} >
                <Image source={arra[0].value ? require('../../assets/11/11.2g.png') : require('../../assets/11/11.2.png')} style={{ height: Theme.height / 16, width: Theme.height / 13 }} />
              </TouchableOpacity>
              {arra[0].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>

            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 2.2 : Theme.width / 2.1, marginTop: Theme.height / 5, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/11/11.1s.mp3") }), funct({ id: 3, value: true, name: "Boat", confetti: true }), conf(2), arra[5].value == true && arra[0].value == true && arra[3].value == true && arra[4].value == true ? fun() : null }} >
                <Image source={arra[2].value ? require('../../assets/11/11.1g.png') : require('../../assets/11/11.1.png')} style={{ height: Theme.height / 4, width: Theme.height / 4 }} />
              </TouchableOpacity>
              {arra[2].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.19 : Theme.width / 1.17, marginTop: Theme.height / 2.5, zIndex: 1, }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/11/11.3s.mp3") }), funct({ id: 4, value: true, name: "Drums", confetti: true }), conf(3), arra[5].value == true && arra[2].value == true && arra[0].value == true && arra[4].value == true ? fun() : null }} >
                <Image source={arra[3].value ? require('../../assets/11/11.3g.png') : require('../../assets/11/11.3.png')} style={{ height: Theme.height / 10, width: Theme.height / 10 }} />
              </TouchableOpacity>
              {arra[3].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 5.3 : Theme.width / 5.2, marginTop: Theme.height / 1.98, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/11/11.4s.mp3") }), funct({ id: 5, value: true, name: "Heart", confetti: true }), conf(4), arra[5].value == true && arra[2].value == true && arra[3].value == true && arra[0].value == true ? fun() : null }} >
                <Image source={arra[4].value ? require('../../assets/11/11.4g.png') : require('../../assets/11/11.4.png')} style={{ height: Theme.height / 25, width: Theme.height / 25 }} />
              </TouchableOpacity>
              {arra[4].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.5 : Theme.width / 1.3, marginTop: Theme.height / 90, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/11/11.5s.mp3") }), funct({ id: 6, value: true, name: "Rainbow", confetti: true }), conf(5), arra[0].value == true && arra[2].value == true && arra[3].value == true && arra[4].value == true ? fun() : null }} >
                <Image source={arra[5].value ? require('../../assets/11/11.5g.png') : require('../../assets/11/11.5.png')} style={{ height: Theme.height / 5.7, width: Theme.height / 2.3 }} />
              </TouchableOpacity>
              {arra[5].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>


          </FastImage>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: Theme.height / 70 }}>
          <TouchableOpacity activeOpacity={0.5} onPress={() => setAll()}>
            <Image source={require('../../assets/replay.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginLeft: Theme.width / 50 }} />
          </TouchableOpacity>
          <View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/11/11.2s.mp3") })}>
                <Text style={arra[0].name == "Doughnut" ? styles.redText : styles.greyText}>Doughnut</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/11/11.3s.mp3") })}>
                <Text style={arra[3].name == "Drums" ? styles.redText : styles.greyText}>Drums</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/11/11.1s.mp3") })}>
                <Text style={arra[2].name == "Boat" ? styles.redText : styles.greyText}>Boat</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/11/11.4s.mp3") })}>
                <Text style={arra[4].name == "Heart" ? styles.redText : styles.greyText}>Heart</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/11/11.5s.mp3") })}>
                <Text style={arra[5].name == "Rainbow" ? styles.redText : styles.greyText}>Rainbow</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.navigate('Home')}>
            <Image source={require('../../assets/cross.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginRight: Theme.width / 20 }} />
          </TouchableOpacity>
        </View>


      </View>
    }
    else if (id == "13") {


      return <View style={{ flex: 1 }}>

        <View >
          <FastImage source={{ uri: b.background, priority: FastImage.priority.high }} resizeMode="stretch" style={styles.backImage} >
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.2 : Theme.width / 1.2, zIndex: 1, marginTop: Theme.height / 13.6 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/13/13.2s.mp3") }), arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[5].value == true ? fun() : null, voic("Bee"), funct({ id: 1, value: true, name: "Bee", confetti: true }), conf(0) }} >
                <Image source={arra[0].value ? require('../../assets/13/13.2g.png') : require('../../assets/13/13.2.png')} style={{ height: Theme.height / 8, width: Theme.height / 13 }} />
              </TouchableOpacity>
              {arra[0].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>

            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 2.4 : Theme.width / 2.5, marginTop: Theme.height / 4.8, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/13/13.1s.mp3") }), arra[0].value == true && arra[3].value == true && arra[4].value == true && arra[5].value == true ? fun() : null, voic("Baker"), funct({ id: 3, value: true, name: "Baker", confetti: true }), conf(2) }} >
                <Image source={arra[2].value ? require('../../assets/13/13.1g.png') : require('../../assets/13/13.1.png')} style={{ height: Theme.height / 2, width: Theme.height / 3.1 }} />
              </TouchableOpacity>
              {arra[2].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.27 : Theme.width / 1.23, marginTop: Theme.height / 3.7, zIndex: 1, }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/13/13.3s.mp3") }), arra[2].value == true && arra[0].value == true && arra[4].value == true && arra[5].value == true ? fun() : null, voic("Bird"), funct({ id: 4, value: true, name: "Bird", confetti: true }), conf(3) }} >
                <Image source={arra[3].value ? require('../../assets/13/13.3g.png') : require('../../assets/13/13.3.png')} style={{ height: Theme.height / 10, width: Theme.height / 7 }} />
              </TouchableOpacity>
              {arra[3].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 6.3 : Theme.width / 6.2, marginTop: Theme.height / 9.98, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/13/13.4s.mp3") }), arra[2].value == true && arra[3].value == true && arra[0].value == true && arra[5].value == true ? fun() : null, voic("ButterFly"), funct({ id: 5, value: true, name: "ButterFly", confetti: true }), conf(4) }} >
                <Image source={arra[4].value ? require('../../assets/13/13.4g.png') : require('../../assets/13/13.4.png')} style={{ height: Theme.height / 7, width: Theme.height / 2 }} />
              </TouchableOpacity>
              {arra[4].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -3 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 17.5 : Theme.width / 17.3, marginTop: Theme.height / 2.8, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/13/13.5s.mp3") }), arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[0].value == true ? fun() : null, voic("Ladybug"), funct({ id: 6, value: true, name: "Ladybug", confetti: true }), conf(5) }} >
                <Image source={arra[5].value ? require('../../assets/13/13.5g.png') : require('../../assets/13/13.5.png')} style={{ height: Theme.height / 7.7, width: Theme.height / 7.3 }} />
              </TouchableOpacity>
              {arra[5].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
          </FastImage>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: Theme.height / 70 }}>
          <TouchableOpacity activeOpacity={0.5} onPress={() => setAll()}>
            <Image source={require('../../assets/replay.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginLeft: Theme.width / 50 }} />
          </TouchableOpacity>
          <View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/13/13.2s.mp3") })}>
                <Text style={arra[0].name == "Bee" ? styles.redText : styles.greyText}>Bee</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/13/13.3s.mp3") })}>
                <Text style={arra[3].name == "Bird" ? styles.redText : styles.greyText}>Bird</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/13/13.1s.mp3") })}>
                <Text style={arra[2].name == "Baker" ? styles.redText : styles.greyText}>Baker</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/13/13.4s.mp3") })}>
                <Text style={arra[4].name == "ButterFly" ? styles.redText : styles.greyText}>ButterFly</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/13/13.5s.mp3") })}>
                <Text style={arra[5].name == "Ladybug" ? styles.redText : styles.greyText}>Ladybug</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.navigate('Home')}>
            <Image source={require('../../assets/cross.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginRight: Theme.width / 20 }} />
          </TouchableOpacity>
        </View>



      </View>
    }
    else if (id == "12") {

      return <View style={{ flex: 1 }}>
        <View >
          <FastImage source={{ uri: b.background, priority: FastImage.priority.high }} resizeMode="stretch" style={styles.backImage} >
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.85 : Theme.width / 1.77, zIndex: 1, marginTop: Theme.height / 3.8 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/14/14.2s.mp3") }), funct({ id: 1, value: true, name: "Bucket", confetti: true }), conf(0), arra[1].value == true && arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[0].value ? require('../../assets/14/14.2g.png') : require('../../assets/14/14.2.png')} style={{ height: Theme.height / 8, width: Theme.height / 11 }} />
              </TouchableOpacity>
              {arra[0].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>

            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.6 : Theme.width / 1.56, marginTop: Theme.height / 2.7, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/14/14.1s.mp3") }), funct({ id: 3, value: true, name: "Brush", confetti: true }), conf(2), arra[1].value == true && arra[0].value == true && arra[3].value == true && arra[4].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[2].value ? require('../../assets/14/14.1g.png') : require('../../assets/14/14.1.png')} style={{ height: Theme.height / 16, width: Theme.height / 8 }} />
              </TouchableOpacity>
              {arra[2].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.13 : Theme.width / 1.12, marginTop: Theme.height / 3.6, zIndex: 1, }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/14/14.3s.mp3") }), funct({ id: 4, value: true, name: "Dog", confetti: true }), conf(3), arra[1].value == true && arra[2].value == true && arra[0].value == true && arra[4].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[3].value ? require('../../assets/14/14.3g.png') : require('../../assets/14/14.3.png')} style={{ height: Theme.height / 7, width: Theme.height / 9 }} />
              </TouchableOpacity>
              {arra[3].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 6.3 : Theme.width / 6.2, marginTop: Theme.height / 9.98, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/14/14.4s.mp3") }), funct({ id: 5, value: true, name: "Flea", confetti: true }), conf(4), arra[1].value == true && arra[2].value == true && arra[3].value == true && arra[0].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[4].value ? require('../../assets/14/14.4g.png') : require('../../assets/14/14.4.png')} style={{ height: Theme.height / 9, width: Theme.height / 16 }} />
              </TouchableOpacity>
              {arra[4].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 10 : Theme.width / 9, marginTop: Theme.height / 2.4, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/14/14.5s.mp3") }), funct({ id: 6, value: true, name: "Ukelele", confetti: true }), conf(5), arra[1].value == true && arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[0].value == true ? fun() : null }} >
                <Image source={arra[5].value ? require('../../assets/14/14.5g.png') : require('../../assets/14/14.5.png')} style={{ height: Theme.height / 7, width: Theme.height / 7.3 }} />
              </TouchableOpacity>
              {arra[5].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.9 : Theme.width / 1.8, marginTop: Theme.height / 7.8, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/14/14.5s.mp3") }), funct({ id: 2, value: true, name: "Stu", confetti: true }), conf(1), arra[0].value == true && arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[1].value ? require('../../assets/14/14.6.png') : require('../../assets/14/14.6.png')} style={{ height: Theme.height / 7, width: Theme.height / 7 }} />
              </TouchableOpacity>
              {arra[1].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>

          </FastImage>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: Theme.height / 70 }}>
          <TouchableOpacity activeOpacity={0.5} onPress={() => setAll()}>
            <Image source={require('../../assets/replay.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginLeft: Theme.width / 50 }} />
          </TouchableOpacity>
          <View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/14/14.2s.mp3") })}>
                <Text style={arra[0].name == "Bucket" ? styles.redText : styles.greyText}>Bucket</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/14/14.3s.mp3") })}>
                <Text style={arra[3].name == "Dog" ? styles.redText : styles.greyText}>Dog</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/14/14.1s.mp3") })}>
                <Text style={arra[2].name == "Brush" ? styles.redText : styles.greyText}>Brush</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/14/14.4s.mp3") })}>
                <Text style={arra[4].name == "Flea" ? styles.redText : styles.greyText}>Flea</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/14/14.5s.mp3") })}>
                <Text style={arra[5].name == "Ukelele" ? styles.redText : styles.greyText}>Ukelele</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/14/14.5s.mp3") })}>
                <Text style={arra[1].name == "Stu" ? styles.redText : styles.greyText}>Stu</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View >
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.navigate('Home')}>
            <Image source={require('../../assets/cross.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginRight: Theme.width / 20 }} />
          </TouchableOpacity>
        </View>



      </View>
    }
    else if (id == "3") {
      return <View style={{ flex: 1 }}>
        <View >
          <FastImage source={{ uri: b.background, priority: FastImage.priority.high }} resizeMode="stretch" style={styles.backImage} >
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 8.85 : Theme.width / 7.77, zIndex: 1, marginTop: Theme.height / 2.3 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/15/15.2s.mp3") }), funct({ id: 1, value: true, name: "Heart", confetti: true }), conf(0), arra[1].value == true && arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[0].value ? require('../../assets/15/15.2g.png') : require('../../assets/15/15.2.png')} style={{ height: Theme.height / 8, width: Theme.height / 7 }} />
              </TouchableOpacity>
              {arra[0].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>

            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.6 : Theme.width / 1.56, marginTop: Theme.height / 5, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/15/15.1s.mp3") }), funct({ id: 3, value: true, name: "Boat", confetti: true }), conf(2), arra[1].value == true && arra[0].value == true && arra[3].value == true && arra[4].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[2].value ? require('../../assets/15/15.1g.png') : require('../../assets/15/15.1.png')} style={{ height: Theme.height / 3, width: Theme.height / 2.5 }} />
              </TouchableOpacity>
              {arra[2].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.58 : Theme.width / 1.58, marginTop: Theme.height / 3.3, zIndex: 1, }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/15/15.3s.mp3") }), funct({ id: 4, value: true, name: "Icecream", confetti: true }), conf(3), arra[1].value == true && arra[2].value == true && arra[0].value == true && arra[4].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[3].value ? require('../../assets/15/15.3g.png') : require('../../assets/15/15.3.png')} style={{ height: Theme.height / 9, width: Theme.height / 20 }} />
              </TouchableOpacity>
              {arra[3].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 19 : Theme.width / 19, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/15/15.4s.mp3") }), funct({ id: 5, value: true, name: "Rainbow", confetti: true }), conf(4), arra[1].value == true && arra[2].value == true && arra[3].value == true && arra[0].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[4].value ? require('../../assets/15/15.4g.png') : require('../../assets/15/15.4.png')} style={{ height: Theme.height / 2, width: Theme.height / 2 }} />
              </TouchableOpacity>
              {arra[4].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 4.5 : Theme.width / 4.3, marginTop: Theme.height / 2.8, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/15/15.5s.mp3") }), funct({ id: 6, value: true, name: "Xylophone", confetti: true }), conf(5), arra[1].value == true && arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[0].value == true ? fun() : null }} >
                <Image source={arra[5].value ? require('../../assets/15/15.5.png') : require('../../assets/15/15.5.png')} style={{ height: Theme.height / 10, width: Theme.height / 9.3 }} />
              </TouchableOpacity>
              {arra[5].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 6, width: Theme.width / 6, marginLeft: Theme.width / -8 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 4.3 : Theme.width / 4.05, marginTop: Theme.height / 3.9, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/12/12.2s.mp3") }), funct({ id: 2, value: true, name: "JazzyHands", confetti: true }), conf(1), arra[0].value == true && arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[1].value ? require('../../assets/15/15.6.png') : require('../../assets/15/15.6.png')} style={{ height: Theme.height / 7, width: Theme.height / 9 }} />
              </TouchableOpacity>
              {arra[1].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginTop: Theme.height / -10, marginLeft: Theme.width / -8 }} />
              )}
            </View>

          </FastImage>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: Theme.height / 70 }}>
          <TouchableOpacity activeOpacity={0.5} onPress={() => setAll()}>
            <Image source={require('../../assets/replay.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginLeft: Theme.width / 50 }} />
          </TouchableOpacity>

          <View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/15/15.2s.mp3") })}>
                <Text style={arra[0].name == "Heart" ? styles.redText : styles.greyText}>Heart</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/15/15.3s.mp3") })}>
                <Text style={arra[3].name == "Icecream" ? styles.redText : styles.greyText}>Icecream</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/15/15.1s.mp3") })}>
                <Text style={arra[2].name == "Boat" ? styles.redText : styles.greyText}>Boat</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/15/15.4s.mp3") })}>
                <Text style={arra[4].name == "Rainbow" ? styles.redText : styles.greyText}>Rainbow</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/15/15.5s.mp3") })}>
                <Text style={arra[5].name == "Xylophone" ? styles.redText : styles.greyText}>Xylophone</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/12/12.2s.mp3") })}>
                <Text style={arra[1].name == "JazzyHands" ? styles.redText : styles.greyText}>JazzyHands</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.navigate('Home')}>
            <Image source={require('../../assets/cross.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginRight: Theme.width / 20 }} />
          </TouchableOpacity>
        </View>
      </View>
    }
    else if (id == "17") {

      return <View style={{ flex: 1 }}>
        <View >
          <FastImage source={{ uri: b.background, priority: FastImage.priority.high }} resizeMode="stretch" style={styles.backImage} >
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 4.8 : Theme.width / 4.77, zIndex: 1, marginTop: Theme.height / 2.6 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={val == 0 ? null : () => { voic({ source: require("../../assets/17/17.2s.mp3") }), funct({ id: 1, value: true, name: "Bee", confetti: true }), conf(0), arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[0].value ? require('../../assets/17/17.2g.png') : require('../../assets/17/17.2.png')} style={{ height: Theme.height / 6, width: Theme.height / 8 }} />
              </TouchableOpacity>
              {arra[0].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>

            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 2.46 : Theme.width / 2.56, marginTop: Theme.height / 10, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/17/17.1s.mp3") }), funct({ id: 3, value: true, name: "Bat", confetti: true }), conf(2), arra[0].value == true && arra[3].value == true && arra[4].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[2].value ? require('../../assets/17/17.1g.png') : require('../../assets/17/17.1.png')} style={{ height: Theme.height / 5, width: Theme.height / 4.9 }} />
              </TouchableOpacity>
              {arra[2].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 15.48 : Theme.width / 12.58, marginTop: Theme.height / 3.3, zIndex: 1, }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/17/17.3s.mp3") }), funct({ id: 4, value: true, name: "Dog", confetti: true }), conf(3), arra[2].value == true && arra[0].value == true && arra[4].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[3].value ? require('../../assets/17/17.3g.png') : require('../../assets/17/17.3.png')} style={{ height: Theme.height / 6, width: Theme.height / 6 }} />
              </TouchableOpacity>
              {arra[3].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 11 : Theme.width / 12, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/17/17.4s.mp3") }), funct({ id: 5, value: true, name: "Moon", confetti: true }), conf(4), arra[2].value == true && arra[3].value == true && arra[0].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[4].value ? require('../../assets/17/17.4g.png') : require('../../assets/17/17.4.png')} style={ { height: Theme.height / 6, width: Theme.height / 6 }} />
              </TouchableOpacity>
              {arra[4].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.7 : Theme.width / 1.4, marginTop: Theme.height / 3.3, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/17/17.5s.mp3") }), funct({ id: 6, value: true, name: "Rhino", confetti: true }), conf(5), arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[0].value == true ? fun() : null }} >
                <Image source={arra[5].value ? require('../../assets/17/17.5g.png') : require('../../assets/17/17.5.png')} style={{ height: Theme.height / 3, width: Theme.height / 1.8 }} />
              </TouchableOpacity>
              {arra[5].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 6, width: Theme.width / 6, marginLeft: Theme.width / -8 }} />
              )}
            </View>
          </FastImage>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: Theme.height / 70 }}>
          <TouchableOpacity activeOpacity={0.5} onPress={() => setAll()}>
            <Image source={require('../../assets/replay.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginLeft: Theme.width / 50 }} />
          </TouchableOpacity>

          <View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/17/17.2s.mp3") })}>
                <Text style={arra[0].name == "Bee" ? styles.redText : styles.greyText}>Bee</Text>

              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/17/17.3s.mp3") })}>
                <Text style={arra[3].name == "Dog" ? styles.redText : styles.greyText}>Dog</Text>

              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/17/17.1s.mp3") })}>
                <Text style={arra[2].name == "Bat" ? styles.redText : styles.greyText}>Bat</Text>

              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/17/17.4s.mp3") })}>
                <Text style={arra[4].name == "Moon" ? styles.redText : styles.greyText}>Moon</Text>

              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/17/17.5s.mp3") })}>
                <Text style={arra[5].name == "Rhino" ? styles.redText : styles.greyText}>Rhino</Text>

              </TouchableOpacity>

            </View>
          </View>

          <TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.navigate('Home')}>
            <Image source={require('../../assets/cross.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginRight: Theme.width / 20 }} />
          </TouchableOpacity>
        </View>


      </View>
    }
    else if (id == "14") {

      return <View style={{ flex: 1 }}>
        <View >
          <FastImage source={{ uri: b.background, priority: FastImage.priority.high }} resizeMode="stretch" style={styles.backImage} >
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 4.85 : Theme.width / 4.5, zIndex: 1, marginTop: Theme.height / 2.6 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/30/30.2s.mp3") }), funct({ id: 1, value: true, name: "Drums", confetti: true }), conf(0), arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[0].value ? require('../../assets/30/30.2g.png') : require('../../assets/30/30.2.png')} style={{ height: Theme.height / 8, width: Theme.height / 7 }} />
              </TouchableOpacity>
              {arra[0].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>

            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 16.6 : Theme.width / 16.56, marginTop: Theme.height / 16, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/30/30.1s.mp3") }), funct({ id: 3, value: true, name: "Butterfly", confetti: true }), conf(2), arra[0].value == true && arra[3].value == true && arra[4].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[2].value ? require('../../assets/30/30.1g.png') : require('../../assets/30/30.1.png')} style={{ height: Theme.height / 8, width: Theme.height / 5.9 }} />
              </TouchableOpacity>
              {arra[2].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.7 : Theme.width / 1.7, marginTop: Theme.height / 5, zIndex: 1, }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/30/30.3s.mp3") }), funct({ id: 4, value: true, name: "Octopus", confetti: true }), conf(3), arra[2].value == true && arra[0].value == true && arra[4].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[3].value ? require('../../assets/30/30.3g.png') : require('../../assets/30/30.3.png')} style={{ height: Theme.height / 9, width: Theme.height / 6 }} />
              </TouchableOpacity>
              {arra[3].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 3 : Theme.width / 3.3, zIndex: 1, marginTop: Theme.height / 10 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/30/30.4s.mp3") }), funct({ id: 5, value: true, name: "Violine", confetti: true }), conf(4), arra[2].value == true && arra[3].value == true && arra[0].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[4].value ? require('../../assets/30/30.4g.png') : require('../../assets/30/30.4.png')} style={ { height: Theme.height / 5, width: Theme.height / 14 }} />
              </TouchableOpacity>
              {arra[4].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -8 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 6.7 : Theme.width / 6.5, marginTop: Theme.height / 1.97, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/30/30.5s.mp3") }), funct({ id: 6, value: true, name: "Whistle", confetti: true }), conf(5), arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[0].value == true ? fun() : null }} >
                <Image source={arra[5].value ? require('../../assets/30/30.5g.png') : require('../../assets/30/30.5.png')} style={{ height: Theme.height / 17, width: Theme.height / 13 }} />
              </TouchableOpacity>
              {arra[5].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 6, width: Theme.width / 6, marginLeft: Theme.width / -8 }} />
              )}
            </View>

          </FastImage>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: Theme.height / 70 }}>
          <TouchableOpacity activeOpacity={0.5} onPress={() => setAll()}>
            <Image source={require('../../assets/replay.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginLeft: Theme.width / 50 }} />
          </TouchableOpacity>
          <View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/30/30.2s.mp3") })}>
                <Text style={arra[0].name == "Drums" ? styles.redText : styles.greyText}>Drums</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/30/30.3s.mp3") })}>
                <Text style={arra[3].name == "Octopus" ? styles.redText : styles.greyText}>Octopus</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/30/30.1s.mp3") })}>
                <Text style={arra[2].name == "Butterfly" ? styles.redText : styles.greyText}>Butterfly</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/30/30.4s.mp3") })}>
                <Text style={arra[4].name == "Violine" ? styles.redText : styles.greyText}>Violine</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/30/30.5s.mp3") })}>
                <Text style={arra[5].name == "Whistle" ? styles.redText : styles.greyText}>Whistle</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.navigate('Home')}>
            <Image source={require('../../assets/cross.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginRight: Theme.width / 20 }} />
          </TouchableOpacity>
        </View>
      </View>
    }
    else if (id == "18") {

      return <View style={{ flex: 1 }}>
        <View >
          <FastImage source={{ uri: b.background, priority: FastImage.priority.high }} resizeMode="stretch" style={styles.backImage} >
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 9 : Theme.width / 5.77, zIndex: 1, marginTop: Theme.height / 11 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/18/18.2s.mp3") }), funct({ id: 1, value: true, name: "Moon", confetti: true }), conf(0), arra[2].value == true && arra[3].value == true && arra[4].value == true ? fun() : null }} >
                <Image source={arra[0].value ? require('../../assets/18/18.2g.png') : require('../../assets/18/18.2.png')} style={{ height: Theme.height / 6.5, width: Theme.height / 6.5 }} />
              </TouchableOpacity>
              {arra[0].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>

            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 2.15 : Theme.width / 2, marginTop: Theme.height / 2.50, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/18/18.5s.mp3") }), funct({ id: 3, value: true, name: "Book", confetti: true }), conf(2), arra[0].value == true && arra[3].value == true && arra[4].value == true ? fun() : null }} >
                <Image source={arra[2].value ? require('../../assets/18/18.1g.png') : require('../../assets/18/18.1.png')} style={{ height: Theme.height / 3, width: Theme.height / 2.8, }} />
              </TouchableOpacity>
              {arra[2].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 4.8 : Theme.width / 5, marginTop: Theme.height / 1.8, zIndex: 1, }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/18/18.3s.mp3") }), funct({ id: 4, value: true, name: "Pillow", confetti: true }), conf(3), arra[2].value == true && arra[0].value == true && arra[4].value == true ? fun() : null }} >
                <Image source={arra[3].value ? require('../../assets/18/18.3g.png') : require('../../assets/18/18.3.png')} style={{ height: Theme.height / 7, width: Theme.height / 4 }} />
              </TouchableOpacity>
              {arra[3].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.23 : Theme.width / 1.30, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/18/18.4s.mp3") }), funct({ id: 5, value: true, name: "Poster", confetti: true }), conf(4), arra[2].value == true && arra[3].value == true && arra[0].value == true  ? fun() : null }} >
                <Image source={arra[4].value ? require('../../assets/18/18.4g.png') : require('../../assets/18/18.4.png')} style={arra[4].value ? { height: Theme.height / 5, width: Theme.height / 5 } : { height: Theme.height / 5, width: Theme.height / 5 }} />
              </TouchableOpacity>
              {arra[4].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            {/* <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 2.2 : Theme.width / 1.88, marginTop: Theme.height / 2.10, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/18/18.1s.mp3") }), funct({ id: 6, value: true, name: "BoyArm", confetti: true }), conf(5), arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[0].value == true ? fun() : null }} >
                <Image source={arra[5].value ? require('../../assets/18/18.5.png') : require('../../assets/18/18.5.png')} style={{ height: Theme.height / 6, width: Theme.height / 3, }} />
              </TouchableOpacity>
              {arra[5].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 6, width: Theme.width / 6, marginLeft: Theme.width / -8 }} />
              )}
            </View> */}

          </FastImage>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: Theme.height / 70 }}>
          <TouchableOpacity activeOpacity={0.5} onPress={() => setAll()}>
            <Image source={require('../../assets/replay.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginLeft: Theme.width / 50 }} />
          </TouchableOpacity>
          <View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/18/18.2s.mp3") })}>
                <Text style={arra[0].name == "Moon" ? styles.redText : styles.greyText}>Moon</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/18/18.3s.mp3") })}>
                <Text style={arra[3].name == "Pillow" ? styles.redText : styles.greyText}>Pillow</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/18/18.1s.mp3") })}>
                <Text style={arra[2].name == "Book" ? styles.redText : styles.greyText}>Book</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/18/18.4s.mp3") })}>
                <Text style={arra[4].name == "Poster" ? styles.redText : styles.greyText}>Poster</Text>
              </TouchableOpacity>
            </View>
           
          </View>

          <TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.navigate('Home')}>
            <Image source={require('../../assets/cross.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginRight: Theme.width / 20 }} />
          </TouchableOpacity>
        </View>


      </View>
    }
    else if (id == "4") {

      return <View style={{ flex: 1 }}>
        <View >
          <FastImage source={{ uri: b.background, priority: FastImage.priority.high }} resizeMode="stretch" style={styles.backImage} >
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 2.15 : Theme.width / 2.12, zIndex: 1, marginTop: Theme.height / 2.60 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/12/12.1s.mp3") }), funct({ id: 1, value: true, name: "Hat", confetti: true }), conf(0), arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[0].value ? require('../../assets/12/12.1g.png') : require('../../assets/12/12.1.png')} style={{ height: Theme.height / 8, width: Theme.height / 8 }} />
              </TouchableOpacity>
              {arra[0].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>

            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.45 : Theme.width / 1.45, marginTop: Theme.height / 6, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/12/12.2s.mp3") }), funct({ id: 3, value: true, name: "Jazzy", confetti: true }), conf(2), arra[0].value == true && arra[3].value == true && arra[4].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[2].value ? require('../../assets/12/12.2g.png') : require('../../assets/12/12.2.png')} style={{ height: Theme.height / 2, width: Theme.height / 3.85 }} />
              </TouchableOpacity>
              {arra[2].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 4 : Theme.width / 4, marginTop: Theme.height / 8, zIndex: 1, }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/12/12.3s.mp3") }), funct({ id: 4, value: true, name: "Jeremy", confetti: true }), conf(3), arra[2].value == true && arra[0].value == true && arra[4].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[3].value ? require('../../assets/12/12.3g.png') : require('../../assets/12/12.3.png')} style={{ height: Theme.height / 2, width: Theme.height / 3.35 }} />
              </TouchableOpacity>
              {arra[3].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.15 : Theme.width / 1.15, marginTop: Theme.height / 5, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/12/12.4s.mp3") }), funct({ id: 5, value: true, name: "Plant", confetti: true }), conf(4), arra[2].value == true && arra[3].value == true && arra[0].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[4].value ? require('../../assets/12/12.4g.png') : require('../../assets/12/12.4.png')} style={{ height: Theme.height / 3.30, width: Theme.height / 4.90 }} />
              </TouchableOpacity>
              {arra[4].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.94 : Theme.width / 1.94, marginTop: Theme.height / 4.3, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/12/12.5s.mp3") }), funct({ id: 6, value: true, name: "Three", confetti: true }), conf(5), arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[0].value == true ? fun() : null }} >
                <Image source={arra[5].value ? require('../../assets/12/12.5g.png') : require('../../assets/12/12.5.png')} style={{ height: Theme.height / 20, width: Theme.height / 20 }} />
              </TouchableOpacity>
              {arra[5].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 6, width: Theme.width / 6, marginLeft: Theme.width / -8 }} />
              )}
            </View>


          </FastImage>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: Theme.height / 70 }}>
          <TouchableOpacity activeOpacity={0.5} onPress={() => setAll()}>
            <Image source={require('../../assets/replay.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginLeft: Theme.width / 50 }} />
          </TouchableOpacity>

          <View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/12/12.1s.mp3") })}>
                <Text style={arra[0].name == "Hat" ? styles.redText : styles.greyText}>Hat</Text>

              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/12/12.2s.mp3") })}>
                <Text style={arra[3].name == "Jeremy" ? styles.redText : styles.greyText}>Jeremy</Text>

              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/12/12.3s.mp3") })}>
                <Text style={arra[2].name == "Jazzy" ? styles.redText : styles.greyText}>Jazzy</Text>

              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/12/12.4s.mp3") })}>
                <Text style={arra[4].name == "Plant" ? styles.redText : styles.greyText}>Plant</Text>

              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/12/12.5s.mp3") })}>
                <Text style={arra[5].name == "Three" ? styles.redText : styles.greyText}>Three</Text>

              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.navigate('Home')}>
            <Image source={require('../../assets/cross.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginRight: Theme.width / 20 }} />
          </TouchableOpacity>
        </View>
      </View>
    }
    else if (id == "19") {

      return <View style={{ flex: 1 }}>
        <View >
          <FastImage source={{ uri: b.background, priority: FastImage.priority.high }} resizeMode="stretch" style={styles.backImage} >
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 7 : Theme.width / 7, zIndex: 1, marginTop: Theme.height / 2.06 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/19/19.1s.mp3") }), funct({ id: 1, value: true, name: "Basket", confetti: true }), conf(0), arra[1].value == true && arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[5].value == true && arra[6].value == true ? fun() : null }} >
                <Image source={arra[0].value ? require('../../assets/19/19.1g.png') : require('../../assets/19/19.1.png')} style={{ height: Theme.height / 8, width: Theme.height / 8 }} />
              </TouchableOpacity>
              {arra[0].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>

            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 7.1 : Theme.width / 7.30, marginTop: Theme.height / 1.85, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => {
                //  voic({ source: require("../../assets/19/19.7s.mp3") }), 
                funct({ id: 2, value: true, name: "JazzyArm", confetti: true }), conf(1), arra[2].value == true && arra[0].value == true && arra[3].value == true && arra[4].value == true && arra[5].value == true && arra[6].value == true ? fun() : null
              }} >
                <Image source={arra[1].value ? require('../../assets/19/19.7.png') : require('../../assets/19/19.7.png')} style={{ height: Theme.height / 12, width: Theme.height / 14 }} />
              </TouchableOpacity>
              {arra[1].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>

            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.2 : Theme.width / 1.20, marginTop: Theme.height / 26, zIndex: 1, }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/19/19.3s.mp3") }), funct({ id: 3, value: true, name: "Moon", confetti: true }), conf(2), arra[1].value == true && arra[2].value == true && arra[0].value == true && arra[4].value == true && arra[5].value == true && arra[6].value == true ? fun() : null }} >
                <Image source={arra[2].value ? require('../../assets/19/19.3g.png') : require('../../assets/19/19.3.png')} style={{ height: Theme.height / 6, width: Theme.height / 6 }} />
              </TouchableOpacity>
              {arra[2].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.2 : Theme.width / 1.23, marginTop: Theme.height / 3.70, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/19/19.4s.mp3") }), funct({ id: 4, value: true, name: "Pumpkin", confetti: true }), conf(4), arra[1].value == true && arra[2].value == true && arra[3].value == true && arra[0].value == true && arra[5].value == true && arra[6].value == true ? fun() : null }} >
                <Image source={arra[3].value ? require('../../assets/19/19.4g.png') : require('../../assets/19/19.4.png')} style={arra[4].value ? { height: Theme.height / 12, width: Theme.height / 12 } : { height: Theme.height / 12, width: Theme.height / 12 }} />
              </TouchableOpacity>
              {arra[3].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.13 : Theme.width / 1.13, marginTop: Theme.height / 1.6, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/19/19.5s.mp3") }), funct({ id: 5, value: true, name: "Shoes", confetti: true }), conf(4), arra[1].value == true && arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[0].value == true && arra[6].value == true ? fun() : null }} >
                <Image source={arra[4].value ? require('../../assets/19/19.5g.png') : require('../../assets/19/19.5.png')} style={{ height: Theme.height / 12, width: Theme.height / 10 }} />
              </TouchableOpacity>
              {arra[4].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 6, width: Theme.width / 6, marginLeft: Theme.width / -8 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.99 : Theme.width / 1.99, marginTop: Theme.height / 2.19, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/19/19.6s.mp3") }), funct({ id: 6, value: true, name: "Theremin", confetti: true }), conf(5), arra[1].value == true && arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[0].value == true && arra[6].value == true ? fun() : null }} >
                <Image source={arra[5].value ? require('../../assets/19/19.6g.png') : require('../../assets/19/19.6.png')} style={{ height: Theme.height / 4, width: Theme.height / 6 }} />
              </TouchableOpacity>
              {arra[5].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 6, width: Theme.width / 6, marginLeft: Theme.width / -8 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.45 : Theme.width / 1.45, marginTop: Theme.height / 30.90, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/19/19.2s.mp3") }), funct({ id: 7, value: true, name: "Cat", confetti: true }), conf(6), arra[1].value == true && arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[0].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[6].value ? require('../../assets/19/19.2g.png') : require('../../assets/19/19.2.png')} style={{ height: Theme.height / 6, width: Theme.height / 10 }} />
              </TouchableOpacity>
              {arra[6].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 6, width: Theme.width / 6, marginLeft: Theme.width / -8 }} />
              )}
            </View>
          </FastImage>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: Theme.height / 70 }}>
          <TouchableOpacity activeOpacity={0.5} onPress={() => setAll()}>
            <Image source={require('../../assets/replay.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginLeft: Theme.width / 50 }} />
          </TouchableOpacity>


          <View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/19/19.1s.mp3") })}>
                <Text style={arra[0].name == "Basket" ? styles.redText : styles.greyText}>Basket</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/19/19.4s.mp3") })}>
                <Text style={arra[3].name == "Pumpkin" ? styles.redText : styles.greyText}>Pumpkin</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/19/19.3s.mp3") })}>
                <Text style={arra[2].name == "Moon" ? styles.redText : styles.greyText}>Moon</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/19/19.5s.mp3") })}>
                <Text style={arra[4].name == "Shoes" ? styles.redText : styles.greyText}>Shoes</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/19/19.6s.mp3") })}>
                <Text style={arra[5].name == "Theremin" ? styles.redText : styles.greyText}>Theremin</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/12/12.5s.mp3") })}>
                <Text style={arra[1].name == "JazzyArm" ? styles.redText : styles.greyText}>JazzyArm</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/19/19.2s.mp3") })}>
                <Text style={arra[6].name == "Cat" ? styles.redText : styles.greyText}>Cat</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.navigate('Home')}>
            <Image source={require('../../assets/cross.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginRight: Theme.width / 20 }} />
          </TouchableOpacity>
        </View>
      </View>
    }
    else if (id == "21") {
      return <View style={{ flex: 1 }}>
        <View >
          <FastImage source={{ uri: b.background, priority: FastImage.priority.high }} resizeMode="stretch" style={styles.backImage} >
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 10.85 : Theme.width / 8.77, zIndex: 1, marginTop: Theme.height / 2.3 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/21/21.2s.mp3") }), funct({ id: 1, value: true, name: "Bear", confetti: true }), conf(0), arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[0].value ? require('../../assets/21/21.2g.png') : require('../../assets/21/21.2.png')} style={{ height: Theme.height / 4, width: Theme.height / 6 }} />
              </TouchableOpacity>
              {arra[0].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>

            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 10.2 : Theme.width / 7.3, marginTop: Theme.height / 32.7, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/21/21.1s.mp3") }), funct({ id: 3, value: true, name: "Bat", confetti: true }), conf(2), arra[0].value == true && arra[3].value == true && arra[4].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[2].value ? require('../../assets/21/21.1g.png') : require('../../assets/21/21.1.png')} style={{ height: Theme.height / 6, width: Theme.height / 6 }} />
              </TouchableOpacity>
              {arra[2].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 4 : Theme.width / 3.7, marginTop: Theme.height / 9.6, zIndex: 1, }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/21/21.3s.mp3") }), funct({ id: 4, value: true, name: "BirthdayHat", confetti: true }), conf(3), arra[2].value == true && arra[0].value == true && arra[4].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[3].value ? require('../../assets/21/21.3g.png') : require('../../assets/21/21.3.png')} style={{ height: Theme.height / 10, width: Theme.height / 14 }} />
              </TouchableOpacity>
              {arra[3].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.25 : Theme.width / 1.22, marginTop: Theme.height / 4.98, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/21/21.4s.mp3") }), funct({ id: 5, value: true, name: "Pinata", confetti: true }), conf(4), arra[2].value == true && arra[3].value == true && arra[0].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[4].value ? require('../../assets/21/21.4g.png') : require('../../assets/21/21.4.png')} style={{ height: Theme.height / 7, width: Theme.height / 7 }} />
              </TouchableOpacity>
              {arra[4].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 2 : Theme.width / 2, marginTop: Theme.height / 7.4, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/21/21.5s.mp3") }), funct({ id: 6, value: true, name: "Salmon", confetti: true }), conf(5), arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[0].value == true ? fun() : null }} >
                <Image source={arra[5].value ? require('../../assets/21/21.5g.png') : require('../../assets/21/21.5.png')} style={{ height: Theme.height / 5, width: Theme.height / 9 }} />
              </TouchableOpacity>
              {arra[5].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
          </FastImage>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: Theme.height / 70 }}>
          <TouchableOpacity activeOpacity={0.5} onPress={() => setAll()}>
            <Image source={require('../../assets/replay.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginLeft: Theme.width / 50 }} />
          </TouchableOpacity>
          <View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/21/21.2s.mp3") })}>
                <Text style={arra[0].name == "Bear" ? styles.redText : styles.greyText}>Bear</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/21/21.3s.mp3") })}>
                <Text style={arra[3].name == "BirthdayHat" ? styles.redText : styles.greyText}>Hat</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/21/21.1s.mp3") })}>
                <Text style={arra[2].name == "Bat" ? styles.redText : styles.greyText}>Bat</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/21/21.4s.mp3") })}>
                <Text style={arra[4].name == "Pinata" ? styles.redText : styles.greyText}>Pinata</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/21/21.5s.mp3") })}>
                <Text style={arra[5].name == "Salmon" ? styles.redText : styles.greyText}>Salmon</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.navigate('Home')}>
            <Image source={require('../../assets/cross.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginRight: Theme.width / 20 }} />
          </TouchableOpacity>
        </View>
      </View>
    }
    else if (id == "22") {

      return <View style={{ flex: 1 }}>
        <View >
          <FastImage source={{ uri: b.background, priority: FastImage.priority.high }} resizeMode="stretch" style={styles.backImage} >
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 3.85 : Theme.width / 3.3, zIndex: 1, marginTop: Theme.height / 8.3 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/22/22.2s.mp3") }), funct({ id: 1, value: true, name: "Christmas Tree", confetti: true }), conf(0), arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[0].value ? require('../../assets/22/22.2g.png') : require('../../assets/22/22.2.png')} style={{ height: Theme.height / 2, width: Theme.height / 3 }} />
              </TouchableOpacity>
              {arra[0].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>

            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 5.2 : Theme.width / 5.3, marginTop: Theme.height / 2.4, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/22/22.1s.mp3") }), funct({ id: 3, value: true, name: "Bear", confetti: true }), conf(2), arra[0].value == true && arra[3].value == true && arra[4].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[2].value ? require('../../assets/22/22.1g.png') : require('../../assets/22/22.1.png')} style={{ height: Theme.height / 3.5, width: Theme.height / 4.6 }} />
              </TouchableOpacity>
              {arra[2].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 2 : Theme.width / 1.92, marginTop: Theme.height / 2.2, zIndex: 1, }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/22/22.3s.mp3") }), funct({ id: 4, value: true, name: "Menorah", confetti: true }), conf(3), arra[2].value == true && arra[0].value == true && arra[4].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[3].value ? require('../../assets/22/22.3g.png') : require('../../assets/22/22.3.png')} style={{ height: Theme.height / 8, width: Theme.height / 7 }} />
              </TouchableOpacity>
              {arra[3].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 8.25 : Theme.width / 8.22, marginTop: Theme.height / 2.4, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/22/22.4s.mp3") }), funct({ id: 5, value: true, name: "Present", confetti: true }), conf(4), arra[2].value == true && arra[3].value == true && arra[0].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[4].value ? require('../../assets/22/22.4g.png') : require('../../assets/22/22.4.png')} style={{ height: Theme.height / 8, width: Theme.height / 8 }} />
              </TouchableOpacity>
              {arra[4].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 2.3 : Theme.width / 2.2, marginTop: Theme.height / 9.4, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/22/22.5s.mp3") }), funct({ id: 6, value: true, name: "Wreath", confetti: true }), conf(5), arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[0].value == true ? fun() : null }} >
                <Image source={arra[5].value ? require('../../assets/22/22.5g.png') : require('../../assets/22/22.5.png')} style={{ height: Theme.height / 8, width: Theme.height / 10 }} />
              </TouchableOpacity>
              {arra[5].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
          </FastImage>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: Theme.height / 70 }}>
          <TouchableOpacity activeOpacity={0.5} onPress={() => setAll()}>
            <Image source={require('../../assets/replay.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginLeft: Theme.width / 50 }} />
          </TouchableOpacity>
          <View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/22/22.2s.mp3") })}>
                <Text style={arra[0].name == "Christmas Tree" ? styles.redText : styles.greyText}>Christmas Tree</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/22/22.3s.mp3") })}>
                <Text style={arra[3].name == "Menorah" ? styles.redText : styles.greyText}>Menorah</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/22/22.1s.mp3") })}>
                <Text style={arra[2].name == "Bear" ? styles.redText : styles.greyText}>Bear</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/22/22.4s.mp3") })}>
                <Text style={arra[4].name == "Present" ? styles.redText : styles.greyText}>Present</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/22/22.5s.mp3") })}>
                <Text style={arra[5].name == "Wreath" ? styles.redText : styles.greyText}>Wreath</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.navigate('Home')}>
            <Image source={require('../../assets/cross.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginRight: Theme.width / 20 }} />
          </TouchableOpacity>
        </View>
      </View>
    }
    else if (id == "23") {

      return <View style={{ flex: 1 }}>
        <View >
          <FastImage source={{ uri: b.background, priority: FastImage.priority.high }} resizeMode="stretch" style={styles.backImage} >
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.3 : Theme.width / 1.2, zIndex: 1, marginTop: Theme.height / 16.3 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/23/23.2s.mp3") }), funct({ id: 1, value: true, name: "Bear", confetti: true }), conf(0), arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[0].value ? require('../../assets/23/23.2g.png') : require('../../assets/23/23.2.png')} style={{ height: Theme.height / 6, width: Theme.height / 4.5 }} />
              </TouchableOpacity>
              {arra[0].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>

            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 3.2 : Theme.width / 3, marginTop: Theme.height / 8, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/23/23.1s.mp3") }), funct({ id: 3, value: true, name: "Bike", confetti: true }), conf(2), arra[0].value == true && arra[3].value == true && arra[4].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[2].value ? require('../../assets/23/23.1g.png') : require('../../assets/23/23.1.png')} style={{ height: Theme.height / 12, width: Theme.height / 7.9 }} />
              </TouchableOpacity>
              {arra[2].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 3 : Theme.width / 2.7, marginTop: Theme.height / 3.2, zIndex: 1, }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/23/23.3s.mp3") }), funct({ id: 4, value: true, name: "Dog", confetti: true }), conf(3), arra[2].value == true && arra[0].value == true && arra[4].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[3].value ? require('../../assets/23/23.3g.png') : require('../../assets/23/23.3.png')} style={{ height: Theme.height / 5.5, width: Theme.height / 7 }} />
              </TouchableOpacity>
              {arra[3].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.18 : Theme.width / 1.16, marginTop: Theme.height / 3.2, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/23/23.4s.mp3") }), funct({ id: 5, value: true, name: "Drums", confetti: true }), conf(4), arra[2].value == true && arra[3].value == true && arra[0].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[4].value ? require('../../assets/23/23.4g.png') : require('../../assets/23/23.4.png')} style={{ height: Theme.height / 10, width: Theme.height / 6 }} />
              </TouchableOpacity>
              {arra[4].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 10.3 : Theme.width / 8.2, marginTop: Theme.height / 9.4, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/23/23.5s.mp3") }), funct({ id: 6, value: true, name: "Heart", confetti: true }), conf(5), arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[0].value == true ? fun() : null }} >
                <Image source={arra[5].value ? require('../../assets/23/23.5g.png') : require('../../assets/23/23.5.png')} style={{ height: Theme.height / 8, width: Theme.height / 7 }} />
              </TouchableOpacity>
              {arra[5].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
          </FastImage>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: Theme.height / 70 }}>
          <TouchableOpacity activeOpacity={0.5} onPress={() => setAll()}>
            <Image source={require('../../assets/replay.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginLeft: Theme.width / 50 }} />
          </TouchableOpacity>
          <View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/23/23.2s.mp3") })}>
                <Text style={arra[0].name == "Bear" ? styles.redText : styles.greyText}>Bear</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/23/23.3s.mp3") })}>
                <Text style={arra[3].name == "Dog" ? styles.redText : styles.greyText}>Dog</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/23/23.1s.mp3") })}>
                <Text style={arra[2].name == "Bike" ? styles.redText : styles.greyText}>Bike</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/23/23.4s.mp3") })}>
                <Text style={arra[4].name == "Drums" ? styles.redText : styles.greyText}>Drums</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/23/23.5s.mp3") })}>
                <Text style={arra[5].name == "Heart" ? styles.redText : styles.greyText}>Heart</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.navigate('Home')}>
            <Image source={require('../../assets/cross.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginRight: Theme.width / 20 }} />
          </TouchableOpacity>
        </View>


      </View>
    }
    else if (id == "24") {

      return <View style={{ flex: 1 }}>
        <View >
          <FastImage source={{ uri: b.background, priority: FastImage.priority.high }} resizeMode="stretch" style={styles.backImage} >
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 3.3 : Theme.width / 3, zIndex: 1, marginTop: Theme.height / 4.3 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/24/24.2s.mp3") }), funct({ id: 1, value: true, name: "Guitar", confetti: true }), conf(0), arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[5].value == true && arra[6].value == true ? fun() : null }} >
                <Image source={arra[0].value ? require('../../assets/24/24.2g.png') : require('../../assets/24/24.2.png')} style={{ height: Theme.height / 6.4, width: Theme.height / 4.5 }} />
              </TouchableOpacity>
              {arra[0].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>

            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 2.2 : Theme.width / 2.1, marginTop: Theme.height / 2.5, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/24/24.1s.mp3") }), funct({ id: 3, value: true, name: "Baton", confetti: true }), conf(2), arra[0].value == true && arra[3].value == true && arra[4].value == true && arra[5].value == true & arra[6].value == true ? fun() : null }} >
                <Image source={arra[2].value ? require('../../assets/24/24.1g.png') : require('../../assets/24/24.1.png')} style={{ height: Theme.height / 7, width: Theme.height / 7.9 }} />
              </TouchableOpacity>
              {arra[2].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.13 : Theme.width / 1.11, marginTop: Theme.height / 5, zIndex: 1, }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/24/24.3s.mp3") }), funct({ id: 4, value: true, name: "Hat", confetti: true }), conf(3), arra[2].value == true && arra[0].value == true && arra[4].value == true && arra[5].value == true & arra[6].value == true ? fun() : null }} >
                <Image source={arra[3].value ? require('../../assets/24/24.3g.png') : require('../../assets/24/24.3.png')} style={{ height: Theme.height / 9.6, width: Theme.height / 10 }} />
              </TouchableOpacity>
              {arra[3].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.35 : Theme.width / 1.35, marginTop: Theme.height / 7, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/24/24.4s.mp3") }), funct({ id: 5, value: true, name: "Saxaphone", confetti: true }), conf(4), arra[2].value == true && arra[3].value == true && arra[0].value == true && arra[5].value == true & arra[6].value == true ? fun() : null }} >
                <Image source={arra[4].value ? require('../../assets/24/24.4g.png') : require('../../assets/24/24.4.png')} style={{ height: Theme.height / 7.5, width: Theme.height / 9.4 }} />
              </TouchableOpacity>
              {arra[4].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.8 : Theme.width / 1.8, marginTop: Theme.height / 3.9, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/24/24.5s.mp3") }), funct({ id: 6, value: true, name: "Tambourine", confetti: true }), conf(5), arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[0].value == true & arra[6].value == true ? fun() : null }} >
                <Image source={arra[5].value ? require('../../assets/24/24.5g.png') : require('../../assets/24/24.5.png')} style={{ height: Theme.height / 16, width: Theme.height / 16 }} />
              </TouchableOpacity>
              {arra[5].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 6.4 : Theme.width / 6.5, marginTop: Theme.height / 2.8, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/24/24.6s.mp3") }), funct({ id: 7, value: true, name: "Tuba", confetti: true }), conf(6), arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[0].value == true & arra[5].value == true ? fun() : null }} >
                <Image source={arra[6].value ? require('../../assets/24/24.6g.png') : require('../../assets/24/24.6.png')} style={{ height: Theme.height / 6, width: Theme.height / 9 }} />
              </TouchableOpacity>
              {arra[6].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.height / -5 }} />
              )}
            </View>
          </FastImage>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: Theme.height / 70 }}>
          <TouchableOpacity activeOpacity={0.5} onPress={() => setAll()}>
            <Image source={require('../../assets/replay.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginLeft: Theme.width / 50 }} />
          </TouchableOpacity>
          <View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/24/24.2s.mp3") })}>
                <Text style={arra[0].name == "Guitar" ? styles.redText : styles.greyText}>Guitar</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/24/24.3s.mp3") })}>
                <Text style={arra[3].name == "Hat" ? styles.redText : styles.greyText}>Hat</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/24/24.1s.mp3") })}>
                <Text style={arra[2].name == "Baton" ? styles.redText : styles.greyText}>Baton</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/24/24.4s.mp3") })}>
                <Text style={arra[4].name == "Saxaphone" ? styles.redText : styles.greyText}>Saxaphone</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/24/24.5s.mp3") })}>
                <Text style={arra[5].name == "Tambourine" ? styles.redText : styles.greyText}>Tambourine</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/24/24.6s.mp3") })}>
                <Text style={arra[6].name == "Tuba" ? styles.redText : styles.greyText}>Tuba</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.navigate('Home')}>
            <Image source={require('../../assets/cross.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginRight: Theme.width / 20 }} />
          </TouchableOpacity>
        </View>



      </View>
    }
    else if (id == "25") {

      return <View style={{ flex: 1 }}>
        <View >
          <FastImage source={{ uri: b.background, priority: FastImage.priority.high }} resizeMode="stretch" style={styles.backImage} >
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 8 : Theme.width / 8, zIndex: 1, marginTop: Theme.height / 8.3 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/25/25.2s.mp3") }), funct({ id: 1, value: true, name: "Bird", confetti: true }), conf(0), arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[0].value ? require('../../assets/25/25.2g.png') : require('../../assets/25/25.2.png')} style={{ height: Theme.height / 6.4, width: Theme.height / 4.5 }} />
              </TouchableOpacity>
              {arra[0].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>

            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.2 : Theme.width / 1.16, marginTop: Theme.height / 3.3, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/25/25.1s.mp3") }), funct({ id: 3, value: true, name: "Bears", confetti: true }), conf(2), arra[0].value == true && arra[3].value == true && arra[4].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[2].value ? require('../../assets/25/25.1g.png') : require('../../assets/25/25.1.png')} style={{ height: Theme.height / 5, width: Theme.height / 5.9 }} />
              </TouchableOpacity>
              {arra[2].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 3.8 : Theme.width / 3.6, marginTop: Theme.height / 2.9, zIndex: 1, }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/25/25.3s.mp3") }), funct({ id: 4, value: true, name: "Butterfly", confetti: true }), conf(3), arra[2].value == true && arra[0].value == true && arra[4].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[3].value ? require('../../assets/25/25.3g.png') : require('../../assets/25/25.3.png')} style={{ height: Theme.height / 9.6, width: Theme.height / 8 }} />
              </TouchableOpacity>
              {arra[3].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.27 : Theme.width / 1.21, marginTop: Theme.height / 30, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/25/25.4s.mp3") }), funct({ id: 5, value: true, name: "Heart", confetti: true }), conf(4), arra[2].value == true && arra[3].value == true && arra[0].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[4].value ? require('../../assets/25/25.4g.png') : require('../../assets/25/25.4.png')} style={{ height: Theme.height / 7.5, width: Theme.height / 7 }} />
              </TouchableOpacity>
              {arra[4].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.77 : Theme.width / 1.6, marginTop: Theme.height / 2.8, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/25/25.5s.mp3") }), funct({ id: 6, value: true, name: "Stick", confetti: true }), conf(5), arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[0].value == true ? fun() : null }} >
                <Image source={arra[5].value ? require('../../assets/25/25.5g.png') : require('../../assets/25/25.5.png')} style={{ height: Theme.height / 2.6, width: Theme.height / 4 }} />
              </TouchableOpacity>
              {arra[5].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>

          </FastImage>
        </View>


        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: Theme.height / 70 }}>
          <TouchableOpacity activeOpacity={0.5} onPress={() => setAll()}>
            <Image source={require('../../assets/replay.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginLeft: Theme.width / 50 }} />
          </TouchableOpacity>
          <View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/25/25.2s.mp3") })}>
                <Text style={arra[0].name == "Bird" ? styles.redText : styles.greyText}>Bird</Text>

              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/25/25.3s.mp3") })}>
                <Text style={arra[3].name == "Butterfly" ? styles.redText : styles.greyText}>Butterfly</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/25/25.1s.mp3") })}>
                <Text style={arra[2].name == "Bears" ? styles.redText : styles.greyText}>Bears</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/25/25.4s.mp3") })}>
                <Text style={arra[4].name == "Heart" ? styles.redText : styles.greyText}>Heart</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/25/25.5s.mp3") })}>
                <Text style={arra[5].name == "Stick" ? styles.redText : styles.greyText}>Stick</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.navigate('Home')}>
            <Image source={require('../../assets/cross.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginRight: Theme.width / 20 }} />
          </TouchableOpacity>
        </View>
      </View>
    }
    else if (id == "26") {

      return <View style={{ flex: 1 }}>
        <View >
          <FastImage source={{ uri: b.background, priority: FastImage.priority.high }} resizeMode="stretch" style={styles.backImage} >
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 2.07 : Theme.width / 2.03, zIndex: 1, marginTop: Theme.height / 3 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/26/26.2s.mp3") }), funct({ id: 1, value: true, name: "Cane", confetti: true }), conf(0), arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[0].value ? require('../../assets/26/26.2g.png') : require('../../assets/26/26.2.png')} style={{ height: Theme.height / 4, width: Theme.height / 14.5 }} />
              </TouchableOpacity>
              {arra[0].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>

            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 2.6 : Theme.width / 2.6, marginTop: Theme.height / 4.6, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/26/26.1s.mp3") }), funct({ id: 3, value: true, name: "Star", confetti: true }), conf(2), arra[0].value == true && arra[3].value == true && arra[4].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[2].value ? require('../../assets/26/26.1g.png') : require('../../assets/26/26.1.png')} style={{ height: Theme.height / 9, width: Theme.height / 9 }} />
              </TouchableOpacity>
              {arra[2].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -10 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 4 : Theme.width / 3.4, marginTop: Theme.height / 3.5, zIndex: 1, }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/26/26.3s.mp3") }), funct({ id: 4, value: true, name: "Firefly", confetti: true }), conf(3), arra[2].value == true && arra[0].value == true && arra[4].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[3].value ? require('../../assets/26/26.3g.png') : require('../../assets/26/26.3.png')} style={{ height: Theme.height / 9.6, width: Theme.height / 11 }} />
              </TouchableOpacity>
              {arra[3].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -9 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.27 : Theme.width / 1.24, marginTop: Theme.height / 2.7, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/26/26.4s.mp3") }), funct({ id: 5, value: true, name: "Guitar", confetti: true }), conf(4), arra[2].value == true && arra[3].value == true && arra[0].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[4].value ? require('../../assets/26/26.4g.png') : require('../../assets/26/26.4.png')} style={{ height: Theme.height / 7.5, width: Theme.height / 7 }} />
              </TouchableOpacity>
              {arra[4].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 11.77 : Theme.width / 7.6, marginTop: Theme.height / 20, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/26/26.5s.mp3") }), funct({ id: 6, value: true, name: "Moon", confetti: true }), conf(5), arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[0].value == true ? fun() : null }} >
                <Image source={arra[5].value ? require('../../assets/26/26.5g.png') : require('../../assets/26/26.5.png')} style={{ height: Theme.height / 4, width: Theme.height / 3.8 }} />
              </TouchableOpacity>
              {arra[5].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>

          </FastImage>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: Theme.height / 70 }}>
          <TouchableOpacity activeOpacity={0.5} onPress={() => setAll()}>
            <Image source={require('../../assets/replay.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginLeft: Theme.width / 50 }} />
          </TouchableOpacity>
          <View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/26/26.2s.mp3") })}>
                <Text style={arra[0].name == "Cane" ? styles.redText : styles.greyText}>Cane</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/26/26.3s.mp3") })}>
                <Text style={arra[3].name == "Firefly" ? styles.redText : styles.greyText}>Firefly</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/26/26.1s.mp3") })}>
                <Text style={arra[2].name == "Star" ? styles.redText : styles.greyText}>Star</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/26/26.4s.mp3") })}>
                <Text style={arra[4].name == "Guitar" ? styles.redText : styles.greyText}>Guitar</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/26/26.5s.mp3") })}>
                <Text style={arra[5].name == "Moon" ? styles.redText : styles.greyText}>Moon</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.navigate('Home')}>
            <Image source={require('../../assets/cross.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginRight: Theme.width / 20 }} />
          </TouchableOpacity>
        </View>
      </View>
    }
    else if (id == "27") {

      return <View style={{ flex: 1 }}>
        <View >
          <FastImage source={{ uri: b.background, priority: FastImage.priority.high }} resizeMode="stretch" style={styles.backImage} >
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 80.07 : Theme.width / 80.03, zIndex: 1, marginTop: Theme.height / 3.6 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/27/27.2s.mp3") }), funct({ id: 1, value: true, name: "Apple", confetti: true }), conf(0), arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[0].value ? require('../../assets/27/27.2g.png') : require('../../assets/27/27.2.png')} style={{ height: Theme.height / 15, width: Theme.height / 14 }} />
              </TouchableOpacity>
              {arra[0].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>

            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 80.6 : Theme.width / 90.6, marginTop: Theme.height / 1.6, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/27/27.1s.mp3") }), funct({ id: 3, value: true, name: "Ukulele", confetti: true }), conf(2), arra[0].value == true && arra[3].value == true && arra[4].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[2].value ? require('../../assets/27/27.1g.png') : require('../../assets/27/27.1.png')} style={{ height: Theme.height / 6, width: Theme.height / 9 }} />
              </TouchableOpacity>
              {arra[2].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -10 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 4 : Theme.width / 3.8, marginTop: Theme.height / 2.4, zIndex: 1, }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/27/27.3s.mp3") }), funct({ id: 4, value: true, name: "Hat", confetti: true }), conf(3), arra[2].value == true && arra[0].value == true && arra[4].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[3].value ? require('../../assets/27/27.3g.png') : require('../../assets/27/27.3.png')} style={{ height: Theme.height / 9.6, width: Theme.height / 11 }} />
              </TouchableOpacity>
              {arra[3].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -9 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.8 : Theme.width / 1.68, marginTop: Theme.height / 1.5, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/27/27.4s.mp3") }), funct({ id: 5, value: true, name: "Flute", confetti: true }), conf(4), arra[2].value == true && arra[3].value == true && arra[0].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[4].value ? require('../../assets/27/27.4g.png') : require('../../assets/27/27.4.png')} style={{ height: Theme.height / 16, width: Theme.height / 5 }} />
              </TouchableOpacity>
              {arra[4].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.2 : Theme.width / 1.2, marginTop: Theme.height / 20, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/27/27.5s.mp3") }), funct({ id: 6, value: true, name: "Sun", confetti: true }), conf(5), arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[0].value == true ? fun() : null }} >
                <Image source={arra[5].value ? require('../../assets/27/27.5g.png') : require('../../assets/27/27.5.png')} style={{ height: Theme.height / 5, width: Theme.height / 4.8 }} />
              </TouchableOpacity>
              {arra[5].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>

          </FastImage>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: Theme.height / 70 }}>
          <TouchableOpacity activeOpacity={0.5} onPress={() => setAll()}>
            <Image source={require('../../assets/replay.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginLeft: Theme.width / 50 }} />
          </TouchableOpacity>
          <View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/27/27.2s.mp3") })}>
                <Text style={arra[0].name == "Apple" ? styles.redText : styles.greyText}>Apple</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/27/27.3s.mp3") })}>
                <Text style={arra[3].name == "Hat" ? styles.redText : styles.greyText}>Cap</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/27/27.1s.mp3") })}>
                <Text style={arra[2].name == "Ukulele" ? styles.redText : styles.greyText}>Ukulele</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/27/27.4s.mp3") })}>
                <Text style={arra[4].name == "Flute" ? styles.redText : styles.greyText}>Flute</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/27/27.5s.mp3") })}>
                <Text style={arra[5].name == "Sun" ? styles.redText : styles.greyText}>Sun</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.navigate('Home')}>
            <Image source={require('../../assets/cross.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginRight: Theme.width / 20 }} />
          </TouchableOpacity>
        </View>
      </View>
    }
    else if (id == "28") {

      return <View style={{ flex: 1 }}>
        <View >
          <FastImage source={{ uri: b.background, priority: FastImage.priority.high }} resizeMode="stretch" style={styles.backImage} >
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 2.5 : Theme.width / 2.4, zIndex: 1, marginTop: Theme.height / 14.6 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/28/28.2s.mp3") }), funct({ id: 1, value: true, name: "Cherry", confetti: true }), conf(0), arra[1].value == true && arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[5].value == true && arra[6].value == true ? fun() : null }} >
                <Image source={arra[0].value ? require('../../assets/28/28.2g.png') : require('../../assets/28/28.2.png')} style={{ height: Theme.height / 12, width: Theme.height / 9 }} />
              </TouchableOpacity>
              {arra[0].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>

            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.22 : Theme.width / 1.18, marginTop: Theme.height / 5, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/28/28.1s.mp3") }), funct({ id: 2, value: true, name: "Can", confetti: true }), conf(1), arra[0].value == true && arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[5].value == true && arra[6].value == true ? fun() : null }} >
                <Image source={arra[1].value ? require('../../assets/28/28.1g.png') : require('../../assets/28/28.1.png')} style={{ height: Theme.height / 14, width: Theme.height / 8 }} />
              </TouchableOpacity>
              {arra[1].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -10 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 2.4 : Theme.width / 2.3, marginTop: Theme.height / 4.4, zIndex: 1, }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/28/28.3s.mp3") }), funct({ id: 3, value: true, name: "Seven", confetti: true }), conf(2), arra[1].value == true && arra[0].value == true && arra[3].value == true && arra[4].value == true && arra[5].value == true && arra[6].value == true ? fun() : null }} >
                <Image source={arra[2].value ? require('../../assets/28/28.3g.png') : require('../../assets/28/28.3.png')} style={{ height: Theme.height / 9.6, width: Theme.height / 9 }} />
              </TouchableOpacity>
              {arra[2].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -9 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.9 : Theme.width / 1.8, marginTop: Theme.height / 2.5, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/28/28.4s.mp3") }), funct({ id: 4, value: true, name: "Soup", confetti: true }), conf(3), arra[1].value == true && arra[2].value == true && arra[0].value == true && arra[4].value == true && arra[5].value == true && arra[6].value == true ? fun() : null }} >
                <Image source={arra[3].value ? require('../../assets/28/28.4g.png') : require('../../assets/28/28.4.png')} style={{ height: Theme.height / 14, width: Theme.height / 10 }} />
              </TouchableOpacity>
              {arra[3].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 4.4 : Theme.width / 3.9, marginTop: Theme.height / 3.1, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/28/28.5s.mp3") }), funct({ id: 5, value: true, name: "Taco", confetti: true }), conf(4), arra[1].value == true && arra[2].value == true && arra[3].value == true && arra[0].value == true && arra[5].value == true && arra[6].value == true ? fun() : null }} >
                <Image source={arra[4].value ? require('../../assets/28/28.5g.png') : require('../../assets/28/28.5.png')} style={{ height: Theme.height / 15, width: Theme.height / 12 }} />
              </TouchableOpacity>
              {arra[4].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 6 : Theme.width / 5.5, marginTop: Theme.height / 3.1, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/28/28.6s.mp3") }), funct({ id: 6, value: true, name: "Waffles", confetti: true }), conf(5), arra[1].value == true && arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[0].value == true && arra[6].value == true ? fun() : null }} >
                <Image source={arra[5].value ? require('../../assets/28/28.6g.png') : require('../../assets/28/28.6.png')} style={{ height: Theme.height / 22, width: Theme.height / 15 }} />
              </TouchableOpacity>
              {arra[5].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 3.7 : Theme.width / 3.5, marginTop: Theme.height / 3.8, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/12/12.3s.mp3") }), funct({ id: 7, value: true, name: "Jazzy", confetti: true }), conf(6), arra[1].value == true && arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[5].value == true && arra[0].value == true ? fun() : null }} >
                <Image source={arra[6].value ? require('../../assets/28/28.7.png') : require('../../assets/28/28.7.png')} style={{ height: Theme.height / 3, width: Theme.height / 6 }} />
              </TouchableOpacity>
              {arra[6].s && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>

          </FastImage>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: Theme.height / 70 }}>
          <TouchableOpacity activeOpacity={0.5} onPress={() => setAll()}>
            <Image source={require('../../assets/replay.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginLeft: Theme.width / 50 }} />
          </TouchableOpacity>
          <View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/28/28.2s.mp3") })}>
                <Text style={arra[0].name == "Cherry" ? styles.redText : styles.greyText}>Cherry</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/28/28.4s.mp3") })}>
                <Text style={arra[3].name == "Soup" ? styles.redText : styles.greyText}>Soup</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/28/28.3s.mp3") })}>
                <Text style={arra[2].name == "Seven" ? styles.redText : styles.greyText}>Seven</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/28/28.5s.mp3") })}>
                <Text style={arra[4].name == "Taco" ? styles.redText : styles.greyText}>Taco</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/28/28.6s.mp3") })}>
                <Text style={arra[5].name == "Waffles" ? styles.redText : styles.greyText}>Waffles</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/12/12.3s.mp3") })}>
                <Text style={arra[6].name == "Jazzy" ? styles.redText : styles.greyText}>Jazzy</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/28/28.1s.mp3") })}>
                <Text style={arra[1].name == "Can" ? styles.redText : styles.greyText}>Can</Text>
              </TouchableOpacity>

            </View>
          </View>

          <TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.navigate('Home')}>
            <Image source={require('../../assets/cross.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginRight: Theme.width / 20 }} />
          </TouchableOpacity>
        </View>



      </View>
    }
    else if (id == "29") {

      return <View style={{ flex: 1 }}>
        <View >
          <FastImage source={{ uri: b.background, priority: FastImage.priority.high }} resizeMode="stretch" style={styles.backImage} >
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.3 : Theme.width / 1.3, zIndex: 1, marginTop: Theme.height / 3.3 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/29/29.2s.mp3") }), funct({ id: 1, value: true, name: "Clarinet", confetti: true }), conf(0), arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[0].value ? require('../../assets/29/29.2g.png') : require('../../assets/29/29.2.png')} style={{ height: Theme.height / 20, width: Theme.height / 6 }} />
              </TouchableOpacity>
              {arra[0].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>

            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 20.6 : Theme.width / 15.6, marginTop: Theme.height / 2.6, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/29/29.1s.mp3") }), funct({ id: 3, value: true, name: "Apple", confetti: true }), conf(2), arra[0].value == true && arra[3].value == true && arra[4].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[2].value ? require('../../assets/29/29.1g.png') : require('../../assets/29/29.1.png')} style={{ height: Theme.height / 13, width: Theme.height / 13 }} />
              </TouchableOpacity>
              {arra[2].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -10 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.8 : Theme.width / 1.7, marginTop: Theme.height / 1.9, zIndex: 1, }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/29/29.3s.mp3") }), funct({ id: 4, value: true, name: "Net", confetti: true }), conf(3), arra[2].value == true && arra[0].value == true && arra[4].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[3].value ? require('../../assets/29/29.3g.png') : require('../../assets/29/29.3.png')} style={{ height: Theme.height / 9.6, width: Theme.height / 8 }} />
              </TouchableOpacity>
              {arra[3].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -9 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 1.8 : Theme.width / 1.68, marginTop: Theme.height / 3, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/29/29.4s.mp3") }), funct({ id: 5, value: true, name: "Stinkbug", confetti: true }), conf(4), arra[2].value == true && arra[3].value == true && arra[0].value == true && arra[5].value == true ? fun() : null }} >
                <Image source={arra[4].value ? require('../../assets/29/29.4g.png') : require('../../assets/29/29.4.png')} style={{ height: Theme.height / 10, width: Theme.height / 8 }} />
              </TouchableOpacity>
              {arra[4].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
            <View style={[styles.ass, { marginLeft: isTablet ? Theme.width / 2.5 : Theme.width / 2.5, marginTop: Theme.height / 5, zIndex: 1 }]}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { voic({ source: require("../../assets/29/29.5s.mp3") }), funct({ id: 6, value: true, name: "Tambourine", confetti: true }), conf(5), arra[2].value == true && arra[3].value == true && arra[4].value == true && arra[0].value == true ? fun() : null }} >
                <Image source={arra[5].value ? require('../../assets/29/29.5g.png') : require('../../assets/29/29.5.png')} style={{ height: Theme.height / 7, width: Theme.height / 7 }} />
              </TouchableOpacity>
              {arra[5].confetti && (
                <Image source={require('../../assets/Confet.gif')} style={{ height: Theme.height / 5, width: Theme.width / 5, marginLeft: Theme.width / -5 }} />
              )}
            </View>
          </FastImage>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: Theme.height / 70 }}>
          <TouchableOpacity activeOpacity={0.5} onPress={() => setAll()}>
            <Image source={require('../../assets/replay.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginLeft: Theme.width / 50 }} />
          </TouchableOpacity>
          <View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/29/29.2s.mp3") })}>
                <Text style={arra[0].name == "Clarinet" ? styles.redText : styles.greyText}>Clarinet</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/29/29.3s.mp3") })}>
                <Text style={arra[3].name == "Net" ? styles.redText : styles.greyText}>Net</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/29/29.1s.mp3") })}>
                <Text style={arra[2].name == "Apple" ? styles.redText : styles.greyText}>Apple</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/29/29.4s.mp3") })}>
                <Text style={arra[4].name == "Stinkbug" ? styles.redText : styles.greyText}>Stinkbug</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={() => voic({ source: require("../../assets/29/29.5s.mp3") })}>
                <Text style={arra[5].name == "Tambourine" ? styles.redText : styles.greyText}>Tambourine</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.navigate('Home')}>
            <Image source={require('../../assets/cross.png')} style={{ height: Theme.height / 10, width: Theme.height / 9, marginRight: Theme.width / 20 }} />
          </TouchableOpacity>
        </View>




      </View>
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden />
      {renderElement()}
      {press && (
        <Image source={require('../../assets/Confetti-Rain.gif')} style={{ height: Theme.height / 1, width: '100%', alignSelf: 'center', position: 'absolute' }} />
      )}
    </View>
  )
}

export default AfterVideo

const styles = StyleSheet.create({
  backImage: { height: Theme.height / 1.2, width: Theme.width / 1,transform: [{ scale: 1 }] },
  ass: {
    position: 'absolute',
    flexDirection: 'row', justifyContent: 'center'

  },
  redText: {
    fontSize: Theme.height / 25, fontFamily: Theme.fontFamilyG, color: Theme.primary,
    marginHorizontal: Theme.width / 90
  },
  greyText: {
    fontSize: Theme.height / 25, fontFamily: Theme.fontFamilyG,
    marginHorizontal: Theme.width / 90,
    color: Theme.blue
  }
})
