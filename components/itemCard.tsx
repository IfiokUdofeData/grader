import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { icons, images } from '@/constants';

type Itemdetails = {
  title: string;
  url: number | { uri: string }; // Supports both static and dynamic image sources
};

const ItemCard = ({ title, url }: Itemdetails) => {
  return (
    <TouchableOpacity 
      className="w-24 h-18 rounded flex-col justify-center items-center border border-secondary-300 bg-primary py-3 px-2 mx-3 my-2"
    >
      <Image 
        source={url}
        className="w-8 h-8" // Tailwind class
      />
      <Text className="text-white text-sm font-pregular pt-2">{title}</Text>
    </TouchableOpacity>
  );
};

export default ItemCard;
