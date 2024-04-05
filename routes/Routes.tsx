// write route component for four screens
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/Home';
import AddScreen from '../screens/add/Add';
import RepoScreen from '../screens/repo/Repo';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Add"
        component={AddScreen}
        options={{
          title: 'Add',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="RepoSingle"
        component={RepoScreen}
        options={{
          title: 'Repo Details',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
