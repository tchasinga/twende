import { Platform, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-white flex-1 justify-center items-center">
      <Text className="text-red-900">Open up App.js to start working on your app!</Text>
      <Text className="text-lg mt-4">
        {Platform.OS === 'android' ? 'Welcome on Android !!' : 'Welcome on iPhone'}
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
