import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import * as Brightness from 'expo-brightness';
import * as Permissions from 'expo-permissions';

const SettingScreen = () => {
    const navigation = useNavigation();

    const [brightness, setBrightness] = useState(1);

    useEffect(() => {
        handleInitBrightness();
    }, [])

    const handleInitBrightness = async () => {
        const { status } = await Brightness.requestPermissionsAsync();
        console.log("status", status)
        if (status !== 'granted') {
            console.error('Quyền MODIFY_SCREEN_BRIGHTNESS bị từ chối.');
            return;
        } else {
            let brightness = await Brightness.getBrightnessAsync();
            console.log("brightness", brightness)
            setBrightness(brightness)
        }

    }

    const handleNav = () => {
        navigation.goBack();
    }

    const handlePlus = () => {
        let result = brightness + 0.1;
        if (result > 1) {
            result = 1
        } else if (result < 0.1) {
            result = 0.1
        }
        setBrightness(result)
        console.log("result", result)
        Brightness.setBrightnessAsync(result)
            .then(result => console.log('result', result))
            .catch(err => console.log('err', err));
    }

    const handleMinus = () => {
        let result = brightness - 0.1;
        if (result > 1) {
            result = 1
        } else if (result < 0.1) {
            result = 0.1
        }
        setBrightness(result)
        console.log("result", result)
        Brightness.setBrightnessAsync(result);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleNav}>
                <Text>Go Back</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePlus}>
                <Text>Plus</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleMinus}>
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
    }
})