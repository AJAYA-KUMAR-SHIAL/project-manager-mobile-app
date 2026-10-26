import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

const LowStock = ({data}) => {
  return (
    <View>
      <View>
             <View style={styles.itemHeader}>
              <Text style={styles.itemHeaderText}>Items</Text>
              <Text style={styles.itemHeaderText}>Quantity</Text>
             </View>
      
             <FlatList
             data={data}
             keyExtractor={(item) => item.id.toString()}
             renderItem={({item})=>(
              <View style={[styles.itemData, {backgroundColor:item.stock<10 ? '#ffcccc' : '#ffffff'}]}>
              <Text style={styles.itemDataText}>{item.name}</Text>
              <Text style={[styles.itemDataText, {color:'red'}]}>{item.stock} {item.unit}</Text>
             </View>
             )}
             />
          </View>
    </View>
  )
}

export default LowStock

const styles = StyleSheet.create({
    itemHeader:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:15,
        borderBottomWidth:1,
        borderBottomColor:'#000000',
        paddingVertical:10,
       
    },
    itemHeaderText:{
        fontSize:20,
        fontWeight:'bold',
    },
    itemData:{
        flexDirection:'row', flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:15,
        paddingVertical:10,
        borderBottomWidth:0.5,
        borderBottomColor:'#000000',
    },
    itemDataText:{
        fontSize:16,
    }

})