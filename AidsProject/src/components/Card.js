import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'

const Card = ({item}) => {
  console.log(item);
  return (
    <View className= "flex-1 px-4 py-4 mb-4 relative">
      <Image source={{uri: item.urlToImage ? item.urlToImage
      :"https://www.out.com/media-library/aids-red-ribbon.jpg?id=52092720&width=1200&height=600&coordinates=0%2C39%2C0%2C39"}} 
      className="h-36 w-full rounded-md"
      resizeMethod='resize' 
      />
      <View className=" px-2 my-2">
        <Text className="text-sm  text-gray-700">{item.title}</Text>
        <Text className="text-xs my-2">{item.description}</Text>
        <View className="flex-row justify-between items-center my-2">
        <Text className="text-xs my-1 text-gray-700">{item.author}</Text>
        <Text className="text-xs text-gray-700">
          {item.publishedAt.toLocaleString('en-GB', {timezone: 'UTC'})}
        </Text>
        </View>
        <TouchableOpacity className="bg-red-800 px-4 py-1.5 mt-2 w-28 justify-center items-center rounded-md flex-row space-x-2">
          <Text className="text-white text-xs font-semibold">Read More</Text>
        </TouchableOpacity>
      </View>

      <View className="absolute top-4 right-4 bg-red-800 px-4 rounded-md">
        <Text className="text-xs text-white py-1">{item.source.name}</Text>
      </View>
    </View>
  );
}; 

export default Card;

const styles = StyleSheet.create({});