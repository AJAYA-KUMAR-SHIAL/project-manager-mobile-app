import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const AddNewCategory = ({ data, setData }) => {
  const [item, setItem] = useState('')
  const [stockValue, setStockValue] = useState('')
  const [unit, setUnit] = useState('')
  const [isEditing, setisEditing] = useState(false)
  const [editItemId, seteditItemId] = useState(null)

  const AddItemHandler = () => {
    const newItem = {
      id: Date.now(),
      name: item,
      stock: stockValue,
      unit: unit
    }

    if (item.trim() === '' || stockValue.trim() === '' || unit.trim() === '') {
      alert('Please fill in all fields')
      
    }else
      {setData([...data, newItem])}
    setItem('')
    setStockValue('')
    setUnit('')
    setisEditing(false)
  }
  const removeItem = (id) => {
    const removedItem = data.filter((item) => item.id !== id)
    setData(removedItem)
  }

  const editItem = (item) => {
    setisEditing(true)
    setItem(item.name)
    setStockValue(item.stock)
    setUnit(item.unit)
    seteditItemId(item.id)

  }
 
  const updateItemdata = () => {
  setData(
    data.map((oldItem) =>
      oldItem.id === editItemId
        ? {
            ...oldItem,
            name: item,
            stock: stockValue,
            unit: unit,
          }
        : oldItem
    )
  )
 

  setItem('')
  setStockValue('')
  setUnit('')
  setisEditing(false)
  seteditItemId(null)
}

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.inputText, {}]}
        placeholder='Enter item name....'
        placeholderTextColor={'#b1adad'}
        value={item}
        onChangeText={setItem}
        inputMode='text'

      />
      <TextInput
        style={[styles.inputText, {}]}
        placeholder='Enter stock amount...'
        placeholderTextColor={'#b1adad'}
        value={stockValue}
        onChangeText={setStockValue}
        inputMode='numeric'

      />
      <TextInput
        style={[styles.inputText, {}]}
        placeholder='Enter unit of measurement...'
        placeholderTextColor={'#b1adad'}
        value={unit}
        onChangeText={setUnit}
        inputMode='text'

      />

      <Pressable style={styles.addButton}
        onPress={isEditing ? updateItemdata : AddItemHandler}
      >
        <Text style={styles.buttonText}>{isEditing ? 'Add Edit Item' : 'Add Item to stock'}</Text>

      </Pressable>

      <View style={styles.listContainer}>
        <View style={styles.itemHeader}>
          <Text style={styles.itemHeaderText}>Available items</Text>

        </View>

        <FlatList

          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={[styles.itemData, { backgroundColor: item.stock < 10 ? '#ffcccc' : '#ffffff' }]}>
              <Text style={[styles.itemDataText, { fontWeight: item.stock < 10 ? 'bold' : 'normal' }]}>{item.name}</Text>

              <View style={styles.actions}>
                <Text style={[styles.itemDataText, { color: item.stock < 10 ? 'red' : 'black', color: item.stock > 20 ? 'green' : 'black' }]}>{item.stock} {item.unit}</Text>
                <Pressable style={styles.editButton}
                  onPress={() => editItem(item)}
                >
                  <Text>Edit</Text></Pressable>

                <Pressable style={styles.removeButton}
                  onPress={() => removeItem(item.id)}
                >
                  <Text>Remove</Text>
                </Pressable>

              </View>
            </View>
          )}
        />
      </View>




    </View>
  )
}

export default AddNewCategory

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '4%',
    gap: 10,
  },
  inputText: {
    borderWidth: 1,
    borderColor: '#fb3d09',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: '#000000',
  },
  addButton: {
    backgroundColor: '#fb3d09',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  listContainer: {
    flex: 1,
  },
  actions: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  editButton: {
    backgroundColor: '#09fba2',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  removeButton: {
    backgroundColor: '#fb3d09',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    paddingVertical: 10,

  },
  itemHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemData: {
    flexDirection: 'row', flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#000000',
  },
  itemDataText: {
    fontSize: 16,
  }
})