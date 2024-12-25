import { View, Text, TouchableHighlight, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { icons } from '@/constants'


const ProjectFilter = () => {
  const [filterText, setFilterText] = useState<string>("All")
  const [filterValue, setFilterValue] = useState<number>(25)
  
  useEffect(()=>{
    setFilterText("All")
    setFilterValue(25)
  }, [])
  return (
    <View className='bg-primary w-full flex-row justify-between items-center px-4 py-2'>
      <View className='flex-row'>
        <Text className='text-white text-2xl font-pregular mt-2'>
            sort
        </Text>
        <Image 
          source={icons.sort1}
          className='h-5 w-5 ml-3 mt-3'
          resizeMode='contain'
        />
      </View>
      <TouchableHighlight>
        <View className='flex-row'>
          <Text className='text-white font-pmedium'>{`${filterText}`}</Text> 
          <Text className='text-white font-pmedium'>{`(${filterValue})`}</Text> 
          <Image 
          source={icons.sortdown}
          resizeMode='contain'
          tintColor='white'
          className='w-5 h-5'
          />
        </View>
      </TouchableHighlight>
    </View>
  )
}

export default ProjectFilter