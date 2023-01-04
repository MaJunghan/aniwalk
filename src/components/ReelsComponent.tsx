import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {useSelector} from 'react-redux';
import {RootState} from '../store/reducer';
import SingleReel from './SingleReel';

interface SwiperDataType {
  id: number;
  video: NodeRequire;
  title: string;
  nickName: string;
  likes: number;
  isLike: boolean;
}

function ReelsCompoennt() {
  const [reelIndex, setReelIndex] = useState(0);
  const videoIndex = useSelector((state: RootState) => state.index.videoState);
  console.log('비디오 index는 ', videoIndex);
  const swiperData: SwiperDataType[] = [
    {
      id: 0,
      video: require('../assets/video/tv.mp4'),
      title: '등장과 동시에 충격 그자체였던 벌스모음',
      nickName: 'nickName1',
      likes: 245,
      isLike: false,
    },
    {
      id: 1,
      video: require('../assets/video/bird.mp4'),
      title: 'Test2',
      nickName: 'nickName2',
      likes: 245,
      isLike: false,
    },
    {
      id: 2,
      video: require('../assets/video/pet2.mp4'),
      title: 'Test3',
      nickName: 'nickName3',
      likes: 245,
      isLike: false,
    },
    {
      id: 3,
      video: require('../assets/video/pet3.mp4'),
      title: 'Test4',
      nickName: 'nickName4',
      likes: 245,
      isLike: false,
    },
    {
      id: 4,
      video: require('../assets/video/pet4.mp4'),
      title: 'Reels1',
      nickName: 'nickName5',
      likes: 245,
      isLike: false,
    },
  ];

  const onChangeReelIndex = (index: any) => {
    setReelIndex(index);
  };

  return (
    <View>
      <SwiperFlatList
        data={swiperData}
        renderAll={false}
        vertical={true}
        onChangeIndex={onChangeReelIndex}
        renderItem={({item, index}: any) => {
          return <SingleReel item={item} index={index} currentIndex={reelIndex} />;
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default ReelsCompoennt;
