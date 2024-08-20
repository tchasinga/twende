import { ButtonProps } from '@/types/type';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
    switch (variant) {
        case "secondary":
            return "bg-gray-500";
        case "danger":
            return "bg-red-500";
        case "success": 
            return "bg-green-500";
        case "outline" :
            return "bg-transparent border-neutral-300 border-[0.5px]"
        default : 
            return "bg-[#0286ff]"
    }
}

const getTextVariantStyle = (variant: ButtonProps["textVariant"]) => {
    switch (variant) {
        case "secondary":
            return "bg-blue-400";  // Changed to a lighter blue
        case "danger":
            return "bg-orange-600"; // Changed to a darker orange
        case "success": 
            return "bg-teal-500";   // Changed to a teal color
     default : 
            return "bg-[#0286ff]"// Changed to a purple color
    }
}



export default function  ({onPress, title, bgVariant='primary', textVariant='default', IconLeft, IconRight, className, ...props}: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} className={`w-full rounded-full flex flex-row justify-center shadow-md shadow-neutral-400/70 ${getBgVariantStyle(bgVariant)} ${className}`}>
        {IconLeft && <IconLeft/>}
         <Text className={`text-lg font-bold ${getTextVariantStyle(textVariant)}`}>{title}</Text>
        {IconRight && <IconRight/>}

    </TouchableOpacity>
  );
}
