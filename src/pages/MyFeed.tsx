import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from './SignUp';
import SignIn from './SignIn';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Text, View} from 'react-native';
import {RootState} from '../store/reducer';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const MyFeedRoute = () => {
  const [accessToken, setAccessToken] = useState('');
  const memberShipState = useSelector((state: RootState) => state.index.memberShipState);

  useEffect(() => {
    const getData = async () => {
      const storageData = await AsyncStorage.getItem('accessToken');
      if (storageData) {
        console.log(JSON.parse(storageData), '카카카카');
        setAccessToken(JSON.parse(storageData));
      }
    };
    // AsyncStorage에 저장된 데이터가 있다면, 불러온다.
    getData();
  }, [memberShipState]);

  if (accessToken) {
    return (
      <View>
        <Text>로그인후 마이피드페이지</Text>
      </View>
    );
  }

  if (!accessToken) {
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
            headerShown: false,
            contentStyle: {
              backgroundColor: '#ffffff',
            },
          }}
        />
      </Stack.Navigator>
    );
  }
};
export default MyFeedRoute;
