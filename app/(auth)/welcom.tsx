import { router } from 'expo-router';
import React, { useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';

export default function Welcomeboards() {

  const swiperRef = useRef<Swiper>(null);
   
  return (
    <SafeAreaView className='h-full flex items-center justify-between bg-white'>
      <TouchableOpacity className='w-full flex justify-end items-end p-5 font-JakartaBold' onPress={() => {router.replace("/(auth)/sing-up")}}> 
        <Text className='font-JakartaBold'>Skip it</Text>
      </TouchableOpacity>

      {/* Adding a swipper methode */}
      <Swiper ref={swiperRef} loop={false} dot={<View className='w-[32px] h-[4px] mx-1 bg-[#E2E8F0]'/>}>
      </Swiper>
    </SafeAreaView>
  );
}
