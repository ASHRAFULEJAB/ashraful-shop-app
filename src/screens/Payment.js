import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CardField, useStripe } from '@stripe/stripe-react-native'
import { btn2, colors, hr80, navbtn, navbtnin, titles } from '../globals/style'
import {
    FlatList,


    TouchableOpacity,
  
    Image,
  } from 'react-native'
  import  { useEffect, useState } from 'react'

  import { AntDesign } from '@expo/vector-icons'
  import { firebase } from '../../firebase/firebaseConfig'
  import BottomNav from '../components/BottomNav'
  

const Payment = ({navigation}) => {
    const [cartdata, setCartdata] = useState(null)
  const [totalCost, setTotalCost] = useState('0')

  const getcartdata = async () => {
    const docRef = firebase
      .firestore()
      .collection('UserCart')
      .doc(firebase.auth().currentUser.uid)

    docRef.get().then((doc) => {
      if (doc.exists) {
        const data = JSON.stringify(doc.data())
        setCartdata(data)
      } else {
        console.log('No such document!')
      }
    })
  }

  useEffect(() => {
    getcartdata()
  }, [])

  useEffect(() => {
    if (cartdata != null) {
      const foodprice = JSON.parse(cartdata).cart
      let totalfoodprice = 0
      foodprice.map((item) => {
        // console.log(item.data.foodPrice)
        totalfoodprice =
          parseInt(item.data.foodPrice) * parseInt(item.Foodquantity) +
          parseInt(item.data.foodAddonPrice) * parseInt(item.Addonquantity) +
          totalfoodprice
      })
      console.log(totalfoodprice)
      setTotalCost(JSON.stringify(totalfoodprice))
    }
  }, [cartdata])
  const { confirmPayment } = useStripe()

  return (
    <View>
      <Text style={styles.paymentTilte}>Payment</Text>
      <CardField
        postalCodeEnabled={false}
        placeholders={{
          number: 'Enter Your Card Number',
        }}
        cardStyle={{
          backgroundColor: '#FFFFFF',
          textColor: '#FFFFFF',
        }}
        style={{
          width: '100%',
          height: 50,
          marginVertical: 30,
        }}
        onCardChange={(cardDetails) => {
          console.log('cardDetails', cardDetails)
        }}
        onFocus={(focusedField) => {
          console.log('focusField', focusedField)
              }}
               
          />
          <TouchableOpacity style={btn2}>
            <Text
              style={styles.btntxt}
              onPress={() => navigation.navigate('placeorder', { cartdata })}
            >
              Confirm Payment
            </Text>
          </TouchableOpacity> 
    </View>
  )
}

export default Payment

const styles = StyleSheet.create({
  paymentTilte: {
    color: colors.col1,
    margin: 15,
    fontSize: 20,
    fontWeight: 'bold',
  },
})
