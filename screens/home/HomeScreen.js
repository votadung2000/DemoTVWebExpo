import React from 'react'
import { StyleSheet, View, Dimensions, ScrollView } from 'react-native'
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
        >
            <View style={styles.content}>
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
})

export default HomeScreen