import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native'

export default function Card({ author, title, url }) {
  return (
    <View style={styles.card}>
      <Text>
        <Image
          style={styles.textIcons}
          source={require('../assets/userIcon.png')}
        />
        &nbsp; Author: {author}
      </Text>
      <Text>
        <Image
          style={styles.textIcons}
          source={require('../assets/bookIcon.png')}
        />
        &nbsp; Title: {title}
      </Text>
      <Text>
        <Image
          style={styles.textIcons}
          source={require('../assets/linkIcon.png')}
        />
        &nbsp; URL: {url}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#4682B4',
    padding: 10,
    marginBottom: 10,
    borderRadius: 15
  },
  textIcons: {
    width: 10,
    height: 10,
  },
})
