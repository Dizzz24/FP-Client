import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps"

export default function Detail() {
    const initialLocation = {
        latitude: 37.78825,
        longitude: -122.4324
    }
    const [myLocation, setMylocation] = useState(initialLocation)

    return (
        <View>
            <Text>This is maps gadungan</Text>
            <MapView
                initialRegion={
                    {
                        latitude: myLocation.latitude,
                        longitude: myLocation.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }
                }
                provider="google">

            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        // width: ''
    }
})