import * as React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';

const App = () => {
  const onClickMove = () => {
    console.log('zz');
  };

  return (
    <SafeAreaView style={style.container}>
      <View>
        <Text>Click Me!</Text>
        <Button onPress={onClickMove} title="Click Me!" />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 0,
    margin: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
