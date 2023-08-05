import { Dimensions ,StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        padding: 16,
        marginTop:40,
        marginLeft:10,
        marginRight:10,
      },
      title:{
        fontSize:24,
        fontWeight:'bold',
        color:'#000',
        marginBottom:10
      },
      price:{
        fontSize:18,
        fontWeight:'bold',
        color:'gray'
      },
      image:{
        height: Dimensions.get('window').height / 2,
        margin:5,
        resizeMode:'contain',
    },
    inStock:{
      color:'red',
      fontSize:18,
      fontWeight:"bold"
  },
})