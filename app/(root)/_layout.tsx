import React from 'react';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function History() {
  return (
    <SafeAreaView className="flex-1">
      <View className="px-4 py-2">
        <Text className="text-xl font-bold text-orange-900">Travel History</Text>
        <Text className="text-gray-600">Revisit your past adventures</Text>
      </View>
      <View className="px-4 py-4">
        <Image source={{uri: 'https://www.pexels.com/photo/forced-perspective-photography-of-cars-running-on-road-below-smartphone-799443/'}} className="h-64 w-full rounded-lg shadow-lg" />
        <Text className="text-lg text-gray-700 mt-4">View your previous trips and memories captured along the way.</Text>
      </View>
    </SafeAreaView>
  );
}
