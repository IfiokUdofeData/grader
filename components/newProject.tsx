import { TouchableHighlight, Image } from 'react-native'
import React from 'react'
import { icons } from '@/constants'

const NewProject = () => {
  return (
    <TouchableHighlight className='w-14 h-14 rounded-full  flex-row justify-center items-center'>
      <Image
        source={icons.createbold}
        className='h-14 w-14'
        resizeMode='contain'
      />
    </TouchableHighlight>
  )
}

export default NewProject