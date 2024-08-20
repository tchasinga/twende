import React from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function InputField({ labelStyle, label, icon, secureTextEntry = false,
    containerStyle, inputStyle, iconStyle, className, ...props
}: any) {

    return (
        <KeyboardAvoidingView>
            <TouchableWithoutFeedback>
                <View className='my-2 w-full'> 
                    <Text className={`text-lg font-JakartaSemiBold mb-3 ${labelStyle}`}>{label}</Text>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}
