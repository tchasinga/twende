import { router } from 'expo-router';
import React, { useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';

export default function Welcomeboards() {
  const swiperRef = useRef<Swiper>(null);

  return (
    <SafeAreaView className="h-full flex items-center justify-between bg-white">
      <TouchableOpacity
        className="w-full flex justify-end items-end p-5 font-JakartaBold"
        onPress={() => {
          router.replace('/(auth)/sing-up');
        }}
      >
        <Text className="font-JakartaBold">Skip it</Text>
      </TouchableOpacity>

      {/* Adding swiper method with sample slides */}
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0]" />}
        activeDot={<View className="w-[32px] h-[4px] mx-1 bg-[#3182CE]" />}
      >
        {/* Slide 1 */}
        <View className="flex-1 justify-center items-center">
          <Text className="text-lg font-bold">Welcome to Our App!</Text>
          <Text className="mt-2 text-center">Discover new features and get started.</Text>
        </View>

        {/* Slide 2 */}
        <View className="flex-1 justify-center items-center">
          <Text className="text-lg font-bold">Stay Connected</Text>
          <Text className="mt-2 text-center">Connect with friends and family.</Text>
        </View>

        {/* Slide 3 */}
        <View className="flex-1 justify-center items-center">
          <Text className="text-lg font-bold">Enjoy the Experience</Text>
          <Text className="mt-2 text-center">Get the most out of our app.</Text>
        </View>
      </Swiper>
    </SafeAreaView>
  );
}
