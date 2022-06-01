import {
  StyleSheet,
  ScrollView,
} from 'react-native'
import Card from './Card'

export default function CardList({ books }) {
  return (
    <ScrollView style={styles.cardsContainer}>
      {books.map((book, key) => {
        return (
          <Card
            key={key}
            author={book.author}
            title={book.title}
            url={book.url}
          />
        )
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  cardsContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
})
