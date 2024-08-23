import React from 'react';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Rides() {
  return (
    <SafeAreaView className="flex-1">
      <View className="px-4 py-2">
        <Text className="text-xl font-bold text-purple-900">Available Rides</Text>
        <Text className="text-gray-600">Find the best rides for your journey</Text>
      </View>
      <View className="px-4 py-4">
        <Image source={{uri: 'https://www.pexels.com/photo/mercedes-benz-parked-in-a-row-164634/'}} className="h-64 w-full rounded-lg shadow-lg" />
        <Text className="text-lg text-gray-700 mt-4">Explore different travel options and book your next ride easily.</Text>
      </View>
    </SafeAreaView>
  );
}
