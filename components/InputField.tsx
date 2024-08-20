import React from 'react';
import {
    TextInput,
    View,
    Text,
    Image,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Platform,
} from "react-native";
export default function InputField({ labelStyle, label, icon, secureTextEntry = false,
    containerStyle, inputStyle, iconStyle, className, ...props
}: any) {

    return (
        <KeyboardAvoidingView>
            <TouchableWithoutFeedback>
                <View className='my-2 w-full'>
                    <Text className={`text-l g font-JakartaSemiBold mb-3 ${labelStyle}`}>{label}</Text>
                </View>
                <View className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500 ${containerStyle}`}></View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}
