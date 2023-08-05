import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import styles from './SubStore.styles'


const SubStore = ({store}) => {
    
  return (
    <SafeAreaView style={styles.container}>
      <View>
       <Image style={styles.image} source={{uri: store.imgURL}}/>
      <Text style={styles.title}>{store.title}</Text>
       <Text style={styles.price}>{store.price}</Text>
       {store.inStock === false && <Text style={styles.inStock}>STOKTA YOK</Text>}
       </View>
    </SafeAreaView>
  )
}

export default SubStore