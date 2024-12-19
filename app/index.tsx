import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '@/constants';
import CustomButton from "../components/CustomButton"
import { Redirect, router } from 'expo-router';


const index = () => {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='w-full  justify-center items-center min-h-[85vh] px-4'>
          <Image
            source={images.logoLetter}
            className='w-[238px] h-[164px]'
            resizeMode='contain'
          />

          <Image
            source={images.coverimage}
            className='max-w-[580px] w-full h-[540px] my-[-170px]'
            resizeMode='contain'
          />

          <View className='relative mt-10'>
            <Text className='text-3xl text-white font-bold text-center'>Speed up your grading process with {" "}
              <Text className='text-secondary-300'>Grader</Text>
            </Text>

            <Image
              source={images.startai}
              className='w-[220px] h-[20px] absolute bottom-2 -right-32'
              resizeMode='contain'
            />
          </View>
          <Text className='text-sm font-pregular text-gray-100 mt-7 text-center px-4'>Super charge your productivity as an instructor; let{" "} <Text className='text-secondary-300'>Grader</Text>{" "}do most of the work for you!</Text>

          <CustomButton
            title="Get Started"
            handlePress={() => router.push("/home")}
            containerStyles="w-full mt-10"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  )
}

export default index

