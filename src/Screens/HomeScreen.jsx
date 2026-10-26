import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AllItems from './AllItems'
import LowStock from './LowStock'
import AddNewCategory from './AddNewCategory'



const HomeScreen = () => {
  const [view, setView] = useState(0)
  const [data, setdata] = useState(
    [
  {id:1, name:'Wheat', stock:5, unit:'kg'},
  {id:2, name:'Rice', stock:15, unit:'kg'},
  {id:3, name:'Moong dal', stock:7, unit:'kg'},
  {id:4, name:'Chana', stock:20, unit:'kg'},
  {id:5, name:'Potato', stock:18, unit:'kg'},
  {id:6, name:'Onion', stock:19, unit:'kg'},
  {id:7, name:'Sugar', stock:28, unit:'kg'},
  {id:8, name:'Mustard oil', stock:33, unit:'liter'},
  {id:9, name:'Refined oil', stock:13, unit:'liter'},
  {id:10, name:'Chana dal', stock:8, unit:'kg'},
 
  
])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.buttonContainer}>
        <Pressable style={[styles.button, view === 0 ? {backgroundColor:'#fb3d09', borderColor:'#0c0505'} : null]} 
        onPress={() => setView(0)}>
          <Text style={[styles.buttonText , view === 0 ? {color:'#0c0505'} : null]}>All Items</Text>
        </Pressable>
        <Pressable style={[styles.button, view === 1 ? {backgroundColor:'#fb3d09', borderColor:'#0c0505'} : null]} 
        onPress={() => setView(1)}>
          <Text style={[styles.buttonText , view === 1 ? {color:'#0c0505'} : null]}>Low Stock</Text>
        </Pressable>
        <Pressable style={[styles.button, view === 2 ? {backgroundColor:'#fb3d09', borderColor:'#0c0505'} : null]} 
        onPress={() => setView(2)}>
          <Text style={[styles.buttonText , view === 2 ? {color:'#0c0505'} : null]}>Add new Category</Text>
        </Pressable>
      </View>

      {view ===0 && <AllItems data={data}/>}
      {view ===1 && <LowStock data={data.filter((item) => item.stock < 10)}/>}
      {view ===2 && <AddNewCategory data={data} setData={setdata}/>}
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    backgroundColor:'#ffffff',
    padding:'4%',

  },
  title:{
    fontSize:30,
    fontWeight:'bold',
    color:'#000000',


  },
  buttonContainer:{
    flexDirection:'row',
    gap:10,
    marginVertical:10,
  },
  button:{
    
    padding:10,
    borderRadius:30,
    paddingHorizontal:7,
    paddingVertical:5,
    borderWidth:1,
    borderColor:'#fb3d09',
  },
  buttonText:{
    color:'#fb3d09',
    fontSize:16,
    fontWeight:'400',
  }
})