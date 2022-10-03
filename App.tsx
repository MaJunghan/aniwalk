import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/pages/Home';
import FeedView from './src/pages/FeedView';
import Walk from './src/pages/Walk';
import Class from './src/pages/Class';
import MyFeed from './src/pages/MyFeed';

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
            title: 'Home',
          }}
        />
        <Tab.Screen
          name="FeedView"
          component={FeedView}
          options={{
            headerShown: false,
            title: 'FeedView',
          }}
        />
        <Tab.Screen
          name="Walk"
          component={Walk}
          options={{
            headerShown: false,
            title: 'Walk',
          }}
        />
        <Tab.Screen
          name="Class"
          component={Class}
          options={{
            headerShown: false,
            title: 'Class',
          }}
        />
        <Tab.Screen
          name="MyFeed"
          component={MyFeed}
          options={{
            headerShown: false,
            title: 'MyFeed',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
