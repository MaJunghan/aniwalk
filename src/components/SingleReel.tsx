import React, {useRef, useState} from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import Video from 'react-native-video';
import Ionic from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function SingleReel({index, currentIndex, item}: any): any {
  const videoRef = useRef(null);
  const [mute, setMute] = useState(false);
  console.log(index, '체체체ㅔ');
  const [muteIconState, setMuteIconState] = useState(false);

  const toggleMute = () => {
    setMute(prev => !prev);
  };

  return (
    <View
      style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height, position: 'relative'}}>
      <TouchableOpacity style={{width: '100%', height: '100%', position: 'absolute'}} onPress={toggleMute}>
        <Video
          ref={videoRef}
          repeat={true}
          resizeMode="cover"
          paused={false}
          source={item.video}
          muted={mute}
          style={{width: '100%', height: '100%', position: 'absolute'}}
        />
      </TouchableOpacity>
      <Ionic
        name="volume-mute"
        style={{
          fontSize: mute ? hp(3) : hp(0),
          color: 'white',
          position: 'absolute',
          top: Dimensions.get('window').height / 2.5,
          left: Dimensions.get('window').width / 2.5,
          backgroundColor: 'rgba(52,52,52,0.6)',
          borderRadius: hp(5),
          padding: mute ? hp(3) : hp(0),
          overflow: 'hidden',
        }}
      />
      <View>
        <View>
          <Text>등장과 동시에 충격 그자체였던 벌스모음 </Text>
        </View>
        <View>
          <Image
            source={require('../assets/image/icon/avatar.webp')}
            resizeMode={'contain'}
            style={{
              width: wp(5),
              height: hp(5),
            }}
          />
          <Text>{item.title}</Text>
        </View>
      </View>
    </View>
  );
}

export default SingleReel;
