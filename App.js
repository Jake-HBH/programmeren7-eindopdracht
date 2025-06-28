// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import CreatePostScreen from './screens/CreatePostScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{title:"Overview"}}/>

        <Stack.Screen
        name="Details" 
        component={DetailsScreen} />

        <Stack.Screen
          name="Post"
          component={CreatePostScreen} />

        </Stack.Navigator>
    </NavigationContainer >
  );
}

// screenOptions = {{
//   headerStyle: { backgroundColor: 'tomato' },
// }}
// na stack.navigator initialroutename="home" om voor elk scherm dezelfde options te geven