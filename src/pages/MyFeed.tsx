import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from './SignUp';
import SignIn from './SignIn';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RootState} from '../store/reducer';
import {useSelector} from 'react-redux';
import PetSecurityNumber from '../components/PetSecurityNumber';

const Stack = createNativeStackNavigator();

const MyFeedRoute = () => {
  const [accessToken, setAccessToken] = useState('');
  const memberShipState = useSelector((state: RootState) => state.index.memberShipState);

  useEffect(() => {
    const getData = async () => {
      const storageData = await AsyncStorage.getItem('accessToken');
      if (storageData) {
        setAccessToken(JSON.parse(storageData));
      }
    };
    // AsyncStorage에 저장된 데이터가 있다면, 불러온다.
    getData();
  }, [memberShipState]);

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

  if (accessToken) {
    return <PetSecurityNumber />;
  }
};
export default MyFeedRoute;
