import React from 'react';
import { View, Text, Image } from 'react-native';
import CustonButton from './CustonButton';
import { icons } from '@/constants/data';

export default function OAuth() {
  return (
    <View className='flex flex-row justify-center items-center mt-4 rounded-full'>
      <CustonButton title='Auth with Google' className='rounded-full shadow-none' IconLeft={() =>
        <Image  source={icons.google} resizeMode='contain' className='w-5 h-5 mx-2'/>
      } />
     </View>
  );
}
