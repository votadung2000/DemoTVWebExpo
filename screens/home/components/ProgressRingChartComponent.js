import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ProgressChart } from 'react-native-chart-kit';

const ProgressRingChartComponent = ({ width }) => {
    const data = {
        labels: ["Swim", "Bike", "Run"],
        data: [0.4, 0.6, 0.8]
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Progress Ring Chart</Text>
            <ProgressChart
                data={data}
                width={width}
                height={300}
                strokeWidth={16}
                radius={32}
                chartConfig={{
                    backgroundColor: '#e26a00',
                    backgroundGradientFrom: '#fb8c00',
                    backgroundGradientTo: '#ffa726',
                    decimalPlaces: 2,
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    }
                }}
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
                hideLegend={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        marginTop: 16,
        marginBottom: 16
    }
})

export default ProgressRingChartComponent