import CustonButton from "@/components/CustonButton";
import InputField from "../../components/InputField";
import { icons, images } from "@/constants/data";
import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import OAuth from "@/components/OAuth";
import { useSignUp } from '@clerk/clerk-expo'
import { useRouter } from 'expo-router'


export default function Singup() {
  const { isLoaded, signUp, setActive } = useSignUp()
  const router = useRouter()

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [verificationCode, setVerificationCode] = useState({
    state: "default",
    error : "",
    code: "",
  })

 
  const onSignUpPress = async () => {
    if (!isLoaded) {
      return
    }

    try {
      await signUp.create({
        emailAddress: form.email,
        password : form.password,
      })

      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })

      setVerificationCode({ ...verificationCode, state: "pending"})
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2))
    }
  }

  const onPressVerify = async () => {
    if (!isLoaded) {
      return
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code : verificationCode.code
      })

      if (completeSignUp.status === 'complete') {
        await setActive({ session: completeSignUp.createdSessionId })
        setVerificationCode({ ...verificationCode, state: "success"})
      } else {
        console.error(JSON.stringify(completeSignUp, null, 2))
        setVerificationCode({ ...verificationCode, state: "faild"})
      }
    } catch (err: any) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2))
    }
  }

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
            onChangeText={(value) => setForm({ ...form, name: value })} label={""} />
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

          <CustonButton title="Sing up" onPress={onSignUpPress} className="mt-3 rounded-full shadow-none" />

          {/* Auth with Google... */}
          <OAuth/>
          
          {/* Extr links */}
          <Link href="/(auth)/sing-in" className="flex justify-center items-center mt-5">
            <View className="flex flex-row justify-center items-center mt-5">
              <Text className="text-slate-600 text-sm">Already have an account?</Text>
              <Text className="text-primary-500 text-sm ml-2">Sing in</Text>
            </View>
          </Link>

          {/* Verification modal will be added here soon...*/}
        </View>
      </View>
    </SafeAreaView>
  );
}
