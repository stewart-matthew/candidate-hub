import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { navigationRef } from './src/utils/RootNavigation';

import HomeScreen from './src/screens/Home';
import AddCandidateScreen from './src/screens/AddCandidate';
import BrowseCandidatesScreen from './src/screens/BrowseCandidates';

import { styles } from './src/styles/styles';
import * as Colors from './src/styles/colors';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.HEADER_COLOR
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20
          }
        }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AddCandidate" component={AddCandidateScreen} />
          <Stack.Screen name="BrowseCandidates" component={BrowseCandidatesScreen} />
        </Stack.Navigator>
      </NavigationContainer>

    </View>
  );
};