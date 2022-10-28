import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/pages/Home';
import FeedView from './src/pages/FeedView';
import Walk from './src/pages/Walk';
import Class from './src/pages/Class';
import MyFeed from './src/pages/MyFeed';
import {Image, StyleSheet, Text} from 'react-native';
import {useState, useEffect} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Header from './src/components/Header';

export type TabNavigatorParamList = {
  Home: undefined;
  FeedView: undefined;
  Walk: undefined;
  Class: undefined;
  MyFeed: undefined;
};

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

function App() {
  let [navState, setNavState] = useState(1);
  console.log(navState);

  const googleSigninConfigure = () => {
    GoogleSignin.configure({
      webClientId:
        '403785232932-789ojdob1p6rbi85hkf6irvjn1qhsor7.apps.googleusercontent.com',
    });
  };

  useEffect(() => {
    googleSigninConfigure();
  }, []);
  return (
    <NavigationContainer>
      <Header />
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            // paddingTop: '5%',
            paddingHorizontal: 10,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          listeners={() => ({
            tabPress: () => {
              setNavState(1);
            },
          })}
          options={{
            headerShown: false,
            title: '홈',
            tabBarIcon: () => {
              return (
                <Image
                  source={
                    navState === 1
                      ? require('./src/assets/image/onHome.png')
                      : require('./src/assets/image/home.png')
                  }
                  style={{width: 24, height: 24}}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="FeedView"
          component={FeedView}
          listeners={() => ({
            tabPress: () => {
              setNavState(2);
            },
          })}
          options={{
            headerShown: false,
            title: '피드',
            tabBarIcon: () => {
              return (
                <Image
                  source={
                    navState === 2
                      ? require('./src/assets/image/onPointer.png')
                      : require('./src/assets/image/pointer.png')
                  }
                  style={{width: 24, height: 24}}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Walk"
          component={Walk}
          listeners={() => ({
            tabPress: () => {
              setNavState(3);
            },
          })}
          options={{
            headerShown: false,
            title: '산책',
            tabBarIcon: () => {
              return (
                <Image
                  source={
                    navState === 3
                      ? require('./src/assets/image/onPaw.png')
                      : require('./src/assets/image/paw.png')
                  }
                  style={{width: 24, height: 24}}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Class"
          component={Class}
          listeners={() => ({
            tabPress: () => {
              setNavState(4);
            },
          })}
          options={{
            headerShown: false,
            title: '모임',
            tabBarIcon: () => {
              return (
                <Image
                  source={
                    navState === 4
                      ? require('./src/assets/image/onComment.png')
                      : require('./src/assets/image/comment.png')
                  }
                  style={{width: 24, height: 24}}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="MyFeed"
          component={MyFeed}
          listeners={() => ({
            tabPress: () => {
              setNavState(5);
            },
          })}
          options={{
            headerShown: false,
            title: '마이피드',
            tabBarIcon: () => {
              return (
                <Image
                  source={
                    navState === 5
                      ? require('./src/assets/image/onUser.png')
                      : require('./src/assets/image/user.png')
                  }
                  style={{width: 24, height: 24}}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
