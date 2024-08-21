import CustonButton from "@/components/CustonButton";
import InputField from "../../components/InputField";
import { icons, images } from "@/constants/data";
import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import OAuth from "@/components/OAuth";

export default function Singup() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onSingInPress = async (e: any) => {
    e.preventDefault();
    alert("Sing in first please");
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
            placeholder="Enter your gamil"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })} label={""} />
          <InputField
            placeholder="Enter your password"
            icon={icons.lock}
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })} label={""} />

          <CustonButton title="Sing in" onPress={onSingInPress} className="mt-3 rounded-full shadow-none" />

          {/* Auth with Google... */}
          <OAuth/>
          
          {/* Extr links */}
          <Link href="/(auth)/sing-up" className="flex justify-center items-center mt-5">
            <View className="flex flex-row justify-center items-center mt-5">
              <Text className="text-slate-600 text-sm">Don't have an account?</Text>
              <Text className="text-primary-500 text-sm ml-2">Sing up</Text>
            </View>
          </Link>

          {/* Verification modal will be added here soon...*/}
        </View>
      </View>
    </SafeAreaView>
  );
}
