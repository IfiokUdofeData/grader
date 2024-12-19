import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'

const Scan = () => {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <Text className='text-white mt-6'>Scan</Text>
       <StatusBar />
    </SafeAreaView>
  )
}

export default Scan