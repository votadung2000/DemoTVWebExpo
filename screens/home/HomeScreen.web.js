import React from 'react'
import { StyleSheet, View, Dimensions, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import {
    LineChartComponent,
    ProgressRingChartComponent,
    BarChartComponent,
    PieChartComponent,
    ContributionChartComponent,
} from './components'

const HomeScreen = () => {
    const navigation = useNavigation();

    const handleNav = () => {
        navigation.navigate('Setting')
    }

    return (
        <ScrollView
            bounces={false}
            showsVerticalScrollIndicator={false}
            style={styles.container}
        >
            <View style={styles.content}>
                <View style={styles.chart}>
                    <LineChartComponent
                        width={Dimensions.get('window').width / 2 - 16 * 2}
                        onPress={handleNav}
                    />
                    <ProgressRingChartComponent width={Dimensions.get('window').width / 3 - 16 * 2} />
                </View>
                <View style={styles.chart}>
                    <BarChartComponent width={Dimensions.get('window').width / 2 - 16 * 2} />
                    <PieChartComponent width={Dimensions.get('window').width / 3 - 16 * 2} height={320} />
                </View>
                <View style={styles.chart}>
                    <ContributionChartComponent width={Dimensions.get('window').width * 2 / 3 - 16 * 2} />
                </View>
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
    chart: {
        flex: 1,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 32,
    },
})

export default HomeScreen