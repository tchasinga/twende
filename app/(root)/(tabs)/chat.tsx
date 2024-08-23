import React from 'react';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';

export default function Chat() {
  return (
    <SafeAreaView className="flex-1">
      <View className="px-4 py-2">
        <Text className="text-xl font-bold text-blue-900">Travel Chat</Text>
        <Text className="text-gray-600">Connect with fellow travelers</Text>
      </View>
      <Swiper showsPagination={false} autoplay className="h-64">
        <View className="flex-1 justify-center items-center">
          <Image source={{uri: 'https://www.pexels.com/photo/mercedes-benz-parked-in-a-row-164634'}} className="h-full w-full" resizeMode="cover" />
        </View>
        <View className="flex-1 justify-center items-center">
          <Image source={{uri: 'https://www.pexels.com/photo/red-ferrari-337909'}} className="h-full w-full" resizeMode="cover" />
        </View>
      </Swiper>
      <View className="px-4 py-2">
        <Text className="text-gray-700">Join the conversation about your favorite destinations.</Text>
      </View>
    </SafeAreaView>
  );
}
