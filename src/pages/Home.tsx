import React from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';

function Home() {
  return (
    <SafeAreaView style={style.view}>
      <Text>Home</Text>
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

export default Home;
