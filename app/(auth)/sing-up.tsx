import InputField from "../../components/InputField";
import { icons, images } from "@/constants/data";
import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Singup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="bg-white relative w-full h-[250px]">
          <Image
            source={images.signUpCar}
            className="z-0 w-full h-[250px]"
            resizeMode="contain"
          />
          <Text className="text-xl text-slate-900 font-JakartaSemiBold absolute bottom-5 left-5">
            Create an accounts
          </Text>
        </View>

        <View className="p-5">
          <InputField
            label={"Name"}
            placeholder="Enter your name"
            icon={icons.person}
            value={form.name}
            onChange={(value: any) => setForm({...form, name: value})}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
