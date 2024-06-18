import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import * as Brightness from 'expo-brightness';
import Slider from '@react-native-community/slider';

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
        }
        setBrightness(result)
        await Brightness.setBrightnessAsync(result);
    }

    const handleMinus = async () => {
        let result = brightness - 0.1;
        if (result < 0.1) {
            result = 0
        }
        setBrightness(result)
        await Brightness.setBrightnessAsync(result);
    }

    const onValueChange = (val) => {
        setBrightness(val)
        Brightness.setBrightnessAsync(val);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleNav}>
                <Text>{'<-- Go Back'}</Text>
            </TouchableOpacity>

            <Text style={styles.title}>Brightness Control</Text>
            <Slider
                value={brightness}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="orange"
                maximumTrackTintColor="#000000"
                thumbTintColor="orange"
                style={styles.stSlider}
                onValueChange={onValueChange}
            />

            <View style={styles.vwAction}>
                <TouchableOpacity
                    onPress={handleMinus}
                    style={styles.btn}
                >
                    <Text>Minus</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handlePlus}
                    style={styles.btn}
                >
                    <Text>Plus</Text>
                </TouchableOpacity>
            </View>
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
    title: {
        marginTop: 50,
        fontSize: 20,
    },
    stSlider: {
        marginTop: 15,
        width: 200,
        height: 40,
    },
    vwAction: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    btn: {
        marginTop: 30,
        padding: 15,
        borderRadius: 15,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
})