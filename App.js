import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/home/HomeScreen'
import SettingScreen from './screens/setting'

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={styles.area}>
      <NavigationContainer
        linking={{
          config: {
            screens: {
              Home: "Home",
              Setting: "Setting",
            },
          },
        }}
      >
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: false,
            animation: 'slide_from_right',
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Setting" component={SettingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
  },
})

export default App;
