import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/pages/Home';
import FeedView from './src/pages/FeedView';
import Walk from './src/pages/Walk';
import Class from './src/pages/Class';
import MyFeed from './src/pages/MyFeed';
import {Image} from 'react-native';

export type TabNavigatorParamList = {
  Home: undefined;
  FeedView: undefined;
  Walk: undefined;
  Class: undefined;
  MyFeed: undefined;
};

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            title: '홈',
            tabBarIcon: () => {
              return (
                <Image
                  source={require('./src/assets/home.png')}
                  style={{width: 24, height: 24}}
                />
              );
            },
            tabBarLabelStyle: {
              fontSize: 14,
            },
          }}
        />
        <Tab.Screen
          name="FeedView"
          component={FeedView}
          options={{
            headerShown: false,
            title: '피드',
            tabBarIcon: () => {
              return (
                <Image
                  source={require('./src/assets/edit.png')}
                  style={{width: 24, height: 24}}
                />
              );
            },
            tabBarLabelStyle: {
              fontSize: 14,
            },
          }}
        />
        <Tab.Screen
          name="Walk"
          component={Walk}
          options={{
            headerShown: false,
            title: '산책',
            tabBarIcon: () => {
              return (
                <Image
                  source={require('./src/assets/paw.png')}
                  style={{width: 24, height: 24}}
                />
              );
            },
            tabBarLabelStyle: {
              fontSize: 14,
            },
          }}
        />
        <Tab.Screen
          name="Class"
          component={Class}
          options={{
            headerShown: false,
            title: '모임',
            tabBarIcon: () => {
              return (
                <Image
                  source={require('./src/assets/comment.png')}
                  style={{width: 24, height: 24}}
                />
              );
            },
            tabBarLabelStyle: {
              fontSize: 14,
            },
          }}
        />
        <Tab.Screen
          name="MyFeed"
          component={MyFeed}
          options={{
            headerShown: false,
            title: '마이피드',
            tabBarIcon: () => {
              return (
                <Image
                  source={require('./src/assets/user.png')}
                  style={{width: 24, height: 24}}
                />
              );
            },
            tabBarLabelStyle: {
              fontSize: 14,
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
