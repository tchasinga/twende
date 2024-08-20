import CustonButton from '@/components/CustonButton';
import { onboarding } from '@/constants/data';
import { router } from 'expo-router';
import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';

export default function Welcomeboards() {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0)
  const isLastSlide = activeIndex === onboarding.length - 1;

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
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {/* Adding All slides... is there */}
        {
          onboarding.map((item) => (
            <View className='flex items-center justify-center p-5'>
              <Image source={item.image} className='w-full h-[300px]' resizeMode='contain' />
              <View className='flex flex-row items-center justify-center w-full mt-10'>
                <Text className='text-black text-3xl font-bold mx-10 text-center'>{item.title}</Text>
              </View>
              <Text className='text-md text-center text-slate-600'>{item.description}</Text>
            </View>
          ))
        }
      </Swiper>
      <CustonButton title={isLastSlide ? "Get stared" : "Next"} className={"w-11/12 mt-5"} onPress={() => isLastSlide ? router.replace('/(auth)/sing-up'):
         swiperRef.current?.scrollBy(1)
       } />
    </SafeAreaView>
  );
}
