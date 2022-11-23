import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from './SignUp';
import SignIn from './SignIn';

const Stack = createNativeStackNavigator();

const MyFeed = () => {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
          contentStyle: {
            backgroundColor: '#ffffff',
          },
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          title: '회원가입',
          contentStyle: {
            backgroundColor: '#ffffff',
          },
        }}
      />
    </Stack.Navigator>
  );
};
export default MyFeed;
