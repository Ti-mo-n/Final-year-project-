import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';

const Card = ({ item }) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{
          uri: item.urlToImage ? item.urlToImage : "https://www.out.com/media-library/aids-red-ribbon.jpg?id=52092720&width=1200&height=600&coordinates=0%2C39%2C0%2C39",
        }}
        style={styles.image}
        resizeMethod='resize'
      />
      <View style={styles.textContainer}>
        <Text style={styles.category}> {item.source.name} </Text>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.author}>{item.author}</Text>
          <Text style={styles.date}>
            {new Date(item.publishedAt).toLocaleString('en-GB', { timeZone: 'UTC' })}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
  
    borderRadius: 8,
  
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  category: {
    fontSize: 12,
    color: '#888',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  author: {
    fontSize: 12,
    color: '#888',
    marginRight: 10,
  },
  date: {
    fontSize: 12,
    color: '#888',
  },
});
