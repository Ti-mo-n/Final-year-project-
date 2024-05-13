import { View, Text, Switch, TouchableOpacity } from 'react-native'
import React from 'react'
import { useColorScheme } from 'nativewind'
import { useNavigation } from '@react-navigation/native'
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";

export default function Header() {
    const navigation = useNavigation();
    const {colorScheme, toggleColorScheme} = useColorScheme();

    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: 4, marginTop: 0, backgroundColor: "white"}}>
            <Text 
                style={{
                    fontSize: 20,
                    color: colorScheme == "dark" ? "white" : "red",
                    textTransform: "uppercase",
                    fontFamily: "SpaceGroteskBold",
                    fontWeight: "bold",
                }}
            >
                HIV Connect
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Switch value={colorScheme == "dark"} onValueChange={toggleColorScheme} />
                <TouchableOpacity
                    onPress={() => navigation.navigate("Search")}
                    style={{ backgroundColor: colorScheme == "dark" ? "red" : "white", borderRadius: 20, padding: 5, marginLeft: 10 }}
                >
                    <MagnifyingGlassIcon
                        size={25}
                        strokeWidth={2}
                        color={colorScheme == "dark" ? "white" : "red"}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}
