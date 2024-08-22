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
    <View>
      <Text>Search...</Text>
     </View>
  );
}

export default GoogleInput;
