import { View, Text, TouchableHighlight, Image } from 'react-native'
import React from 'react'
import { icons } from '@/constants'

const NewScan = () => {
  return (
    <TouchableHighlight className='bg-secondary-300 w-14 h-14 rounded-full  flex-row justify-center items-center'>
      <Image
        source={icons.scaned}
        className='h-8 w-8'
        resizeMode='contain'
      />
    </TouchableHighlight>
  )
}

export default NewScan