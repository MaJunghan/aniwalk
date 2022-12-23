import React from 'react';
import {Dimensions, Image, Modal, Pressable, Text, TouchableOpacity, View} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ReelsCompoennt from './ReelsComponent';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import indexSlice from '../slices';
import {RootState} from '../store/reducer';

function Reels() {
  const videoState = useSelector((state: RootState) => state.index.videoState);
  const dispatch = useDispatch();

  return (
    <Modal animationType="none" transparent={true} visible={videoState}>
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
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 1,
            paddingHorizontal: wp(5),
          }}>
          <Pressable onPress={() => dispatch(indexSlice.actions.onChangeVideoState(!videoState))}>
            <AntDesign name="arrowleft" style={{fontSize: hp(4), color: 'white'}} />
          </Pressable>
          <Text style={{fontSize: hp(4), fontFamily: 'NotoSansKR-Bold', color: '#fff'}}>Reels</Text>
        </View>
        <ReelsCompoennt />
      </View>
    </Modal>
  );
}

export default Reels;
