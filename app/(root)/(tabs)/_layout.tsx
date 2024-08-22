import { Tabs } from "expo-router";
import { Image, ImageSourcePropType, View, Animated } from "react-native";
import { useState, useEffect } from "react";

import { icons } from "@/constants/data";


const TabIcon = ({
    source,
    focused,
}: {
    source: ImageSourcePropType;
    focused: boolean;
}) => {
    const [scale] = useState(new Animated.Value(1));

    useEffect(() => {
        Animated.spring(scale, {
            toValue: focused ? 1.2 : 1,
            useNativeDriver: true,
        }).start();
    }, [focused]);

    return (
        <Animated.View
            style={{
                transform: [{ scale }],
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 3.84,
            }}
        >
            <View
                className={`flex flex-row justify-center items-center rounded-full ${focused ? "bg-general-300" : ""}`}
            >
                <View
                    className={`rounded-full w-14 h-14 items-center justify-center ${focused ? "bg-general-400" : ""}`}
                >
                    <Image
                        source={source}
                        tintColor="white"
                        resizeMode="contain"
                        className="w-8 h-8"
                    />
                </View>
            </View>
        </Animated.View>
    );
};

export default function Layout() {
    return (
        <Tabs
            initialRouteName="index"
            screenOptions={{
                tabBarActiveTintColor: "white",
                tabBarInactiveTintColor: "white",
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: "#a4c6b8",
                    borderRadius: 50,
                    paddingBottom: 0, // ios only
                    overflow: "hidden",
                    marginHorizontal: 20,
                    marginBottom: 20,
                    height: 78,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                    position: "absolute",
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 10 },
                    shadowOpacity: 0.25,
                    shadowRadius: 10,
                    elevation: 5,
                },
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon source={icons.home} focused={focused} />
                    ),
                }}
            />
            <Tabs.Screen
                name="rides"
                options={{
                    title: "Rides",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon source={icons.list} focused={focused} />
                    ),
                }}
            />
            <Tabs.Screen
                name="chat"
                options={{
                    title: "Chat",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon source={icons.chat} focused={focused} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon source={icons.profile} focused={focused} />
                    ),
                }}
            />
             <Tabs.Screen
                name="history"
                options={{
                    title: "History",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon source={icons.checkmark} focused={focused} />
                    ),
                }}
            />
        </Tabs>
    );
}