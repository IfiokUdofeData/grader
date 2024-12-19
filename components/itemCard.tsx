import { View, Text } from 'react-native'
import React from 'react'

type Itemdetails = {
    title: string
}
const ItemCard = ({ title }: Itemdetails) => {
  return (
    <View className='w-6 h-6 bg-secondary-300'>
      <Text className='text-white text-2xl'>{title}</Text> 
    </View>
  )
}

export default ItemCard