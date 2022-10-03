import React from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';

function MyFeed() {
  return (
    <SafeAreaView style={style.view}>
      <Text>MyFeed</Text>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyFeed;
