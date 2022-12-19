import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ReelsCompoennt from './ReelsComponent';

function Reels() {
  return (
    <View
      style={{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: 'black',
        position: 'relative',
      }}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          flexDirection: 'row',
          zIndex: 1,
          paddingHorizontal: wp(5),
        }}>
        <Text style={{fontSize: hp(3), fontFamily: 'NotoSansKR-Bold', color: '#fff'}}>Reels</Text>
      </View>
      <ReelsCompoennt />
    </View>
  );
}

export default Reels;
