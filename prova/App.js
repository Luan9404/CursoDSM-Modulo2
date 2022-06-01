import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useState } from 'react'
import InputZone from './components/InputZone'
import CardList from './components/CardList'
export default function App() {
  const [query, setQuery] = useState('')
  const [books, setBooks] = useState([])
  const search = async () => {
    let url = `https://hn.algolia.com/api/v1/search?query=${query}`
    let result = await fetch(url).then(result => result.json())
    setBooks(result.hits)
  }
  const textHandler = (text) => {
    setQuery(text)
  }
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Módulo 2 - lista 2</Text>
      <InputZone onChangeText={textHandler} onPress={search} />
      <CardList books={books} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: 10
  },
  main: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    widh: '100%',
    paddingTop: 50,
    paddingHorizontal: 20
  },
})
