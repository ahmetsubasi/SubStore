import React from 'react';
import { StyleSheet, FlatList, SafeAreaView, Text, TextInput } from 'react-native';
import SubStore from './src/components/SubStore'
import products from './src/produckts.json'

export default function App() {

  const renderStore = ({item}) =>  <SubStore store={item} />

  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.title}>SubStore</Text>
    <TextInput
        style={styles.searchInput}
        placeholder="Ara..."
        />
      <FlatList
          data={products}
          renderItem={renderStore}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#f1e8e6',
  },
  title:{
    fontWeight:'bold',
    fontSize:24,
    marginBottom:10,
    color:'#ffffff',
    textAlign:'center',
    textShadowColor: '#679186',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  searchInput: {
    height: 40,
    backgroundColor:'#e3e3e3',
    borderRadius:10,
    paddingHorizontal: 10,
    marginTop: 10,
    marginRight:10,
    marginLeft:10
  },
});
