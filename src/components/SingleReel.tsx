import React, {useRef, useState} from 'react';
import {Dimensions, Image, Text, Pressable, View} from 'react-native';
import Video from 'react-native-video';
import Ionic from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

interface IconArray {
  id: number;
  image: any;
  likes?: number;
  comment?: number;
  isToggle: boolean;
}

function SingleReel({index, currentIndex, item}: any): any {
  const videoRef = useRef(null);
  console.log(currentIndex);
  const [mute, setMute] = useState(false);
  const [heart, setHeart] = useState(item.isLike);

  const toggleMute = () => {
    setMute(prev => !prev);
  };

  return (
    <View
      style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height, position: 'relative'}}>
      <Pressable style={{width: '100%', height: '100%', position: 'absolute'}} onPress={toggleMute}>
        <Video
          ref={videoRef}
          repeat={true}
          resizeMode="cover"
          paused={false}
          source={item.video}
          muted={true}
          style={{width: '100%', height: '100%', position: 'absolute'}}
        />
      </Pressable>
      <Ionic
        name="volume-mute"
        style={{
          fontSize: mute ? hp(3) : hp(0),
          color: 'white',
          position: 'absolute',
          top: Dimensions.get('window').height / 2.5,
          left: Dimensions.get('window').width / 2.4,
          backgroundColor: 'rgba(52,52,52,0.6)',
          borderRadius: hp(5),
          padding: mute ? hp(3) : hp(0),
          overflow: 'hidden',
        }}
      />
      <View style={{position: 'absolute', top: hp(80), paddingHorizontal: wp(5), marginTop: hp(-2)}}>
        <View>
          <Text style={{fontSize: hp(2), color: 'white', fontFamily: 'NotoSansKR-Bold'}}>
            등장과 동시에 충격 그자체였던 벌스모음
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../assets/image/icon/avatar.webp')}
            resizeMode={'contain'}
            style={{
              width: wp(5),
              height: hp(3),
              borderRadius: 100,
              overflow: 'hidden',
              backgroundColor: 'white',
            }}
          />
          <Text
            style={{
              marginLeft: wp(3),
              fontSize: hp(2),
              color: 'white',
              fontFamily: 'NotoSansKR-Light',
            }}>
            {item.title}
          </Text>
        </View>
      </View>
      <View
        style={{
          height: hp(55),
          position: 'absolute',
          right: 0,
          top: hp(20),
          justifyContent: 'space-between',
          paddingVertical: hp(15),
          marginRight: wp(2),
        }}>
        <Pressable onPress={() => setHeart((prev: boolean) => !prev)}>
          <AntDesign name={heart ? 'heart' : 'hearto'} style={{fontSize: hp(4), color: heart ? 'red' : 'white'}} />
          <Text style={{fontSize: hp(2), color: 'white', marginLeft: wp(0.5)}}>{item.likes}</Text>
        </Pressable>
        <Pressable>
          <Ionic name="ios-chatbubble-outline" style={{fontSize: hp(4), color: 'white'}} />
        </Pressable>
        <Pressable>
          <Ionic name="ios-paper-plane-outline" style={{fontSize: hp(4), color: 'white'}} />
        </Pressable>
      </View>
    </View>
  );
}

export default SingleReel;
