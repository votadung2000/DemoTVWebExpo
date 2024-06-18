import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import * as Brightness from 'expo-brightness';

const SettingScreen = () => {
    const navigation = useNavigation();

    const [brightness, setBrightness] = useState(1);

    useEffect(() => {
        handleInitBrightness();
    }, [])

    const handleInitBrightness = async () => {
        const response = await Brightness.requestPermissionsAsync();
        if (response?.status !== 'granted') {
            console.error('Quyền MODIFY_SCREEN_BRIGHTNESS bị từ chối.');
            return;
        } else {
            let brightness = await Brightness.getBrightnessAsync();
            setBrightness(brightness)
        }
    }

    const handleNav = () => {
        navigation.goBack();
    }

    const handlePlus = async () => {
        let result = brightness + 0.1;
        if (result > 1) {
            result = 1
        } else if (result < 0.1) {
            result = 0.1
        }
        setBrightness(result)
        await Brightness.setBrightnessAsync(result);
    }

    const handleMinus = async () => {
        let result = brightness - 0.1;
        if (result > 1) {
            result = 1
        } else if (result < 0.1) {
            result = 0.1
        }
        setBrightness(result)
        await Brightness.setBrightnessAsync(result);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleNav}>
                <Text>Go Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={handlePlus}
                style={styles.btn}
            >
                <Text>Plus</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={handleMinus}
                style={styles.btn}
            >
                <Text>Minus</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SettingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        marginTop: 30,
        backgroundColor: 'red',
        padding: 15,
    },
})