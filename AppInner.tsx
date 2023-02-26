import * as React from 'react';
import {Text, View} from 'react-native';
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

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  PetInfoRoute: undefined;
};

function AppInner() {
  let [navState, setNavState] = React.useState(1);
  const Tab = createBottomTabNavigator<TabNavigatorParamList>();

  return (
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
                    ? require('./src/assets/image/nav/onHome.png')
                    : require('./src/assets/image/nav/home.png')
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
                    ? require('./src/assets/image/nav/onPointer.png')
                    : require('./src/assets/image/nav/pointer.png')
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
                    ? require('./src/assets/image/nav/onPaw.png')
                    : require('./src/assets/image/nav/paw.png')
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
                    ? require('./src/assets/image/nav/onComment.png')
                    : require('./src/assets/image/nav/comment.png')
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
                    ? require('./src/assets/image/nav/onUser.png')
                    : require('./src/assets/image/nav/user.png')
                }
                style={{width: 24, height: 24}}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default AppInner;
