import { Image, StyleSheet, Platform, View, Text , StatusBar } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
    <Text>Open up App.js to start working on your app!</Text>
    <StatusBar />
  </View>
  );
}