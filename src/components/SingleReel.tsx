import React, {useRef, useState} from 'react';
import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
import Video from 'react-native-video';

function SingleReel({index, currentIndex, item}: any): any {
  const videoRef = useRef(null);
  const [mute, setMute] = useState(false);
  console.log(index, '체체체ㅔ');

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
    </View>
  );
}

export default SingleReel;
