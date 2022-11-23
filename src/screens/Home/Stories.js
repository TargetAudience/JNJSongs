import { View, Text } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'

const Stories = () => {
  return (
    <View style={{flex:1}}>
     <WebView

        source={{
          uri: 'https://jfj.netlify.app/#/'
        }}
        style={{ backgroundColor:'black' }}
      />
    </View>
  )
}

export default Stories