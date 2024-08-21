import CustonButton from "@/components/CustonButton";
import InputField from "../../components/InputField";
import { icons, images } from "@/constants/data";
import React, { useState } from "react";
import { View, Text, Image, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from 'expo-router';
import OAuth from "@/components/OAuth";
import { useSignUp } from '@clerk/clerk-expo'
import ReactNativeModal from "react-native-modal";
import email from '@/assets/icons/email.png';


export default function Singup() {
  const { isLoaded, signUp, setActive } = useSignUp()
  const [showSuceessModal, setShowSuceessModal] = useState(false)

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
    Alert.alert("Error", err.errors[0].longMessage)
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
         
        //  Once user is verified, we can create a new user on Database... 

        await setActive({ session: completeSignUp.createdSessionId })
        setVerificationCode({ ...verificationCode, state: "success"})
      } else {
        console.error(JSON.stringify(completeSignUp, null, 2))
        setVerificationCode({ ...verificationCode, state: "faild", error: "Verification faild !!"})
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2))

      setVerificationCode({ ...verificationCode, state: "faild", error: err.errors[0].longMessage})
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
          <ReactNativeModal isVisible={showSuceessModal}>
            <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px] flex items-center">
              <Image source={images.check} className="w-[110px] h-[110px]" resizeMode="contain"/>
              <Text className="mt-5 text-2xl font-JakartaExtraBold text-slate-800" >Verified</Text>
              <Text className="mt-5 text-xs text-slate-600" >Your account has been verified successfully</Text>

              <View className="p-4 text-white font-JakartaBold bg-blue-600 mt-3  rounded-full w-11/12 flex justify-center items-center " >
              <Text className="text-white" onPress={() =>{ 
                setShowSuceessModal(false)
                router.push("/(root)/(tabs)/home")}}>
                    Browser home
             </Text>
              </View>
            </View>
           
          </ReactNativeModal>

          {/* Adding new modal with a pending status...*/}
          <ReactNativeModal isVisible={verificationCode.state === "pending"}
          onModalHide={() =>{
            if(verificationCode.state === "success")setShowSuceessModal(true)
          }}
          >
            <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px] ">
              <Text className="text-2xl font-JakartaExtraBold mb-2">Verification</Text>
              <Text className="text-xs text-slate-600" >Enter the verification code sent to your email</Text>

              <InputField
                placeholder="Enter verification code"
                icon={icons.lock}  
                value={verificationCode.code}
                keyboardType="numeric"
                onChangeText={(code) => setVerificationCode({ ...verificationCode, code: code })} label={""} />

              <CustonButton title="Verify" onPress={onPressVerify} className="mt-3 rounded-full shadow-none"  />

              {
                verificationCode.error !== "" &&
                <Text className="text-red-500 text-xs mt-2">{verificationCode.error}</Text>
              }
            </View>
          </ReactNativeModal>
            
            {/* Adding new modal with a faild status...*/}
        </View>
      </View>
    </SafeAreaView>
  );
}
