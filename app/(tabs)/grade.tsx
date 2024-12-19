import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

const Grade = () => {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <Text className='text-white mt-6'>Grade</Text>
       <StatusBar />
    </SafeAreaView>
  )
}

export default Grade