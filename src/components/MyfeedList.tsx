import {Text, View} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Image} from 'react-native';

function MyfeedList() {
  const dummyData = [
    {
      id: 0,
      thumbnail: require('../assets/image/icon/pet_num.png'),
      resizeMode: 'cover',
      video: require('../assets/video/tv.mp4'),
      title: '등장과 동시에 충격 그자체였던 벌스모음',
      nickName: 'nickName1',
      likes: 245,
      isLike: false,
    },
    {
      id: 1,
      thumbnail: require('../assets/image/icon/pet_num.png'),
      resizeMode: 'cover',
      video: require('../assets/video/bird.mp4'),
      title: 'Test2',
      nickName: 'nickName2',
      likes: 245,
      isLike: false,
    },
    {
      id: 2,
      thumbnail: require('../assets/image/icon/pet_num.png'),
      resizeMode: 'cover',
      video: require('../assets/video/pet2.mp4'),
      title: 'Test3',
      nickName: 'nickName3',
      likes: 245,
      isLike: false,
    },
    {
      id: 3,
      thumbnail: require('../assets/image/icon/pet_num.png'),
      resizeMode: 'cover',
      video: require('../assets/video/pet3.mp4'),
      title: 'Test4',
      nickName: 'nickName4',
      likes: 245,
      isLike: false,
    },
    {
      id: 4,
      thumbnail: require('../assets/image/icon/pet_num.png'),
      resizeMode: 'cover',
      video: require('../assets/video/pet4.mp4'),
      title: 'Reels1',
      nickName: 'nickName5',
      likes: 245,
      isLike: false,
    },
    {
      id: 5,
      thumbnail: require('../assets/image/icon/pet_num.png'),
      resizeMode: 'cover',
      video: require('../assets/video/tv.mp4'),
      title: '등장과 동시에 충격 그자체였던 벌스모음',
      nickName: 'nickName1',
      likes: 245,
      isLike: false,
    },
    {
      id: 6,
      thumbnail: require('../assets/image/icon/pet_num.png'),
      resizeMode: 'cover',
      video: require('../assets/video/bird.mp4'),
      title: 'Test2',
      nickName: 'nickName2',
      likes: 245,
      isLike: false,
    },
    {
      id: 7,
      thumbnail: require('../assets/image/icon/pet_num.png'),
      resizeMode: 'cover',
      video: require('../assets/video/pet2.mp4'),
      title: 'Test3',
      nickName: 'nickName3',
      likes: 245,
      isLike: false,
    },
    {
      id: 8,
      thumbnail: require('../assets/image/icon/pet_num.png'),
      resizeMode: 'cover',
      video: require('../assets/video/pet3.mp4'),
      title: 'Test4',
      nickName: 'nickName4',
      likes: 245,
      isLike: false,
    },
    {
      id: 9,
      thumbnail: require('../assets/image/icon/pet_num.png'),
      resizeMode: 'cover',
      video: require('../assets/video/pet4.mp4'),
      title: 'Reels1',
      nickName: 'nickName5',
      likes: 245,
      isLike: false,
    },
  ];

  const feedListView = dummyData.map(item => {
    return (
      <View>
        <Image
          source={item.thumbnail}
          style={{
            width: wp(31),
            height: hp(15),
            borderColor: 'black',
            borderWidth: wp(0.2),
            marginRight: wp(0.3),
            marginBottom: hp(0.3),
          }}
        />
      </View>
    );
  });

  return <View style={{marginTop: hp(5), flexDirection: 'row', flexWrap: 'wrap'}}>{feedListView}</View>;
}

export default MyfeedList;
