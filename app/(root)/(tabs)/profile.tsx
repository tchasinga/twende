import React from 'react';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Profile() {
  return (
    <SafeAreaView className="flex-1">
      <View className="px-4 py-4 items-center">
        <Image source={{uri: 'https://example.com/profile.jpg'}} className="h-40 w-40 rounded-full border-4 border-green-400" />
        <Text className="text-2xl font-bold text-green-900 mt-4">Your Travel Profile</Text>
        <Text className="text-gray-600">Track your adventures and share your experiences</Text>
      </View>
      <View className="px-4 py-4">
        <Text className="text-lg text-gray-700">Recent trips</Text>
        {/* Add more details about recent trips or achievements */}
      </View>
    </SafeAreaView>
  );
}
