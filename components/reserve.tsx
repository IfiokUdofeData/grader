import React from 'react';
import { View, Text } from 'react-native';

const Projects = () => {
  return (
    <View className="flex flex-row flex-wrap justify-between">
      {/* Row 1 */}
      <View className="w-1/3 p-2">
        <View className="bg-primary rounded-lg h-20 justify-center items-center">
          <Text className="text-white">Item 1</Text>
        </View>
      </View>

      <View className="w-1/3 p-2">
        <View className="bg-primary rounded-lg h-20 justify-center items-center">
          <Text className="text-white">Item 2</Text>
        </View>
      </View>

      <View className="w-1/3 p-2">
        <View className="bg-primary rounded-lg h-20 justify-center items-center">
          <Text className="text-white">Item 3</Text>
        </View>
      </View>

      {/* Row 2 */}
      <View className="w-1/3 p-2">
        <View className="bg-primary rounded-lg h-20 justify-center items-center">
          <Text className="text-white">Item 4</Text>
        </View>
      </View>

      <View className="w-1/3 p-2">
        <View className="bg-primary rounded-lg h-20 justify-center items-center">
          <Text className="text-white">Item 5</Text>
        </View>
      </View>

      <View className="w-1/3 p-2">
        <View className="bg-primary rounded-lg h-20 justify-center items-center">
          <Text className="text-white">Item 6</Text>
        </View>
      </View>
      
    </View>
  );
};

export default Projects;
