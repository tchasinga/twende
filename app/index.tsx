import { Platform, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Redirect } from 'expo-router';

const  Home = () => {
  return <Redirect href={"/(auth)/welcom"}/>;
}


export default Home