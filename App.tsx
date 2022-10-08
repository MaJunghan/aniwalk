import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/pages/Home';
import FeedView from './src/pages/FeedView';
import Walk from './src/pages/Walk';
import Class from './src/pages/Class';
import MyFeed from './src/pages/MyFeed';
import {Alert, Image, StyleSheet, View} from 'react-native';
import {useState} from 'react';

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
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            paddingTop: '4%',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          listeners={() => ({
            tabPress: e => {
              e.preventDefault();
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
                      ? require('./src/assets/onHome.png')
                      : require('./src/assets/home.png')
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
            tabPress: e => {
              e.preventDefault();
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
                      ? require('./src/assets/onPointer.png')
                      : require('./src/assets/pointer.png')
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
            tabPress: e => {
              e.preventDefault();
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
                      ? require('./src/assets/onPaw.png')
                      : require('./src/assets/paw.png')
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
            tabPress: e => {
              e.preventDefault();
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
                      ? require('./src/assets/onComment.png')
                      : require('./src/assets/comment.png')
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
            tabPress: e => {
              e.preventDefault();
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
                      ? require('./src/assets/onUser.png')
                      : require('./src/assets/user.png')
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

const style = StyleSheet.create({
  main: {
    paddingTop: 80,
  },
});

export default App;
