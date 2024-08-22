import { GoogleInputProps } from '@/types/type';
import React from 'react';
import { View, Text } from 'react-native';

const GoogleInput = ({
    icon,
    initialLocation,
    containerStyle,
    textInputBackgroundColor,
    handlePress,
  }: GoogleInputProps) => {
  return (
    <View
    className={`flex flex-row items-center justify-center relative z-50 mb-2 rounded-xl ${containerStyle}`}
    >
      <Text>Search...</Text>
     </View>
  );
}

export default GoogleInput;
