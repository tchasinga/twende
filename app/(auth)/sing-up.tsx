import CustonButton from "@/components/CustonButton";
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

  const onSingupPress = () => {
    alert("Sing up first please");
  };

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
            placeholder="Enter your name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })} label={""}/>
          <InputField
            placeholder="Enter your gamil"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })} label={""}/>
          <InputField
            placeholder="Enter your password"
            icon={icons.lock}
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })} label={""}/>

            <CustonButton title="Sing up" onPress={onSingupPress} className="mt-3" />
        </View>
      </View>
    </SafeAreaView>
  );
}
