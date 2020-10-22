import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import ListItem from './components/ListItem'
import Header from './components/Header';

const App = () => {
  const [items, setItems] = useState([
    {id: 1, text: 'Milk'},
    {id: 2, text: 'Eggs'},
    {id: 3, text: 'Bread'},
    {id: 4, text: 'Juice'},
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id)
    });
  }

  return (
    <View style={styles.container}>
        <Header/>
        <FlatList data={items} renderItem={({item}) => (<ListItem item={item} deleteItem={deleteItem}/>)}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60 
  }
})

export default App