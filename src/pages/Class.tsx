import React from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';

function Class() {
  return (
    <SafeAreaView style={style.view}>
      <Text>Calss</Text>
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

export default Class;
