import { images } from '@/constants/data';
import React from 'react';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Singup() {
  return (
    <SafeAreaView className='flex-1 bg-white'>
      <View className='bg-white flex-1 relative w-full h-[250px]'>
        <Image source={images.signUpCar} className='z-0 w-full h-[250px]' resizeMode='contain'/>
      </View>
     </SafeAreaView>
  );
}
