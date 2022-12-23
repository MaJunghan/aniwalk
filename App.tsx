import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppInner from './AppInner';
import {useEffect} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import usePermissions from './src/hooks/usePermissions';
import {Provider} from 'react-redux';
import store from './src/store';

function App() {
  const googleSigninConfigure = () => {
    GoogleSignin.configure({
      webClientId: '403785232932-789ojdob1p6rbi85hkf6irvjn1qhsor7.apps.googleusercontent.com',
    });
  };
  usePermissions();

  useEffect(() => {
    googleSigninConfigure();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppInner />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
