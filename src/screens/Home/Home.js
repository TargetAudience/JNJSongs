import { View, Text, Alert, ImageBackground, Image, StyleSheet, Pressable, TextInput, FlatList, ActivityIndicator, ScrollView, Platform, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Theme from '../../utils/Theme'
import Modal from "react-native-modal";
import axios from 'react-native-axios'
// import ApplePay, { MethodData, DetailsData } from "react-native-apple-payment";
import DeviceInfo from 'react-native-device-info';
import FastImage from 'react-native-fast-image'
import Entypo from 'react-native-vector-icons/Entypo'
import { GooglePay } from 'react-native-google-pay';
// import { ApplePay } from 'react-native-apay';
import { ApplePayButton, useApplePay } from '@stripe/stripe-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { NavigationContainer } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';

const isTablet = DeviceInfo.isTablet();



const Home = (props) => {
  const [search,setSearch]=useState("")
  const [data, setData] = useState([])
  const [alldata, setAllData] = useState([])

  const [infoModal, setInfoModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [loginFlag, setLogin] = useState()
  const allowedCardNetworks = ['VISA', 'MASTERCARD'];
  const {
    presentApplePay,
    confirmApplePayPayment,
    isApplePaySupported,
  } = useApplePay();


  useFocusEffect(
    React.useCallback(() => {
      getData();
    }, [])
  );

  const Gpay = () => {
    const allowedCardAuthMethods = ['PAN_ONLY', 'CRYPTOGRAM_3DS'];
    const requestData = {
      cardPaymentMethod: {
        tokenizationSpecification: {
          type: "PAYMENT_GATEWAY",
          gateway: "stripe",
          gatewayMerchantId: "",
          stripe: {
            publishableKey: "pk_test_TYooMQauvdEDq54NiTphI7jx",
            version: "2018-11-08",
          },
          // // other:
          // gateway: "example",
          // gatewayMerchantId: "exampleGatewayMerchantId",
        },
        allowedCardNetworks,
        allowedCardAuthMethods,
      },
      transaction: {
        totalPrice: '9.99',
        totalPriceStatus: "FINAL",
        currencyCode: 'USD',
      },
      merchantName: "Jermy and Jezzy",
    };
    // Set the environment before the payment request
    GooglePay.setEnvironment(GooglePay.ENVIRONMENT_TEST);
    // Check if Google Pay is available
    GooglePay.isReadyToPay(allowedCardNetworks, allowedCardAuthMethods).then(
      (ready) => {
        if (ready) {
          // Request payment token
          GooglePay.requestPayment(requestData)
            .then((token) => {
              // Send a token to your payment gateway
            })
            .catch((error) => console.log(error.code, error.message));
        }
      }
    );
  }
  const Apay = async () => {
    setInfoModal(false)
    if (!isApplePaySupported) return;

    const { error } = await presentApplePay({
      cartItems: [{ label: 'Season Paryment', amount: '10.00', paymentType: 'Immediate' }],
      country: 'US',
      currency: 'USD',
      shippingMethods: [
        {
          amount: '10.00',
          identifier: 'DPS',
          label: 'Season ',
          detail: 'Payment',
          type: 'final',
        },
      ],
      requiredShippingAddressFields: ['emailAddress', 'phoneNumber'],
      requiredBillingContactFields: ['phoneNumber', 'name'],
    });

    if (error) {
      // handle error
    } else {
      const clientSecret = await fetchPaymentIntentClientSecret();

      const { error: confirmError } = await confirmApplePayPayment(
        clientSecret
      );

      if (confirmError) {
        // handle error
      }
    }
  };
  const getData = async () => {
    let a = await AsyncStorage.getItem("login")
    setLogin(a)
    setLoading(true)
    await axios.get('https://gloneweb.com/videoApp/api/getAllVideos.php')
      .then(function (response) {
        console.log(JSON.stringify(response?.data?.data, null, 2));
        let d = response?.data?.data;
        setData(d)
        setAllData(d)
        setLoading(false)
      })
      .catch(function (error) {
        setLoading(false)
        console.log(error);
      });
  }
  return (
    <View style={{ flex: 1 }}>

      <ScrollView style={styles.flatView}>

        <FastImage source={require('../../assets/homeBack.png')} style={{ height: Theme.width / 3.6, width: Theme.width / 1 }} >
          <View style={styles.main}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Image source={require('../../assets/backIcon.png')} style={{ height: Theme.height / 10, width: Theme.height / 9 }} />
            </TouchableOpacity>
            <View style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginLeft: Theme.width / 23 }}>
              <Image source={require('../../assets/logo.png')} style={{ height: Theme.height / 4.4, width: Theme.height / 3 }} />

            </View>
            <View style={styles.rowView}>
              <Image source={require('../../assets/search.png')} style={{ height: Theme.height / 24, width: Theme.height / 24 }} />
              <TextInput placeholder="Search" placeholderTextColor={Theme.grey} style={styles.textinput} 
              onChangeText={(text) => {
                if (text.length > search.length) {
                    let a =
                        data?.length > 0
                            ? data?.filter(
                                (item) => 
                                    item?.title
                                        ?.toLowerCase()
                                        ?.includes(text?.toLowerCase())
                            )
                            : null;
                    setData(a)
                } else {
                  setData(alldata)
                }
                setSearch(text);
            }}
              />
            </View>
          </View>

        </FastImage>
        <Text style={{ fontSize: Theme.height / 20, color: Theme.primary, fontFamily: Theme.fontFamilyG, marginLeft: Theme.width / 10 }}>SEASON 1</Text>

 
          {data?.length < 1 ? (
            <ActivityIndicator animating={loading} color={Theme.primary} size={Theme.height / 15} />
          ) : (
            <FlatList
              data={data}
              // horizontal
              numColumns={isTablet ? 5 : 6}
              renderItem={({ item, index }) => (
                <View style={styles.listItem}>
                  {/* <ActivityIndicator color={Theme.grey}  animating={loading}  /> */}
                  <Pressable style={loginFlag == "false" ? index > 3 ? styles.tabgrey : null : null} onPress={async () => {

                     index > 3 ? loginFlag=="true"?
                      props.navigation.navigate('VideoScreen', { data: item }) 
                       : setInfoModal(true):props.navigation.navigate('VideoScreen', { data: item }) 
                  }} >
                    <Image resizeMode="cover" source={{ uri: item.thumbnail }} style={isTablet ? styles.tab : styles.dummy} />
                    <Text style={{ color: Theme.primary, textAlign: 'center', width: Theme.width / 7, fontSize: Theme.height / 30, marginTop: Theme.height / 90, fontFamily: Theme.fontFamilyG, }}>{item.title}</Text>
                  </Pressable>
                </View>
              )}
            />
          )}
          <Text style={{ fontSize: Theme.height / 20, marginTop: Theme.height / 10, color: Theme.primary, fontFamily: Theme.fontFamilyG, textAlign: 'center', marginTop: Theme.height / 4, }}>Season 2 Coming Soon!</Text>

          <ImageBackground source={require('../../assets/footer.png')} style={{ marginTop: Theme.height / 10, height: Theme.height / 1, width: Theme.width / 1, justifyContent: 'center', alignItems: 'center' }} >
          </ImageBackground>
     
      </ScrollView>
      <Modal
        transparent={true}
        animationOut="slideOutDown"
        animationIn="slideInUp"
        backdropColor='black'
        statusBarTranslucent
        animationInTiming={800}
        onBackdropPress={() => setInfoModal(false)}
        hasBackdrop={true}
        isVisible={infoModal}>
        <View style={[styles.modalMainView, { width: isTablet ? Theme.width / 1.2 : Theme.width / 1.8, paddingVertical: Theme.width / 20, flexDirection: 'row', justifyContent: 'space-evenly' }]}>
          <View >
            <Image source={require('../../assets/Uh.png')} style={{ height: Theme.height / 15, width: Theme.height / 3.5 }} />
            <Text style={{ fontSize: Theme.height / 40, textAlign: 'center', color: Theme.black, fontFamily: Theme.fontFamilyG, marginVertical: Theme.height / 40, width: Theme.height / 3 }}>Looks like you’re trying to unlock more songs</Text>
            <Text style={{ fontSize: Theme.height / 50, color: Theme.black, fontFamily: Theme.fontFamilyO, marginVertical: Theme.height / 70, width: Theme.height / 2 }}>You’re currently using the free verison of Jeremy and Jazzy. Please purchase our full version for $9.99 to gain access to:</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Theme.height / 30 }}>
              <Image source={require('../../assets/Star5.png')} style={{ height: Theme.height / 40, width: Theme.height / 40 }} />
              <Text style={styles.head}>Unlock 50+ songs and interactive games! </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Theme.height / 30 }}>
              <Image source={require('../../assets/Star6.png')} style={{ height: Theme.height / 40, width: Theme.height / 40 }} />
              <Text style={styles.head}>ake us on the go with offline mode!</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Theme.height / 30 }}>
              <Image source={require('../../assets/Star7.png')} style={{ height: Theme.height / 40, width: Theme.height / 40 }} />
              <Text style={styles.head}>Gain Seasons 1 & 2 with future updates! </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Theme.height / 30 }}>
              <Image source={require('../../assets/Star8.png')} style={{ height: Theme.height / 40, width: Theme.height / 40 }} />
              <Text style={styles.head}>Over 50+ episodes to watch! </Text>
            </View>
            {/* <ApplePayButton
              onPress={pay}
              type="plain"
              buttonStyle="black"
              borderRadius={8}
              style={{ height: 50, width: 100 }}
            // style={{
            //   marginTop: Spacing.height5,
            //   width: Spacing.width157,
            //   height: Spacing.height52,
            // }}
            /> */}
            <TouchableOpacity onPress={async () => {
              let a = await AsyncStorage.getItem("login")
              if (a == "true") {
                Platform.OS === "android" ? Gpay() : Apay();
                setInfoModal(false)
              }
              else {
                setInfoModal(false)

                props.navigation.navigate("Signin")
              }

              // props.navigation.navigate('Signin')
            }} style={{ backgroundColor: '#FFAF1C', width: Theme.height / 4, borderRadius: Theme.height / 7, alignItems: 'center', padding: Theme.height / 60, marginTop: Theme.height / 24 }}>
              <Text style={{ color: Theme.white, fontSize: Theme.height / 30, }} >Buy Now</Text>
            </TouchableOpacity>

          </View>
          <View style={{ marginLeft: Theme.width / 20 }}>

            {/* <Text style={{ fontSize: Theme.height / 20, color: Theme.secondary, fontWeight: '500' }} >Information</Text> */}
            <View style={{ alignItems: 'center' }}>
              <Image source={require('../../assets/iconLogo.png')} style={{ height: Theme.height / 6, width: Theme.height / 5, }} />
              <Image source={require('../../assets/Group.png')} style={{ height: Theme.height / 2, width: Theme.height / 3 }} />

            </View>
          </View>
        </View>
      </Modal>

      {/* <Text>Home</Text> */}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    height: Theme.height / 4,
    width: Theme.height / 3.3,
    marginStart: Theme.height / 1,
    backgroundColor: 'red',
    // marginRight: Theme.width / 6,
  },
  main: {
    padding: Theme.height / 14,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rowView: {
    backgroundColor: Theme.white, width: Theme.width / 4.4, height: Theme.height / 11,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Theme.width / 70,
    borderRadius: 100,
    borderWidth: Theme.height / 85, borderColor: Theme.blue
  },
  textinput:
  {
    flex:1,
    color: Theme.black,
    height: Theme.height / 1,
    marginHorizontal: Theme.width / 60,
    fontSize: Theme.height / 30,
  },
  flatView: {
    marginTop: Theme.height / -40
  },
  listItem: {
    justifyContent: 'space-evenly',
    flexDirection: 'row', 
    flex: 1,
    marginTop: Theme.height / 20
  },
  dummy: {
    height: Theme.height / 4.5,
    width: Theme.height / 4.5,
    borderRadius: 200,
    alignSelf: 'center',
    backgroundColor: 'lightgrey'
  },
  tab: {
    height: Theme.height / 5.5,
    width: Theme.height / 5.5,
    borderRadius: 200, alignSelf: 'center'
  },
  tabgrey: {
    // height: Theme.height / 5.5,
    // width: Theme.height / 5.5,
    // backgroundColor:'lightgrey',
    borderRadius: 200,
    opacity: 0.3,
    alignItems: 'center'
    // color:'grey'
  },
  modalView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Theme.width / 2.4,
    marginVertical: Theme.height / 30
  },
  modalMainView: {
    backgroundColor: Theme.white,

    padding: Theme.height / 30,
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // flex:1,
    borderRadius: Theme.height / 30,

  },
  text1: {
    color: Theme.black,
    fontFamily: 'Grenadine MVB Bold',
    fontSize: Theme.height / 30,
    width: Theme.width / 7
  },
  info:
  {
    height: Theme.height / 14,
    width: Theme.height / 50
  },
  logo: {
    height: Theme.height / 3.7,
    width: Theme.height / 3,
    marginRight: Theme.width / 6,
  },
  back: {
    flex: 1,
    padding: Theme.height / 20
  },
  head:
    { fontSize: Theme.height / 50, fontFamily: Theme.fontFamilyG, marginLeft: Theme.width / 40, color: Theme.black }
})