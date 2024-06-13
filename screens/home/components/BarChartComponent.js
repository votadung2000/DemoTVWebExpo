import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BarChart } from 'react-native-chart-kit';

const BarChartComponent = ({ width }) => {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43]
            }
        ]
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bar Chart</Text>
            <BarChart
                data={data}
                width={width}
                height={300}
                yAxisLabel="$"
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
                verticalLabelRotation={30}
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

export default BarChartComponent