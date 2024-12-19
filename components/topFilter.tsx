import { View, Text, TouchableHighlight, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { icons } from '@/constants'


const TopFilter = () => {
  const [filterText, setFilterText] = useState<string>("All")
  const [filterValue, setFilterValue] = useState<number>(25)
  
  useEffect(()=>{
    setFilterText("All")
    setFilterValue(25)
  }, [])
  return (
    <View className='flex-row justify-between items-center mx-4'>
      <Text className='text-white text-2xl font-pmedium mt-2'>Recent</Text>
      <TouchableHighlight>
        <View className='flex-row'>
          <Text className='text-white font-pmedium'>{`${filterText}`}</Text> 
          <Text className='text-white font-pmedium'>{`(${filterValue})`}</Text> 
          <Image 
          source={icons.sortdown}
          resizeMode='contain'
          tintColor='white'
          className='w-6 h-6'
          />
        </View>
      </TouchableHighlight>
    </View>
  )
}

export default TopFilter