import React, {useState, useEffect} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import Swiper from 'react-native-swiper';
import Video from 'react-native-video';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function Home() {
  const [slideTime, setSlideTime] = useState(10); // 초기 슬라이딩 시간 1초
  const screenWidth = Math.round(Dimensions.get('window').width);
  // paused : 일시중지여부 , repeat : 반복여부
  const swiperData: any = [
    {
      id: 1,
      require: require('../assets/video/pet1.mp4'),
      mode: 'contain',
      paused: false,
      repeat: true,
    },
    {
      id: 2,
      require: require('../assets/video/pet2.mp4'),
      mode: 'contain',
      paused: false,
      repeat: true,
    },
    {
      id: 3,
      require: require('../assets/video/pet3.mp4'),
      mode: 'contain',
      paused: false,
      repeat: true,
    },
    {
      id: 4,
      require: require('../assets/video/pet4.mp4'),
      mode: 'contain',
      paused: false,
      repeat: true,
    },
  ];

  useEffect(() => {
    setSlideTime(10);
  }, []);

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <Text
        style={{
          width: wp(100),
          height: hp(5),
          marginTop: wp(3),
          marginLeft: wp(5),
          fontSize: hp(3),
        }}>
        Benner
      </Text>
      <View
        style={{
          width: wp(90),
          height: hp(90 / 4),
          marginTop: hp(1),
          marginHorizontal: wp(5),
          borderRadius: 30,
          overflow: 'hidden',
        }}>
        <Swiper showsButtons={false} showsPagination={false}>
          <Image
            source={require('../assets/image/banner/1.jpg')}
            style={{
              resizeMode: 'contain',
              height: '100%',
              width: '100%',
            }}
          />
          <Image
            source={require('../assets/image/banner/2.jpg')}
            style={{
              resizeMode: 'contain',
              height: '100%',
              width: '100%',
            }}
          />
          <Image
            source={require('../assets/image/banner/3.jpg')}
            style={{
              resizeMode: 'contain',
              height: '100%',
              width: '100%',
            }}
          />
        </Swiper>
      </View>
      <Text
        style={{
          width: wp(100),
          height: hp(5),
          marginTop: wp(5),
          marginLeft: wp(5),
          fontSize: hp(3),
        }}>
        제일 인기 있는 동영상
      </Text>
      <Swiper autoplay showsPagination={false} autoplayTimeout={slideTime}>
        {swiperData.map((item: any) => {
          return (
            <View
              key={item.id}
              style={{
                width: wp(90),
                height: hp(90 / 4),
                marginHorizontal: wp(5),
                borderRadius: 30,
                overflow: 'hidden',
              }}>
              <Video
                source={item.require}
                paused={item.paused}
                resizeMode={item.mode}
                repeat={item.repeat}
                style={styles.partScreen}
              />
            </View>
          );
        })}
      </Swiper>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  partScreen: {
    height: '100%',
    width: '100%',
  },
});

export default Home;
