import { View, Text } from 'react-native'
import React, { useState } from 'react'

const [filterText, setFilterText] = useState<string>("defalt")
const [filterValue, setFilterValue] = useState<number>(25)

const TopFilter = () => {
  return (
    <View>
      <Text>Recent</Text>
      <View>
        <Text>{`${filterText} ${filterValue}`}</Text>
      </View>
    </View>
  )
}

export default TopFilter