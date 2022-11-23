import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Routes from './src/navigations/routes'
import { StripeProvider } from '@stripe/stripe-react-native'
import TrackPlayer from 'react-native-track-player'

const App = () => {
  useEffect(() => {
    start()
  }, [])
  const start = async () => {
    await TrackPlayer.setupPlayer();
  }
  return (
    <StripeProvider
      publishableKey="pk_test_TYooMQauvdEDq54NiTphI7jx"
      merchantIdentifier="merchant.com.ChildrenApp}">
      <View style={{ flex: 1 }}>
        <Routes />
      </View>
    </StripeProvider>

  )
}

export default App