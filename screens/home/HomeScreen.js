import React from 'react'
import { StyleSheet, View, Dimensions, ScrollView, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import {
    LineChartComponent,
    ProgressRingChartComponent,
    BarChartComponent,
    PieChartComponent,
} from './components'

const HomeScreen = () => {
    const navigation = useNavigation();

    const handleNav = () => {
        navigation.navigate('Setting')
    }

    return (
        <ScrollView
            style={styles.container}
            bounces={false}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.content}>
                <TouchableOpacity
                    onPress={handleNav}
                    style={styles.btn}
                >
                    <Text style={styles.txtBtn}>
                        Go To Setting Screen
                    </Text>
                </TouchableOpacity>
                <LineChartComponent
                    width={Dimensions.get('window').width - 16}
                    onPress={handleNav}
                />
                <ProgressRingChartComponent width={Dimensions.get('window').width - 16} />
                <BarChartComponent width={Dimensions.get('window').width - 16} />
                <PieChartComponent width={Dimensions.get('window').width - 16} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        paddingBottom: 50,
    },
    btn: {
        marginTop: 60,
        alignItems: 'center',
        backgroundColor: 'orange',
        alignSelf: 'center',
        padding: 15,
        borderRadius: 10,
    },
    txtBtn: {
        fontWeight: '600',
        color: 'white',
    },
})

export default HomeScreen