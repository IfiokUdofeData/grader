import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

type Itemdetails = {
  title: string;
};

const ItemCard = ({ title}: Itemdetails) => {
  return (
    <TouchableOpacity className={`w-24 h-16 rounded flex-row justify-center items-center border-1 border-white bg-primary py-1 px-2 mx-3 my-2`}>
      <Text className='text-white text-xl font-psemibold'>{title}</Text>
    </TouchableOpacity>
  );
};

export default ItemCard;
