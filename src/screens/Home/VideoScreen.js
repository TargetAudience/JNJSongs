import { ActivityIndicator, StyleSheet, Image, Text, View, ImageBackground, Pressable, StatusBar } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Theme from '../../utils/Theme';
import { useFocusEffect } from '@react-navigation/native';
import VideoPlayer from 'react-native-video-player';
import AsyncStorage from '@react-native-async-storage/async-storage';
const VideoScreen = (props) => {

    const dd = props?.route?.params?.data;
    const [lodaer, setLoader] = useState(false)
    const [flag, setFlag] = useState()
    // const player = useRef()
    const [videopause, setVideoPause] = useState(false)

    useFocusEffect(
        React.useCallback(() => {
            StatusBar.setHidden(true);
            getFlag()
            return () => {
                setVideoPause(true);
                console.log("yes");
            }
        }, [])
    );
    const getFlag = async () => {
        setFlag(JSON.parse(await AsyncStorage.getItem("music")))
        console.log(JSON.parse(await AsyncStorage.getItem("music")),"music");
    }

    return (
        <View style={{ flex: 1,backgroundColor:Theme.black }}>
            <StatusBar hidden />
            <View style={{ position: 'absolute', justifyContent: 'space-between', width: Theme.width / 1, top: Theme.height / 20, zIndex: 1, flexDirection: 'row' }}>
                <Pressable onPress={() => props.navigation.goBack()}>
                    <Image source={require('../../assets/backIcon.png')} style={{ height: Theme.height / 13, width: Theme.height / 12, marginLeft: Theme.width / 20 }} />
                </Pressable>
                <Pressable onPress={
                    () => props.navigation.navigate('AfterVideo', { back: dd })
                    // () => props.navigation.goBack()
                }>
                    <Image source={require('../../assets/cross.png')} style={{ height: Theme.height / 13, width: Theme.height / 12, marginRight: Theme.width / 20 }} />
                </Pressable>
            </View>
            <VideoPlayer
                paused={videopause}
                video={{ uri: dd.video_link }}
                videoWidth={Theme.width / 1}
                videoHeight={Theme.height / 1}
                muted={!flag}
                onEnd={() => props.navigation.navigate('AfterVideo', { back: dd })}
                autoplay
                thumbnail={{ uri: dd.thumbnail }}
            />
            {/* <Video source={{ uri: dd.video_link }}
                style={styles.video}
                // paused={videopause}
                controls={true}
                // onLoadStart={()=>setLoader(true)}
                resizeMode={'cover'}
                
                onEnd={() => props.navigation.navigate('AfterVideo', { back: dd })}
            /> */}
        </View>
    )
}

export default VideoScreen

const styles = StyleSheet.create({
    backgroundVideo: {
        height: Theme.height / 1,
        width: Theme.height / 1,
    },
    video: {
        width: Theme.width,
        height: Theme.height / 1,
        backgroundColor: 'black',
    }


})