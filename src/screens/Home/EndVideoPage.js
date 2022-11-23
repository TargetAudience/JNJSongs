import { ActivityIndicator, StyleSheet, Image, Text, View, ImageBackground, Pressable } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Video from 'react-native-video';
import Theme from '../../utils/Theme';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useFocusEffect } from '@react-navigation/native';
import DeviceInfo from 'react-native-device-info';
const EndVideoPage = (props) => {

    const vide = props?.route?.params?.video;
    const [lodaer, setLoader] = useState(false)
    const player = useRef()
    const [videopause, setVideoPause] = useState(false)

    useFocusEffect(
        React.useCallback(() => {
            return () => {
                setVideoPause(true);
                console.log("yes");
            }
        }, [])
    );

    return (
        <View style={{ flex: 1 }}>
            <View style={{ position: 'absolute', justifyContent: 'space-between', width: Theme.width / 1, top: Theme.height / 20, zIndex: 1, flexDirection: 'row' }}>
                <Pressable onPress={() => props.navigation.goBack()}>
                    <Image source={require('../../assets/backIcon.png')} style={{ height: Theme.height / 13, width: Theme.height / 12, marginLeft: Theme.width / 20 }} />
                </Pressable>
                <Pressable onPress={
                    () => props.navigation.goBack()
                    // () => props.navigation.goBack()
                    
                    }>
                    <Image source={require('../../assets/cross.png')} style={{ height: Theme.height / 13, width: Theme.height / 12, marginRight: Theme.width / 20 }} />
                </Pressable>
            </View>


            <Video source={{ uri: vide }}
                style={styles.video}
                paused={videopause}
                controls={true}
                resizeMode={'cover'}
                onEnd={() => props.navigation.goBack()}
            />
        </View>
    )
}

export default EndVideoPage

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