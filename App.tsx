import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppInner from './AppInner';
import {useEffect} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import usePermissions from './src/hooks/usePermissions';
import {Provider} from 'react-redux';
import store from './src/store';
import Config from 'react-native-config';

function App() {
  const googleSigninConfigure = () => {
    GoogleSignin.configure({
      webClientId: `${Config.GOOGLE_WEB_CLIENT_ID}`,
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
