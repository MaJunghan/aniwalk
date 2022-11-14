import * as React from 'react';
import {Text, View} from 'react-native';
import {CubeNavigationHorizontal} from 'react-native-3dcube-navigation';

function Class() {
  return (
    <View style={{flex: 1}}>
      <CubeNavigationHorizontal>
        <View style={{backgroundColor: '#5CDB8B'}}>
          <Text>Vertical Page 1</Text>
        </View>
        <View style={{backgroundColor: '#A3F989'}}>
          <Text>Vertical Page 2</Text>
        </View>
        <View style={{backgroundColor: '#CBF941'}}>
          <Text>Vertical Page 3</Text>
        </View>
      </CubeNavigationHorizontal>
    </View>
  );
}

export default Class;
