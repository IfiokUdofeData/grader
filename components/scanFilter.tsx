import { View, Text, TouchableHighlight, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { icons } from '@/constants'


const ScanFilter = () => {
    const [filterText, setFilterText] = useState<string>("All")
    const [filterValue, setFilterValue] = useState<number>(25)

    useEffect(() => {
        setFilterText("All")
        setFilterValue(25)
    }, [])
    return (
        <View className='bg-primary w-full flex-row justify-between items-center px-4 pr-5 py-2'>
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
                <Image
                    source={icons.grid1}
                    className='h-8 w-8'
                />
            </TouchableHighlight>
        </View>
    )
}

export default ScanFilter