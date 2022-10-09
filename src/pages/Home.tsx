import React from 'react';
import {Text, SafeAreaView, StyleSheet, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {SwipeListView} from 'react-native-swipe-list-view';

function Home() {
  const data = [{timestamp: Date.now(), text: 'Sample Text'}];
  const renderItem = ({item}: any) => {
    return (
      <View
        style={{
          width: wp(80),
          height: hp(80) / 4,
          backgroundColor: '#FFF',
          marginHorizontal: wp(10),
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: hp(4),
            height: hp(4),
            backgroundColor: '#8D71FE',
            borderRadius: 4,
            marginHorizontal: wp(3),
            opacity: 0.4,
          }}
        />
        <Text>{item.text}</Text>
        <View
          style={{
            width: hp(2),
            height: hp(2),
            backgroundColor: '#8D71FE',
            borderRadius: 100,
            marginHorizontal: wp(3),
            marginLeft: wp(35),
          }}
        />
      </View>
    );
  };

  const renderHiddenItem = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: wp(10),
          paddingVertical: hp(2),
        }}>
        <Text style={{fontSize: hp(3)}}>😀</Text>
        <Text style={{fontSize: hp(3)}}>😂</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={style.view}>
      <View
        style={{
          width: wp(100),
          height: hp(20),
          justifyContent: 'center',
          paddingLeft: wp(10),
        }}>
        <Text style={{fontSize: hp(3), fontWeight: 'bold'}}>✓Todo List</Text>
      </View>
      <View>
        <SwipeListView
          data={data}
          renderItem={renderItem}
          leftOpenValue={wp(10)}
          rightOpenValue={-wp(10)}
          renderHiddenItem={renderHiddenItem}
        />
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
});

export default Home;
