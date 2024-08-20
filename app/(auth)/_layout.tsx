import { Stack } from 'expo-router';


export default function RootLayout() {

  return (
      <Stack>
        <Stack.Screen name="welcom" options={{ headerShown: false }} />
        <Stack.Screen name="sign-up" options={{ headerShown: false }} />
        <Stack.Screen name="sing-in" options={{ headerShown: false }} />
      </Stack>
  );
}